import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useAuth } from "../../context/AuthContext";
import { useTranslation } from "react-i18next";
import { supabase } from "../../lib/supabase";
import { TRACKS } from "../data/mock";

interface ProgressRow {
  track: string;
  lesson_id: string;
  completed: boolean;
  score: number;
  completed_at: string;
}

export function Analytics() {
  const { user } = useAuth();
  const { t } = useTranslation();
  const [progressData, setProgressData] = useState<ProgressRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.id) return;
    async function fetchData() {
      const { data } = await supabase
        .from('user_progress')
        .select('track, lesson_id, completed, score, completed_at')
        .eq('user_id', user!.id);
      setProgressData(data ?? []);
      setLoading(false);
    }
    fetchData();
  }, [user?.id]);

  const completed = progressData.filter(p => p.completed);
  const totalCompleted = completed.length;
  const avgScore = totalCompleted > 0
    ? Math.round(completed.reduce((s, p) => s + (p.score ?? 0), 0) / totalCompleted)
    : null;

  // Track completion %
  const trackStats = TRACKS.map(track => {
    const trackDone = completed.filter(p => p.track?.toLowerCase() === track.id).length;
    return {
      name: track.id.toUpperCase(),
      score: Math.round((trackDone / track.totalLessons) * 100),
      fill: track.id === 'html' ? '#f97316' : track.id === 'css' ? '#3b82f6' : '#eab308',
    };
  });

  // Activity per day (last 7 days)
  const dayNames = [
    t('analytics.days.Sen'), t('analytics.days.Sel'), t('analytics.days.Rab'),
    t('analytics.days.Kam'), t('analytics.days.Jum'), t('analytics.days.Sab'), t('analytics.days.Min')
  ];
  const today = new Date();
  const activityData = dayNames.map((name, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - (6 - i));
    const dateStr = d.toISOString().split('T')[0];
    const count = completed.filter(p => p.completed_at?.startsWith(dateStr)).length;
    return { name, hours: count };
  });

  // Status materi
  const totalLessons = TRACKS.reduce((s, t) => s + t.totalLessons, 0);
  const inProgress = progressData.filter(p => !p.completed).length;
  const notStarted = totalLessons - completed.length - inProgress;
  const completedPct = Math.round((totalCompleted / totalLessons) * 100);

  const periods = [t('analytics.days7'), t('analytics.days30'), t('analytics.all')];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">{t('analytics.title')}</h1>
          <p className="text-slate-400">{t('analytics.subtitle')}</p>
        </div>
        <div className="flex gap-2">
          {periods.map((p, idx) => (
            <button key={p} className={`px-4 py-1.5 text-sm rounded-lg border transition-all ${
              idx === 0 ? 'bg-[#4F46E5] border-[#4F46E5] text-white' : 'border-slate-700 bg-[#1E293B] text-slate-400 hover:border-slate-500'
            }`}>{p}</button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { title: t('analytics.lessonsCompleted'), value: String(totalCompleted), sub: totalCompleted === 0 ? t('analytics.lessonsCompletedSub') : `dari ${TRACKS.reduce((s,t)=>s+t.totalLessons,0)} pelajaran` },
          { title: t('analytics.totalExercises'), value: String(totalCompleted), sub: t('analytics.totalExercisesSub') },
          { title: t('analytics.avgScore'), value: avgScore ? `${avgScore}/100` : "-", sub: avgScore ? `${avgScore >= 80 ? '🔥 ' : ''}${avgScore >= 80 ? 'Sangat Baik!' : 'Terus tingkatkan!'}` : t('analytics.avgScoreSub') },
          { title: t('analytics.studyTime'), value: `${totalCompleted * 12} Min`, sub: totalCompleted === 0 ? t('analytics.studyTimeSub') : `${totalCompleted} pelajaran selesai` },
        ].map((stat) => (
          <Card key={stat.title} className="bg-[#1E293B] border-slate-700">
            <CardHeader className="pb-2">
              <CardDescription className="text-slate-400">{stat.title}</CardDescription>
              <CardTitle className="text-2xl text-white">{stat.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-slate-500">{stat.sub}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-[#1E293B] border-slate-700">
          <CardHeader>
            <CardTitle>{t('analytics.studyTimeChart')}</CardTitle>
            <CardDescription className="text-slate-400">Pelajaran selesai per hari</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={activityData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} allowDecimals={false} />
                  <Tooltip contentStyle={{ background: '#1E293B', border: '1px solid #334155', borderRadius: 8 }} />
                  <Bar dataKey="hours" fill="#4F46E5" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1E293B] border-slate-700">
          <CardHeader>
            <CardTitle>{t('analytics.materialStatus')}</CardTitle>
            <CardDescription className="text-slate-400">{t('analytics.materialStatusDesc')}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center h-[250px] gap-4">
            <div className="relative h-32 w-32">
              <svg className="h-32 w-32 -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#334155" strokeWidth="3" />
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#22c55e" strokeWidth="3"
                  strokeDasharray={`${completedPct} ${100 - completedPct}`} strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-2xl font-bold text-white">{completedPct}%</p>
                <p className="text-xs text-slate-400">{t('analytics.completed')}</p>
              </div>
            </div>
            <div className="flex gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-green-500 inline-block" /> {t('analytics.completed')} ({totalCompleted})</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-blue-500 inline-block" /> {t('analytics.inProgress')} ({inProgress})</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-slate-600 inline-block" /> {t('analytics.notStarted')}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-[#1E293B] border-slate-700">
        <CardHeader>
          <CardTitle>{t('analytics.topicMastery')}</CardTitle>
          <CardDescription className="text-slate-400">{t('analytics.topicMasteryDesc')}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={trackStats} layout="vertical" margin={{ top: 0, right: 30, left: 20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={true} stroke="#334155" />
                <XAxis type="number" hide domain={[0, 100]} />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8' }} />
                <Tooltip contentStyle={{ background: '#1E293B', border: '1px solid #334155', borderRadius: 8 }}
                  formatter={(val: any) => [`${val}%`, 'Progress']} />
                <Bar dataKey="score" radius={[0, 4, 4, 0]} barSize={24}>
                  {trackStats.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} fillOpacity={entry.score > 0 ? 0.9 : 0.3} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          {totalCompleted === 0 && (
            <p className="text-center text-sm text-slate-500 mt-4">{t('analytics.topicMasteryEmpty')}</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
