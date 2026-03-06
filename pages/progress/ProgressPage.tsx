import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts'
import { useTranslation } from "react-i18next"

const skillsData = [
  { name: 'HTML', score: 85, fill: '#f97316' },
  { name: 'CSS', score: 65, fill: '#3b82f6' },
  { name: 'JS', score: 45, fill: '#eab308' },
  { name: 'React', score: 30, fill: '#6366f1' },
]

export function ProgressPage() {
  const { t } = useTranslation()

  const activityData = [
    { name: t('progress.days.Sen'), hours: 2 },
    { name: t('progress.days.Sel'), hours: 3.5 },
    { name: t('progress.days.Rab'), hours: 1.5 },
    { name: t('progress.days.Kam'), hours: 4 },
    { name: t('progress.days.Jum'), hours: 2.5 },
    { name: t('progress.days.Sab'), hours: 5 },
    { name: t('progress.days.Min'), hours: 3 },
  ]

  const stats = [
    { title: t('progress.totalHours'), value: t('progress.totalHoursVal'), sub: t('progress.totalHoursSub') },
    { title: t('progress.completedModules'), value: t('progress.completedModulesVal'), sub: t('progress.completedModulesSub') },
    { title: t('progress.avgScore'), value: "88/100", sub: t('progress.avgScoreSub') },
    { title: t('progress.currentStreak'), value: t('progress.currentStreakVal'), sub: t('progress.currentStreakSub') },
  ]

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold tracking-tight">{t('progress.title')}</h1>
        <Select defaultValue="7d">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={t('progress.selectPeriod')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7d">{t('progress.last7days')}</SelectItem>
            <SelectItem value="30d">{t('progress.last30days')}</SelectItem>
            <SelectItem value="all">{t('progress.allTime')}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="pb-2">
              <CardDescription>{stat.title}</CardDescription>
              <CardTitle className="text-2xl">{stat.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">{stat.sub}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>{t('progress.activityTitle')}</CardTitle>
            <CardDescription>{t('progress.activityDesc')}</CardDescription>
          </CardHeader>
          <CardContent className="pl-0">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={activityData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tickMargin={10} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Area type="monotone" dataKey="hours" stroke="#4f46e5" fillOpacity={1} fill="url(#colorHours)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t('progress.topicTitle')}</CardTitle>
            <CardDescription>{t('progress.topicDesc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={skillsData} layout="vertical" margin={{ top: 0, right: 30, left: 20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} />
                  <Tooltip cursor={{ fill: 'transparent' }} />
                  <Bar dataKey="score" radius={[0, 4, 4, 0]} barSize={30}>
                    {skillsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
