import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronRight, CheckCircle, Save, Code, Monitor, ChevronDown, BookmarkPlus, RefreshCw, Play } from "lucide-react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { CodeEditor } from "../components/CodeEditor";
import { notify } from "../components/Notifications";
import { LESSON_MOCK } from "../data/mock";

export function CourseDetail() {
  const [code, setCode] = useState(LESSON_MOCK.defaultCode);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [activeTab, setActiveTab] = useState("editor");

  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => {
        setOutput("Output generated successfully!\n\n> Hello World\n> Selamat datang di StepByWeb!");
        setIsRunning(false);
        setActiveTab("output");
        notify.success("Code ran successfully!");
    }, 1000);
  };

  const handleSave = () => {
    notify.success("Progress tersimpan");
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] -m-4 md:-m-6 lg:-m-8">
      {/* Lesson Header */}
      <div className="flex items-center justify-between border-b border-slate-800 bg-[#0B1220] px-4 py-3 shrink-0">
        <div className="flex items-center gap-4">
            <Link to="/courses">
                <Button variant="ghost" size="icon"><ArrowLeft className="h-5 w-5" /></Button>
            </Link>
            <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-0.5">
                    <span>{LESSON_MOCK.track}</span>
                    <ChevronRight className="h-3 w-3" />
                    <span>{LESSON_MOCK.level}</span>
                </div>
                <h1 className="font-bold text-lg leading-none">{LESSON_MOCK.title}</h1>
            </div>
        </div>
        <div className="flex items-center gap-2">
            <Button variant="ghost" onClick={handleSave} className="hidden sm:flex"><Save className="mr-2 h-4 w-4" /> Simpan</Button>
            <Button onClick={() => notify.success("Marked as completed!")} className="bg-green-600 hover:bg-green-700 text-white">
                <CheckCircle className="mr-2 h-4 w-4" /> Selesai
            </Button>
        </div>
      </div>

      {/* Main Split Layout */}
      <div className="flex-1 overflow-hidden">
        <PanelGroup direction="horizontal">
            
            {/* 1. Lesson Navigation (Left) */}
            <Panel defaultSize={20} minSize={15} maxSize={30} className="hidden md:flex flex-col border-r border-slate-800 bg-[#0F172A]">
                <div className="p-4 border-b border-slate-800 font-semibold text-sm">
                    Course Content
                </div>
                <div className="flex-1 overflow-y-auto">
                    {[1, 2, 3].map((module) => (
                        <div key={module} className="border-b border-slate-800/50">
                            <div className="flex items-center justify-between p-3 bg-slate-800/30 text-xs font-bold text-slate-400">
                                <span>MODULE {module}</span>
                                <ChevronDown className="h-3 w-3" />
                            </div>
                            <div>
                                {[1, 2, 3, 4].map((lesson) => (
                                    <button 
                                        key={lesson} 
                                        className={`w-full text-left flex items-start gap-3 p-3 hover:bg-slate-800 transition-colors text-sm ${module === 1 && lesson === 1 ? 'bg-[#4F46E5]/10 border-r-2 border-[#4F46E5]' : ''}`}
                                    >
                                        <div className={`mt-0.5 h-4 w-4 rounded-full border flex items-center justify-center shrink-0 ${module === 1 && lesson === 1 ? 'border-[#4F46E5] text-[#4F46E5]' : 'border-slate-600 text-transparent'}`}>
                                            <div className="h-1.5 w-1.5 rounded-full bg-current" />
                                        </div>
                                        <div className={module === 1 && lesson === 1 ? 'text-white font-medium' : 'text-slate-400'}>
                                            Introduction to HTML {module}.{lesson}
                                            <div className="text-[10px] text-slate-500 font-normal mt-0.5">10 min</div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Panel>
            
            <PanelResizeHandle className="w-1 bg-slate-900 hover:bg-[#4F46E5] transition-colors cursor-col-resize hidden md:block" />

            {/* 2. Lesson Content (Center) */}
            <Panel defaultSize={40} minSize={30} className="flex flex-col border-r border-slate-800 bg-[#0B1220]">
                <div className="flex-1 overflow-y-auto p-6 custom-prose text-slate-300">
                    <div className="mb-6 flex items-center gap-2">
                        <span className="bg-[#4F46E5]/10 text-[#4F46E5] text-xs px-2 py-1 rounded border border-[#4F46E5]/20">Video & Text</span>
                        <span className="text-slate-500 text-xs">Updated 2 days ago</span>
                    </div>
                    
                     {/* Using dangerouslySetInnerHTML for mock content */}
                    <div dangerouslySetInnerHTML={{ __html: LESSON_MOCK.content }} className="prose prose-invert max-w-none prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-800 prose-headings:text-white prose-p:text-slate-300 prose-strong:text-white" />
                    
                    {/* Quiz Section */}
                    <div className="mt-12 p-6 rounded-xl border border-slate-700 bg-slate-900/50">
                        <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                            <div className="h-6 w-6 rounded bg-orange-500/20 text-orange-500 flex items-center justify-center text-xs">?</div>
                            Quick Quiz
                        </h3>
                        <p className="mb-4 text-sm">{LESSON_MOCK.quiz[0].question}</p>
                        <div className="space-y-2">
                            {LESSON_MOCK.quiz[0].options.map((opt, i) => (
                                <button key={i} className="w-full text-left p-3 rounded-lg border border-slate-700 hover:bg-slate-800 hover:border-[#4F46E5] transition-all text-sm group">
                                    <span className="mr-2 inline-block h-4 w-4 rounded-full border border-slate-600 group-hover:border-[#4F46E5]"></span>
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Navigation Footer */}
                <div className="p-4 border-t border-slate-800 flex justify-between bg-[#0B1220]">
                    <Button variant="outline" className="border-slate-700 hover:bg-slate-800 text-slate-300">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Sebelumnya
                    </Button>
                    <Button className="bg-[#4F46E5] hover:bg-[#4338ca] text-white">
                        Selanjutnya <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </Panel>
            
            <PanelResizeHandle className="w-1 bg-slate-900 hover:bg-[#4F46E5] transition-colors cursor-col-resize" />
            
            {/* 3. Editor (Right) */}
            <Panel defaultSize={40} minSize={20} className="flex flex-col bg-[#1E1E1E]">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
                    <div className="flex items-center justify-between border-b border-slate-800 bg-[#1E1E1E] px-4 py-2 shrink-0">
                        <TabsList className="bg-slate-800 h-8">
                            <TabsTrigger value="editor" className="text-xs h-7 data-[state=active]:bg-[#2e2e2e] data-[state=active]:text-white"><Code className="mr-2 h-3 w-3" /> Editor</TabsTrigger>
                            <TabsTrigger value="output" className="text-xs h-7 data-[state=active]:bg-[#2e2e2e] data-[state=active]:text-white"><Monitor className="mr-2 h-3 w-3" /> Output</TabsTrigger>
                        </TabsList>
                        <div className="flex items-center gap-2">
                             <Button size="sm" variant="ghost" onClick={() => setCode(LESSON_MOCK.defaultCode)} title="Reset" className="text-slate-400 hover:text-white">
                                <RefreshCw className="h-4 w-4" />
                            </Button>
                             <Button size="sm" onClick={handleRun} disabled={isRunning} className="bg-[#22C55E] hover:bg-green-600 text-white h-8 text-xs px-3">
                                <Play className="mr-1.5 h-3 w-3 fill-current" /> {isRunning ? 'Running...' : 'Run'}
                            </Button>
                        </div>
                    </div>
                    
                    <div className="flex-1 relative">
                        <TabsContent value="editor" className="absolute inset-0 m-0 p-0 border-none outline-none">
                            <div className="absolute inset-0 flex">
                                <div className="w-10 bg-[#1E1E1E] border-r border-slate-800 flex flex-col items-end py-4 pr-2 text-slate-600 font-mono text-sm select-none">
                                    {code.split('\n').map((_, i) => <div key={i}>{i + 1}</div>)}
                                </div>
                                <textarea 
                                    className="flex-1 h-full bg-[#1E1E1E] text-slate-300 font-mono text-sm p-4 resize-none focus:outline-none leading-6"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                    spellCheck={false}
                                />
                            </div>
                        </TabsContent>
                        <TabsContent value="output" className="absolute inset-0 m-0 p-0 border-none outline-none bg-[#111]">
                             <div className="w-full h-full p-4 font-mono text-sm text-green-400">
                                {output ? <pre>{output}</pre> : <div className="text-slate-500 italic flex flex-col items-center justify-center h-full gap-2"><PlayCircle className="h-8 w-8 opacity-50" /> Klik Run untuk melihat hasil</div>}
                             </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </Panel>
        </PanelGroup>
      </div>
    </div>
  );
}

function PlayCircle(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" />
    </svg>
  )
}