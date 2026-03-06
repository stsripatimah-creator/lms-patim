import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog"
import { Card, CardContent } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Lock, Award, Star, Zap, Code2, Rocket } from "lucide-react"

const badges = [
  { id: 1, name: "First Steps", desc: "Menyelesaikan pelajaran pertama.", icon: Rocket, color: "bg-blue-500", earned: "12 Jan 2025", locked: false },
  { id: 2, name: "7 Day Streak", desc: "Belajar berturut-turut selama 7 hari.", icon: Zap, color: "bg-orange-500", earned: "18 Jan 2025", locked: false },
  { id: 3, name: "HTML Master", desc: "Menyelesaikan semua modul HTML.", icon: Code2, color: "bg-orange-600", earned: null, locked: true },
  { id: 4, name: "CSS Wizard", desc: "Mendapatkan nilai sempurna di Quiz CSS.", icon: Star, color: "bg-blue-600", earned: null, locked: true },
  { id: 5, name: "Quiz Champion", desc: "Menjawab benar 50 soal quiz.", icon: Award, color: "bg-yellow-500", earned: null, locked: true },
  { id: 6, name: "Bug Hunter", desc: "Menemukan dan memperbaiki error di coding challenge.", icon: Code2, color: "bg-green-500", earned: null, locked: true },
]

export function AchievementsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Pencapaian</h1>
        <p className="text-muted-foreground">Koleksi lencana dari perjalanan belajarmu.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {badges.map((badge) => (
          <Dialog key={badge.id}>
            <DialogTrigger asChild>
              <Card className={`cursor-pointer hover:scale-105 transition-transform duration-200 border-2 ${badge.locked ? "opacity-60 grayscale border-dashed" : "border-transparent hover:border-primary/20"}`}>
                <CardContent className="flex flex-col items-center justify-center p-6 text-center gap-4">
                  <div className={`h-20 w-20 rounded-full flex items-center justify-center shadow-lg ${badge.locked ? "bg-slate-200" : badge.color}`}>
                    {badge.locked ? <Lock className="h-8 w-8 text-slate-400" /> : <badge.icon className="h-10 w-10 text-white" />}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{badge.name}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 mt-1">{badge.desc}</p>
                  </div>
                  {badge.locked ? (
                    <Badge variant="outline">Terkunci</Badge>
                  ) : (
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-none">Didapat</Badge>
                  )}
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <div className="flex items-center justify-center mb-4">
                  <div className={`h-24 w-24 rounded-full flex items-center justify-center shadow-xl ${badge.locked ? "bg-slate-200" : badge.color}`}>
                    {badge.locked ? <Lock className="h-10 w-10 text-slate-400" /> : <badge.icon className="h-12 w-12 text-white" />}
                  </div>
                </div>
                <DialogTitle className="text-center text-2xl">{badge.name}</DialogTitle>
                <DialogDescription className="text-center text-base">
                  {badge.desc}
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col items-center gap-4 py-4">
                {badge.locked ? (
                  <div className="text-center space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">Syarat:</p>
                    <p className="text-sm">{badge.desc}</p>
                    <div className="w-full bg-slate-100 rounded-full h-2 mt-2">
                      <div className="bg-slate-300 h-2 rounded-full w-1/2" />
                    </div>
                    <p className="text-xs text-muted-foreground">Progress: 50%</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-2 text-green-600 bg-green-50 p-4 rounded-lg w-full">
                    <Award className="h-8 w-8" />
                    <span className="font-bold">Diperoleh pada {badge.earned}</span>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  )
}
