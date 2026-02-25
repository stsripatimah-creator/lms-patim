import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useAuth } from "../../context/AuthContext";

const activityData = [
  { name: 'Sen', hours: 0 },
  { name: 'Sel', hours: 0 },
  { name: 'Rab', hours: 0 },
  { name: 'Kam', hours: 0 },
  { name: 'Jum', hours: 0 },
  { name: 'Sab', hours: 0 },
  { name: 'Min', hours: 0 },
];

const skillsData = [
  { name: 'HTML', score: 0, fill: '#f97316' },
  { name: 'CSS', score: 0, fill: '#3b82f6' },
  { name: 'JS', score: 0, fill: '#eab308' },
];

export function Analytics() {
  const { profile } = useAuth();
  const streak = profile?.streak ?? 0;
  const points = profile?.points ?? 0;

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Progress</h1>
          <p className="text-slate-400">Pantau kemajuan belajarmu secara detail</p>
        </div>
        <div className="flex gap-2">
          {['7 Hari', '30 Hari', 'Semua'].map((p) => (
            <button key={p} className="px-4 py-1.5 text-sm rounded-lg border border-slate-700 bg-[#1E293B] text-slate-400 hover:border-slate-500 first:bg-[#4F46E5] first:border-[#4F46E5] first:text-white">
              {p}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Pelajaran Selesai", value: "0", sub: "Belum ada pelajaran selesai" },
          { title: "Total Latihan", value: "0", sub: "Belum ada latihan" },
          { title: "Rata-rata Skor", value: "-", sub: "Belum ada data skor" },
          { title: "Waktu Belajar", value: "0 Jam", sub: "Mulai belajar sekarang!" },
        ].map((stat) => (
          <Card key={stat.title} className="bg-[#1E293B] border-slate-700">
            <CardHeader className="pb-2">
              <CardDescription className="text-slate-400">{stat.title}</CardDescription>
              <CardTitle className="text-2xl text-white">{stat.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-slate-500">{stat.sub}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-[#1E293B] border-slate-700">
          <CardHeader>
            <CardTitle>Waktu Belajar (Jam)</CardTitle>
            <CardDescription className="text-slate-400">Total 0 jam minggu ini</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={activityData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <Tooltip contentStyle={{ background: '#1E293B', border: '1px solid #334155', borderRadius: 8 }} />
                  <Bar dataKey="hours" fill="#4F46E5" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1E293B] border-slate-700">
          <CardHeader>
            <CardTitle>Status Materi</CardTitle>
            <CardDescription className="text-slate-400">Distribusi status semua kursus</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center h-[250px] gap-4">
            <div className="h-32 w-32 rounded-full border-8 border-slate-700 flex items-center justify-center">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">0%</p>
                <p className="text-xs text-slate-400">Selesai</p>
              </div>
            </div>
            <div className="flex gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-green-500 inline-block" /> Selesai</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-blue-500 inline-block" /> Sedang Berjalan</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-slate-600 inline-block" /> Belum Dimulai</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-[#1E293B] border-slate-700">
        <CardHeader>
          <CardTitle>Penguasaan Topik</CardTitle>
          <CardDescription className="text-slate-400">Berdasarkan nilai quiz dan latihan</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={skillsData} layout="vertical" margin={{ top: 0, right: 30, left: 20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={true} stroke="#334155" />
                <XAxis type="number" hide domain={[0, 100]} />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8' }} />
                <Tooltip contentStyle={{ background: '#1E293B', border: '1px solid #334155', borderRadius: 8 }} />
                <Bar dataKey="score" radius={[0, 4, 4, 0]} barSize={24}>
                  {skillsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} fillOpacity={0.4} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-center text-sm text-slate-500 mt-4">Mulai belajar untuk melihat penguasaan topikmu</p>
        </CardContent>
      </Card>
    </div>
  );
}
