import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { 
  ChevronLeft, ChevronRight, CheckCircle, Lock, 
  PlayCircle, RotateCcw, Code2, Eye, Terminal, 
  Maximize2, Minimize2, Moon, Sun,
  Save, CheckCheck, Menu, X, Clock, Award
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Progress } from "../../components/ui/progress";
import { cn } from "../../lib/utils";
import { toast } from "sonner";
import { HTML_LESSONS, CSS_LESSONS, JS_LESSONS, LESSON_NAV_DATA as NAV_DATA } from "../../data/lessons";
import { useAuth } from "../../../context/AuthContext";
import { supabase } from "../../../lib/supabase";
import { HTML_ADDITIONAL_LESSONS } from "../../data/html-additional-lessons";
import { CSS_ADDITIONAL_LESSONS } from "../../data/css-additional-lessons";
import { CSS_MORE_LESSONS, JS_ADDITIONAL_LESSONS } from "../../data/more-lessons";

// Use imported lessons - combine HTML, CSS, and JavaScript
const LESSON_DATA: Record<string, any> = {
  ...HTML_LESSONS,
  ...HTML_ADDITIONAL_LESSONS,
  ...CSS_LESSONS,
  ...CSS_ADDITIONAL_LESSONS,
  ...CSS_MORE_LESSONS,
  ...JS_LESSONS,
  ...JS_ADDITIONAL_LESSONS
};

