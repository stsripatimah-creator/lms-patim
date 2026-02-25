import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Clock, Award, CheckCircle2, Play, Lock } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"

const tracks = [
  { id: "html", name: "HTML 5", color: "text-orange-500", bg: "bg-orange-500" },
  { id: "css", name: "CSS 3", color: "text-blue-500", bg: "bg-blue-500" },
  { id: "js", name: "JavaScript", color: "text-yellow-500", bg: "bg-yellow-500" },
]

const lessons = [
  { id: 1, title: "Pengenalan HTML", desc: "Dasar-dasar struktur halaman web.", track: "html", level: "Basic", duration: "10 min", xp: 20, completed: true },
  { id: 2, title: "HTML Forms", desc: "Membuat formulir interaktif.", track: "html", level: "Intermediate", duration: "25 min", xp: 40, completed: false },
  { id: 3, title: "CSS Selectors", desc: "Memilih elemen untuk di-style.", track: "css", level: "Basic", duration: "15 min", xp: 30, completed: false },
  { id: 4, title: "Flexbox Layout", desc: "Layout modern dengan Flexbox.", track: "css", level: "Intermediate", duration: "30 min", xp: 50, completed: false },
  { id: 5, title: "JS Variables", desc: "Menyimpan data di JavaScript.", track: "js", level: "Basic", duration: "20 min", xp: 35, completed: false },
  { id: 6, title: "DOM Manipulation", desc: "Mengubah elemen HTML dengan JS.", track: "js", level: "Advanced", duration: "45 min", xp: 80, completed: false },
]

export function CourseCatalogPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [search, setSearch] = useState("")

  const filteredLessons = lessons.filter(l => 
    (activeTab === "all" || l.track === activeTab) &&
    l.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Katalog Belajar</h1>
          <p className="text-muted-foreground">Pilih jalur belajar yang kamu minati.</p>
        </div>
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Cari pelajaran..." 
            className="pl-8 w-full md:w-[250px]" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Tracks Overview */}
      <div className="grid gap-4 md:grid-cols-3">
        {tracks.map((track) => (
          <Card key={track.id} className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setActiveTab(track.id)}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Track {track.name}</CardTitle>
              <div className={`h-4 w-4 rounded-full ${track.bg}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12 Modul</div>
              <p className="text-xs text-muted-foreground">4 Basic, 4 Intermediate, 4 Advanced</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">Semua</TabsTrigger>
          <TabsTrigger value="html">HTML</TabsTrigger>
          <TabsTrigger value="css">CSS</TabsTrigger>
          <TabsTrigger value="js">JavaScript</TabsTrigger>
        </TabsList>
        
        <TabsContent value={activeTab} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredLessons.map((lesson) => (
              <Card key={lesson.id} className={`flex flex-col ${lesson.completed ? "border-green-200 bg-green-50/30" : ""}`}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge variant={lesson.level === "Basic" ? "secondary" : "outline"} className="mb-2">
                      {lesson.level}
                    </Badge>
                    {lesson.completed && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                  </div>
                  <CardTitle className="line-clamp-1">{lesson.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{lesson.desc}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {lesson.duration}</span>
                    <span className="flex items-center gap-1"><Award className="h-3 w-3" /> {lesson.xp} XP</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link to={`/learn/${lesson.id}`} className="w-full">
                    <Button className="w-full" variant={lesson.completed ? "outline" : "default"}>
                      {lesson.completed ? "Ulangi Materi" : "Mulai Belajar"} <Play className="ml-2 h-3 w-3" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
