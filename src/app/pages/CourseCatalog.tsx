import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Clock, BookOpen, Target, Zap } from "lucide-react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { TRACKS } from "../data/mock";
import { useAuth } from "../../context/AuthContext";

export function CourseCatalog() {
  const { profile } = useAuth();
  const [selectedTrack, setSelectedTrack] = useState<string>("all");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("progress");

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Belajar</h1>
        <p className="text-slate-400">Materi bertingkat dari Dasar sampai Mahir, lengkap latihan dan kuis.</p>
      </div>

      {/* Filters */}
      <div className="space-y-4">
        <Tabs value={selectedTrack} onValueChange={setSelectedTrack}>
          <TabsList className="bg-[#1E293B] border border-slate-700">
            <TabsTrigger value="all">Semua</TabsTrigger>
            <TabsTrigger value="html">HTML</TabsTrigger>
            <TabsTrigger value="css">CSS</TabsTrigger>
            <TabsTrigger value="js">JavaScript</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-slate-400">Level:</span>
            {[
              { id: "all", label: "Semua" },
              { id: "Dasar", label: "Dasar" },
              { id: "Menengah", label: "Menengah" },
              { id: "Mahir", label: "Mahir" }
            ].map((level) => (
              <button
                key={level.id}
                onClick={() => setSelectedLevel(level.id)}
                className={`px-3 py-1.5 text-sm rounded-lg border transition-all ${
                  selectedLevel === level.id
                    ? "bg-[#4F46E5] border-[#4F46E5] text-white"
                    : "bg-[#1E293B] border-slate-700 text-slate-400 hover:border-slate-600"
                }`}
              >
                {level.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
              <Input placeholder="Cari materi..." className="pl-9 bg-[#1E293B] border-slate-700" />
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[160px] bg-[#1E293B] border-slate-700">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#1E293B] border-slate-700">
                <SelectItem value="progress">Sesuai progres</SelectItem>
                <SelectItem value="newest">Terbaru</SelectItem>
                <SelectItem value="popular">Paling populer</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Track Overview Cards */}
      <div className="grid gap-6">
        {TRACKS.filter(track => selectedTrack === "all" || track.id === selectedTrack).map((track) => (
          <Card key={track.id} className="bg-[#1E293B] border-slate-700 overflow-hidden hover:border-[#4F46E5]/50 transition-all">
            <div className="grid md:grid-cols-3">
              {/* Left: Track Info */}
              <div className="md:col-span-2 p-6 border-r border-slate-800">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-4 rounded-xl ${track.color}/20 shrink-0`}>
                    <track.icon className={`h-8 w-8 text-${track.color.split("-")[1]}-400`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1">{track.title}</h3>
                    <p className="text-slate-400">{track.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {track.levels.map(level => (
                        <Badge key={level} variant="outline" className="border-slate-600 text-slate-400">
                          {level}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Progress Kamu</span>
                    <span className="font-bold text-white">0%</span>
                  </div>
                  <Progress value={0} className="h-2" />
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>0 dari {track.totalLessons} pelajaran</span>
                    <span className="text-slate-600">Belum dimulai</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-700">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Total Materi</p>
                    <p className="text-lg font-bold">{track.totalLessons}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Diselesaikan</p>
                    <p className="text-lg font-bold text-slate-500">0</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Estimasi Waktu</p>
                    <p className="text-lg font-bold">~{track.totalLessons * 12} Menit</p>
                  </div>
                </div>
              </div>

              {/* Right: Actions */}
              <div className="p-6 flex flex-col justify-between bg-gradient-to-br from-slate-800/30 to-transparent">
                <div className="space-y-3">
                  <Link to={`/lessons/${track.id}-1`}>
                    <Button className="w-full bg-[#4F46E5] hover:bg-[#4338ca] shadow-lg shadow-[#4F46E5]/20">
                      <Target className="mr-2 h-4 w-4" />
                      Mulai Belajar
                    </Button>
                  </Link>
                  <Link to={`/courses/${track.id}`}>
                    <Button variant="outline" className="w-full border-slate-600 hover:bg-slate-700">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Lihat Kurikulum
                    </Button>
                  </Link>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700">
                  <p className="text-xs text-slate-500 mb-3">Pencapaian</p>
                  <p className="text-xs text-slate-600 italic">Selesaikan pelajaran untuk unlock badge</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Lesson Preview Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Mulai Dari Sini</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { id: "html-1", track: "HTML", level: "Dasar", title: "Pengenalan HTML", duration: "10 min", xp: 20, status: "available" },
            { id: "html-2", track: "HTML", level: "Dasar", title: "Struktur Dasar HTML", duration: "12 min", xp: 20, status: "locked" },
            { id: "css-1", track: "CSS", level: "Dasar", title: "Pengenalan CSS", duration: "10 min", xp: 20, status: "available" },
            { id: "css-2", track: "CSS", level: "Dasar", title: "Selector & Properties", duration: "12 min", xp: 20, status: "locked" },
            { id: "js-1", track: "JavaScript", level: "Dasar", title: "Pengenalan JavaScript", duration: "10 min", xp: 20, status: "available" },
            { id: "js-2", track: "JavaScript", level: "Dasar", title: "Variabel & Tipe Data", duration: "12 min", xp: 20, status: "locked" },
          ].map((lesson) => (
            <Card
              key={lesson.id}
              className={`bg-[#1E293B] border-slate-700 hover:border-[#4F46E5]/50 transition-all ${
                lesson.status === "locked" ? "opacity-50" : ""
              }`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs border-slate-600">{lesson.track}</Badge>
                    <Badge variant="outline" className="text-xs border-slate-600">{lesson.level}</Badge>
                  </div>
                  {lesson.status === "locked" && (
                    <Badge variant="outline" className="text-xs border-orange-500/30 text-orange-500">
                      Terkunci
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-base">{lesson.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {lesson.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Zap className="h-3 w-3 text-yellow-500" />
                    +{lesson.xp} XP
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                {lesson.status === "available" ? (
                  <Link to={`/lessons/${lesson.id}`} className="w-full">
                    <Button size="sm" className="w-full bg-[#4F46E5]/10 text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white">
                      Mulai Belajar
                    </Button>
                  </Link>
                ) : (
                  <Button size="sm" className="w-full" disabled>
                    Selesaikan level sebelumnya
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
