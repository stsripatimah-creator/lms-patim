import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Progress } from "../../components/ui/progress"
import { Timer, Zap, Trophy, HelpCircle, CheckCircle, Clock } from "lucide-react"
import { useState, useEffect } from "react"
import { motion } from "motion/react"
import { toast } from "sonner"

// Key unik per hari — otomatis unlock besok karena tanggalnya beda
function getTodayKey() {
  const today = new Date().toISOString().split("T")[0] // "2026-03-11"
  return `daily_challenge_${today}`
}

function getSecondsUntilMidnight() {
  const now = new Date()
  const midnight = new Date(now)
  midnight.setHours(24, 0, 0, 0)
  return Math.floor((midnight.getTime() - now.getTime()) / 1000)
}

export function DailyChallengePage() {
  const todayKey = getTodayKey()

  // Lazy initializer — hanya jalan sekali saat mount, aman dari re-render
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(() => {
    try {
      const raw = localStorage.getItem(todayKey)
      const saved = raw ? JSON.parse(raw) : null
      return saved?.selectedAnswer ?? null
    } catch {
      return null
    }
  })

  const [isSubmitted, setIsSubmitted] = useState<boolean>(() => {
    try {
      const raw = localStorage.getItem(todayKey)
      const saved = raw ? JSON.parse(raw) : null
      return saved?.isSubmitted === true
    } catch {
      return false
    }
  })

  // Hitung countdown sampai midnight
  const [timeLeft, setTimeLeft] = useState(() => {
    const total = getSecondsUntilMidnight()
    return {
      hours: Math.floor(total / 3600),
      minutes: Math.floor((total % 3600) / 60),
      seconds: total % 60,
    }
  })

  // Countdown real berdasarkan waktu sekarang
  useEffect(() => {
    const timer = setInterval(() => {
      const total = getSecondsUntilMidnight()
      setTimeLeft({
        hours: Math.floor(total / 3600),
        minutes: Math.floor((total % 3600) / 60),
        seconds: total % 60,
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleSubmit = () => {
    if (selectedAnswer === null) return
    setIsSubmitted(true)

    // Simpan ke localStorage supaya persist setelah refresh / navigasi
    localStorage.setItem(
      todayKey,
      JSON.stringify({ isSubmitted: true, selectedAnswer })
    )

    if (selectedAnswer === 1) {
      toast.success("Jawaban benar! Streak bertambah +1 🔥")
    } else {
      toast.error("Jawaban salah, coba lagi besok!")
    }
  }

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Zap className="text-orange-500 fill-orange-500" /> Challenge Hari Ini
          </h1>
          <p className="text-muted-foreground">Selesaikan tantangan harian untuk menjaga streakmu!</p>
        </div>
        <Card className="bg-slate-900 text-white border-none w-full md:w-auto">
          <CardContent className="p-4 flex items-center justify-center gap-4">
            <div className="text-center">
              <div className="text-2xl font-mono font-bold">
                {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Reset Dalam</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr_300px]">
        {/* Main Challenge Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="h-full">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <Badge variant="outline" className="border-orange-500 text-orange-500">Hard</Badge>
                <div className="text-sm text-muted-foreground flex items-center gap-1">
                  <Trophy className="h-4 w-4 text-yellow-500" /> 100 XP
                </div>
              </div>
              <CardTitle>CSS Grid Positioning</CardTitle>
              <CardDescription>
                Tentukan output dari kode CSS Grid berikut.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-slate-950 p-4 rounded-lg text-slate-50 font-mono text-sm overflow-x-auto">
{`.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
}
.item {
  grid-column: 1 / -1;
}`}
              </div>
              <div className="space-y-3">
                <p className="font-medium">Bagaimana perilaku element dengan class .item?</p>
                <div className="grid gap-3">
                  {[
                    "Hanya menempati kolom pertama",
                    "Menempati seluruh lebar grid (full width)",
                    "Menempati kolom kedua saja",
                    "Akan error karena syntax salah"
                  ].map((ans, i) => (
                    <div
                      key={i}
                      className={`flex items-center space-x-3 p-4 rounded-lg border cursor-pointer transition-colors ${
                        selectedAnswer === i ? "border-primary bg-primary/5 ring-1 ring-primary" : "hover:bg-muted/50"
                      } ${isSubmitted && i === 1 ? "bg-green-100 border-green-500 text-green-700" : ""} ${isSubmitted && selectedAnswer === i && i !== 1 ? "bg-red-100 border-red-500 text-red-700" : ""}`}
                      onClick={() => !isSubmitted && setSelectedAnswer(i)}
                    >
                      <div className={`h-5 w-5 rounded-full border flex items-center justify-center ${
                        selectedAnswer === i ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground"
                      }`}>
                        {selectedAnswer === i && <div className="h-2.5 w-2.5 rounded-full bg-current" />}
                      </div>
                      <span className="text-sm">{ans}</span>
                      {isSubmitted && i === 1 && <CheckCircle className="ml-auto h-5 w-5 text-green-600" />}
                    </div>
                  ))}
                </div>
              </div>

              {/* Banner "Kembali Besok" setelah submit */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-slate-100 border border-slate-200 text-slate-600"
                >
                  <Clock className="h-5 w-5 shrink-0 text-slate-400" />
                  <div className="text-sm">
                    <span className="font-semibold">Sudah selesai hari ini!</span> Challenge berikutnya tersedia dalam{" "}
                    <span className="font-mono font-bold text-slate-800">
                      {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                  </div>
                </motion.div>
              )}
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                size="lg"
                disabled={selectedAnswer === null || isSubmitted}
                onClick={handleSubmit}
              >
                {isSubmitted ? "Challenge Selesai ✓" : "Submit Jawaban"}
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        {/* Sidebar Stats */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Rewards</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Streak Bonus</span>
                <Badge variant="secondary" className="text-orange-600 bg-orange-100">x1.5</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Weekly Goal</span>
                <span className="text-sm font-bold">4/5</span>
              </div>
              <Progress value={80} className="h-2" />
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white border-none">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <HelpCircle className="h-5 w-5" /> Butuh Bantuan?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-indigo-100 mb-4">
                Gunakan hint jika kamu stuck. Menggunakan hint akan mengurangi reward XP.
              </p>
              <Button variant="secondary" className="w-full text-indigo-700 font-bold" disabled={isSubmitted}>
                Buka Hint (-20 XP)
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
