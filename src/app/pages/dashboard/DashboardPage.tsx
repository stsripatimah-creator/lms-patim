import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Zap, PlayCircle, Clock, Award, ArrowRight, CheckCircle2 } from "lucide-react"
import { motion } from "motion/react"
import { useState } from "react"

export function DashboardPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="flex flex-col gap-6">
      {/* Welcome Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white shadow-lg"
      >
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Halo, Budi! 👋</h1>
          <p className="text-indigo-100 mb-6 max-w-lg">
            Siap untuk melanjutkan belajar? Kamu sudah menyelesaikan 80% dari target mingguanmu. Pertahankan semangatnya!
          </p>
          <div className="flex gap-3">
            <Button variant="secondary" className="text-indigo-600 font-bold">
              <PlayCircle className="mr-2 h-4 w-4" /> Lanjutkan Materi
            </Button>
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 border-0">
              <Zap className="mr-2 h-4 w-4" /> Mulai Challenge
            </Button>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop')] bg-cover opacity-10 mask-image-linear-gradient-to-l" />
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        {/* Progress Cards - Left Column (4 cols) */}
        <div className="flex flex-col gap-6 lg:col-span-4">
          <h2 className="text-xl font-bold tracking-tight">Progress Belajar</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { title: "HTML 5", level: "Basic", progress: 85, color: "bg-orange-500" },
              { title: "CSS 3", level: "Intermediate", progress: 45, color: "bg-blue-500" },
              { title: "JavaScript", level: "Basic", progress: 20, color: "bg-yellow-500" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>{item.level}</CardDescription>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Progress value={item.progress} className="h-2 mb-2" indicatorClassName={item.color} />
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">{item.progress}% Selesai</span>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PlayCircle className="h-5 w-5 text-primary" />
                Rekomendasi Selanjutnya
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-[1fr_auto] items-center">
              <div className="space-y-1">
                <h3 className="font-semibold">CSS Flexbox: Layout Modern</h3>
                <p className="text-sm text-muted-foreground">
                  Pelajari cara membuat layout responsif dengan mudah menggunakan Flexbox.
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> 15 Menit</span>
                  <span className="flex items-center gap-1"><Award className="h-3 w-3" /> 50 XP</span>
                  <Badge variant="outline">Intermediate</Badge>
                </div>
              </div>
              <Button>Mulai</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Aktivitas Terakhir</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { title: "Menyelesaikan Quiz HTML Dasar", time: "2 jam yang lalu", xp: "+20 XP" },
                  { title: "Menyelesaikan Latihan CSS Colors", time: "Kemarin", xp: "+50 XP" },
                  { title: "Login Streak 7 Hari", time: "Kemarin", xp: "+10 XP" },
                ].map((activity, i) => (
                  <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{activity.title}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-green-600 bg-green-50">
                      {activity.xp}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column (3 cols) */}
        <div className="flex flex-col gap-6 lg:col-span-3">
          {/* Streak Widget */}
          <Card className="overflow-hidden border-orange-200">
            <CardHeader className="bg-orange-50 border-b border-orange-100 pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-orange-700 flex items-center gap-2">
                  <Zap className="h-5 w-5 fill-orange-500 text-orange-500" />
                  Streak Challenge
                </CardTitle>
                <Badge className="bg-orange-500 hover:bg-orange-600">7 Hari 🔥</Badge>
              </div>
              <CardDescription className="text-orange-600/80">
                Jangan putus streakmu! Selesaikan challenge hari ini.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow-sm w-full flex justify-center"
              />
              <div className="mt-4">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Mulai Challenge Hari Ini
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Leaderboard Mini */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Top Learners Minggu Ini</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Sarah J.", xp: "2400 XP", rank: 1 },
                  { name: "Budi Santoso", xp: "1850 XP", rank: 2 },
                  { name: "Michael T.", xp: "1600 XP", rank: 3 },
                ].map((user) => (
                  <div key={user.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                        user.rank === 1 ? "bg-yellow-100 text-yellow-700" :
                        user.rank === 2 ? "bg-slate-100 text-slate-700" :
                        "bg-orange-100 text-orange-700"
                      }`}>
                        {user.rank}
                      </div>
                      <span className="text-sm font-medium">{user.name}</span>
                    </div>
                    <span className="text-xs font-bold text-muted-foreground">{user.xp}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
