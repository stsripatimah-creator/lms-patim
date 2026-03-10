import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Badge } from "../components/ui/badge"
import { CheckCircle2, Code2, Layers, Zap, ArrowRight, Star, Menu, Sparkles, Target, TrendingUp, Users, BookOpen, Award, Play } from "lucide-react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"
import { Logo } from "../components/Logo"
import { useState, useEffect, useRef } from "react"

export function LandingPage() {
  const [typingText, setTypingText] = useState(0);
  const tRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const [, flameTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTypingText((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const loop = () => {
      tRef.current += 0.05;
      flameTick(n => n + 1);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-20 items-center justify-between px-4 md:px-6">
          <Logo linkTo="/" size="md" className="text-slate-900" />
          
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#features" className="text-slate-600 hover:text-[#4F46E5] transition-colors">Fitur</a>
            <a href="#curriculum" className="text-slate-600 hover:text-[#4F46E5] transition-colors">Kurikulum</a>
            <a href="#testimonials" className="text-slate-600 hover:text-[#4F46E5] transition-colors">Testimoni</a>
          </nav>
          
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" className="hidden md:inline-flex text-slate-700 hover:text-[#4F46E5]">Masuk</Button>
            </Link>
            <Link to="/register">
              <Button className="bg-[#4F46E5] hover:bg-[#4338CA] text-white shadow-lg shadow-[#4F46E5]/30 hover:shadow-xl hover:shadow-[#4F46E5]/40 transition-all">
                Mulai Belajar
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container px-4 md:px-6 py-16 md:py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="flex flex-col justify-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#4F46E5]/10 to-[#7C3AED]/10 px-4 py-2 text-sm font-semibold text-[#4F46E5] w-fit border border-[#4F46E5]/20 mb-6">
                  <Sparkles className="h-4 w-4" />
                  Platform Belajar Coding #1 di Indonesia
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl xl:text-7xl/none mb-6">
                  Belajar Web Development{" "}
                  <span className="bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#0EA5E9] bg-clip-text text-transparent">
                    Step-by-Step
                  </span>
                </h1>
                <p className="max-w-[600px] text-slate-600 text-lg md:text-xl leading-relaxed">
                  Kuasai HTML, CSS, dan JavaScript dari nol sampai mahir. Dengan latihan interaktif, progress tracking, dan daily challenges yang bikin belajar coding jadi lebih seru!
                </p>
              </motion.div>

              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Link to="/register" className="w-full min-[400px]:w-auto">
                  <Button size="lg" className="w-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#4338CA] hover:to-[#6D28D9] text-white shadow-2xl shadow-[#4F46E5]/40 hover:shadow-[#4F46E5]/60 transition-all transform hover:scale-105 h-14 px-8 text-base">
                    Mulai Belajar Gratis <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="#curriculum" className="w-full min-[400px]:w-auto">
                  <Button size="lg" variant="outline" className="w-full border-2 border-[#4F46E5]/30 text-[#4F46E5] hover:bg-[#4F46E5]/5 hover:border-[#4F46E5] h-14 px-8 text-base">
                    Lihat Kurikulum
                  </Button>
                </a>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="h-12 w-12 rounded-full border-4 border-white bg-slate-200 flex items-center justify-center overflow-hidden shadow-md">
                       <img src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${i}`} alt="User" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">10,000+ Pembelajar</p>
                  <div className="flex items-center gap-1 text-sm text-slate-600">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">4.9/5</span>
                    <span>rating</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="relative mx-auto w-full max-w-[550px] lg:max-w-none">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative z-10 rounded-2xl border-2 border-slate-200 bg-white p-3 shadow-2xl shadow-slate-900/10"
              >
                <div className="rounded-xl bg-[#0B1220] p-6 overflow-hidden">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="h-3.5 w-3.5 rounded-full bg-red-500" />
                    <div className="h-3.5 w-3.5 rounded-full bg-yellow-500" />
                    <div className="h-3.5 w-3.5 rounded-full bg-green-500" />
                    <span className="ml-2 text-xs text-slate-400 font-medium">app.js</span>
                  </div>
                  <pre className="text-sm text-slate-50 font-mono overflow-x-auto leading-relaxed">
                    <code>
                      <span className="text-[#7C3AED]">const</span> <span className="text-[#0EA5E9]">learnWebDev</span> <span className="text-slate-400">=</span> <span className="text-[#7C3AED]">async</span> <span className="text-slate-400">() ={">"} {"{"}</span>{"\n"}
                      {"  "}<span className="text-[#7C3AED]">await</span> <span className="text-[#22C55E]">stepByWeb</span><span className="text-slate-400">.</span><span className="text-[#0EA5E9]">start</span><span className="text-slate-400">();</span>{"\n"}
                      {"  "}<span className="text-[#7C3AED]">while</span> <span className="text-slate-400">(</span><span className="text-[#22C55E]">coding</span><span className="text-slate-400">) {"{"}</span>{"\n"}
                      {"    "}<span className="text-[#22C55E]">skills</span><span className="text-slate-400">.</span><span className="text-[#0EA5E9]">levelUp</span><span className="text-slate-400">();</span>{"\n"}
                      {"    "}<span className="text-[#4F46E5]">achievements</span><span className="text-slate-400">.</span><span className="text-[#0EA5E9]">unlock</span><span className="text-slate-400">();</span>{"\n"}
                      {"  "}<span className="text-slate-400">{"}"}</span>{"\n"}
                      <span className="text-slate-400">{"}"}</span>
                    </code>
                  </pre>
                </div>
              </motion.div>
              
              {/* Floating Feature Cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 z-20 hidden lg:block"
              >
                <Card className="w-64 shadow-xl border-2 border-[#4F46E5]/20 bg-white overflow-hidden">
                  <div className="h-1 w-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED]" />
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] flex items-center justify-center shadow-md">
                        <Award className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-medium">Badge & Sertifikat</p>
                        <p className="text-sm font-bold text-slate-800">Bukti Nyata Keahlianmu</p>
                      </div>
                    </div>
                    <div className="flex gap-1.5 flex-wrap">
                      {["🌱 Pemula", "🎯 Explorer", "⚡ Warrior", "💎 Master"].map(b => (
                        <span key={b} className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#4F46E5]/10 text-[#4F46E5] border border-[#4F46E5]/20">{b}</span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-8 z-20 hidden lg:block"
              >
                <Card className="w-64 shadow-xl border-2 border-amber-100 bg-white overflow-hidden">
                  <div className="h-1 w-full bg-gradient-to-r from-[#F59E0B] to-[#EF4444]" />
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#EF4444] flex items-center justify-center shadow-md">
                        <Sparkles className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-medium">Rekomendasi Adaptif</p>
                        <p className="text-sm font-bold text-slate-800">Materi Sesuai LPI-mu</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-amber-50 border border-amber-100">
                      <span className="text-base">🚀</span>
                      <p className="text-xs text-slate-600">LPI tinggi? Materi makin menantang!</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Background Decoration */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[#4F46E5]/5 via-[#7C3AED]/5 to-[#0EA5E9]/5 blur-3xl rounded-full" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container px-4 md:px-6 py-16 md:py-24">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#4F46E5]/5 via-white to-[#0EA5E9]/5 border border-slate-200/50 px-6 py-16 md:px-12 md:py-20">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
            
            {/* Animated Floating Tech Badges */}
            <motion.div
              animate={{ 
                x: [0, 20, 0],
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 hidden lg:block"
            >
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg shadow-lg font-mono font-bold text-sm">
                HTML5
              </div>
            </motion.div>
            
            <motion.div
              animate={{ 
                x: [0, -20, 0],
                y: [0, 15, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 left-10 hidden lg:block"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg shadow-lg font-mono font-bold text-sm">
                CSS3
              </div>
            </motion.div>
            
            <motion.div
              animate={{ 
                x: [0, 15, 0],
                y: [0, -15, 0],
                rotate: [0, 3, 0]
              }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/2 right-20 hidden lg:block"
            >
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-slate-900 px-4 py-2 rounded-lg shadow-lg font-mono font-bold text-sm">
                JavaScript
              </div>
            </motion.div>
            
            <div className="relative z-10">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#4F46E5] border border-[#4F46E5]/20 shadow-sm">
                  <Target className="h-4 w-4" />
                  Kenapa StepByWeb?
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  Metode Belajar Yang Efektif
                </h2>
                <p className="max-w-[700px] text-slate-600 text-lg">
                  Kami merancang pengalaman belajar yang engaging, praktis, dan fokus pada hasil nyata.
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: Layers,
                    title: "Materi Bertingkat",
                    desc: "Kurikulum terstruktur mulai dari Basic, Intermediate, hingga Advanced untuk setiap topik.",
                    gradient: "from-[#4F46E5] to-[#7C3AED]"
                  },
                  {
                    icon: Code2,
                    title: "Latihan Interaktif",
                    desc: "Coding langsung di browser tanpa perlu install setup yang rumit. Praktik langsung paham.",
                    gradient: "from-[#0EA5E9] to-[#06B6D4]"
                  },
                  {
                    icon: Zap,
                    title: "Streak Challenge",
                    desc: "Bangun kebiasaan coding setiap hari dengan tantangan harian dan sistem streak.",
                    gradient: "from-[#22C55E] to-[#16A34A]"
                  }
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-white border-2 border-slate-100 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 duration-300 h-full group">
                      <CardHeader>
                        <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <feature.icon className="h-7 w-7 text-white" />
                        </div>
                        <CardTitle className="text-xl font-bold text-slate-900">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 leading-relaxed">
                          {feature.desc}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}</div>
            </div>
          </div>
        </section>

        {/* Gamification Highlight Section */}
        <section className="container px-4 md:px-6 py-16 md:py-24">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#4F46E5]/10 to-[#7C3AED]/10 px-4 py-2 text-sm font-semibold text-[#4F46E5] border border-[#4F46E5]/20">
              <Sparkles className="h-4 w-4" />
              Fitur Unggulan
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Belajar Lebih Seru & Personal
            </h2>
            <p className="max-w-[700px] text-slate-600 text-lg">
              StepByWeb bukan sekadar platform belajar biasa. Dengan sistem gamifikasi dan rekomendasi cerdas berbasis AI, setiap sesi belajar terasa menyenangkan dan relevan untukmu.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Streak — animated flame */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-2 border-slate-100 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 duration-300 h-full overflow-hidden group">
                <div className="h-1.5 w-full bg-gradient-to-r from-orange-400 to-orange-600" />
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 w-14 h-14 rounded-2xl bg-orange-400/20 animate-ping" style={{ animationDuration: "2.5s" }} />
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-400/40 relative z-10">
                      <span style={{
                        fontSize: 28,
                        display: "inline-block",
                        transformOrigin: "bottom center",
                        transform: `scale(${1 + Math.sin(tRef.current) * 0.1}) skewX(${Math.sin(tRef.current * 1.4) * 4}deg)`,
                        filter: `drop-shadow(0 0 8px rgba(251,146,60,${0.5 + Math.sin(tRef.current * 0.9) * 0.5}))`,
                      }}>🔥</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Daily Streak</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Bangun kebiasaan belajar coding setiap hari. Streak-mu terus bertambah selama kamu konsisten — dan kamu dapat bonus poin ekstra setiap milestone!
                  </p>
                  <div className="space-y-3">
                    {[
                      { label: "Streak aktif", desc: "Belajar hari ini & besok", icon: "🔥" },
                      { label: "Bonus poin", desc: "Makin panjang makin besar", icon: "⚡" },
                      { label: "Badge khusus", desc: "Unlock di 7, 30, 100 hari", icon: "🏅" },
                    ].map((s, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-orange-50 border border-orange-100">
                        <span className="text-xl">{s.icon}</span>
                        <div>
                          <p className="text-sm font-bold text-slate-800">{s.label}</p>
                          <p className="text-xs text-slate-500">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Badge & Sertifikat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-2 border-slate-100 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 duration-300 h-full overflow-hidden group">
                <div className="h-1.5 w-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED]" />
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Badge & Sertifikat Resmi</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Setiap pencapaian dihargai dengan badge eksklusif. Selesaikan semua jalur dan dapatkan <span className="font-semibold text-[#4F46E5]">sertifikat resmi</span> yang bisa langsung dibagikan ke LinkedIn atau CV-mu.
                  </p>
                  <div className="flex gap-2 flex-wrap mb-5">
                    {[
                      { label: "Pemula", color: "from-slate-400 to-slate-500", icon: "🌱" },
                      { label: "Explorer", color: "from-[#22C55E] to-[#16A34A]", icon: "🎯" },
                      { label: "Warrior", color: "from-[#0EA5E9] to-[#06B6D4]", icon: "⚡" },
                      { label: "Master", color: "from-[#4F46E5] to-[#7C3AED]", icon: "💎" },
                    ].map((b) => (
                      <span key={b.label} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r ${b.color} text-white text-xs font-bold shadow-md`}>
                        {b.icon} {b.label}
                      </span>
                    ))}
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-r from-[#4F46E5]/5 to-[#7C3AED]/5 border border-[#4F46E5]/15 flex items-center gap-3">
                    <div className="text-2xl">📜</div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">Sertifikat Resmi StepByWeb</p>
                      <p className="text-xs text-slate-500">Verifikasi digital · Bisa dibagikan ke LinkedIn</p>
                    </div>
                    <CheckCircle2 className="h-5 w-5 text-[#22C55E] ml-auto shrink-0" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* LPI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-2 border-slate-100 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 duration-300 h-full overflow-hidden group">
                <div className="h-1.5 w-full bg-gradient-to-r from-[#22C55E] to-[#16A34A]" />
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#22C55E] to-[#16A34A] flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">Learning Performance Index</h3>
                  <Badge className="bg-[#22C55E]/10 text-[#16A34A] border border-[#22C55E]/30 mb-4 font-semibold">LPI — Fitur Eksklusif</Badge>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Skor unik yang mencerminkan performa belajarmu secara keseluruhan — dihitung dari quiz, konsistensi streak, dan progres materi. <span className="font-semibold text-slate-800">Satu angka yang bicara segalanya.</span>
                  </p>
                  <div className="space-y-3">
                    {[
                      { label: "LPI Tinggi (80–100)", color: "bg-[#22C55E]", w: "90%" },
                      { label: "LPI Sedang (60–79)", color: "bg-[#0EA5E9]", w: "70%" },
                      { label: "LPI Rendah (40–59)", color: "bg-[#F59E0B]", w: "50%" },
                      { label: "LPI Kritis (0–39)",  color: "bg-[#EF4444]", w: "30%" },
                    ].map((lpi) => (
                      <div key={lpi.label} className="flex items-center gap-3">
                        <span className="text-xs text-slate-500 w-32 shrink-0">{lpi.label}</span>
                        <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: lpi.w }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className={`h-full ${lpi.color} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Rekomendasi Konten Adaptif */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-2 border-slate-100 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 duration-300 h-full overflow-hidden group">
                <div className="h-1.5 w-full bg-gradient-to-r from-[#F59E0B] to-[#EF4444]" />
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#F59E0B] to-[#EF4444] flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">Rekomendasi Konten Adaptif</h3>
                  <Badge className="bg-[#F59E0B]/10 text-[#B45309] border border-[#F59E0B]/30 mb-4 font-semibold">Powered by AI</Badge>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Sistem kami otomatis merekomendasikan materi yang paling tepat berdasarkan LPI-mu — materi menantang saat performa tinggi, review saat butuh penguatan.
                  </p>
                  <div className="space-y-3">
                    {[
                      { lpi: "LPI Tinggi", rec: "Materi lanjutan yang lebih menantang", icon: "🚀" },
                      { lpi: "LPI Sedang", rec: "Materi ringan untuk rebuild semangat", icon: "💪" },
                      { lpi: "LPI Rendah", rec: "Review materi + format konten berbeda", icon: "📖" },
                      { lpi: "LPI Kritis", rec: "Materi dasar & motivasi belajar", icon: "🌱" },
                    ].map((r) => (
                      <div key={r.lpi} className="flex items-start gap-3 p-3 rounded-xl bg-amber-50 border border-amber-100 hover:border-amber-200 transition-colors">
                        <span className="text-lg">{r.icon}</span>
                        <div>
                          <p className="text-xs font-bold text-slate-700">{r.lpi}</p>
                          <p className="text-xs text-slate-500">{r.rec}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Step-by-Step Learning Process - NEW */}
        <section className="container px-4 md:px-6 py-16 md:py-24">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Cara Belajar di StepByWeb
            </h2>
            <p className="max-w-[700px] text-slate-600 text-lg">
              Proses belajar yang terstruktur dan mudah diikuti
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                step: "01",
                title: "Pilih Track Belajar",
                desc: "Mulai dari HTML, CSS, atau JavaScript sesuai minat kamu",
                gradient: "from-orange-500 to-orange-600",
                delay: 0
              },
              {
                step: "02",
                title: "Pelajari Materi Interaktif",
                desc: "Video tutorial, penjelasan detail, dan contoh code yang bisa langsung dicoba",
                gradient: "from-blue-500 to-blue-600",
                delay: 0.2
              },
              {
                step: "03",
                title: "Praktik dengan Coding Editor",
                desc: "Langsung coding di browser tanpa setup, lihat hasilnya real-time",
                gradient: "from-[#4F46E5] to-[#7C3AED]",
                delay: 0.4
              },
              {
                step: "04",
                title: "Uji Kemampuan dengan Quiz",
                desc: "Kerjakan quiz di setiap lesson untuk memastikan kamu paham",
                gradient: "from-[#22C55E] to-[#16A34A]",
                delay: 0.6
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: item.delay }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex gap-6 items-start group">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                    className={`shrink-0 h-16 w-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg text-white font-bold text-xl group-hover:shadow-2xl transition-shadow`}
                  >
                    {item.step}
                  </motion.div>
                  <div className="flex-1 bg-white border-2 border-slate-100 rounded-2xl p-6 shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                
                {/* Connecting Line */}
                {i < 3 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.5, delay: item.delay + 0.3 }}
                    viewport={{ once: true }}
                    className="absolute left-8 top-16 h-8 w-0.5 bg-gradient-to-b from-slate-300 to-transparent ml-0 hidden md:block"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Curriculum Preview */}
        <section id="curriculum" className="container px-4 md:px-6 py-16 md:py-24">
           <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Kurikulum Lengkap
            </h2>
            <p className="max-w-[700px] text-slate-600 text-lg">
              Jalur belajar terstruktur untuk menjadi Frontend Developer profesional.
            </p>
          </div>
          
          <Tabs defaultValue="html" className="w-full max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-10 h-auto p-2 bg-white rounded-2xl shadow-lg border-2 border-slate-100">
              <TabsTrigger 
                value="html" 
                className="py-4 px-6 rounded-xl data-[state=active]:bg-gradient-to-br data-[state=active]:from-orange-500 data-[state=active]:to-orange-600 data-[state=active]:text-white data-[state=active]:shadow-lg font-semibold transition-all"
              >
                HTML 5
              </TabsTrigger>
              <TabsTrigger 
                value="css" 
                className="py-4 px-6 rounded-xl data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:shadow-lg font-semibold transition-all"
              >
                CSS 3
              </TabsTrigger>
              <TabsTrigger 
                value="js" 
                className="py-4 px-6 rounded-xl data-[state=active]:bg-gradient-to-br data-[state=active]:from-yellow-400 data-[state=active]:to-yellow-500 data-[state=active]:text-slate-900 data-[state=active]:shadow-lg font-semibold transition-all"
              >
                JavaScript
              </TabsTrigger>
            </TabsList>
            
            {[
              { tab: "html", color: "orange", gradient: "from-orange-500 to-orange-600" },
              { tab: "css", color: "blue", gradient: "from-blue-500 to-blue-600" },
              { tab: "js", color: "yellow", gradient: "from-yellow-400 to-yellow-500" }
            ].map(({ tab, color, gradient }) => (
              <TabsContent key={tab} value={tab} className="mt-0">
                <Card className="border-2 border-slate-200 shadow-xl overflow-hidden bg-white">
                  <div className={`h-1.5 w-full bg-gradient-to-r ${gradient}`} />
                  <CardContent className="p-8 md:p-10">
                    <div className="grid gap-10 md:grid-cols-3">
                      {[
                        { level: "Basic", variant: "default", badgeColor: "bg-[#22C55E] text-white" },
                        { level: "Intermediate", variant: "secondary", badgeColor: "bg-[#0EA5E9] text-white" },
                        { level: "Advanced", variant: "outline", badgeColor: "bg-[#4F46E5] text-white" }
                      ].map(({ level, variant, badgeColor }) => (
                        <div key={level} className="space-y-5">
                          <div className="flex items-center gap-2">
                             <Badge className={`${badgeColor} border-none uppercase px-4 py-1.5 text-xs font-bold tracking-wide shadow-md`}>
                               {level}
                             </Badge>
                          </div>
                          <ul className="space-y-4">
                            {[1, 2, 3, 4].map((item) => (
                              <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                                <CheckCircle2 className="h-5 w-5 text-[#22C55E] mt-0.5 shrink-0" />
                                <span className="leading-relaxed">
                                  {tab === 'html' && level === 'Basic' && `Pengenalan Tag & Elemen Part ${item}`}
                                  {tab === 'html' && level === 'Intermediate' && `Form & Validasi Modern Part ${item}`}
                                  {tab === 'html' && level === 'Advanced' && `SEO & Accessibility Best Practice ${item}`}
                                  
                                  {tab === 'css' && level === 'Basic' && `Styling Dasar & Colors Part ${item}`}
                                  {tab === 'css' && level === 'Intermediate' && `Flexbox & Grid Layout Part ${item}`}
                                  {tab === 'css' && level === 'Advanced' && `Animation & Keyframes Part ${item}`}
                                  
                                  {tab === 'js' && level === 'Basic' && `Variables & Data Types Part ${item}`}
                                  {tab === 'js' && level === 'Intermediate' && `DOM Manipulation Part ${item}`}
                                  {tab === 'js' && level === 'Advanced' && `Async/Await & Fetch API Part ${item}`}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-10 pt-8 border-t border-slate-200 flex justify-center">
                       <Link to="/register">
                        <Button className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#4338CA] hover:to-[#6D28D9] text-white shadow-lg px-8">
                          Mulai Belajar Sekarang
                        </Button>
                       </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="container px-4 md:px-6 py-16 md:py-24 bg-gradient-to-br from-slate-50 to-white">
           <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#4F46E5] border border-[#4F46E5]/20 shadow-sm">
              <TrendingUp className="h-4 w-4" />
              Testimoni
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Kata Mereka
            </h2>
            <p className="max-w-[700px] text-slate-600 text-lg">
              Ribuan pembelajar telah merasakan manfaatnya. Sekarang giliran kamu!
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Budi Santoso",
                role: "Mahasiswa IT",
                text: "Penjelasannya sangat mudah dipahami, fitur coding playground-nya membantu banget buat langsung praktek."
              },
              {
                name: "Siti Aminah",
                role: "Career Switcher",
                text: "Dari nol banget ga ngerti coding, sekarang udah bisa bikin landing page sendiri. Challenge hariannya bikin nagih!"
              },
              {
                name: "Reza Pratama",
                role: "Freelancer",
                text: "Materi Advanced JavaScript-nya daging semua. Sangat recommended buat yang mau upgrade skill."
              }
            ].map((testi, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-2 border-slate-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 duration-300 h-full">
                  <CardContent className="p-7">
                    <div className="flex gap-1 mb-5">
                      {[1,2,3,4,5].map(s => <Star key={s} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
                    </div>
                    <p className="text-slate-700 mb-6 leading-relaxed text-base">"{testi.text}"</p>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] overflow-hidden ring-2 ring-slate-100">
                         <img src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${testi.name}`} alt={testi.name} />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{testi.name}</div>
                        <div className="text-sm text-slate-500">{testi.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container px-4 md:px-6 py-16 md:py-24">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#4F46E5] via-[#7C3AED] to-[#0EA5E9] px-8 py-16 md:px-16 md:py-20 shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px]" />
            
            <div className="relative z-10 flex flex-col items-center text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white max-w-3xl">
                Siap Mulai Perjalanan Coding-mu?
              </h2>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl">
                Bergabunglah dengan ribuan pembelajar lainnya dan mulai kuasai web development hari ini. Gratis!
              </p>
              <Link to="/register">
                <Button size="lg" className="bg-white text-[#4F46E5] hover:bg-slate-50 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 h-16 px-10 text-lg font-bold">
                  Daftar Sekarang - Gratis! <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-8 bg-white border-t border-slate-200">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo linkTo="/" size="sm" />
          
          <p className="text-sm text-slate-600 text-center md:text-left">
            © 2025 StepByWeb. All rights reserved. Belajar coding jadi lebih mudah.
          </p>
          <nav className="flex gap-6 text-sm text-slate-600">
            <Link to="#" className="hover:text-[#4F46E5] transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-[#4F46E5] transition-colors">Privacy</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}