export function LessonPlayer() {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  
  // Get lesson data with fallback
  const lesson = (lessonId && LESSON_DATA[lessonId]) || LESSON_DATA["html-1"];
  
  // Handle case where lesson is not found
  if (!lesson) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#0B1220] text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Pelajaran tidak ditemukan</h1>
          <Button onClick={() => navigate("/courses")}>Kembali ke Katalog</Button>
        </div>
      </div>
    );
  }

  const [code, setCode] = useState({
    html: lesson.initialCode.html,
    css: lesson.initialCode.css,
    js: lesson.initialCode.js
  });
  
  const [activeFile, setActiveFile] = useState<"html" | "css" | "js">("html");
  const [outputTab, setOutputTab] = useState("preview");
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [submittedQuiz, setSubmittedQuiz] = useState<Record<number, boolean>>({});
  const [isRunning, setIsRunning] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [mobileTab, setMobileTab] = useState<"content" | "editor" | "output">("content");
  const [isCompleted, setIsCompleted] = useState(false);

  // Reset state saat lesson berganti
  useEffect(() => {
    setIsCompleted(false);
    setQuizAnswers({});
    setSubmittedQuiz({});
    setConsoleOutput([]);
    setCode({
      html: lesson.initialCode.html,
      css: lesson.initialCode.css,
      js: lesson.initialCode.js
    });
  }, [lessonId]);
  const [showCertificate, setShowCertificate] = useState(false);
  const [completedLessonIds, setCompletedLessonIds] = useState<Set<string>>(new Set());
  const [loadingProgress, setLoadingProgress] = useState(true);
  const { user } = useAuth();

  const trackId = lesson.track.toLowerCase();

  // Fetch completed lessons from Supabase on load
  useEffect(() => {
    if (!user) return;
    const fetchCompleted = async () => {
      setLoadingProgress(true);
      const { data } = await supabase
        .from('user_progress')
        .select('lesson_id')
        .eq('user_id', user.id)
        .eq('completed', true);
      if (data) {
        const ids = new Set(data.map((d: any) => d.lesson_id));
        setCompletedLessonIds(ids);
        // Mark current lesson as completed if already in DB
        if (lessonId && ids.has(lessonId)) setIsCompleted(true);
      }
      setLoadingProgress(false);
    };
    fetchCompleted();
  }, [user, lessonId]);

  // Build navLessons dynamically based on real completed data
  // A lesson is unlocked if it's the first, or the previous lesson is completed
  const rawNav = NAV_DATA[trackId as keyof typeof NAV_DATA] || [];
  const navLessons = rawNav.map((nav, index) => {
    const isFirst = index === 0;
    const prevCompleted = index > 0 ? completedLessonIds.has(rawNav[index - 1].id) : true;
    return {
      ...nav,
      completed: completedLessonIds.has(nav.id),
      locked: !isFirst && !prevCompleted && !completedLessonIds.has(nav.id),
      current: nav.id === lessonId,
    };
  });

  // Find current lesson index and navigation
  const currentIndex = navLessons.findIndex(nav => nav.id === lessonId);
  const previousLesson = currentIndex > 0 ? navLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < navLessons.length - 1 ? navLessons[currentIndex + 1] : null;

  // Run code
  const handleRun = () => {
    setIsRunning(true);
    setConsoleOutput([]);
    
    // Jalankan kode dan tampilkan di preview
    setTimeout(() => {
      setIsRunning(false);
    }, 400);
  };

  // Reset code
  const handleReset = () => {
    setCode({
      html: lesson.initialCode.html,
      css: lesson.initialCode.css,
      js: lesson.initialCode.js
    });
    setConsoleOutput([]);
  };

  // Save draft
  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
    }, 1000);
  };

  // Quiz handling
  const handleQuizAnswer = (questionId: number, optionIndex: number) => {
    setQuizAnswers({ ...quizAnswers, [questionId]: optionIndex });
  };

  const handleQuizSubmit = (questionId: number) => {
    setSubmittedQuiz({ ...submittedQuiz, [questionId]: true });
  };

  // Mark lesson as completed
  // Hitung skor quiz dari jawaban yang sudah disubmit
  const hitungSkorQuiz = (): number => {
    const totalQuiz = lesson.quiz?.length || 0;
    if (totalQuiz === 0) return 100;
    const benar = lesson.quiz.filter((q: any) => 
      submittedQuiz[q.id] && quizAnswers[q.id] === q.correct
    ).length;
    return Math.round((benar / totalQuiz) * 100);
  };

  const handleMarkComplete = async () => {
    setIsCompleted(true);
    const skorQuiz = hitungSkorQuiz();

    if (!user) {
      toast.success("Pelajaran selesai! (Login untuk menyimpan progress)");
    } else if (lessonId) {
      try {
        // 1. Simpan progress lesson dengan skor dari quiz
        const { data: upsertData, error: upsertError } = await supabase
          .from('user_progress')
          .upsert({
            user_id: user.id,
            lesson_id: lessonId,
            track: lesson.track.toLowerCase(),
            completed: true,
            completed_at: new Date().toISOString(),
            score: skorQuiz
          }, { onConflict: 'user_id, lesson_id' });

        if (upsertError) {
          console.error('Error upserting user_progress:', upsertError);
          toast.error("Gagal menyimpan progress.");
        } else {
          // Update local state so navLessons re-renders immediately
          if (lessonId) {
            setCompletedLessonIds(prev => new Set([...prev, lessonId]));
          }
          toast.success(`Pelajaran selesai! Skor kamu: ${skorQuiz}/100 🎉`);
        }

        // 2. Tambah XP ke profile
        const { data: profileData, error: profileError } = await supabase
          .from('profiles')
          .select('points, streak, last_active')
          .eq('id', user.id)
          .single();

        if (profileError) {
          console.error('Error fetching profiles:', profileError);
        }

        if (profileData) {
          const today = new Date().toDateString();
          const lastActive = profileData.last_active 
            ? new Date(profileData.last_active).toDateString() 
            : null;
          const yesterday = new Date(Date.now() - 86400000).toDateString();

          // Hitung streak baru
          let newStreak = profileData.streak || 0;
          if (lastActive === today) {
            newStreak = profileData.streak;
          } else if (lastActive === yesterday) {
            newStreak = (profileData.streak || 0) + 1;
          } else {
            newStreak = 1;
          }

          // Update points + streak + last_active di profiles
          const { error: updateError } = await supabase
            .from('profiles')
            .update({
              points: (profileData.points || 0) + (lesson.xp || 20),
              streak: newStreak,
              last_active: new Date().toISOString()
            })
            .eq('id', user.id);

          if (updateError) {
            console.error('Error updating profiles:', updateError);
          }

          // Fix 3: Sync ke user_streaks agar useLPI membaca data yang benar
          const longestStreak = Math.max(newStreak, profileData.streak || 0);
          await supabase
            .from('user_streaks')
            .upsert({
              user_id: user.id,
              current_streak: newStreak,
              longest_streak: longestStreak,
              last_activity_date: new Date().toISOString()
            }, { onConflict: 'user_id' });
        }
      } catch (err) {
        console.error('Unexpected error saving progress:', err);
      }
    }

    // Tampilkan sertifikat kalau lesson terakhir
    const isLastLesson = !nextLesson;
    if (isLastLesson) {
      setTimeout(() => setShowCertificate(true), 800);
    } else {
      setTimeout(() => {
        navigate(`/lessons/${nextLesson!.id}`);
      }, 1500);
    }
  };

  // Guard: block access to locked lessons based on real Supabase data
  const rawNavForGuard = NAV_DATA[trackId as keyof typeof NAV_DATA] || [];
  const currentNavIndex = rawNavForGuard.findIndex(n => n.id === lessonId);
  const prevLesson = currentNavIndex > 0 ? rawNavForGuard[currentNavIndex - 1] : null;
  const isLocked = !loadingProgress && !!user && currentNavIndex > 0 && !completedLessonIds.has(lessonId ?? "") && !!prevLesson && !completedLessonIds.has(prevLesson.id);

  if (isLocked) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#0B1220] text-white">
        <div className="text-center space-y-4">
          <div className="text-5xl">🔒</div>
          <h1 className="text-2xl font-bold">Lesson ini terkunci</h1>
          <p className="text-slate-400">Selesaikan lesson sebelumnya terlebih dahulu.</p>
          <Button onClick={() => navigate(-1)}>Kembali</Button>
        </div>
      </div>
    );
  }

  return (
    <>
    <div className={cn(
      "h-screen flex flex-col overflow-hidden",
      isDarkMode ? "bg-[#0B1220] text-slate-100" : "bg-white text-slate-900"
    )}>
      {/* Top Bar */}
      <div className={cn(
        "h-14 border-b flex items-center justify-between px-4 shrink-0",
        isDarkMode ? "bg-[#1E293B] border-slate-700" : "bg-white border-slate-200"
      )}>
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
            className="lg:hidden"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowNav(!showNav)}
            className="lg:hidden"
          >
            <Menu className="h-4 w-4" />
          </Button>
          <div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">{lesson.track}</Badge>
              <Badge variant="outline" className="text-xs">{lesson.level}</Badge>
            </div>
            <h1 className="font-bold text-sm lg:text-base mt-0.5">{lesson.title}</h1>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <div className="hidden md:flex items-center gap-2 text-xs text-slate-500">
            <Clock className="h-3 w-3" />
            <span>{lesson.duration}</span>
            <span>•</span>
            <Award className="h-3 w-3 text-yellow-500" />
            <span>+{lesson.xp} XP</span>
          </div>
        </div>
      </div>

      {/* Main Content - Desktop */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Navigation (Desktop only) */}
        <div className={cn(
          "hidden lg:block w-64 border-r overflow-y-auto shrink-0",
          isDarkMode ? "bg-[#1E293B] border-slate-700" : "bg-slate-50 border-slate-200"
        )}>
          <div className="p-4">
            <div className="mb-4">
              <Link to="/courses" className="text-xs text-slate-500 hover:text-[#4F46E5] flex items-center gap-1">
                <ChevronLeft className="h-3 w-3" />
                Kembali ke Kurikulum
              </Link>
            </div>
            
            <div className="mb-4">
              <p className="text-xs text-slate-500 mb-2">Progress {lesson.track}</p>
              <Progress value={navLessons.length > 0 ? Math.round((navLessons.filter(n => n.completed).length / navLessons.length) * 100) : 0} className="h-1.5" />
              <p className="text-xs text-slate-500 mt-1">{navLessons.filter(n => n.completed).length} dari {navLessons.length} selesai</p>
            </div>

            <div className="space-y-1">
              {navLessons.map((navLesson) => (
                <Link
                  key={navLesson.id}
                  to={`/lessons/${navLesson.id}`}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-lg text-sm transition-colors",
                    navLesson.current
                      ? isDarkMode 
                        ? "bg-[#4F46E5]/20 text-[#4F46E5]" 
                        : "bg-[#4F46E5]/10 text-[#4F46E5]"
                      : navLesson.locked
                        ? "opacity-50 pointer-events-none"
                        : isDarkMode
                          ? "hover:bg-slate-700"
                          : "hover:bg-slate-100"
                  )}
                >
                  <div className={cn(
                    "h-6 w-6 rounded-full flex items-center justify-center shrink-0 text-xs",
                    navLesson.completed 
                      ? "bg-green-500 text-white"
                      : navLesson.locked
                        ? "bg-slate-700 text-slate-500"
                        : isDarkMode
                          ? "bg-slate-700"
                          : "bg-slate-200"
                  )}>
                    {navLesson.completed ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : navLesson.locked ? (
                      <Lock className="h-3 w-3" />
                    ) : (
                      <span>{navLessons.indexOf(navLesson) + 1}</span>
                    )}
                  </div>
                  <span className="flex-1 truncate">{navLesson.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {showNav && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 bg-black/50" onClick={() => setShowNav(false)} />
            <div className={cn(
              "absolute left-0 top-0 bottom-0 w-64 overflow-y-auto",
              isDarkMode ? "bg-[#1E293B]" : "bg-white"
            )}>
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold">Daftar Pelajaran</h3>
                  <Button variant="ghost" size="sm" onClick={() => setShowNav(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-1">
                  {navLessons.map((navLesson) => (
                    <Link
                      key={navLesson.id}
                      to={`/lessons/${navLesson.id}`}
                      onClick={() => setShowNav(false)}
                      className={cn(
                        "flex items-center gap-3 p-3 rounded-lg text-sm",
                        navLesson.current ? "bg-[#4F46E5]/20 text-[#4F46E5]" : ""
                      )}
                    >
                      <div className={cn(
                        "h-6 w-6 rounded-full flex items-center justify-center shrink-0 text-xs",
                        navLesson.completed ? "bg-green-500 text-white" : "bg-slate-700"
                      )}>
                        {navLesson.completed ? <CheckCircle className="h-4 w-4" /> : navLessons.indexOf(navLesson) + 1}
                      </div>
                      <span className="flex-1 truncate">{navLesson.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          {/* Mobile Tabs */}
          <div className="lg:hidden border-b">
            <div className="flex">
              {["content", "editor", "output"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setMobileTab(tab as any)}
                  className={cn(
                    "flex-1 py-3 text-sm font-medium border-b-2 transition-colors",
                    mobileTab === tab
                      ? "border-[#4F46E5] text-[#4F46E5]"
                      : "border-transparent text-slate-500"
                  )}
                >
                  {tab === "content" ? "Materi" : tab === "editor" ? "Editor" : "Output"}
                </button>
              ))}
            </div>
          </div>

          {/* Content Panel (Materi + Quiz) */}
          <div className={cn(
            "flex-1 overflow-y-auto p-6",
            isDarkMode ? "bg-[#0B1220]" : "bg-white",
            "lg:block",
            mobileTab !== "content" && "hidden lg:block"
          )}>
            <div className="max-w-3xl mx-auto space-y-6">
              {/* Lesson Content */}
              {lesson.content.map((section: any, index: number) => (
                <Card key={index} className={cn(
                  "border",
                  isDarkMode ? "bg-[#1E293B] border-slate-700" : "bg-white border-slate-200"
                )}>
                  <CardContent className="p-6">
                    {section.type === "text" && (
                      <>
                        <h3 className="font-bold text-lg mb-3">{section.title}</h3>
                        <p className="text-slate-400 leading-relaxed">{section.body}</p>
                      </>
                    )}
                    
                    {section.type === "code" && (
                      <>
                        <h3 className="font-bold text-lg mb-3">{section.title}</h3>
                        <div className={cn(
                          "rounded-lg p-4 overflow-x-auto",
                          isDarkMode ? "bg-[#0B1220]" : "bg-slate-50"
                        )}>
                          <pre className="text-sm">
                            <code>{section.code}</code>
                          </pre>
                        </div>
                      </>
                    )}
                    
                    {section.type === "list" && (
                      <>
                        <h3 className="font-bold text-lg mb-3">{section.title}</h3>
                        <ul className="space-y-2">
                          {section.items.map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-slate-400">
                              <CheckCircle className="h-5 w-5 text-[#22C55E] mt-0.5 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </CardContent>
                </Card>
              ))}

              {/* Quiz Section */}
              <div>
                <h3 className="font-bold text-xl mb-4">🎯 Kuis Pemahaman</h3>
                <div className="space-y-4">
                  {lesson.quiz.map((question: any, qIndex: number) => {
                    const selectedAnswer = quizAnswers[question.id];
                    const isSubmitted = submittedQuiz[question.id];
                    const isCorrect = selectedAnswer === question.correct;

                    return (
                      <Card key={question.id} className={cn(
                        "border",
                        isDarkMode ? "bg-[#1E293B] border-slate-700" : "bg-white border-slate-200"
                      )}>
                        <CardContent className="p-6">
                          <p className="font-medium mb-4">
                            {qIndex + 1}. {question.question}
                          </p>
                          
                          <div className="space-y-2 mb-4">
                            {question.options.map((option: string, optIndex: number) => (
                              <button
                                key={optIndex}
                                onClick={() => !isSubmitted && handleQuizAnswer(question.id, optIndex)}
                                disabled={isSubmitted}
                                className={cn(
                                  "w-full text-left p-3 rounded-lg border-2 transition-all",
                                  selectedAnswer === optIndex && !isSubmitted && "border-[#4F46E5] bg-[#4F46E5]/10",
                                  isSubmitted && optIndex === question.correct && "border-green-500 bg-green-500/10",
                                  isSubmitted && selectedAnswer === optIndex && optIndex !== question.correct && "border-red-500 bg-red-500/10",
                                  !isSubmitted && selectedAnswer !== optIndex && (isDarkMode ? "border-slate-700 hover:border-slate-600" : "border-slate-200 hover:border-slate-300")
                                )}
                              >
                                {option}
                              </button>
                            ))}
                          </div>

                          {!isSubmitted ? (
                            <Button
                              onClick={() => handleQuizSubmit(question.id)}
                              disabled={selectedAnswer === undefined}
                              size="sm"
                              className="bg-[#4F46E5] hover:bg-[#4338ca]"
                            >
                              Submit Jawaban
                            </Button>
                          ) : (
                            <div className={cn(
                              "p-3 rounded-lg",
                              isCorrect ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                            )}>
                              <p className="font-medium mb-1">
                                {isCorrect ? "✓ Benar!" : "✗ Kurang tepat"}
                              </p>
                              <p className="text-sm opacity-90">{question.explanation}</p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Editor Panel */}
          <div className={cn(
            "flex-1 flex flex-col border-l overflow-hidden",
            isDarkMode ? "bg-[#1E293B] border-slate-700" : "bg-slate-50 border-slate-200",
            "lg:flex",
            mobileTab !== "editor" && "hidden lg:flex"
          )}>
            {/* File Tabs */}
            <div className={cn(
              "flex items-center justify-between border-b px-2 h-12 shrink-0",
              isDarkMode ? "border-slate-700" : "border-slate-200"
            )}>
              <div className="flex">
                {(["html", "css", "js"] as const).map((file) => (
                  <button
                    key={file}
                    onClick={() => setActiveFile(file)}
                    className={cn(
                      "px-4 py-2 text-sm font-medium border-b-2 transition-colors",
                      activeFile === file
                        ? "border-[#4F46E5] text-[#4F46E5]"
                        : "border-transparent text-slate-500 hover:text-slate-300"
                    )}
                  >
                    {file === "html" ? "index.html" : file === "css" ? "styles.css" : "script.js"}
                  </button>
                ))}
              </div>
            </div>

            {/* Editor Toolbar */}
            <div className={cn(
              "flex items-center justify-between px-4 py-2 border-b",
              isDarkMode ? "border-slate-700" : "border-slate-200"
            )}>
              <div className="flex items-center gap-2">
                <Button
                  onClick={handleRun}
                  disabled={isRunning}
                  size="sm"
                  className="bg-[#22C55E] hover:bg-[#16A34A] text-white"
                >
                  {isRunning ? (
                    <>
                      <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2" />
                      Running...
                    </>
                  ) : (
                    <>
                      <PlayCircle className="h-4 w-4 mr-2" />
                      Run
                    </>
                  )}
                </Button>
                <Button onClick={handleReset} variant="outline" size="sm">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Reset
                </Button>
                <Button onClick={handleSave} variant="ghost" size="sm">
                  {isSaving ? (
                    <CheckCheck className="h-4 w-4 mr-2 text-green-500" />
                  ) : (
                    <Save className="h-4 w-4 mr-2" />
                  )}
                  {isSaving ? "Tersimpan" : "Simpan"}
                </Button>
              </div>
              <span className="text-xs text-slate-500">
                Autosave aktif • 10s lalu
              </span>
            </div>

            {/* Code Editor */}
            <div className="flex-1 overflow-hidden">
              <textarea
                value={code[activeFile]}
                onChange={(e) => setCode({ ...code, [activeFile]: e.target.value })}
                className={cn(
                  "w-full h-full p-4 font-mono text-sm resize-none focus:outline-none",
                  isDarkMode ? "bg-[#0B1220] text-slate-100" : "bg-white text-slate-900"
                )}
                spellCheck={false}
              />
            </div>

            {/* Output Panel - Desktop */}
            <div className={cn(
              "hidden lg:block h-80 border-t",
              isDarkMode ? "border-slate-700" : "border-slate-200"
            )}>
              <Tabs value={outputTab} onValueChange={setOutputTab} className="h-full flex flex-col">
                <TabsList className={cn(
                  "w-full justify-start rounded-none border-b h-10",
                  isDarkMode ? "bg-[#1E293B] border-slate-700" : "bg-slate-50 border-slate-200"
                )}>
                  <TabsTrigger value="preview" className="gap-2">
                    <Eye className="h-4 w-4" />
                    Preview
                  </TabsTrigger>
                  <TabsTrigger value="console" className="gap-2">
                    <Terminal className="h-4 w-4" />
                    Console
                  </TabsTrigger>

                </TabsList>
                
                <TabsContent value="preview" className="flex-1 m-0 p-4 overflow-auto">
                  <div className={cn(
                    "w-full h-full rounded-lg border",
                    isDarkMode ? "bg-white border-slate-700" : "bg-white border-slate-200"
                  )}>
                    <iframe
                      title="preview"
                      srcDoc={`
                        <!DOCTYPE html>
                        <html>
                          <head>
                            <style>${code.css}</style>
                          </head>
                          <body>
                            ${code.html}
                            <script>${code.js}</script>
                          </body>
                        </html>
                      `}
                      className="w-full h-full"
                      sandbox="allow-scripts"
                    />
                  </div>
                </TabsContent>
                
                <TabsContent value="console" className="flex-1 m-0 p-4 overflow-auto">
                  <div className={cn(
                    "font-mono text-xs space-y-1",
                    isDarkMode ? "text-slate-300" : "text-slate-700"
                  )}>
                    {consoleOutput.length === 0 ? (
                      <p className="text-slate-500">Console output will appear here...</p>
                    ) : (
                      consoleOutput.map((log, i) => (
                        <p key={i} className="text-green-400">{log}</p>
                      ))
                    )}
                  </div>
                </TabsContent>
                

              </Tabs>
            </div>
          </div>

          {/* Output Panel - Mobile Only */}
          <div className={cn(
            "lg:hidden flex-1 overflow-hidden",
            mobileTab !== "output" && "hidden"
          )}>
            <Tabs value={outputTab} onValueChange={setOutputTab} className="h-full flex flex-col">
              <TabsList className="w-full justify-start rounded-none border-b">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="console">Console</TabsTrigger>
  
              </TabsList>
              
              <TabsContent value="preview" className="flex-1 m-0 p-4">
                <iframe
                  title="preview"
                  srcDoc={`
                    <!DOCTYPE html>
                    <html>
                      <head>
                        <style>${code.css}</style>
                      </head>
                      <body>
                        ${code.html}
                        <script>${code.js}</script>
                      </body>
                    </html>
                  `}
                  className="w-full h-full border rounded-lg"
                  sandbox="allow-scripts"
                />
              </TabsContent>
              
              <TabsContent value="console" className="flex-1 m-0 p-4">
                <div className="font-mono text-xs space-y-1 text-slate-300">
                  {consoleOutput.length === 0 ? (
                    <p className="text-slate-500">Console output...</p>
                  ) : (
                    consoleOutput.map((log, i) => (
                      <p key={i} className="text-green-400">{log}</p>
                    ))
                  )}
                </div>
              </TabsContent>
              

            </Tabs>
          </div>
        </div>
      </div>

      {/* Sticky Footer */}
      <div className={cn(
        "h-16 border-t flex items-center justify-between px-6 shrink-0",
        isDarkMode ? "bg-[#1E293B] border-slate-700" : "bg-white border-slate-200"
      )}>
        <Button
          variant="outline"
          size="sm"
          onClick={() => previousLesson && navigate(`/lessons/${previousLesson.id}`)}
          disabled={!previousLesson}
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Sebelumnya
        </Button>
        
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 text-sm">
            <Award className="h-4 w-4 text-yellow-500" />
            <span className="text-slate-500">Selesai =</span>
            <span className="font-bold text-[#22C55E]">+{lesson.xp} XP</span>
          </div>
          <Button 
            size="sm" 
            variant={isCompleted ? "default" : "outline"}
            onClick={handleMarkComplete}
            disabled={isCompleted}
            className={cn(
              isCompleted && "bg-[#22C55E] hover:bg-[#16A34A] text-white"
            )}
          >
            {isCompleted ? (
              <>
                <CheckCircle className="h-4 w-4 mr-2" />
                Selesai ✓
              </>
            ) : (
              "Tandai Selesai"
            )}
          </Button>
          <Button
            size="sm"
            className="bg-[#4F46E5] hover:bg-[#4338ca]"
            onClick={() => nextLesson && navigate(`/lessons/${nextLesson.id}`)}
            disabled={!nextLesson}
          >
            Selanjutnya
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>

      {/* Certificate Modal */}
      {showCertificate && (() => {
        const recipientName = (user as any)?.user_metadata?.full_name || user?.email?.split("@")[0] || "Pengguna";
        const courseName = `${lesson.track} Fundamentals`;
        const dateStr = new Date().toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" });
        const certId = `SBW-${Date.now().toString(36).toUpperCase()}`;

        const handleDownload = () => {
          const printWindow = window.open("", "_blank");
          if (!printWindow) return;
          printWindow.document.write(`<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8"/>
  <title>Sertifikat - ${recipientName}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600&display=swap');
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Inter', sans-serif;
      background: #fff;
      display: flex; align-items: center; justify-content: center;
      min-height: 100vh; padding: 40px;
    }
    .cert {
      width: 794px; min-height: 562px;
      background: linear-gradient(135deg, #0f0c29, #1a1a4e, #0f0c29);
      border-radius: 20px;
      padding: 60px 70px;
      text-align: center;
      position: relative;
      overflow: hidden;
      color: white;
      box-shadow: 0 25px 60px rgba(0,0,0,0.4);
    }
    .cert::before {
      content: '';
      position: absolute; inset: 0;
      background: radial-gradient(ellipse at 20% 50%, rgba(79,70,229,0.25) 0%, transparent 60%),
                  radial-gradient(ellipse at 80% 50%, rgba(124,58,237,0.25) 0%, transparent 60%);
    }
    .border-deco {
      position: absolute; inset: 16px;
      border: 1.5px solid rgba(255,255,255,0.15);
      border-radius: 12px; pointer-events: none;
    }
    .corner {
      position: absolute; width: 40px; height: 40px;
      border-color: #6366f1; border-style: solid;
    }
    .corner.tl { top: 24px; left: 24px; border-width: 3px 0 0 3px; border-radius: 4px 0 0 0; }
    .corner.tr { top: 24px; right: 24px; border-width: 3px 3px 0 0; border-radius: 0 4px 0 0; }
    .corner.bl { bottom: 24px; left: 24px; border-width: 0 0 3px 3px; border-radius: 0 0 0 4px; }
    .corner.br { bottom: 24px; right: 24px; border-width: 0 3px 3px 0; border-radius: 0 0 4px 0; }
    .content { position: relative; z-index: 1; }
    .logo { font-size: 13px; letter-spacing: 6px; color: #a5b4fc; font-weight: 500; text-transform: uppercase; margin-bottom: 6px; }
    .title { font-family: 'Playfair Display', Georgia, serif; font-size: 32px; font-weight: 700; color: #fff; margin-bottom: 28px; }
    .presented { font-size: 13px; color: #94a3b8; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 10px; }
    .name { font-family: 'Playfair Display', Georgia, serif; font-size: 44px; font-weight: 700; color: #fff; margin-bottom: 10px; letter-spacing: 1px; }
    .divider { width: 200px; height: 2px; background: linear-gradient(90deg, transparent, #6366f1, #a78bfa, transparent); margin: 0 auto 20px; }
    .completed-text { font-size: 13px; color: #94a3b8; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 8px; }
    .course { font-size: 26px; font-weight: 700; color: #818cf8; margin-bottom: 32px; }
    .footer { display: flex; justify-content: space-between; align-items: flex-end; margin-top: 28px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); }
    .footer-item { text-align: center; }
    .footer-label { font-size: 10px; color: #64748b; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 4px; }
    .footer-value { font-size: 13px; color: #cbd5e1; font-weight: 500; }
    .seal { width: 64px; height: 64px; background: linear-gradient(135deg, #4f46e5, #7c3aed); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto; font-size: 28px; box-shadow: 0 0 20px rgba(99,102,241,0.5); }
    @media print {
      body { padding: 0; background: white; }
      .cert { box-shadow: none; border-radius: 0; width: 100%; min-height: 100vh; }
    }
  </style>
</head>
<body>
  <div class="cert">
    <div class="border-deco"></div>
    <div class="corner tl"></div><div class="corner tr"></div>
    <div class="corner bl"></div><div class="corner br"></div>
    <div class="content">
      <div class="logo">✦ StepByWeb ✦</div>
      <div class="title">Certificate of Completion</div>
      <div class="presented">Dengan bangga diberikan kepada</div>
      <div class="name">${recipientName}</div>
      <div class="divider"></div>
      <div class="completed-text">Telah berhasil menyelesaikan</div>
      <div class="course">${courseName}</div>
      <div class="seal">🎓</div>
      <div class="footer">
        <div class="footer-item">
          <div class="footer-label">Tanggal</div>
          <div class="footer-value">${dateStr}</div>
        </div>
        <div class="footer-item">
          <div class="footer-label">Platform</div>
          <div class="footer-value">StepByWeb</div>
        </div>
        <div class="footer-item">
          <div class="footer-label">ID Sertifikat</div>
          <div class="footer-value">${certId}</div>
        </div>
      </div>
    </div>
  </div>
  <script>window.onload = () => { window.print(); }<\/script>
</body>
</html>`);
          printWindow.document.close();
        };

        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="bg-[#0f172a] border border-slate-700 rounded-2xl p-8 max-w-xl w-full shadow-2xl">
              {/* Header */}
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">🎓</div>
                <h2 className="text-2xl font-bold text-white mb-1">Selamat, {recipientName}!</h2>
                <p className="text-slate-400 text-sm">Kamu telah menyelesaikan <span className="text-indigo-400 font-semibold">{courseName}</span></p>
              </div>

              {/* Certificate Preview */}
              <div className="relative rounded-xl overflow-hidden mb-6"
                style={{ background: 'linear-gradient(135deg, #0f0c29, #1a1a4e, #0f0c29)', padding: '32px 28px' }}>
                {/* Corner decorations */}
                {[['top-3 left-3','border-t-2 border-l-2'],['top-3 right-3','border-t-2 border-r-2'],['bottom-3 left-3','border-b-2 border-l-2'],['bottom-3 right-3','border-b-2 border-r-2']].map(([pos, border], i) => (
                  <div key={i} className={`absolute ${pos} w-6 h-6 ${border} border-indigo-500 rounded-sm`} />
                ))}
                <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(ellipse at 30% 50%, #4f46e5 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, #7c3aed 0%, transparent 60%)' }} />
                <div className="relative z-10 text-center">
                  <div className="text-xs tracking-widest text-indigo-300 uppercase mb-1">✦ StepByWeb ✦</div>
                  <div className="text-base font-bold text-white mb-3" style={{ fontFamily: 'Georgia, serif' }}>Certificate of Completion</div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest mb-1">Diberikan kepada</div>
                  <div className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Georgia, serif' }}>{recipientName}</div>
                  <div className="w-24 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mb-2" />
                  <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Telah menyelesaikan</div>
                  <div className="text-lg font-bold text-indigo-400 mb-3">{courseName}</div>
                  <div className="flex justify-between text-xs text-slate-500 pt-3 border-t border-white/10">
                    <span>{dateStr}</span>
                    <span>StepByWeb</span>
                    <span>{certId}</span>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <Button onClick={handleDownload} className="flex-1 bg-indigo-600 hover:bg-indigo-700 gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  Download Sertifikat
                </Button>
                <Button variant="outline" className="flex-1 border-slate-600 hover:bg-slate-800"
                  onClick={() => { setShowCertificate(false); navigate("/courses"); }}>
                  Kembali ke Belajar
                </Button>
              </div>
            </div>
          </div>
        );
      })()}
    </>
  );
}