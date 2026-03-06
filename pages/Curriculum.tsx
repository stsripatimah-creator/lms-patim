import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronRight, Lock, CheckCircle, PlayCircle, Clock, Award, Target, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { TRACKS } from "../data/mock";

const CURRICULUM_DATA = {
  html: {
    levels: [
      {
        id: "basic",
        name: "Dasar",
        description: "Pelajari fundamental HTML dari nol",
        lessons: [
          { id: "html-1", title: "Struktur Dokumen & Tag Dasar", duration: "10 menit", xp: 20, completed: false, locked: false },
          { id: "html-2", title: "Teks, Link, dan Gambar", duration: "12 menit", xp: 20, completed: false, locked: false },
          { id: "html-3", title: "List & Tabel", duration: "15 menit", xp: 20, completed: false, locked: false },
          { id: "html-4", title: "Form Dasar", duration: "18 menit", xp: 25, completed: false, locked: false },
        ],
        milestone: "HTML Foundation Certificate"
      },
      {
        id: "intermediate",
        name: "Menengah",
        description: "Tingkatkan skill HTML ke level berikutnya",
        lessons: [
          { id: "html-5", title: "Semantic HTML", duration: "15 menit", xp: 25, completed: false, locked: false },
          { id: "html-6", title: "Aksesibilitas Web (ARIA & Alt Text)", duration: "18 menit", xp: 25, completed: false, locked: false },
          { id: "html-7", title: "Embed Media (Video, Audio, iframe)", duration: "20 menit", xp: 30, completed: false, locked: false },
          { id: "html-8", title: "SEO Basics (Meta Tags & Structured Data)", duration: "20 menit", xp: 30, completed: false, locked: false },
        ],
        milestone: "HTML Expert Badge"
      },
      {
        id: "advanced",
        name: "Mahir",
        description: "Kuasai HTML untuk proyek profesional",
        lessons: [
          { id: "html-9", title: "Halaman Produk E-Commerce", duration: "25 menit", xp: 40, completed: false, locked: true },
          { id: "html-10", title: "Form Validasi UX", duration: "18 menit", xp: 35, completed: false, locked: true },
          { id: "html-11", title: "Template & Component Reusable", duration: "20 menit", xp: 35, completed: false, locked: true },
          { id: "html-12", title: "Interactive Dashboard dengan HTML + JS Events", duration: "30 menit", xp: 45, completed: false, locked: true },
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
          { id: "css-1", title: "Selectors & Specificity", duration: "12 menit", xp: 20, completed: false, locked: false },
          { id: "css-2", title: "Box Model", duration: "12 menit", xp: 25, completed: false, locked: false },
          { id: "css-3", title: "Typography & Colors", duration: "15 menit", xp: 20, completed: false, locked: false },
          { id: "css-4", title: "Layout Dasar", duration: "18 menit", xp: 25, completed: false, locked: false },
        ],
        milestone: "CSS Basics Badge"
      },
      {
        id: "intermediate",
        name: "Menengah",
        description: "Layout dan responsive design",
        lessons: [
          { id: "css-5", title: "Flexbox Layout", duration: "15 menit", xp: 30, completed: false, locked: false },
          { id: "css-6", title: "Grid Layout", duration: "18 menit", xp: 30, completed: false, locked: false },
          { id: "css-7", title: "Responsive Media Queries", duration: "20 menit", xp: 30, completed: false, locked: true },
          { id: "css-8", title: "Transitions & Hover", duration: "15 menit", xp: 25, completed: false, locked: true },
        ],
        milestone: "Layout Master Badge"
      },
      {
        id: "advanced",
        name: "Mahir",
        description: "Advanced CSS techniques",
        lessons: [
          { id: "css-9", title: "Animations: keyframes", duration: "18 menit", xp: 35, completed: false, locked: true },
          { id: "css-10", title: "Design System & Variables", duration: "20 menit", xp: 35, completed: false, locked: true },
          { id: "css-11", title: "Complex Responsive Grid", duration: "25 menit", xp: 40, completed: false, locked: true },
          { id: "css-12", title: "Accessible UI Styling", duration: "22 menit", xp: 40, completed: false, locked: true },
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
          { id: "js-1", title: "JavaScript Intro & Setup", duration: "15 menit", xp: 20, completed: false, locked: false },
          { id: "js-2", title: "Variables & Data Types", duration: "18 menit", xp: 20, completed: false, locked: false },
          { id: "js-3", title: "Operators & Expressions", duration: "15 menit", xp: 20, completed: false, locked: false },
          { id: "js-4", title: "Control Flow (if/else/switch)", duration: "20 menit", xp: 25, completed: false, locked: false },
        ],
        milestone: "JavaScript Beginner Badge"
      },
      {
        id: "intermediate",
        name: "Menengah",
        description: "DOM manipulation dan events",
        lessons: [
          { id: "js-5", title: "Functions & Scope", duration: "22 menit", xp: 30, completed: false, locked: false },
          { id: "js-6", title: "Arrays & Objects", duration: "25 menit", xp: 30, completed: false, locked: false },
          { id: "js-7", title: "DOM Manipulation", duration: "25 menit", xp: 30, completed: false, locked: true },
          { id: "js-8", title: "Events & Event Listeners", duration: "20 menit", xp: 30, completed: false, locked: true },
        ],
        milestone: "JavaScript Developer Badge",
        requirement: "Selesaikan 80% level Dasar"
      },
      {
        id: "advanced",
        name: "Mahir",
        description: "Advanced JavaScript concepts",
        lessons: [
          { id: "js-9", title: "ES6+ Features", duration: "30 menit", xp: 35, completed: false, locked: true },
          { id: "js-10", title: "Async JavaScript & Promises", duration: "30 menit", xp: 40, completed: false, locked: true },
          { id: "js-11", title: "Fetch API & AJAX", duration: "28 menit", xp: 40, completed: false, locked: true },
          { id: "js-12", title: "Modern JS Project", duration: "35 menit", xp: 45, completed: false, locked: true },
        ],
        milestone: "JavaScript Master Certificate",
        requirement: "Selesaikan 80% level Menengah"
      }
    ]
  }
};

