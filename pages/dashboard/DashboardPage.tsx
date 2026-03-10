import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Zap, PlayCircle, ArrowRight, CheckCircle2 } from "lucide-react"
import { motion } from "motion/react"
import { useState, useEffect } from "react"
import { useAuth } from "../../../context/AuthContext"
import { supabase } from "../../../lib/supabase"
import { Link } from "react-router-dom"

interface UserProfile {
  points: number
  streak: number
  last_active: string | null
  display_name?: string
}

interface RecentActivity {
  lesson_id: string
  completed_at: string
  score: number
  track: string
}

const TRACK_TOTAL: Record<string, number> = { html: 12, css: 12, js: 12 }
const TRACK_META: Record<string, { label: string; color: string; level: string; nextLesson: string }> = {
  html: { label: "HTML 5", color: "bg-orange-500", level: "Basic", nextLesson: "html-1" },
  css: { label: "CSS 3", color: "bg-blue-500", level: "Intermediate", nextLesson: "css-1" },
  js: { label: "JavaScript", color: "bg-yellow-500", level: "Basic", nextLesson: "js-1" },
}

export function DashboardPage() {
  const { user } = useAuth()
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [trackProgress, setTrackProgress] = useState<Record<string, number>>({})
  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) return
    fetchDashboardData()
  }, [user])

  const fetchDashboardData = async () => {
    if (!user) return
    setLoading(true)
    try {
      const { data: profileData } = await supabase
        .from('profiles')
        .select('points, streak, last_active, display_name')
        .eq('id', user.id)
        .single()
      if (profileData) setProfile(profileData)

      const { data: progressData } = await supabase
        .from('user_progress')
        .select('track')
        .eq('user_id', user.id)
        .eq('completed', true)
      if (progressData) {
        const counts: Record<string, number> = {}
        progressData.forEach((p) => { counts[p.track] = (counts[p.track] || 0) + 1 })
        setTrackProgress(counts)
      }

      const { data: activityData } = await supabase
        .from('user_progress')
        .select('lesson_id, completed_at, score, track')
        .eq('user_id', user.id)
        .eq('completed', true)
        .order('completed_at', { ascending: false })
        .limit(5)
      if (activityData) setRecentActivity(activityData)
    } catch (err) {
      console.error('Error fetching dashboard data:', err)
    } finally {
      setLoading(false)
    }
  }

  const getProgressPercent = (track: string) => {
    const completed = trackProgress[track] || 0
    return Math.round((completed / TRACK_TOTAL[track]) * 100)
  }

  const formatTime = (iso: string) => {
    const diff = Date.now() - new Date(iso).getTime()
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)
    if (hours < 1) return 'Baru saja'
    if (hours < 24) return `${hours} jam yang lalu`
    if (days === 1) return 'Kemarin'
    return `${days} hari yang lalu`
  }

  const displayName = profile?.display_name || user?.email?.split('@')[0] || 'Kamu'
  const totalCompleted = Object.values(trackProgress).reduce((a, b) => a + b, 0)

  return (
    <div className="flex flex-col gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white shadow-lg"
      >
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Halo, {displayName}! 👋</h1>
          <p className="text-indigo-100 mb-6 max-w-lg">
            {profile?.streak ? `Streak kamu ${profile.streak} hari! Pertahankan semangatnya! 🔥` : 'Siap untuk mulai belajar hari ini?'}
          </p>
          <div className="flex gap-3">
            <Link to="/courses"><Button variant="secondary" className="text-indigo-600 font-bold"><PlayCircle className="mr-2 h-4 w-4" /> Lanjutkan Materi</Button></Link>
            <Link to="/challenge"><Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 border-0"><Zap className="mr-2 h-4 w-4" /> Mulai Challenge</Button></Link>
          </div>
        </div>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <div className="flex flex-col gap-6 lg:col-span-4">
          <h2 className="text-xl font-bold tracking-tight">Progress Belajar</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {Object.entries(TRACK_META).map(([trackId, meta], i) => {
              const pct = getProgressPercent(trackId)
              return (
                <motion.div key={trackId} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardDescription>{meta.level}</CardDescription>
                      <CardTitle className="text-lg">{meta.label}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Progress value={pct} className="h-2 mb-2" />
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">{loading ? '...' : `${pct}% Selesai`}</span>
                        <Link to={`/lessons/${meta.nextLesson}`}><Button variant="ghost" size="sm" className="h-8 w-8 p-0"><ArrowRight className="h-4 w-4" /></Button></Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          <Card>
            <CardHeader><CardTitle>Aktivitas Terakhir</CardTitle></CardHeader>
            <CardContent>
              {loading ? (
                <p className="text-sm text-muted-foreground">Memuat...</p>
              ) : recentActivity.length === 0 ? (
                <p className="text-sm text-muted-foreground">Belum ada aktivitas. Yuk mulai belajar!</p>
              ) : (
                <div className="space-y-4">
                  {recentActivity.map((activity, i) => (
                    <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Selesai: {activity.lesson_id}</p>
                          <p className="text-xs text-muted-foreground">{formatTime(activity.completed_at)}</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-green-600 bg-green-50">+{activity.score || 20} XP</Badge>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-3">
          <Card className="overflow-hidden border-orange-200">
            <CardHeader className="bg-orange-50 border-b border-orange-100 pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-orange-700 flex items-center gap-2">
                  <Zap className="h-5 w-5 fill-orange-500 text-orange-500" /> Streak Belajar
                </CardTitle>
                <Badge className="bg-orange-500 hover:bg-orange-600">
                  {loading ? '...' : `${profile?.streak || 0} Hari 🔥`}
                </Badge>
              </div>
              <CardDescription className="text-orange-600/80">
                {profile?.streak ? 'Keren! Jangan putus streakmu!' : 'Selesaikan lesson untuk mulai streak!'}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <div className="grid grid-cols-2 gap-3 mt-2">
                <div className="bg-orange-50 rounded-xl p-3 text-center">
                  <div className="text-2xl font-bold text-orange-600">{loading ? '...' : (profile?.points || 0)}</div>
                  <div className="text-xs text-orange-500 mt-1">Total XP</div>
                </div>
                <div className="bg-indigo-50 rounded-xl p-3 text-center">
                  <div className="text-2xl font-bold text-indigo-600">{loading ? '...' : totalCompleted}</div>
                  <div className="text-xs text-indigo-500 mt-1">Lesson Selesai</div>
                </div>
              </div>
              <div className="mt-4">
                <Link to="/challenge"><Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Mulai Challenge Hari Ini</Button></Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
