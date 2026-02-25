import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Play, RotateCcw, Code, Monitor, Terminal, CheckCircle2, XCircle, Lightbulb, Clock, Flame, Star, Save, AlertCircle, Trophy, Sparkles } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Progress } from "../components/ui/progress";
import { notify } from "../components/Notifications";

type TaskState = "in-progress" | "success" | "fail";

export function ChallengeTask() {
  const [activeTab, setActiveTab] = useState<"instructions" | "criteria" | "hints">("instructions");
  const [editorTab, setEditorTab] = useState<"html" | "css" | "js">("html");
  const [previewTab, setPreviewTab] = useState<"preview" | "console" | "tests">("preview");
  const [taskState, setTaskState] = useState<TaskState>("in-progress");
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  
  const [htmlCode, setHtmlCode] = useState(`<div class="product-card">
  <img src="https://via.placeholder.com/300x200" alt="Produk" class="product-image">
  <div class="product-info">
    <h3 class="product-title">Wireless Headphones</h3>
    <p class="product-price">Rp 599.000</p>
    <button class="btn-buy">Beli Sekarang</button>
  </div>
</div>`);

  const [cssCode, setCssCode] = useState(`.product-card {
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  max-width: 420px;
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-info {
  padding: 20px;
}

.product-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
}

.product-price {
  color: #4F46E5;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
}

.btn-buy {
  background: #4F46E5;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

/* TODO: Add mobile responsive */`);

  const [testResults, setTestResults] = useState([
    { id: 1, label: "Ada elemen tombol .btn-buy", passed: true },
    { id: 2, label: "Gambar memiliki alt", passed: true },
    { id: 3, label: "Max-width card 420px", passed: true },
    { id: 4, label: "Breakpoint mobile membuat tombol full-width", passed: false },
    { id: 5, label: "Padding dan margin konsisten", passed: true },
  ]);

  const handleRunCode = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setPreviewTab("preview");
      notify.success("Code berhasil dijalankan!");
    }, 800);
  };

  const handleRunTests = () => {
    setPreviewTab("tests");
    notify.info("Menjalankan tes otomatis...");
  };

  const handleReset = () => {
    if (confirm("Reset semua perubahan?")) {
      notify.info("Code direset ke awal");
    }
  };

  const handleSubmit = () => {
    setShowSubmitModal(false);
    const allPassed = testResults.every(t => t.passed);
    if (allPassed) {
      setTaskState("success");
      notify.success("Challenge berhasil diselesaikan! +30 XP");
    } else {
      setTaskState("fail");
      notify.error("Masih ada kriteria yang belum terpenuhi");
    }
  };

  const handleUseHint = () => {
    setHintsUsed(hintsUsed + 1);
    notify.info("Hint dibuka! -5 XP");
  };

  const passedCount = testResults.filter(t => t.passed).length;
  const totalTests = testResults.length;

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] -m-4 md:-m-6 lg:-m-8">
      {/* Challenge Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1220] px-4 md:px-6 py-4 shrink-0">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-start gap-3">
            <Link to="/challenge">
              <Button variant="ghost" size="icon" className="shrink-0">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <h1 className="font-bold text-lg md:text-xl">Challenge Harian</h1>
                <Badge variant="outline" className="text-xs">
                  <Clock className="h-3 w-3 mr-1" />
                  Reset dalam 06:12:45
                </Badge>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Latihan singkat untuk menjaga konsistensi belajarmu
              </p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-2">
            <Badge variant="secondary" className="bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400">
              <Flame className="h-3 w-3 mr-1" />
              Streak: 7 hari
            </Badge>
            <Badge variant="secondary" className="bg-yellow-100 dark:bg-yellow-500/10 text-yellow-700 dark:text-yellow-400">
              <Star className="h-3 w-3 mr-1" />
              XP hari ini: 60
            </Badge>
          </div>
        </div>
        
        {/* Mobile chips */}
        <div className="flex md:hidden items-center gap-2 mb-3">
          <Badge variant="secondary" className="bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 text-xs">
            <Flame className="h-3 w-3 mr-1" />
            7 hari
          </Badge>
          <Badge variant="secondary" className="bg-yellow-100 dark:bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 text-xs">
            <Star className="h-3 w-3 mr-1" />
            60 XP
          </Badge>
        </div>

        {/* Task Info Card */}
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/50 dark:to-blue-950/30 border border-indigo-100 dark:border-indigo-900/50 rounded-xl p-4 md:p-5">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap mb-2">
                <Badge className="bg-[#4F46E5] hover:bg-[#4338ca]">HTML + CSS</Badge>
                <Badge variant="outline">Menengah</Badge>
                <span className="text-xs text-slate-600 dark:text-slate-400">⏱ 15 menit</span>
              </div>
              <h2 className="font-bold text-lg md:text-xl mb-2">Membuat Card Produk Responsif</h2>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Buat komponen kartu produk dengan gambar, judul, harga, tombol beli, dan responsif untuk mobile.
              </p>
              
              <div className="space-y-1.5">
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Aturan:</p>
                <div className="space-y-1">
                  <div className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 shrink-0 text-slate-400" />
                    <span>Gunakan flex atau grid untuk layout</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 shrink-0 text-slate-400" />
                    <span>Lebar kartu maksimal 420px</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 shrink-0 text-slate-400" />
                    <span>Pada mobile (&lt;480px), tombol memenuhi lebar (full-width)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 pt-3 border-t border-indigo-200/50 dark:border-indigo-800/30">
            <Button size="sm" className="bg-[#4F46E5] hover:bg-[#4338ca]">
              Mulai Kerjakan
            </Button>
            <Button size="sm" variant="outline">
              Lihat Contoh
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop: Three Panel Layout */}
      <div className="hidden lg:flex flex-1 overflow-hidden">
        {/* Left Panel - Instructions */}
        <div className="w-80 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0F172A] flex flex-col">
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)} className="flex-1 flex flex-col">
            <TabsList className="w-full rounded-none border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 justify-start px-4">
              <TabsTrigger value="instructions" className="text-xs">Instruksi</TabsTrigger>
              <TabsTrigger value="criteria" className="text-xs">Kriteria</TabsTrigger>
              <TabsTrigger value="hints" className="text-xs">Hint ({hintsUsed})</TabsTrigger>
            </TabsList>
            
            <div className="flex-1 overflow-y-auto">
              <TabsContent value="instructions" className="p-4 mt-0 space-y-3">
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm">Langkah-langkah:</h3>
                  <ol className="space-y-2 text-sm text-slate-600 dark:text-slate-400 list-decimal list-inside">
                    <li>Buat struktur HTML dengan class .product-card</li>
                    <li>Tambahkan gambar produk dengan alt text</li>
                    <li>Tambahkan judul, harga, dan tombol</li>
                    <li>Style dengan CSS menggunakan flexbox</li>
                    <li>Tambahkan responsive breakpoint di 480px</li>
                  </ol>
                </div>
              </TabsContent>
              
              <TabsContent value="criteria" className="p-4 mt-0 space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-sm">Progress Checklist</h3>
                    <span className="text-xs text-slate-500">{passedCount}/{totalTests}</span>
                  </div>
                  <Progress value={(passedCount / totalTests) * 100} className="h-2" />
                  
                  <div className="space-y-2 mt-4">
                    {testResults.map((test) => (
                      <div key={test.id} className="flex items-start gap-2 text-sm">
                        {test.passed ? (
                          <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                        ) : (
                          <XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                        )}
                        <span className={test.passed ? "text-slate-600 dark:text-slate-400" : "text-slate-900 dark:text-slate-200"}>
                          {test.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="hints" className="p-4 mt-0 space-y-3">
                <div className="space-y-3">
                  <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-lg p-3">
                    <div className="flex items-start gap-2 mb-2">
                      <Lightbulb className="h-4 w-4 text-amber-600 dark:text-amber-500 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-amber-900 dark:text-amber-400 mb-1">Hint 1: Mobile Responsive</p>
                        <p className="text-xs text-amber-800 dark:text-amber-500">
                          Gunakan media query @media (max-width: 480px) untuk membuat tombol full-width dengan width: 100%
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-slate-400" />
                        <span className="text-xs text-slate-600 dark:text-slate-400">Hint 2: Flexbox Layout</span>
                      </div>
                      <Button size="sm" variant="outline" onClick={handleUseHint} className="text-xs h-7">
                        Buka (-5 XP)
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>

        {/* Center Panel - Code Editor */}
        <div className="flex-1 flex flex-col bg-[#1E1E1E]">
          <div className="flex items-center justify-between border-b border-slate-700 bg-[#2D2D2D] px-4 py-2">
            <div className="flex items-center gap-1">
              <button
                onClick={() => setEditorTab("html")}
                className={`px-3 py-1.5 text-xs rounded transition-colors ${
                  editorTab === "html" ? "bg-[#1E1E1E] text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                index.html
              </button>
              <button
                onClick={() => setEditorTab("css")}
                className={`px-3 py-1.5 text-xs rounded transition-colors ${
                  editorTab === "css" ? "bg-[#1E1E1E] text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                style.css
              </button>
              <button
                onClick={() => setEditorTab("js")}
                className={`px-3 py-1.5 text-xs rounded transition-colors opacity-50 cursor-not-allowed ${
                  editorTab === "js" ? "bg-[#1E1E1E] text-white" : "text-slate-400"
                }`}
                disabled
              >
                app.js
              </button>
            </div>
            
            <div className="flex items-center gap-2">
              <Button size="sm" variant="ghost" onClick={handleReset} className="text-slate-400 hover:text-white h-8 text-xs">
                <RotateCcw className="h-3.5 w-3.5 mr-1.5" />
                Reset
              </Button>
              <Button size="sm" onClick={handleRunCode} disabled={isRunning} className="bg-[#22C55E] hover:bg-green-600 h-8 text-xs">
                <Play className="h-3.5 w-3.5 mr-1.5 fill-current" />
                {isRunning ? "Running..." : "Run"}
              </Button>
            </div>
          </div>
          
          <div className="flex-1 relative overflow-hidden">
            {editorTab === "html" && (
              <div className="absolute inset-0 flex">
                <div className="w-12 bg-[#1E1E1E] border-r border-slate-700 flex flex-col items-end py-3 pr-2 text-slate-600 font-mono text-xs select-none overflow-y-auto">
                  {htmlCode.split('\n').map((_, i) => <div key={i} className="leading-6">{i + 1}</div>)}
                </div>
                <textarea
                  className="flex-1 bg-[#1E1E1E] text-slate-300 font-mono text-sm p-4 resize-none focus:outline-none leading-6"
                  value={htmlCode}
                  onChange={(e) => setHtmlCode(e.target.value)}
                  spellCheck={false}
                />
              </div>
            )}
            
            {editorTab === "css" && (
              <div className="absolute inset-0 flex">
                <div className="w-12 bg-[#1E1E1E] border-r border-slate-700 flex flex-col items-end py-3 pr-2 text-slate-600 font-mono text-xs select-none overflow-y-auto">
                  {cssCode.split('\n').map((_, i) => <div key={i} className="leading-6">{i + 1}</div>)}
                </div>
                <textarea
                  className="flex-1 bg-[#1E1E1E] text-slate-300 font-mono text-sm p-4 resize-none focus:outline-none leading-6"
                  value={cssCode}
                  onChange={(e) => setCssCode(e.target.value)}
                  spellCheck={false}
                />
              </div>
            )}
          </div>
        </div>

        {/* Right Panel - Preview/Console/Tests */}
        <div className="w-96 border-l border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1220] flex flex-col">
          <Tabs value={previewTab} onValueChange={(v) => setPreviewTab(v as any)} className="flex-1 flex flex-col">
            <TabsList className="w-full rounded-none border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 justify-start px-4">
              <TabsTrigger value="preview" className="text-xs">
                <Monitor className="h-3 w-3 mr-1.5" />
                Preview
              </TabsTrigger>
              <TabsTrigger value="console" className="text-xs">
                <Terminal className="h-3 w-3 mr-1.5" />
                Console
              </TabsTrigger>
              <TabsTrigger value="tests" className="text-xs">
                <CheckCircle2 className="h-3 w-3 mr-1.5" />
                Tes
              </TabsTrigger>
            </TabsList>
            
            <div className="flex-1 overflow-y-auto">
              <TabsContent value="preview" className="p-6 mt-0 h-full">
                <div className="flex items-center justify-center h-full">
                  <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden max-w-[420px] bg-white dark:bg-slate-900">
                    <img 
                      src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=250&fit=crop" 
                      alt="Produk" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-5">
                      <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Wireless Headphones</h3>
                      <p className="text-[#4F46E5] font-bold text-xl mb-4">Rp 599.000</p>
                      <button className="bg-[#4F46E5] text-white px-6 py-3 rounded-lg w-full hover:bg-[#4338ca] transition-colors">
                        Beli Sekarang
                      </button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="console" className="p-4 mt-0 font-mono text-xs">
                <div className="text-slate-600 dark:text-slate-400">
                  <div className="text-green-500">&gt; Code executed successfully</div>
                  <div className="mt-2 text-slate-500">No errors or warnings</div>
                </div>
              </TabsContent>
              
              <TabsContent value="tests" className="p-4 mt-0 space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-sm">Hasil Test Otomatis</h3>
                    <Button size="sm" onClick={handleRunTests} className="text-xs h-7">
                      Jalankan Tes
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    {testResults.map((test) => (
                      <div 
                        key={test.id} 
                        className={`flex items-start gap-2 p-3 rounded-lg border text-sm ${
                          test.passed 
                            ? "bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-900/50" 
                            : "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900/50"
                        }`}
                      >
                        {test.passed ? (
                          <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-500 mt-0.5 shrink-0" />
                        ) : (
                          <XCircle className="h-4 w-4 text-red-600 dark:text-red-500 mt-0.5 shrink-0" />
                        )}
                        <span className={test.passed ? "text-green-800 dark:text-green-300" : "text-red-800 dark:text-red-300"}>
                          {test.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 text-xs text-slate-500">
                    Terakhir dijalankan: 2 menit yang lalu
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>

      {/* Mobile/Tablet: Tabbed Layout */}
      <div className="lg:hidden flex-1 flex flex-col overflow-hidden">
        <Tabs defaultValue="editor" className="flex-1 flex flex-col">
          <TabsList className="w-full rounded-none border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1220] justify-start px-4">
            <TabsTrigger value="instructions" className="text-xs">
              <Code className="h-3 w-3 mr-1.5" />
              Instruksi
            </TabsTrigger>
            <TabsTrigger value="editor" className="text-xs">
              <Code className="h-3 w-3 mr-1.5" />
              Editor
            </TabsTrigger>
            <TabsTrigger value="output" className="text-xs">
              <Monitor className="h-3 w-3 mr-1.5" />
              Output
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="instructions" className="flex-1 overflow-y-auto p-4 mt-0">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-sm mb-2">Langkah-langkah:</h3>
                <ol className="space-y-2 text-sm text-slate-600 dark:text-slate-400 list-decimal list-inside">
                  <li>Buat struktur HTML dengan class .product-card</li>
                  <li>Tambahkan gambar produk dengan alt text</li>
                  <li>Tambahkan judul, harga, dan tombol</li>
                  <li>Style dengan CSS menggunakan flexbox</li>
                  <li>Tambahkan responsive breakpoint di 480px</li>
                </ol>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-sm">Progress Checklist</h3>
                  <span className="text-xs text-slate-500">{passedCount}/{totalTests}</span>
                </div>
                <Progress value={(passedCount / totalTests) * 100} className="h-2 mb-3" />
                
                <div className="space-y-2">
                  {testResults.map((test) => (
                    <div key={test.id} className="flex items-start gap-2 text-sm">
                      {test.passed ? (
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      ) : (
                        <XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                      )}
                      <span className={test.passed ? "text-slate-600 dark:text-slate-400" : "text-slate-900 dark:text-slate-200"}>
                        {test.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="editor" className="flex-1 flex flex-col mt-0 bg-[#1E1E1E]">
            <div className="flex items-center justify-between border-b border-slate-700 bg-[#2D2D2D] px-4 py-2">
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setEditorTab("html")}
                  className={`px-2.5 py-1 text-xs rounded ${
                    editorTab === "html" ? "bg-[#1E1E1E] text-white" : "text-slate-400"
                  }`}
                >
                  HTML
                </button>
                <button
                  onClick={() => setEditorTab("css")}
                  className={`px-2.5 py-1 text-xs rounded ${
                    editorTab === "css" ? "bg-[#1E1E1E] text-white" : "text-slate-400"
                  }`}
                >
                  CSS
                </button>
              </div>
              
              <Button size="sm" onClick={handleRunCode} disabled={isRunning} className="bg-[#22C55E] hover:bg-green-600 h-7 text-xs">
                <Play className="h-3 w-3 mr-1 fill-current" />
                Run
              </Button>
            </div>
            
            <div className="flex-1 overflow-auto">
              <textarea
                className="w-full h-full bg-[#1E1E1E] text-slate-300 font-mono text-sm p-4 resize-none focus:outline-none"
                value={editorTab === "html" ? htmlCode : cssCode}
                onChange={(e) => editorTab === "html" ? setHtmlCode(e.target.value) : setCssCode(e.target.value)}
                spellCheck={false}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="output" className="flex-1 overflow-y-auto p-4 mt-0 bg-slate-50 dark:bg-[#0B1220]">
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4">
                <h3 className="font-semibold text-sm mb-3">Preview</h3>
                <div className="flex justify-center">
                  <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden max-w-full bg-white dark:bg-slate-900">
                    <img 
                      src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=250&fit=crop" 
                      alt="Produk" 
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-bold text-base mb-1 text-slate-900 dark:text-white">Wireless Headphones</h3>
                      <p className="text-[#4F46E5] font-bold text-lg mb-3">Rp 599.000</p>
                      <button className="bg-[#4F46E5] text-white px-4 py-2 rounded-lg w-full text-sm">
                        Beli Sekarang
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-sm">Test Results</h3>
                  <Button size="sm" onClick={handleRunTests} className="text-xs h-7">
                    Run Tests
                  </Button>
                </div>
                <div className="space-y-2">
                  {testResults.map((test) => (
                    <div key={test.id} className="flex items-start gap-2 text-sm">
                      {test.passed ? (
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      ) : (
                        <XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                      )}
                      <span className={test.passed ? "text-slate-600 dark:text-slate-400" : "text-slate-900 dark:text-slate-200"}>
                        {test.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Sticky Footer - Submission */}
      <div className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1220] px-4 py-3 shrink-0">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Save className="h-3 w-3" />
            <span className="hidden sm:inline">Autosave aktif • terakhir tersimpan 10 detik lalu</span>
            <span className="sm:hidden">Tersimpan</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline" onClick={handleReset} className="hidden sm:flex text-xs">
              Reset
            </Button>
            <Button size="sm" onClick={() => setShowSubmitModal(true)} className="bg-[#4F46E5] hover:bg-[#4338ca] text-xs">
              Kumpulkan
            </Button>
          </div>
        </div>
      </div>

      {/* Submit Confirmation Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-slate-900 rounded-xl max-w-md w-full p-6">
            <h3 className="font-bold text-lg mb-2">Kumpulkan jawaban?</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
              Pastikan kamu sudah menjalankan tes. Kamu masih punya 1 kesempatan revisi.
            </p>
            <div className="flex items-center gap-3 justify-end">
              <Button variant="outline" onClick={() => setShowSubmitModal(false)}>
                Batal
              </Button>
              <Button onClick={handleSubmit} className="bg-[#4F46E5] hover:bg-[#4338ca]">
                Kumpulkan Sekarang
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Success State Overlay */}
      {taskState === "success" && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-slate-900 rounded-xl max-w-md w-full p-6 text-center">
            <div className="relative mb-4">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
                <Trophy className="h-8 w-8 text-green-600 dark:text-green-500" />
              </div>
              <Sparkles className="h-5 w-5 text-yellow-500 absolute top-0 right-1/3 animate-pulse" />
            </div>
            
            <h3 className="font-bold text-xl mb-2">Berhasil! ✅</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Challenge selesai dengan sempurna!
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-900/50 rounded-lg p-3">
                <div className="flex items-center justify-center gap-2">
                  <Star className="h-5 w-5 text-yellow-600 dark:text-yellow-500" />
                  <span className="font-bold text-yellow-900 dark:text-yellow-400">+30 XP</span>
                </div>
              </div>
              
              <div className="bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-900/50 rounded-lg p-3">
                <div className="flex items-center justify-center gap-2">
                  <Flame className="h-5 w-5 text-orange-600 dark:text-orange-500" />
                  <span className="font-semibold text-orange-900 dark:text-orange-400">Streak bertambah: 8 hari 🔥</span>
                </div>
              </div>
              
              <div className="text-xs text-slate-600 dark:text-slate-400">
                <div className="mb-1">Menuju badge: 10 Hari Streak</div>
                <Progress value={80} className="h-2" />
                <div className="text-right mt-1">80%</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="outline" onClick={() => setTaskState("in-progress")} className="flex-1">
                Lihat Pencapaian
              </Button>
              <Link to="/courses" className="flex-1">
                <Button className="w-full bg-[#4F46E5] hover:bg-[#4338ca]">
                  Lanjut Materi
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Fail State Overlay */}
      {taskState === "fail" && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-slate-900 rounded-xl max-w-md w-full p-6">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <XCircle className="h-8 w-8 text-red-600 dark:text-red-500" />
            </div>
            
            <h3 className="font-bold text-xl mb-2 text-center">Belum Tepat ❌</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 text-center">
              Masih ada beberapa kriteria yang belum terpenuhi
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <Lightbulb className="h-4 w-4 text-amber-600 dark:text-amber-500 mt-0.5 shrink-0" />
                  <div className="text-xs text-amber-900 dark:text-amber-400">
                    <div className="font-semibold mb-1">Hint:</div>
                    <div>Periksa media query untuk breakpoint mobile. Pastikan tombol menggunakan width: 100% di layar kecil.</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-500 mt-0.5 shrink-0" />
                  <div className="text-xs text-blue-900 dark:text-blue-400">
                    <div className="font-semibold mb-1">Saran:</div>
                    <div>Jalankan tes untuk melihat detail kriteria yang belum terpenuhi.</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="outline" onClick={() => setTaskState("in-progress")} className="flex-1">
                Batal
              </Button>
              <Button onClick={() => setTaskState("in-progress")} className="flex-1 bg-[#4F46E5] hover:bg-[#4338ca]">
                Coba Lagi
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
