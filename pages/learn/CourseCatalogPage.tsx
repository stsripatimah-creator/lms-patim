import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Search, Clock, Award, CheckCircle2, Play } from "lucide-react"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useAuth } from "../../../context/AuthContext"
import { supabase } from "../../../lib/supabase"
import { useTranslation } from "react-i18next"

const tracks = [
  { id: "html", name: "HTML 5", color: "text-orange-500", bg: "bg-orange-500", total: 12 },
  { id: "css", name: "CSS 3", color: "text-blue-500", bg: "bg-blue-500", total: 12 },
  { id: "js", name: "JavaScript", color: "text-yellow-500", bg: "bg-yellow-500", total: 12 },
]

const lessons = [
  { id: "html-1", title: "Pengenalan HTML", desc: "Dasar-dasar struktur halaman web.", track: "html", level: "Basic", duration: "10 min", xp: 20 },
  { id: "html-2", title: "Teks, Link, dan Gambar", desc: "Membuat konten dengan tag HTML.", track: "html", level: "Basic", duration: "12 min", xp: 20 },
  { id: "html-3", title: "List & Tabel", desc: "Menampilkan data terstruktur.", track: "html", level: "Basic", duration: "15 min", xp: 25 },
  { id: "html-4", title: "Form Dasar", desc: "Membuat formulir interaktif.", track: "html", level: "Intermediate", duration: "25 min", xp: 40 },
  { id: "css-1", title: "CSS Selectors", desc: "Memilih elemen untuk di-style.", track: "css", level: "Basic", duration: "15 min", xp: 30 },
  { id: "css-2", title: "Flexbox Layout", desc: "Layout modern dengan Flexbox.", track: "css", level: "Intermediate", duration: "30 min", xp: 50 },
  { id: "js-1", title: "JS Variables", desc: "Menyimpan data di JavaScript.", track: "js", level: "Basic", duration: "20 min", xp: 35 },
  { id: "js-2", title: "DOM Manipulation", desc: "Mengubah elemen HTML dengan JS.", track: "js", level: "Advanced", duration: "45 min", xp: 80 },
]

export function CourseCatalogPage() {
  const { user } = useAuth()
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState("all")
  const [search, setSearch] = useState("")
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set())
  const [trackCompletedCount, setTrackCompletedCount] = useState<Record<string, number>>({})
  const [loading, setLoading] = useState(true)
  const [levelFilter, setLevelFilter] = useState("Semua")

  useEffect(() => {
    if (!user) return
    fetchProgress()
  }, [user])

  const fetchProgress = async () => {
    if (!user) return
    setLoading(true)
    try {
      const { data } = await supabase
        .from('user_progress')
        .select('lesson_id, track')
        .eq('user_id', user.id)
        .eq('completed', true)
      if (data) {
        const ids = new Set(data.map((d) => d.lesson_id))
        setCompletedIds(ids)
        const counts: Record<string, number> = {}
        data.forEach((d) => { counts[d.track] = (counts[d.track] || 0) + 1 })
        setTrackCompletedCount(counts)
      }
    } catch (err) {
      console.error('Error fetching progress:', err)
    } finally {
      setLoading(false)
    }
  }

  const filteredLessons = lessons.filter(l =>
    (activeTab === "all" || l.track === activeTab) &&
    (levelFilter === "Semua" || l.level === levelFilter) &&
    l.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{t('courses.catalog')}</h1>
          <p className="text-muted-foreground">{t('courses.catalogDesc')}</p>
        </div>
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={t('courses.searchLesson')}
            className="pl-8 w-full md:w-[250px]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Track Overview Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {tracks.map((track) => {
          const completed = trackCompletedCount[track.id] || 0
          const pct = Math.round((completed / track.total) * 100)
          return (
            <Card key={track.id} className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setActiveTab(track.id)}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{t('courses.trackOverview')} {track.name}</CardTitle>
                <div className={`h-4 w-4 rounded-full ${track.bg}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{track.total} {t('courses.modules')}</div>
                <p className="text-xs text-muted-foreground mb-2">
                  {loading ? t('courses.loading') : `${completed} ${t('courses.from')} ${track.total} ${t('courses.completed').toLowerCase()}`}
                </p>
                <Progress value={pct} className="h-1.5" />
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <TabsList>
            <TabsTrigger value="all">{t('courses.all')}</TabsTrigger>
            <TabsTrigger value="html">HTML</TabsTrigger>
            <TabsTrigger value="css">CSS</TabsTrigger>
            <TabsTrigger value="js">JavaScript</TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            {["Semua", "Basic", "Intermediate", "Advanced"].map((lvl) => (
              <Button key={lvl} variant={levelFilter === lvl ? "default" : "outline"} size="sm" onClick={() => setLevelFilter(lvl)}>
                {lvl === "Semua" ? t('courses.all') : lvl}
              </Button>
            ))}
          </div>
        </div>

        <TabsContent value={activeTab} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredLessons.map((lesson) => {
              const isCompleted = completedIds.has(lesson.id)
              return (
                <Card key={lesson.id} className={`flex flex-col ${isCompleted ? "border-green-200 bg-green-50/30" : ""}`}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <Badge variant={lesson.level === "Basic" ? "secondary" : "outline"} className="mb-2">{lesson.level}</Badge>
                      {isCompleted && <CheckCircle2 className="h-5 w-5 text-green-500" />}
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
                    <Link to={`/lessons/${lesson.id}`} className="w-full">
                      <Button className="w-full" variant={isCompleted ? "outline" : "default"}>
                        {isCompleted ? t('courses.repeatMaterial') : t('courses.startLearn')} <Play className="ml-2 h-3 w-3" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
