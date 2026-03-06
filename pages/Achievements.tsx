import React, { useState, useEffect } from "react";
import { Lock, Trophy, Award, CheckCircle } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../components/ui/dialog";
import { BADGES } from "../data/mock";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../context/AuthContext";
import { supabase } from "../../lib/supabase";
import { TRACKS } from "../data/mock";

// Badge unlock conditions checked against real Supabase data
async function checkBadgeUnlocked(badgeId: number, userId: string, profile: any): Promise<boolean> {
  const { data: progress } = await supabase
    .from('user_progress')
    .select('track, lesson_id, completed')
    .eq('user_id', userId)
    .eq('completed', true);

  const completed = progress ?? [];
  const totalCompleted = completed.length;

  switch (badgeId) {
    case 1: // First Run - completed at least 1 lesson
      return totalCompleted >= 1;
    case 2: // 7-Day Streak
      return (profile?.streak ?? 0) >= 7;
    case 3: // HTML Beginner - completed all HTML basic (4 lessons)
      return completed.filter((p: any) => p.track?.toLowerCase() === 'html').length >= 4;
    case 4: // CSS Stylist - completed all CSS basic
      return completed.filter((p: any) => p.track?.toLowerCase() === 'css').length >= 4;
    case 5: // JS Explorer - completed all JS basic
      return completed.filter((p: any) => p.track?.toLowerCase() === 'javascript' || p.track?.toLowerCase() === 'js').length >= 4;
    case 6: // Code Master - all tracks 100%
      const htmlDone = completed.filter((p: any) => p.track?.toLowerCase() === 'html').length;
      const cssDone = completed.filter((p: any) => p.track?.toLowerCase() === 'css').length;
      const jsDone = completed.filter((p: any) => p.track?.toLowerCase() === 'javascript' || p.track?.toLowerCase() === 'js').length;
      return htmlDone >= 12 && cssDone >= 12 && jsDone >= 12;
    default:
      return false;
  }
}

interface BadgeWithStatus {
  id: number;
  name: string;
  description: string;
  icon: any;
  unlocked: boolean;
}

export function Achievements() {
  const { t } = useTranslation();
  const { user, profile } = useAuth();
  const [filter, setFilter] = useState<'all' | 'unlocked' | 'locked'>('all');
  const [selectedBadge, setSelectedBadge] = useState<BadgeWithStatus | null>(null);
  const [badges, setBadges] = useState<BadgeWithStatus[]>(BADGES.map(b => ({ ...b, unlocked: false })));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.id) return;
    async function loadBadges() {
      const results = await Promise.all(
        BADGES.map(async b => ({
          ...b,
          unlocked: await checkBadgeUnlocked(b.id, user!.id, profile)
        }))
      );
      setBadges(results);
      setLoading(false);
    }
    loadBadges();
  }, [user?.id, profile?.streak]);

  const filteredBadges = badges.filter(badge => {
    if (filter === 'unlocked') return badge.unlocked;
    if (filter === 'locked') return !badge.unlocked;
    return true;
  });

  const unlockedCount = badges.filter(b => b.unlocked).length;
  const totalCount = badges.length;

  const getRequirement = (id: number) => {
    const key = `achievements.req${id}` as const;
    return t(key);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">{t('achievements.title')}</h1>
          <p className="text-slate-400">{t('achievements.subtitle')}</p>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg">
          <Trophy className="h-5 w-5 text-yellow-500" />
          <div>
            <p className="text-xs text-slate-400">{t('achievements.totalBadge')}</p>
            <p className="font-bold text-white">{unlockedCount}/{totalCount}</p>
          </div>
        </div>
      </div>

      <Tabs value={filter} onValueChange={(v) => setFilter(v as any)}>
        <TabsList className="bg-[#1E293B] border border-slate-700">
          <TabsTrigger value="all">
            {t('achievements.all')} <Badge variant="secondary" className="ml-2 bg-slate-700 text-white">{totalCount}</Badge>
          </TabsTrigger>
          <TabsTrigger value="unlocked">
            {t('achievements.unlocked')} <Badge variant="secondary" className="ml-2 bg-green-500/20 text-green-400">{unlockedCount}</Badge>
          </TabsTrigger>
          <TabsTrigger value="locked">
            {t('achievements.locked')} <Badge variant="secondary" className="ml-2 bg-slate-700 text-slate-400">{totalCount - unlockedCount}</Badge>
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredBadges.map((badge) => (
          <Card
            key={badge.id}
            onClick={() => setSelectedBadge(badge)}
            className={`border-slate-700 relative overflow-hidden group transition-all duration-300 cursor-pointer ${
              badge.unlocked
                ? 'bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/30 hover:border-yellow-500/60'
                : 'bg-[#1E293B] opacity-60 hover:opacity-80'
            }`}
          >
            {badge.unlocked && (
              <div className="absolute top-2 right-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
              </div>
            )}
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className={`h-20 w-20 rounded-full flex items-center justify-center mb-4 ${
                badge.unlocked ? 'bg-yellow-500/20 text-yellow-400' : 'bg-slate-800 text-slate-600'
              }`}>
                {badge.unlocked
                  ? <badge.icon className="h-8 w-8" />
                  : <Lock className="h-8 w-8" />
                }
              </div>
              <h3 className={`font-bold mb-1 ${badge.unlocked ? 'text-yellow-300' : 'text-white'}`}>{badge.name}</h3>
              <p className="text-xs text-slate-400 line-clamp-2">{badge.description}</p>
              {badge.unlocked && (
                <span className="mt-2 text-xs text-green-400 font-medium">✓ Terbuka</span>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedBadge} onOpenChange={() => setSelectedBadge(null)}>
        <DialogContent className="bg-[#1E293B] border-slate-700 text-white">
          <DialogHeader>
            <div className="flex items-center justify-center mb-4">
              <div className={`h-24 w-24 rounded-full flex items-center justify-center ${
                selectedBadge?.unlocked ? 'bg-yellow-500/20' : 'bg-slate-800'
              }`}>
                {selectedBadge?.unlocked
                  ? selectedBadge && <selectedBadge.icon className="h-10 w-10 text-yellow-400" />
                  : <Lock className="h-10 w-10 text-slate-600" />
                }
              </div>
            </div>
            <DialogTitle className="text-2xl text-center">{selectedBadge?.name}</DialogTitle>
            <DialogDescription className="text-slate-400 text-center">{selectedBadge?.description}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
              <div className="flex items-center gap-2 text-sm mb-2">
                <Award className="h-4 w-4 text-[#4F46E5]" />
                <span className="text-slate-400">{t('achievements.requirement')}</span>
              </div>
              <p className="text-sm">{selectedBadge ? getRequirement(selectedBadge.id) : ''}</p>
            </div>
            <div className={`p-4 rounded-lg border ${
              selectedBadge?.unlocked
                ? 'bg-green-500/10 border-green-500/30'
                : 'bg-slate-800/30 border-slate-700'
            }`}>
              <p className={`text-sm text-center ${selectedBadge?.unlocked ? 'text-green-400' : 'text-slate-400'}`}>
                {selectedBadge?.unlocked ? '🎉 Badge ini sudah kamu dapatkan!' : t('achievements.continueLearn')}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