export function Curriculum() {
  const { courseId } = useParams<{ courseId: string }>();
  const track = TRACKS.find(t => t.id === courseId);
  const curriculum = CURRICULUM_DATA[courseId as keyof typeof CURRICULUM_DATA];

  if (!track || !curriculum) {
    return <div>Course not found</div>;
  }

  const totalLessons = curriculum.levels.reduce((acc, level) => acc + level.lessons.length, 0);
  const completedLessons = curriculum.levels.reduce(
    (acc, level) => acc + level.lessons.filter(l => l.completed).length, 
    0
  );
  const progressPercent = Math.round((completedLessons / totalLessons) * 100);
  
  // Get first uncompleted lesson or first lesson
  const firstUncompletedLesson = curriculum.levels
    .flatMap(level => level.lessons)
    .find(lesson => !lesson.completed && !lesson.locked);
  const recommendedLessonId = firstUncompletedLesson?.id || curriculum.levels[0].lessons[0].id;

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-slate-400">
        <Link to="/courses" className="hover:text-white transition-colors">Belajar</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-white">{track.title}</span>
      </div>

      {/* Header */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="flex items-start gap-4 mb-4">
            <div className={`p-4 rounded-xl ${track.color}/20 shrink-0`}>
              <track.icon className={`h-10 w-10 text-${track.color.split("-")[1]}-400`} />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">{track.title}</h1>
              <p className="text-slate-400">{track.description}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {curriculum.levels.map(level => (
              <Badge key={level.id} variant="outline" className="border-slate-600 text-slate-400">
                {level.name}
              </Badge>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-slate-500 mb-1">Total Materi</p>
              <p className="text-xl font-bold">{totalLessons}</p>
            </div>
            <div>
              <p className="text-slate-500 mb-1">Selesai</p>
              <p className="text-xl font-bold text-[#22C55E]">{completedLessons}</p>
            </div>
            <div>
              <p className="text-slate-500 mb-1">Estimasi</p>
              <p className="text-xl font-bold">~12 Jam</p>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <Card className="bg-[#1E293B] border-slate-700 h-fit">
          <CardHeader>
            <CardTitle className="text-base">Progress Kamu</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-400">Overall Progress</span>
                <span className="font-bold">{progressPercent}%</span>
              </div>
              <Progress value={progressPercent} className="h-2" />
            </div>

            <div className="pt-4 border-t border-slate-700 space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Target className="h-4 w-4 text-[#4F46E5]" />
                <span className="text-slate-400">Milestone Berikutnya:</span>
              </div>
              <div className="p-3 bg-slate-800/50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-5 w-5 text-yellow-500" />
                  <span className="font-medium text-sm">{curriculum.levels[0].milestone}</span>
                </div>
                <p className="text-xs text-slate-500">Selesaikan level Dasar</p>
              </div>
            </div>

            <Link to={`/lessons/${recommendedLessonId}`}>
              <Button className="w-full bg-[#4F46E5] hover:bg-[#4338ca]">
                <PlayCircle className="mr-2 h-4 w-4" />
                Mulai dari yang Direkomendasikan
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Curriculum Sections */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Kurikulum</h2>
        
        <Accordion type="multiple" defaultValue={["basic", "intermediate"]} className="space-y-4">
          {curriculum.levels.map((level, levelIndex) => {
            const levelCompleted = level.lessons.filter(l => l.completed).length;
            const levelTotal = level.lessons.length;
            const levelProgress = Math.round((levelCompleted / levelTotal) * 100);
            const isLocked = level.requirement && levelProgress < 80;

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
                        isLocked ? 'bg-slate-800 text-slate-600' : 'bg-[#4F46E5]/20 text-[#4F46E5]'
                      }`}>
                        {isLocked ? <Lock className="h-6 w-6" /> : <span className="text-2xl font-bold">{levelIndex + 1}</span>}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{level.name}</h3>
                        <p className="text-sm text-slate-400">{level.description}</p>
                        {level.requirement && (
                          <p className="text-xs text-orange-400 mt-1 flex items-center gap-1">
                            <Lock className="h-3 w-3" />
                            Syarat: {level.requirement}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                      <div className="text-right">
                        <p className="text-sm text-slate-400">{levelCompleted}/{levelTotal} Materi</p>
                        <p className="text-xs text-[#22C55E] font-medium">{levelProgress}%</p>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-2 mt-2">
                    {level.lessons.map((lesson, lessonIndex) => (
                      <Link 
                        key={lesson.id} 
                        to={lesson.locked ? "#" : `/lessons/${lesson.id}`}
                        className={lesson.locked ? "pointer-events-none" : ""}
                      >
                        <div className={`flex items-center justify-between p-4 rounded-lg border transition-all ${
                          lesson.locked 
                            ? 'border-slate-800 bg-slate-900/30 opacity-50' 
                            : lesson.completed
                              ? 'border-green-500/30 bg-green-500/5 hover:bg-green-500/10'
                              : 'border-slate-700 bg-slate-800/30 hover:bg-slate-800 hover:border-[#4F46E5]/50'
                        }`}>
                          <div className="flex items-center gap-3">
                            <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${
                              lesson.locked 
                                ? 'bg-slate-800 text-slate-600'
                                : lesson.completed 
                                  ? 'bg-green-500 text-white'
                                  : 'bg-slate-700 text-slate-400 border-2 border-slate-600'
                            }`}>
                              {lesson.locked ? (
                                <Lock className="h-4 w-4" />
                              ) : lesson.completed ? (
                                <CheckCircle className="h-4 w-4" />
                              ) : (
                                <span className="text-xs font-bold">{lessonIndex + 1}</span>
                              )}
                            </div>
                            <div>
                              <h4 className="font-medium mb-0.5">{lesson.title}</h4>
                              <div className="flex items-center gap-3 text-xs text-slate-500">
                                <div className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {lesson.duration}
                                </div>
                                {lesson.completed && (
                                  <Badge variant="outline" className="border-green-500/30 text-green-500 text-[10px] py-0">
                                    Selesai
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                          {!lesson.locked && !lesson.completed && (
                            <Button size="sm" variant="ghost" className="text-[#4F46E5] hover:text-[#4338ca] hover:bg-[#4F46E5]/10">
                              Mulai
                              <ChevronRight className="ml-1 h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </Link>
                    ))}

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