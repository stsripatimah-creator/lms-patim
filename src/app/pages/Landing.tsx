import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Code, Layout, Smartphone, Zap, Trophy } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { motion } from "motion/react";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0B1220] text-slate-100 font-sans">
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-[#0B1220]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="text-[#4F46E5] text-2xl font-mono font-bold">&lt;/&gt;</span> StepByWeb
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost" className="hidden md:inline-flex">Masuk</Button>
            </Link>
            <Link to="/register">
              <Button className="bg-[#4F46E5] hover:bg-[#4338ca] text-white">Daftar Sekarang</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-30 pointer-events-none">
            <div className="absolute top-20 left-20 w-72 h-72 bg-[#4F46E5] rounded-full blur-[128px]" />
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#22C55E] rounded-full blur-[128px]" />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-6 px-4 py-1.5 border-[#4F46E5]/30 bg-[#4F46E5]/10 text-[#4F46E5]">
              🚀 Platform Belajar Web Dev #1 di Indonesia
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Belajar Web Development <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#0EA5E9]">
                Step-by-Step
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              Materi HTML, CSS, dan JavaScript dari dasar sampai mahir, lengkap dengan latihan interaktif dan progress tracker untuk memantau kemajuanmu.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/register">
                <Button size="lg" className="h-14 px-8 text-lg bg-[#4F46E5] hover:bg-[#4338ca]">
                  Mulai Belajar Gratis <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/curriculum">
                 <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-slate-700 hover:bg-slate-800">
                    Lihat Kurikulum
                 </Button>
              </Link>
            </div>
          </motion.div>

          {/* Abstract Visual / Stats */}
          <motion.div 
             initial={{ opacity: 0, y: 40 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.7, delay: 0.2 }}
             className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <Card className="bg-[#111827]/80 backdrop-blur border-slate-800">
                <CardContent className="p-6 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-500">
                        <Zap className="h-6 w-6" />
                    </div>
                    <div className="text-left">
                        <p className="text-sm text-slate-400">Daily Streak</p>
                        <p className="text-2xl font-bold">7 Hari</p>
                    </div>
                </CardContent>
            </Card>
            <Card className="bg-[#111827]/80 backdrop-blur border-slate-800">
                <CardContent className="p-6 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500">
                        <Layout className="h-6 w-6" />
                    </div>
                    <div className="text-left">
                        <p className="text-sm text-slate-400">Progress</p>
                        <p className="text-2xl font-bold">45%</p>
                    </div>
                </CardContent>
            </Card>
            <Card className="bg-[#111827]/80 backdrop-blur border-slate-800">
                <CardContent className="p-6 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-green-500/20 flex items-center justify-center text-green-500">
                        <Trophy className="h-6 w-6" />
                    </div>
                    <div className="text-left">
                        <p className="text-sm text-slate-400">Badge</p>
                        <p className="text-2xl font-bold">Explorer</p>
                    </div>
                </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-[#0F172A]">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Kenapa StepByWeb?</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">Kami mendesain pengalaman belajar yang fokus pada pemahaman konsep dan praktik langsung.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "Materi Bertingkat", desc: "Kurikulum terstruktur dari Basic hingga Advanced.", icon: Layout },
                    { title: "Latihan Interaktif", desc: "Coding langsung di browser tanpa setup rumit.", icon: Code },
                    { title: "Streak Challenge", desc: "Bangun kebiasaan coding setiap hari.", icon: Zap }
                ].map((f, i) => (
                    <Card key={i} className="bg-[#1E293B] border-slate-700 hover:-translate-y-1 transition-transform duration-300">
                        <CardContent className="p-8 text-center">
                            <div className="mx-auto h-14 w-14 rounded-xl bg-[#4F46E5]/10 flex items-center justify-center text-[#4F46E5] mb-6">
                                <f.icon className="h-7 w-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                            <p className="text-slate-400">{f.desc}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-[#0B1220] py-12">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 font-bold text-xl mb-4">
                    <span className="text-[#4F46E5] text-2xl">⚡</span> StepByWeb
                </div>
                <p className="text-slate-400 max-w-xs">
                    Platform belajar coding berbahasa Indonesia dengan kurikulum standar industri.
                </p>
            </div>
            <div>
                <h4 className="font-bold mb-4">Links</h4>
                <ul className="space-y-2 text-slate-400">
                    <li><a href="#" className="hover:text-white">Tentang Kami</a></li>
                    <li><a href="#" className="hover:text-white">Kurikulum</a></li>
                    <li><a href="#" className="hover:text-white">Biaya</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-4">Legal</h4>
                <ul className="space-y-2 text-slate-400">
                    <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                </ul>
            </div>
        </div>
        <div className="container mx-auto px-6 mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            &copy; 2025 StepByWeb. All rights reserved.
        </div>
      </footer>
    </div>
  );
}