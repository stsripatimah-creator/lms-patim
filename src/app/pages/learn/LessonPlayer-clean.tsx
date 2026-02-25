import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { 
  ChevronLeft, ChevronRight, CheckCircle, Lock, 
  PlayCircle, RotateCcw, Code2, Eye, Terminal, 
  FlaskConical, Maximize2, Minimize2, Moon, Sun,
  Save, CheckCheck, Menu, X, Clock, Award
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Progress } from "../../components/ui/progress";
import { cn } from "../../lib/utils";
import { HTML_LESSONS, LESSON_NAV_DATA as NAV_DATA } from "../../data/lessons";

// Use imported lessons
const LESSON_DATA: Record<string, any> = HTML_LESSONS;

// Use imported navigation data
const LESSON_NAV_DATA = NAV_DATA;

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

  const trackId = lesson.track.toLowerCase();
  const navLessons = (LESSON_NAV_DATA[trackId as keyof typeof LESSON_NAV_DATA] || []).map(nav => ({
    ...nav,
    current: nav.id === lessonId
  }));

  // Run code
  const handleRun = () => {
    setIsRunning(true);
    setConsoleOutput([]);
    
    // Simulate console logs
    setTimeout(() => {
      setConsoleOutput([
        '> App loaded successfully! ✓',
        '> Event listener attached',
        '> Ready to interact'
      ]);
      setIsRunning(false);
    }, 800);
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

  return (
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
              <Progress value={35} className="h-1.5" />
              <p className="text-xs text-slate-500 mt-1">35% Selesai</p>
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
                  <TabsTrigger value="test" className="gap-2">
                    <FlaskConical className="h-4 w-4" />
                    Tes
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
                
                <TabsContent value="test" className="flex-1 m-0 p-4 overflow-auto">
                  <div className="space-y-2">
                    {lesson.tests.map((test: any) => (
                      <div
                        key={test.id}
                        className={cn(
                          "flex items-center gap-2 p-3 rounded-lg",
                          test.passed
                            ? "bg-green-500/10 text-green-500"
                            : "bg-red-500/10 text-red-500"
                        )}
                      >
                        {test.passed ? (
                          <CheckCircle className="h-4 w-4 shrink-0" />
                        ) : (
                          <X className="h-4 w-4 shrink-0" />
                        )}
                        <span className="text-sm">{test.description}</span>
                      </div>
                    ))}
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
                <TabsTrigger value="test">Tes</TabsTrigger>
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
              
              <TabsContent value="test" className="flex-1 m-0 p-4">
                <div className="space-y-2">
                  {lesson.tests.map((test: any) => (
                    <div
                      key={test.id}
                      className={cn(
                        "flex items-center gap-2 p-3 rounded-lg text-sm",
                        test.passed ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                      )}
                    >
                      {test.passed ? <CheckCircle className="h-4 w-4" /> : <X className="h-4 w-4" />}
                      {test.description}
                    </div>
                  ))}
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
        <Button variant="outline" size="sm">
          <ChevronLeft className="h-4 w-4 mr-2" />
          Sebelumnya
        </Button>
        
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 text-sm">
            <Award className="h-4 w-4 text-yellow-500" />
            <span className="text-slate-500">Selesai =</span>
            <span className="font-bold text-[#22C55E]">+{lesson.xp} XP</span>
          </div>
          <Button size="sm" variant="outline">
            Tandai Selesai
          </Button>
          <Button size="sm" className="bg-[#4F46E5] hover:bg-[#4338ca]">
            Selanjutnya
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
