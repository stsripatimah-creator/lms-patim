import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ChevronRight, Lock, CheckCircle, PlayCircle, Clock, Award, RotateCcw, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { TRACKS } from "../data/mock";
import { useAuth } from "../../context/AuthContext";
import { supabase } from "../../lib/supabase";

const CURRICULUM_DATA = {
  html: {
    levels: [
      {
        id: "basic",
        name: "Dasar",
        description: "Pelajari fundamental HTML dari nol",
        lessons: [
          { id: "html-1", title: "Struktur Dokumen & Tag Dasar", duration: "10 menit", xp: 20 },
          { id: "html-2", title: "Teks, Link, dan Gambar", duration: "12 menit", xp: 20 },
          { id: "html-3", title: "List & Tabel", duration: "15 menit", xp: 20 },
          { id: "html-4", title: "Form Dasar", duration: "18 menit", xp: 25 },
        ],
        milestone: "HTML Foundation Certificate"
      },
      {
        id: "intermediate",
        name: "Menengah",
        description: "Tingkatkan skill HTML ke level berikutnya",
        lessons: [
          { id: "html-5", title: "Semantic HTML", duration: "15 menit", xp: 25 },
          { id: "html-6", title: "Aksesibilitas Web (ARIA & Alt Text)", duration: "18 menit", xp: 25 },
          { id: "html-7", title: "Embed Media (Video, Audio, iframe)", duration: "20 menit", xp: 30 },
          { id: "html-8", title: "SEO Basics (Meta Tags & Structured Data)", duration: "20 menit", xp: 30 },
        ],
        milestone: "HTML Expert Badge"
      },
      {
        id: "advanced",
        name: "Mahir",
        description: "Kuasai HTML untuk proyek profesional",
        lessons: [
          { id: "html-9", title: "Halaman Produk E-Commerce", duration: "25 menit", xp: 40 },
          { id: "html-10", title: "Form Validasi UX", duration: "18 menit", xp: 35 },
          { id: "html-11", title: "Template & Component Reusable", duration: "20 menit", xp: 35 },
          { id: "html-12", title: "Interactive Dashboard dengan HTML + JS Events", duration: "30 menit", xp: 45 },
        ],
        milestone: "HTML Master Certificate",
        requirement: "Selesaikan 80% level Menengah"
      }
    ]
  },
  css: {
    levels: [
      {
        id: "basic",
        name: "Dasar",
        description: "Mulai journey CSS kamu dari dasar",
        lessons: [
          { id: "css-1", title: "Selectors & Specificity", duration: "12 menit", xp: 20 },
          { id: "css-2", title: "Box Model", duration: "12 menit", xp: 25 },
          { id: "css-3", title: "Typography & Colors", duration: "15 menit", xp: 20 },
          { id: "css-4", title: "Layout Dasar", duration: "18 menit", xp: 25 },
        ],
        milestone: "CSS Basics Badge"
      },
      {
        id: "intermediate",
        name: "Menengah",
        description: "Layout dan responsive design",
        lessons: [
          { id: "css-5", title: "Flexbox Layout", duration: "15 menit", xp: 30 },
          { id: "css-6", title: "Grid Layout", duration: "18 menit", xp: 30 },
          { id: "css-7", title: "Responsive Media Queries", duration: "20 menit", xp: 30 },
          { id: "css-8", title: "Transitions & Hover", duration: "15 menit", xp: 25 },
        ],
        milestone: "Layout Master Badge"
      },
      {
        id: "advanced",
        name: "Mahir",
        description: "Advanced CSS techniques",
        lessons: [
          { id: "css-9", title: "Animations: keyframes", duration: "18 menit", xp: 35 },
          { id: "css-10", title: "Design System & Variables", duration: "20 menit", xp: 35 },
          { id: "css-11", title: "Complex Responsive Grid", duration: "25 menit", xp: 40 },
          { id: "css-12", title: "Accessible UI Styling", duration: "22 menit", xp: 40 },
        ],
        milestone: "CSS Expert Certificate",
        requirement: "Selesaikan 80% level Menengah"
      }
    ]
  },
  js: {
    levels: [
      {
        id: "basic",
        name: "Dasar",
        description: "Fundamental JavaScript programming",
        lessons: [
          { id: "js-1", title: "JavaScript Intro & Setup", duration: "15 menit", xp: 20 },
          { id: "js-2", title: "Variables & Data Types", duration: "18 menit", xp: 20 },
          { id: "js-3", title: "Operators & Expressions", duration: "15 menit", xp: 20 },
          { id: "js-4", title: "Control Flow (if/else/switch)", duration: "20 menit", xp: 25 },
        ],
        milestone: "JavaScript Beginner Badge"
      },
      {
        id: "intermediate",
        name: "Menengah",
        description: "DOM manipulation dan events",
        lessons: [
          { id: "js-5", title: "Functions & Scope", duration: "22 menit", xp: 30 },
          { id: "js-6", title: "Arrays & Objects", duration: "25 menit", xp: 30 },
          { id: "js-7", title: "DOM Manipulation", duration: "25 menit", xp: 30 },
          { id: "js-8", title: "Events & Event Listeners", duration: "20 menit", xp: 30 },
        ],
        milestone: "JavaScript Developer Badge",
        requirement: "Selesaikan 80% level Dasar"
      },
      {
        id: "advanced",
        name: "Mahir",
        description: "Advanced JavaScript concepts",
        lessons: [
          { id: "js-9", title: "ES6+ Features", duration: "30 menit", xp: 35 },
          { id: "js-10", title: "Async JavaScript & Promises", duration: "30 menit", xp: 40 },
          { id: "js-11", title: "Fetch API & AJAX", duration: "28 menit", xp: 40 },
          { id: "js-12", title: "Modern JS Project", duration: "35 menit", xp: 45 },
        ],
        milestone: "JavaScript Master Certificate",
        requirement: "Selesaikan 80% level Menengah"
      }
    ]
  }
};

