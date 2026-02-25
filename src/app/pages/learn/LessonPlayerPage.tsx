import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Play, RotateCcw, Save, CheckCircle2, Code2, BookOpen } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "sonner"

export function LessonPlayerPage() {
  const [code, setCode] = useState(`<!DOCTYPE html>
<html>
<head>
  <title>My First Page</title>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    h1 { color: blue; }
  </style>
</head>
<body>
  <h1>Hello World!</h1>
  <p>Selamat datang di StepByWeb.</p>
</body>
</html>`)

  const runCode = () => {
    toast.success("Kode berhasil dijalankan!")
    // In a real app, this would update the iframe
  }

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Lesson Header */}
      <header className="h-14 border-b flex items-center justify-between px-4 bg-background shrink-0 z-10">
        <div className="flex items-center gap-4">
          <Link to="/learn">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div className="flex flex-col">
            <h1 className="text-sm font-semibold">1. Pengenalan HTML</h1>
            <span className="text-xs text-muted-foreground">HTML Basic &bull; 10 min</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => toast("Progress tersimpan")}>
            <Save className="mr-2 h-3 w-3" /> Simpan
          </Button>
          <Button size="sm" className="bg-green-600 hover:bg-green-700">
            Selesai <CheckCircle2 className="ml-2 h-3 w-3" />
          </Button>
        </div>
      </header>

      {/* Main Content - Split View */}
      <ResizablePanelGroup direction="horizontal" className="flex-1">
        {/* Left: Content */}
        <ResizablePanel defaultSize={40} minSize={30}>
          <ScrollArea className="h-full">
            <div className="p-6 space-y-6 max-w-3xl mx-auto">
              <div>
                <Badge className="mb-2">Materi</Badge>
                <h2 className="text-2xl font-bold mb-4">Apa itu HTML?</h2>
                <p className="leading-relaxed text-muted-foreground">
                  HTML (HyperText Markup Language) adalah bahasa standar yang digunakan untuk membuat halaman web. HTML bukanlah bahasa pemrograman, melainkan bahasa markup yang memberitahu browser bagaimana struktur konten Anda harus ditampilkan.
                </p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg border">
                <h3 className="font-semibold mb-2">Struktur Dasar HTML</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Setiap dokumen HTML memiliki struktur dasar sebagai berikut:
                </p>
                <pre className="bg-slate-950 text-slate-50 p-3 rounded-md text-sm font-mono overflow-x-auto">
                  {`<!DOCTYPE html>
<html>
  <head>
    <title>Judul Halaman</title>
  </head>
  <body>
    <h1>Ini Judul Utama</h1>
    <p>Ini adalah paragraf.</p>
  </body>
</html>`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Tag dan Elemen</h3>
                <p className="leading-relaxed text-muted-foreground">
                  HTML menggunakan "tag" untuk menandai elemen. Tag biasanya berpasangan, ada tag pembuka <code>{`<h1>`}</code> dan tag penutup <code>{`</h1>`}</code>.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-4">Kuis Kilat</h3>
                <div className="space-y-3">
                  <p className="font-medium text-sm">Manakah tag yang benar untuk membuat judul paling besar?</p>
                  <div className="grid gap-2">
                    {["<heading>", "<h1>", "<head>", "<h6>"].map((opt) => (
                      <Button key={opt} variant="outline" className="justify-start font-mono text-xs">
                        {opt}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
        </ResizablePanel>
        
        <ResizableHandle />

        {/* Right: Code Playground */}
        <ResizablePanel defaultSize={60}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={60}>
              <div className="h-full flex flex-col">
                <div className="h-10 border-b flex items-center justify-between px-4 bg-muted/20">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Code2 className="h-4 w-4" /> index.html
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setCode("")}>
                      <RotateCcw className="h-3 w-3" />
                    </Button>
                    <Button size="sm" onClick={runCode}>
                      <Play className="mr-2 h-3 w-3" /> Run
                    </Button>
                  </div>
                </div>
                <div className="flex-1 bg-slate-950 text-slate-50 font-mono text-sm p-4 outline-none resize-none">
                  <textarea 
                    className="w-full h-full bg-transparent outline-none resize-none"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    spellCheck={false}
                  />
                </div>
              </div>
            </ResizablePanel>
            
            <ResizableHandle />
            
            <ResizablePanel defaultSize={40}>
              <div className="h-full flex flex-col bg-white">
                <div className="h-10 border-b flex items-center px-4 bg-muted/20 text-sm font-medium">
                  Output
                </div>
                <div className="flex-1 p-4">
                  <iframe 
                    srcDoc={code} 
                    className="w-full h-full border-0"
                    title="preview"
                  />
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
