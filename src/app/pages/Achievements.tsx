import React, { useState } from "react";
import { Lock, Trophy, Award, Check } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../components/ui/dialog";
import { BADGES } from "../data/mock";

const INITIAL_BADGES = BADGES.map(b => ({ ...b, unlocked: false }));

export function Achievements() {
  const [filter, setFilter] = useState<'all' | 'unlocked' | 'locked'>('all');
  const [selectedBadge, setSelectedBadge] = useState<typeof INITIAL_BADGES[0] | null>(null);

  const filteredBadges = INITIAL_BADGES.filter(badge => {
    if (filter === 'unlocked') return badge.unlocked;
    if (filter === 'locked') return !badge.unlocked;
    return true;
  });

  const unlockedCount = 0;
  const totalCount = INITIAL_BADGES.length;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Achievements</h1>
          <p className="text-slate-400">Koleksi lencana dari progress belajarmu</p>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg">
          <Trophy className="h-5 w-5 text-yellow-500" />
          <div>
            <p className="text-xs text-slate-400">Total Badge</p>
            <p className="font-bold text-white">{unlockedCount}/{totalCount}</p>
          </div>
        </div>
      </div>

      <Tabs value={filter} onValueChange={(v) => setFilter(v as any)}>
        <TabsList className="bg-[#1E293B] border border-slate-700">
          <TabsTrigger value="all">
            Semua <Badge variant="secondary" className="ml-2 bg-slate-700 text-white">{totalCount}</Badge>
          </TabsTrigger>
          <TabsTrigger value="unlocked">
            Terbuka <Badge variant="secondary" className="ml-2 bg-green-500/20 text-green-400">{unlockedCount}</Badge>
          </TabsTrigger>
          <TabsTrigger value="locked">
            Terkunci <Badge variant="secondary" className="ml-2 bg-slate-700 text-slate-400">{totalCount}</Badge>
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredBadges.map((badge) => (
          <Card
            key={badge.id}
            onClick={() => setSelectedBadge(badge)}
            className="bg-[#1E293B] border-slate-700 opacity-60 hover:opacity-80 relative overflow-hidden group transition-all duration-300 cursor-pointer"
          >
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-20 w-20 rounded-full flex items-center justify-center mb-4 bg-slate-800 text-slate-600">
                <Lock className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-white mb-1">{badge.name}</h3>
              <p className="text-xs text-slate-400 line-clamp-2">{badge.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedBadge} onOpenChange={() => setSelectedBadge(null)}>
        <DialogContent className="bg-[#1E293B] border-slate-700 text-white">
          <DialogHeader>
            <div className="flex items-center justify-center mb-4">
              <div className="h-24 w-24 rounded-full flex items-center justify-center bg-slate-800">
                <Lock className="h-10 w-10 text-slate-600" />
              </div>
            </div>
            <DialogTitle className="text-2xl text-center">{selectedBadge?.name}</DialogTitle>
            <DialogDescription className="text-slate-400 text-center">{selectedBadge?.description}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
              <div className="flex items-center gap-2 text-sm mb-2">
                <Award className="h-4 w-4 text-[#4F46E5]" />
                <span className="text-slate-400">Syarat:</span>
              </div>
              <p className="text-sm">
                {selectedBadge?.id === 1 && "Selesaikan pelajaran pertama kamu"}
                {selectedBadge?.id === 2 && "Belajar selama 7 hari berturut-turut"}
                {selectedBadge?.id === 3 && "Selesaikan semua materi HTML Basic"}
                {selectedBadge?.id === 4 && "Selesaikan semua materi CSS Basic"}
                {selectedBadge?.id === 5 && "Selesaikan semua materi JavaScript Basic"}
                {selectedBadge?.id === 6 && "Selesaikan semua track Advanced"}
              </p>
            </div>
            <div className="p-4 bg-slate-800/30 border border-slate-700 rounded-lg">
              <p className="text-sm text-slate-400 text-center">Lanjutkan belajar untuk membuka badge ini!</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
