import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PlayCircle, Award, Clock, Target, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { Badge } from "../components/ui/badge";
import { TRACKS } from "../data/mock";
import { useAuth } from "../../context/AuthContext";
import LPICard from "../components/LPICard";
import RekomendasiKonten from "../components/RekomendasiKonten";

export function Dashboard() {
  const { profile, user } = useAuth();
  const [challengeStatus] = useState<'pending' | 'completed'>('pending');
  const [timeRemaining] = useState({ hours: 6, minutes: 12, seconds: 45 });

  const displayName = profile?.full_name || user?.email || "Pengguna";
  const streak = profile?.streak ?? 0;
  const points = profile?.points ?? 0;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] p-8 shadow-lg">
        <div className="relative z-10">
            <h1 className="text-3xl font-bold text-white mb-2">Halo, {displayName} 👋</h1>
            <p className="text-indigo-100 mb-6 max-w-lg">
                Lanjutkan belajarmu hari ini
            </p>
            <div className="flex flex-wrap gap-4">
                <Link to="/courses">
                  <Button className="bg-white text-[#4F46E5] hover:bg-indigo-50 border-none">
                      <PlayCircle className="mr-2 h-4 w-4" /> Mulai Belajar
                  </Button>
                </Link>
                <Link to="/challenge">
                  <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 bg-transparent">
                      Mulai Challenge
                  </Button>
                </Link>
            </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10">
            <Award className="h-64 w-64 -mb-12 -mr-12" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content (2 cols) */}
        <div className="lg:col-span-2 space-y-8">
            {/* Progress Cards */}
            <section>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold">Progress Belajar</h2>
                    <Link to="/courses" className="text-sm text-[#4F46E5] hover:underline">Lihat Semua</Link>
                </div>
                <div className="grid gap-4">
                    {TRACKS.map(track => (
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
                                     <Badge variant="secondary" className="bg-slate-700 text-slate-300 hover:bg-slate-600 whitespace-nowrap">
                                         {track.levels[0]}
                                     </Badge>
                                 </div>
                             </CardHeader>
                             <CardContent>
                                 <Progress value={0} className="h-2 mb-3" />
                                 <div className="grid grid-cols-3 gap-4 text-sm">
                                     <div>
                                         <p className="text-slate-500 text-xs">Pelajaran selesai</p>
                                         <p className="font-bold text-white">0/{track.totalLessons}</p>
                                     </div>
                                     <div>
                                         <p className="text-slate-500 text-xs">Latihan</p>
                                         <p className="font-bold text-white">0</p>
                                     </div>
                                     <div>
                                         <p className="text-slate-500 text-xs">Skor rata-rata</p>
                                         <p className="font-bold text-slate-500">-</p>
                                     </div>
                                 </div>
                             </CardContent>
                          </Card>
                        </Link>
                    ))}
                </div>
            </section>
            {/* LPI & Rekomendasi */}
{user?.id && <LPICard userId={user.id} />}
{user?.id && <RekomendasiKonten userId={user.id} />}

{/* Recent Activity */}
<section></section>
            {/* Recent Activity */}
            <section>
                <h2 className="text-xl font-bold mb-4">Aktivitas Terakhir</h2>
                <Card className="bg-[#1E293B] border-slate-700">
                    <CardContent className="p-8 text-center">
                        <PlayCircle className="h-12 w-12 text-slate-600 mx-auto mb-3" />
                        <p className="text-slate-400 font-medium">Belum ada aktivitas</p>
                        <p className="text-slate-500 text-sm mt-1">Mulai belajar untuk melihat aktivitasmu di sini</p>
                        <Link to="/courses">
                            <Button className="mt-4 bg-[#4F46E5] hover:bg-[#4338ca]">
                                Mulai Sekarang
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </section>
        </div>

        {/* Sidebar Widgets (1 col) */}
        <div className="space-y-8">
            {/* Streak Widget */}
            <Card className="bg-[#1E293B] border-slate-700 overflow-hidden">
                <CardHeader className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-b border-slate-700/50">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-orange-500 flex items-center gap-2">
                             <Zap className="h-5 w-5" /> Streak
                        </CardTitle>
                        <span className="text-2xl font-bold text-white">{streak} 🔥</span>
                    </div>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                    <div>
                        <p className="text-sm text-slate-400 mb-3">Challenge Hari Ini</p>
                        <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                            <span className={`text-sm font-medium ${challengeStatus === 'completed' ? 'text-[#22C55E]' : 'text-orange-400'}`}>
                                {challengeStatus === 'completed' ? '✓ Selesai' : '○ Belum dikerjakan'}
                            </span>
                            {challengeStatus === 'pending' && (
                                <Link to="/challenge">
                                  <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                                      Kerjakan
                                  </Button>
                                </Link>
                            )}
                        </div>
                    </div>

                    <div>
                        <p className="text-xs text-slate-500 mb-2">Kalender Minggu Ini</p>
                        <div className="flex justify-between items-center">
                            {['M', 'S', 'S', 'R', 'K', 'J', 'S'].map((day, i) => (
                                <div key={i} className="flex flex-col gap-1.5 items-center">
                                    <span className="text-[10px] text-slate-500">{day}</span>
                                    <div className={`h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                                        i < streak - 1 
                                            ? 'bg-orange-500 text-white' 
                                            : i === streak - 1 
                                                ? 'bg-orange-500 text-white ring-2 ring-orange-400/50' 
                                                : 'bg-slate-800 text-slate-600'
                                    }`}>
                                        {i < streak ? '✓' : ''}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pt-3 border-t border-slate-700">
                        <p className="text-xs text-slate-500 mb-1">Reset dalam</p>
                        <p className="text-lg font-bold text-orange-500 font-mono">
                            {String(timeRemaining.hours).padStart(2, '0')}:
                            {String(timeRemaining.minutes).padStart(2, '0')}:
                            {String(timeRemaining.seconds).padStart(2, '0')}
                        </p>
                    </div>

                    <div className="pt-3 border-t border-slate-700">
                        <p className="text-xs text-slate-500 mb-1">Total Poin</p>
                        <p className="text-lg font-bold text-[#4F46E5]">{points} XP</p>
                    </div>
                </CardContent>
            </Card>

            {/* Recommended Next Lesson */}
            <Card className="bg-[#1E293B] border-slate-700">
                <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                        <Target className="h-4 w-4 text-[#4F46E5]" />
                        Mulai Dari Sini
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 flex-wrap">
                            <Badge variant="outline" className="text-orange-400 border-orange-400/20 bg-orange-400/10">HTML</Badge>
                            <Badge variant="outline" className="text-slate-400 border-slate-600">Dasar</Badge>
                            <div className="flex items-center gap-1 text-xs text-slate-500">
                                <Clock className="h-3 w-3" />
                                10 menit
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold mb-1.5">Pengenalan HTML</h4>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Pelajari dasar-dasar HTML sebagai fondasi membuat website.
                            </p>
                        </div>
                    </div>
                    <Link to="/lessons/html-1">
                      <Button className="w-full mt-4 bg-[#4F46E5] hover:bg-[#4338ca]">
                          <PlayCircle className="mr-2 h-4 w-4" />
                          Mulai
                      </Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