export function Curriculum() {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();

  const track = TRACKS.find(t => t.id === courseId);
  const curriculum = CURRICULUM_DATA[courseId as keyof typeof CURRICULUM_DATA];

  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) { setLoading(false); return; }
    supabase
      .from("lesson_progress")
      .select("lesson_id")
      .eq("user_id", user.id)
      .eq("completed", true)
      .then(({ data }) => {
        if (data) setCompletedIds(new Set(data.map((r: any) => r.lesson_id)));
        setLoading(false);
      });
  }, [user]);

  if (!track || !curriculum) {
    return <div className="text-slate-400 p-8">Course tidak ditemukan.</div>;
  }

  // Compute totals using real data
  const allLessons = curriculum.levels.flatMap(l => l.lessons);
  const totalLessons = allLessons.length;
  const completedCount = allLessons.filter(l => completedIds.has(l.id)).length;
  const progressPercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;
  const isFullyDone = completedCount === totalLessons;

  // Recommended = first uncompleted unlocked lesson
  const recommendedLessonId = allLessons.find(l => !completedIds.has(l.id))?.id || allLessons[0].id;

  // Check if a level is locked based on previous level completion
  function isLevelLocked(levelIndex: number) {
    if (levelIndex === 0) return false;
    const prevLevel = curriculum.levels[levelIndex - 1];
    const prevCompleted = prevLevel.lessons.filter(l => completedIds.has(l.id)).length;
    const prevTotal = prevLevel.lessons.length;
    return Math.round((prevCompleted / prevTotal) * 100) < 80;
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-slate-400">
        <Link to="/courses" className="hover:text-white transition-colors">Belajar</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-white">{track.title}</span>
      </div>

      {/* Hero Card — layout mirip Vercel */}
      <div className="bg-[#1E293B] border border-slate-700 rounded-2xl p-6 space-y-5">
        {/* Top row: icon + title + buttons */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-4">
          <div className="flex items-center gap-4 flex-1">
            <div className={`h-16 w-16 rounded-2xl ${track.color} flex items-center justify-center shrink-0`}>
              <track.icon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">{track.title}</h1>
              <p className="text-slate-400 text-sm mt-0.5">{track.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {curriculum.levels.map(level => (
                  <Badge key={level.id} variant="outline" className="border-slate-600 text-slate-400 text-xs">
                    {level.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full lg:w-52 shrink-0">
            {isFullyDone ? (
              <Button className="w-full bg-[#4F46E5] hover:bg-[#4338ca]" onClick={() => navigate(`/lessons/${allLessons[0].id}`)}>
                <RotateCcw className="mr-2 h-4 w-4" /> Ulangi Belajar
              </Button>
            ) : (
              <Button className="w-full bg-[#4F46E5] hover:bg-[#4338ca]" onClick={() => navigate(`/lessons/${recommendedLessonId}`)}>
                <PlayCircle className="mr-2 h-4 w-4" />
                {completedCount === 0 ? "Mulai Belajar" : "Lanjutkan Belajar"}
              </Button>
            )}
            <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-700"
              onClick={() => document.getElementById("curriculum")?.scrollIntoView({ behavior: "smooth" })}>
              <BookOpen className="mr-2 h-4 w-4" /> Lihat Kurikulum
            </Button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Progress Kamu</span>
            <span className="font-bold text-white">{progressPercent}%</span>
          </div>
          <Progress value={progressPercent} className="h-2.5" />
          <div className="flex justify-between text-xs text-slate-500">
            <span>{completedCount} dari {totalLessons} pelajaran</span>
            {isFullyDone && <span className="text-green-400 font-medium">Selesai ✓</span>}
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-700">
          <div>
            <p className="text-xs text-slate-500 mb-1">Total Materi</p>
            <p className="text-xl font-bold text-white">{totalLessons}</p>
          </div>
          <div>
            <p className="text-xs text-slate-500 mb-1">Diselesaikan</p>
            <p className="text-xl font-bold text-white">{completedCount}</p>
          </div>
          <div>
            <p className="text-xs text-slate-500 mb-1">Estimasi Waktu</p>
            <p className="text-xl font-bold text-white">~{totalLessons * 12} Menit</p>
          </div>
          <div>
            <p className="text-xs text-slate-500 mb-1">Pencapaian</p>
            {isFullyDone
              ? <p className="text-sm text-green-400 font-medium">Badge tersedia! Cek halaman Pencapaian.</p>
              : <p className="text-sm text-slate-600 italic">Selesaikan semua materi.</p>
            }
          </div>
        </div>
      </div>

      {/* Curriculum Sections */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Kurikulum</h2>

        <Accordion type="multiple" defaultValue={["basic", "intermediate"]} className="space-y-4">
          {curriculum.levels.map((level, levelIndex) => {
            const levelDone = level.lessons.filter(l => completedIds.has(l.id)).length;
            const levelTotal = level.lessons.length;
            const levelProgress = Math.round((levelDone / levelTotal) * 100);
            const locked = isLevelLocked(levelIndex);

            return (
              <AccordionItem
                key={level.id}
                value={level.id}
                className="border border-slate-700 rounded-xl bg-[#1E293B] overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-slate-800/50 transition-colors">
                  <div className="flex items-center justify-between w-full pr-4">
                    <div className="flex items-center gap-4 text-left">
                      <div className={`h-12 w-12 rounded-lg flex items-center justify-center shrink-0 ${
                        locked ? "bg-slate-800 text-slate-600" : "bg-[#4F46E5]/20 text-[#4F46E5]"
                      }`}>
                        {locked
                          ? <Lock className="h-6 w-6" />
                          : <span className="text-2xl font-bold">{levelIndex + 1}</span>
                        }
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{level.name}</h3>
                        <p className="text-sm text-slate-400">{level.description}</p>
                        {level.requirement && (
                          <p className="text-xs text-orange-400 mt-1 flex items-center gap-1">
                            <Lock className="h-3 w-3" /> Syarat: {level.requirement}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-sm text-slate-400">{levelDone}/{levelTotal} Materi</p>
                      <p className={`text-xs font-medium ${levelDone === levelTotal ? "text-green-400" : "text-slate-500"}`}>
                        {levelProgress}%
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-2 mt-2">
                    {level.lessons.map((lesson, lessonIndex) => {
                      const done = completedIds.has(lesson.id);
                      // lesson is locked if level is locked OR previous lesson in same level not done
                      const prevLesson = lessonIndex > 0 ? level.lessons[lessonIndex - 1] : null;
                      const lessonLocked = locked || (!!prevLesson && !completedIds.has(prevLesson.id) && !done);

                      return (
                        <div
                          key={lesson.id}
                          onClick={() => !lessonLocked && navigate(`/lessons/${lesson.id}`)}
                          className={`flex items-center justify-between p-4 rounded-lg border transition-all ${
                            lessonLocked
                              ? "border-slate-800 bg-slate-900/30 opacity-50 cursor-not-allowed"
                              : done
                                ? "border-green-500/30 bg-green-500/5 hover:bg-green-500/10 cursor-pointer"
                                : "border-slate-700 bg-slate-800/30 hover:bg-slate-800 hover:border-[#4F46E5]/50 cursor-pointer"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${
                              lessonLocked
                                ? "bg-slate-800 text-slate-600"
                                : done
                                  ? "bg-green-500 text-white"
                                  : "bg-slate-700 text-slate-400 border-2 border-slate-600"
                            }`}>
                              {lessonLocked ? <Lock className="h-4 w-4" />
                               : done ? <CheckCircle className="h-4 w-4" />
                               : <span className="text-xs font-bold">{lessonIndex + 1}</span>}
                            </div>
                            <div>
                              <h4 className="font-medium mb-0.5">{lesson.title}</h4>
                              <div className="flex items-center gap-3 text-xs text-slate-500">
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" /> {lesson.duration}
                                </span>
                                <span>+{lesson.xp} XP</span>
                                {done && (
                                  <Badge variant="outline" className="border-green-500/30 text-green-500 text-[10px] py-0">
                                    Selesai
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                          {!lessonLocked && !done && (
                            <Button size="sm" variant="ghost" className="text-[#4F46E5] hover:text-[#4338ca] hover:bg-[#4F46E5]/10 pointer-events-none">
                              Mulai <ChevronRight className="ml-1 h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      );
                    })}

                    {/* Milestone */}
                    <div className="mt-4 p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Award className="h-6 w-6 text-yellow-500 shrink-0" />
                        <div>
                          <p className="font-medium text-sm mb-0.5">Milestone: {level.milestone}</p>
                          <p className="text-xs text-slate-400">Selesaikan semua materi di level ini</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}
