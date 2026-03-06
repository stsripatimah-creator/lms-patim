import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PlayCircle, Award, Clock, Target, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { Badge } from "../components/ui/badge";
import { TRACKS } from "../data/mock";
import { useAuth } from "../../context/AuthContext";
import { useTranslation } from "react-i18next";
import LPICard from "../components/LPICard";
import RekomendasiKonten from "../components/RekomendasiKonten";
import { supabase } from "../../lib/supabase";

interface TrackProgress {
  completed: number;
  total: number;
  percent: number;
}

export function Dashboard() {
  const { profile, user } = useAuth();
  const { t } = useTranslation();
  const [challengeStatus] = useState<'pending' | 'completed'>('pending');
  const [timeRemaining] = useState({ hours: 6, minutes: 12, seconds: 45 });
  const [trackProgress, setTrackProgress] = useState<Record<string, TrackProgress>>({});

  const displayName = profile?.full_name || user?.email?.split('@')[0] || "Pengguna";
  const streak = profile?.streak ?? 0;
  const points = profile?.points ?? 0;
  const days = ['M', 'S', 'S', 'R', 'K', 'J', 'S'];

  useEffect(() => {
    if (!user?.id) return;
    async function fetchProgress() {
      const { data } = await supabase
        .from('user_progress')
        .select('track, lesson_id, completed')
        .eq('user_id', user!.id)
        .eq('completed', true);

      if (!data) return;

      const byTrack: Record<string, Set<string>> = {};
      data.forEach((row: any) => {
        const tr = row.track?.toLowerCase();
        if (!tr) return;
        if (!byTrack[tr]) byTrack[tr] = new Set();
        byTrack[tr].add(row.lesson_id);
      });

      const result: Record<string, TrackProgress> = {};
      TRACKS.forEach(track => {
        const completed = byTrack[track.id]?.size ?? 0;
        const total = track.totalLessons;
        result[track.id] = { completed, total, percent: Math.round((completed / total) * 100) };
      });
      setTrackProgress(result);
    }
    fetchProgress();
  }, [user?.id]);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] p-8 shadow-lg">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-white mb-2">
            {t('dashboard.greeting', { name: displayName })}
          </h1>
          <p className="text-indigo-100 mb-6 max-w-lg">{t('dashboard.subtitle')}</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/courses">
              <Button className="bg-white text-[#4F46E5] hover:bg-indigo-50 border-none">
                <PlayCircle className="mr-2 h-4 w-4" /> {t('dashboard.startLearn')}
              </Button>
            </Link>
            <Link to="/challenge">
              <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 bg-transparent">
                {t('dashboard.startChallenge')}
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10">
          <Award className="h-64 w-64 -mb-12 -mr-12" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">{t('dashboard.learningProgress')}</h2>
              <Link to="/courses" className="text-sm text-[#4F46E5] hover:underline">{t('dashboard.viewAll')}</Link>
            </div>
            <div className="grid gap-4">
              {TRACKS.map(track => {
                const tp = trackProgress[track.id] ?? { completed: 0, total: track.totalLessons, percent: 0 };
                return (
                  <Link key={track.id} to={`/courses/${track.id}`}>
                    <Card className="group hover:border-[#4F46E5]/50 transition-all cursor-pointer bg-[#1E293B] border-slate-700">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-lg ${track.color}/20`}>
                              <track.icon className={`h-6 w-6 text-${track.color.split("-")[1]}-400`} />
                            </div>
                            <div>
                              <CardTitle className="text-lg group-hover:text-[#4F46E5] transition-colors">{track.title}</CardTitle>
                              <CardDescription className="mt-1">{track.description}</CardDescription>
                            </div>
                          </div>
                          <Badge variant="secondary" className="bg-slate-700 text-slate-300 whitespace-nowrap">
                            {track.levels[0]}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Progress value={tp.percent} className="h-2 mb-3" />
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="text-slate-500 text-xs">{t('dashboard.lessonsCompleted')}</p>
                            <p className="font-bold text-white">{tp.completed}/{tp.total}</p>
                          </div>
                          <div>
                            <p className="text-slate-500 text-xs">{t('dashboard.exercises')}</p>
                            <p className="font-bold text-white">0</p>
                          </div>
                          <div>
                            <p className="text-slate-500 text-xs">{t('dashboard.avgScore')}</p>
                            <p className={`font-bold ${tp.percent === 100 ? 'text-green-400' : tp.percent > 0 ? 'text-indigo-400' : 'text-slate-500'}`}>
                              {tp.percent > 0 ? `${tp.percent}%` : '-'}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </section>

          {user?.id && <LPICard userId={user.id} />}
          {user?.id && <RekomendasiKonten userId={user.id} />}

          <section>
            <h2 className="text-xl font-bold mb-4">{t('dashboard.recentActivity')}</h2>
            <Card className="bg-[#1E293B] border-slate-700">
              <CardContent className="p-8 text-center">
                <PlayCircle className="h-12 w-12 text-slate-600 mx-auto mb-3" />
                <p className="text-slate-400 font-medium">{t('dashboard.noActivity')}</p>
                <p className="text-slate-500 text-sm mt-1">{t('dashboard.noActivityDesc')}</p>
                <Link to="/courses">
                  <Button className="mt-4 bg-[#4F46E5] hover:bg-[#4338ca]">{t('dashboard.startNow')}</Button>
                </Link>
              </CardContent>
            </Card>
          </section>
        </div>

        <div className="space-y-8">
          <Card className="bg-[#1E293B] border-slate-700 overflow-hidden">
            <CardHeader className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-b border-slate-700/50">
              <div className="flex items-center justify-between">
                <CardTitle className="text-orange-500 flex items-center gap-2">
                  <Zap className="h-5 w-5" /> {t('dashboard.streak')}
                </CardTitle>
                <span className="text-2xl font-bold text-white">{streak} 🔥</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div>
                <p className="text-sm text-slate-400 mb-3">{t('dashboard.todayChallenge')}</p>
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                  <span className={`text-sm font-medium ${challengeStatus === 'completed' ? 'text-[#22C55E]' : 'text-orange-400'}`}>
                    {challengeStatus === 'completed' ? t('dashboard.done') : t('dashboard.notDone')}
                  </span>
                  {challengeStatus === 'pending' && (
                    <Link to="/challenge">
                      <Button size="sm" className="bg-orange-500 hover:bg-orange-600">{t('dashboard.doIt')}</Button>
                    </Link>
                  )}
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-2">{t('dashboard.weekCalendar')}</p>
                <div className="flex justify-between items-center">
                  {days.map((day, i) => (
                    <div key={i} className="flex flex-col gap-1.5 items-center">
                      <span className="text-[10px] text-slate-500">{day}</span>
                      <div className={`h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                        i < streak - 1 ? 'bg-orange-500 text-white'
                          : i === streak - 1 ? 'bg-orange-500 text-white ring-2 ring-orange-400/50'
                          : 'bg-slate-800 text-slate-600'
                      }`}>
                        {i < streak ? '✓' : ''}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-t border-slate-700">
                <p className="text-xs text-slate-500 mb-1">{t('dashboard.resetIn')}</p>
                <p className="text-lg font-bold text-orange-500 font-mono">
                  {String(timeRemaining.hours).padStart(2, '0')}:{String(timeRemaining.minutes).padStart(2, '0')}:{String(timeRemaining.seconds).padStart(2, '0')}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-700">
                <p className="text-xs text-slate-500 mb-1">{t('dashboard.totalPoints')}</p>
                <p className="text-lg font-bold text-[#4F46E5]">{points} XP</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1E293B] border-slate-700">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Target className="h-4 w-4 text-[#4F46E5]" />{t('dashboard.startHere')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant="outline" className="text-orange-400 border-orange-400/20 bg-orange-400/10">HTML</Badge>
                  <Badge variant="outline" className="text-slate-400 border-slate-600">Dasar</Badge>
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <Clock className="h-3 w-3" /> 10 menit
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-1.5">Pengenalan HTML</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">Pelajari dasar-dasar HTML sebagai fondasi membuat website.</p>
                </div>
              </div>
              <Link to="/lessons/html-1">
                <Button className="w-full mt-4 bg-[#4F46E5] hover:bg-[#4338ca]">
                  <PlayCircle className="mr-2 h-4 w-4" />{t('dashboard.start')}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
