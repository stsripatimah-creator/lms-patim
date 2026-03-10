import React, { useState, useEffect } from "react";
import { Timer, Zap, HelpCircle, CheckCircle, XCircle, ArrowRight, Trophy, Star, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";
import { useAuth } from "../../context/AuthContext";
import { supabase } from "../../lib/supabase";

const XP_REWARD = 50;
const XP_TARGET = 200;
const QUESTIONS_PER_DAY = 4;

// ─── BANK SOAL ───────────────────────────────────────────────────────────────
const QUESTION_BANK = [
  // CSS
  {
    category: "CSS",
    difficulty: "Intermediate",
    title: "CSS Flexbox – Alignment",
    desc: "Properti mana yang digunakan untuk mengatur alignment vertikal item dalam flex container?",
    options: ["justify-content", "align-items", "flex-direction", "align-content"],
    correct: 1,
    hint: "Properti ini mengatur posisi item pada sumbu silang (cross axis).",
  },
  {
    category: "CSS",
    difficulty: "Intermediate",
    title: "CSS Grid – Full Width",
    desc: "Apa efek dari `grid-column: 1 / -1` pada sebuah elemen dalam grid?",
    options: ["Hanya menempati kolom pertama", "Menempati seluruh lebar grid", "Menempati kolom terakhir saja", "Menyembunyikan elemen"],
    correct: 1,
    hint: "-1 merujuk ke baris grid paling akhir.",
  },
  {
    category: "CSS",
    difficulty: "Beginner",
    title: "CSS Box Model",
    desc: "Properti CSS mana yang mengatur jarak di dalam border elemen?",
    options: ["margin", "padding", "spacing", "border-gap"],
    correct: 1,
    hint: "Jarak di luar border disebut margin, jarak di dalam border disebut...?",
  },
  {
    category: "CSS",
    difficulty: "Intermediate",
    title: "CSS Position",
    desc: "Elemen dengan `position: absolute` ditempatkan relatif terhadap apa?",
    options: ["Viewport browser", "Parent terdekat yang punya position selain static", "Body halaman", "Elemen sebelumnya"],
    correct: 1,
    hint: "Coba periksa parent element-nya, apakah ada yang punya `position: relative`?",
  },
  {
    category: "CSS",
    difficulty: "Advanced",
    title: "CSS Specificity",
    desc: "Urutan spesifisitas CSS dari tertinggi ke terendah yang benar adalah?",
    options: [
      "ID > Class > Tag > Inline",
      "Inline > ID > Class > Tag",
      "Class > ID > Inline > Tag",
      "Tag > Class > ID > Inline"
    ],
    correct: 1,
    hint: "Inline style ditulis langsung di elemen HTML, sehingga ia paling kuat.",
  },
  {
    category: "CSS",
    difficulty: "Intermediate",
    title: "CSS Pseudo-class",
    desc: "Pseudo-class mana yang memilih elemen saat kursor diarahkan ke atasnya?",
    options: [":focus", ":active", ":hover", ":visited"],
    correct: 2,
    hint: "Bayangkan kamu 'melayang' di atas elemen.",
  },
  {
    category: "CSS",
    difficulty: "Beginner",
    title: "CSS Display",
    desc: "Nilai `display` mana yang membuat elemen menjadi block sekaligus inline?",
    options: ["block", "inline", "inline-block", "flex"],
    correct: 2,
    hint: "Nama propertinya adalah gabungan dari dua kata.",
  },

  // HTML
  {
    category: "HTML",
    difficulty: "Beginner",
    title: "HTML Semantic – Article vs Section",
    desc: "Tag HTML mana yang paling tepat untuk membungkus konten berita yang bisa berdiri sendiri?",
    options: ["<section>", "<article>", "<div>", "<main>"],
    correct: 1,
    hint: "Tag ini cocok untuk konten yang bisa didistribusikan secara independen.",
  },
  {
    category: "HTML",
    difficulty: "Beginner",
    title: "HTML Form – Input Type",
    desc: "Input type mana yang secara otomatis memvalidasi format email di browser?",
    options: ['type="text"', 'type="email"', 'type="url"', 'type="search"'],
    correct: 1,
    hint: "Namanya sesuai dengan format data yang ingin divalidasi.",
  },
  {
    category: "HTML",
    difficulty: "Intermediate",
    title: "HTML – Meta Viewport",
    desc: "Apa fungsi dari tag `<meta name='viewport' content='width=device-width'>`?",
    options: [
      "Mengatur warna latar halaman",
      "Membuat halaman responsif di perangkat mobile",
      "Menyembunyikan scrollbar",
      "Mengatur ukuran font default"
    ],
    correct: 1,
    hint: "Tag ini berkaitan dengan tampilan di layar mobile.",
  },
  {
    category: "HTML",
    difficulty: "Beginner",
    title: "HTML – Heading Hierarchy",
    desc: "Untuk SEO dan aksesibilitas yang baik, heading di halaman sebaiknya dimulai dari tag apa?",
    options: ["<h2>", "<h1>", "<h3>", "<strong>"],
    correct: 1,
    hint: "Hierarki dimulai dari angka terkecil.",
  },
  {
    category: "HTML",
    difficulty: "Intermediate",
    title: "HTML – Alt Attribute",
    desc: "Apa tujuan utama atribut `alt` pada tag `<img>`?",
    options: [
      "Menampilkan tooltip saat hover",
      "Mendeskripsikan gambar untuk screen reader dan saat gambar gagal load",
      "Mengatur ukuran gambar",
      "Menambahkan caption di bawah gambar"
    ],
    correct: 1,
    hint: "Ini sangat penting untuk aksesibilitas.",
  },

  // JavaScript
  {
    category: "JavaScript",
    difficulty: "Beginner",
    title: "JavaScript – var vs let",
    desc: "Apa perbedaan utama antara `var` dan `let` di JavaScript?",
    options: [
      "var bisa diubah nilainya, let tidak bisa",
      "let memiliki block scope, var memiliki function scope",
      "var lebih cepat dari let",
      "Tidak ada perbedaan"
    ],
    correct: 1,
    hint: "Perhatikan di mana variabel bisa diakses — di dalam blok `{}` atau di seluruh fungsi?",
  },
  {
    category: "JavaScript",
    difficulty: "Intermediate",
    title: "JavaScript – Arrow Function",
    desc: "Apa yang membedakan arrow function `() => {}` dari function biasa terkait `this`?",
    options: [
      "Arrow function lebih cepat",
      "Arrow function tidak punya `this` sendiri, mewarisi dari scope luar",
      "Arrow function tidak bisa menerima parameter",
      "Arrow function wajib pakai return"
    ],
    correct: 1,
    hint: "`this` di arrow function mengacu ke konteks di mana ia dideklarasikan.",
  },
  {
    category: "JavaScript",
    difficulty: "Intermediate",
    title: "JavaScript – Array Method",
    desc: "Method array mana yang mengembalikan array baru berisi elemen yang lolos kondisi tertentu?",
    options: ["map()", "filter()", "reduce()", "forEach()"],
    correct: 1,
    hint: "Namanya seperti kata kerja yang menyaring/memilih.",
  },
  {
    category: "JavaScript",
    difficulty: "Beginner",
    title: "JavaScript – typeof",
    desc: "Apa hasil dari `typeof null` di JavaScript?",
    options: ['"null"', '"undefined"', '"object"', '"boolean"'],
    correct: 2,
    hint: "Ini adalah bug terkenal di JavaScript yang sudah ada sejak awal.",
  },
  {
    category: "JavaScript",
    difficulty: "Intermediate",
    title: "JavaScript – Promise",
    desc: "Method Promise mana yang dijalankan baik saat resolve maupun reject?",
    options: [".then()", ".catch()", ".finally()", ".done()"],
    correct: 2,
    hint: "Namanya menandakan 'akhir dari segalanya'.",
  },
  {
    category: "JavaScript",
    difficulty: "Advanced",
    title: "JavaScript – Event Loop",
    desc: "Apa urutan eksekusi yang benar untuk kode berikut?\n`console.log('A'); setTimeout(() => console.log('B'), 0); console.log('C');`",
    options: ["A, B, C", "B, A, C", "A, C, B", "C, A, B"],
    correct: 2,
    hint: "setTimeout selalu dieksekusi setelah call stack kosong, meski delay-nya 0.",
  },
  {
    category: "JavaScript",
    difficulty: "Intermediate",
    title: "JavaScript – Destructuring",
    desc: "Apa hasil dari: `const { a, b = 10 } = { a: 5 }`?",
    options: ["a=5, b=undefined", "a=5, b=10", "a=undefined, b=10", "Error"],
    correct: 1,
    hint: "Nilai default dipakai saat properti tidak ditemukan di objek.",
  },

  // Git & Terminal
  {
    category: "Git",
    difficulty: "Beginner",
    title: "Git – Perintah Dasar",
    desc: "Perintah Git mana yang digunakan untuk menyimpan perubahan ke repository lokal?",
    options: ["git push", "git commit", "git save", "git add"],
    correct: 1,
    hint: "Perintah ini 'mengunci' snapshot perubahan kamu.",
  },
  {
    category: "Git",
    difficulty: "Beginner",
    title: "Git – Branch",
    desc: "Perintah mana yang digunakan untuk membuat branch baru sekaligus langsung berpindah ke sana?",
    options: ["git branch nama", "git checkout -b nama", "git switch nama", "git new nama"],
    correct: 1,
    hint: "Flag `-b` berarti 'buat baru'.",
  },
  {
    category: "Git",
    difficulty: "Intermediate",
    title: "Git – Merge vs Rebase",
    desc: "Apa perbedaan utama antara `git merge` dan `git rebase`?",
    options: [
      "merge lebih cepat dari rebase",
      "rebase menulis ulang history menjadi linear, merge membuat merge commit",
      "merge hanya untuk branch utama",
      "rebase tidak bisa digunakan di tim"
    ],
    correct: 1,
    hint: "Salah satunya menghasilkan history yang 'lurus', satunya membuat percabangan.",
  },
  {
    category: "Git",
    difficulty: "Beginner",
    title: "Terminal – Navigasi",
    desc: "Perintah terminal mana yang digunakan untuk berpindah ke folder lain?",
    options: ["ls", "pwd", "cd", "mkdir"],
    correct: 2,
    hint: "Singkatan dari 'change directory'.",
  },
  {
    category: "Git",
    difficulty: "Intermediate",
    title: "Git – Undo Changes",
    desc: "Perintah mana yang digunakan untuk membatalkan commit terakhir tapi TETAP menyimpan perubahannya di working directory?",
    options: ["git revert HEAD", "git reset --soft HEAD~1", "git reset --hard HEAD~1", "git checkout HEAD~1"],
    correct: 1,
    hint: "`--soft` artinya lembut — perubahan tidak ikut dihapus.",
  },
  {
    category: "Git",
    difficulty: "Beginner",
    title: "Terminal – List Files",
    desc: "Perintah terminal mana yang menampilkan semua file termasuk file tersembunyi?",
    options: ["ls", "ls -a", "ls -l", "dir"],
    correct: 1,
    hint: "Flag `-a` singkatan dari 'all'.",
  },
];

// ─── FUNGSI PILIH SOAL BERDASARKAN TANGGAL ───────────────────────────────────
function getDailyQuestions() {
  const today = new Date();
  // Seed berdasarkan tanggal — semua user dapat soal yang sama tiap hari
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();

  // Simple seeded shuffle
  const shuffled = [...QUESTION_BANK];
  let s = seed;
  for (let i = shuffled.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    const j = Math.abs(s) % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, QUESTIONS_PER_DAY);
}

// ─── COMPONENT ───────────────────────────────────────────────────────────────
export function Challenge() {
  const { user, profile, refreshProfile } = useAuth();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answeredList, setAnsweredList] = useState<(boolean | null)[]>(Array(QUESTIONS_PER_DAY).fill(null));
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [xpToday, setXpToday] = useState<number | null>(null);
  const [showChampionModal, setShowChampionModal] = useState(false);
  const [alreadyChampion, setAlreadyChampion] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const streak = profile?.streak ?? 0;
  const points = profile?.points ?? 0;
  const xpBonus = streak >= 7 ? 35 : streak >= 3 ? 15 : 0;

  const dailyQuestions = React.useMemo(() => getDailyQuestions(), []);
  const currentQ = dailyQuestions[currentIdx];
  const answered = answeredList[currentIdx];
  const allDone = answeredList.every(a => a !== null);
  const correctCount = answeredList.filter(a => a === true).length;

  // Load xpToday dari Supabase
  useEffect(() => {
    if (!user) return;
    const load = async () => {
      const { data } = await supabase
        .from('profiles')
        .select('xp_today, last_active, daily_champion_at')
        .eq('id', user.id)
        .single();

      if (data) {
        const today = new Date().toDateString();
        const lastActive = data.last_active ? new Date(data.last_active).toDateString() : null;
        setXpToday(lastActive === today ? (data.xp_today ?? 0) : 0);

        const championAt = data.daily_champion_at ? new Date(data.daily_champion_at).toDateString() : null;
        if (championAt === today) setAlreadyChampion(true);
      } else {
        setXpToday(0);
      }
    };
    load();
  }, [user]);

  const updateSupabase = async (xpGained: number) => {
    if (!user) return;
    try {
      const { data: profileData } = await supabase
        .from('profiles')
        .select('points, streak, last_active, xp_today, daily_champion_at')
        .eq('id', user.id)
        .single();

      if (!profileData) return;

      const today = new Date().toDateString();
      const lastActive = profileData.last_active ? new Date(profileData.last_active).toDateString() : null;
      const yesterdayDate = new Date();
      yesterdayDate.setDate(yesterdayDate.getDate() - 1);
      const yesterday = yesterdayDate.toDateString();

      let newStreak = profileData.streak || 0;
      if (lastActive === today) newStreak = profileData.streak;
      else if (lastActive === yesterday) newStreak = (profileData.streak || 0) + 1;
      else newStreak = 1;

      const currentXpToday = lastActive === today ? ((profileData as any).xp_today ?? 0) : 0;
      const newXpToday = currentXpToday + xpGained;

      const championAt = (profileData as any).daily_champion_at
        ? new Date((profileData as any).daily_champion_at).toDateString() : null;
      const justReached200 = newXpToday >= XP_TARGET && currentXpToday < XP_TARGET;
      const alreadyGotChampion = championAt === today;

      const payload: any = {
        points: (profileData.points || 0) + xpGained,
        streak: newStreak,
        xp_today: newXpToday,
        last_active: new Date().toISOString(),
      };
      if (justReached200 && !alreadyGotChampion) {
        payload.daily_champion_at = new Date().toISOString();
      }

      await supabase.from('profiles').update(payload).eq('id', user.id);
      await supabase.from('user_streaks').upsert({
        user_id: user.id,
        current_streak: newStreak,
        longest_streak: Math.max(newStreak, profileData.streak || 0),
        last_activity_date: new Date().toISOString()
      }, { onConflict: 'user_id' });

      setXpToday(newXpToday);
      await refreshProfile();
      toast.success(`+${xpGained} XP berhasil diklaim! 🎉`);

      if (justReached200 && !alreadyGotChampion) {
        setTimeout(() => setShowChampionModal(true), 800);
      }
    } catch (err) {
      console.error(err);
      toast.error('Gagal menyimpan progress.');
    }
  };

  const handleSubmit = async () => {
    if (selectedOption === null) return;
    const isCorrect = selectedOption === currentQ.correct;
    const newList = [...answeredList];
    newList[currentIdx] = isCorrect;
    setAnsweredList(newList);

    if (isCorrect) {
      const xpGained = Math.round(XP_REWARD * (1 + xpBonus / 100));
      await updateSupabase(xpGained);
    } else {
      toast.error('Jawaban kurang tepat!');
    }
    setShowHint(false);
  };

  const handleNext = () => {
    if (currentIdx < QUESTIONS_PER_DAY - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOption(null);
      setShowHint(false);
    }
  };

  const xpDisplay = xpToday ?? 0;
  const progressPercent = Math.min((xpDisplay / XP_TARGET) * 100, 100);
  const isLoading = xpToday === null;
  const isChampion = alreadyChampion || xpDisplay >= XP_TARGET;

  const categoryColor: Record<string, string> = {
    CSS: "bg-blue-500/20 text-blue-400 border-blue-500/50",
    HTML: "bg-orange-500/20 text-orange-400 border-orange-500/50",
    JavaScript: "bg-yellow-500/20 text-yellow-400 border-yellow-500/50",
    Git: "bg-green-500/20 text-green-400 border-green-500/50",
  };

  return (
    <>
      <div className="grid lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="lg:col-span-2 space-y-6">

          {/* Header */}
          <div className="text-center space-y-2">
            <Badge variant="outline" className="border-orange-500/50 text-orange-500 bg-orange-500/10 px-3 py-1">
              <Zap className="h-3 w-3 mr-1" /> Streak: {streak} hari
            </Badge>
            <h1 className="text-3xl font-bold">Daily Challenge</h1>
            <div className="flex items-center justify-center gap-2 text-slate-400 font-mono">
              <Timer className="h-4 w-4" /> Reset dalam 06:12:45
            </div>
          </div>

          {/* Progress soal */}
          <div className="flex items-center gap-2">
            {dailyQuestions.map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrentIdx(i); setSelectedOption(null); setShowHint(false); }}
                className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                  answeredList[i] === true ? 'bg-green-500' :
                  answeredList[i] === false ? 'bg-red-500' :
                  i === currentIdx ? 'bg-orange-500' : 'bg-slate-700'
                }`}
              />
            ))}
            <span className="text-xs text-slate-400 ml-1 whitespace-nowrap">
              {correctCount}/{QUESTIONS_PER_DAY} benar
            </span>
          </div>

          {/* Soal Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="bg-[#1E293B] border-slate-700 overflow-hidden relative">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-500 to-red-500" />
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex gap-2">
                      <Badge className={categoryColor[currentQ.category] || "bg-slate-700 text-slate-300"}>
                        {currentQ.category}
                      </Badge>
                      <Badge variant="outline" className="text-slate-400 border-slate-600 text-xs">
                        {currentQ.difficulty}
                      </Badge>
                    </div>
                    <div className="text-orange-500 font-bold text-sm">+{XP_REWARD} XP</div>
                  </div>
                  <CardTitle className="mt-3 text-xl">{currentQ.title}</CardTitle>
                  <p className="text-slate-400 mt-1 whitespace-pre-line">{currentQ.desc}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  {currentQ.options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => answered === null && setSelectedOption(idx)}
                      disabled={answered !== null}
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between font-mono text-sm
                        ${selectedOption === idx && answered === null ? 'border-orange-500 bg-orange-500/10 text-white' : 'border-slate-700 bg-slate-800/50 text-slate-300 hover:bg-slate-800 hover:border-slate-600'}
                        ${answered !== null && idx === currentQ.correct ? 'border-green-500 bg-green-500/20 text-green-300' : ''}
                        ${answered === false && selectedOption === idx ? 'border-red-500 bg-red-500/20 text-red-300' : ''}
                      `}
                    >
                      <span>{opt}</span>
                      {answered !== null && idx === currentQ.correct && <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />}
                      {answered === false && selectedOption === idx && <XCircle className="h-5 w-5 text-red-500 shrink-0" />}
                    </button>
                  ))}
                </CardContent>
                <CardFooter className="pt-2 pb-6 flex flex-col gap-3">
                  {answered === true ? (
                    <div className="w-full text-center py-3 rounded-xl bg-green-500/20 text-green-400 font-semibold">
                      ✓ Jawaban benar! +{Math.round(XP_REWARD * (1 + xpBonus / 100))} XP diklaim 🎉
                    </div>
                  ) : answered === false ? (
                    <div className="w-full text-center py-3 rounded-xl bg-red-500/20 text-red-400 font-semibold">
                      ✗ Jawaban kurang tepat
                    </div>
                  ) : (
                    <Button className="bg-orange-500 hover:bg-orange-600 w-full" onClick={handleSubmit} disabled={selectedOption === null}>
                      Submit Jawaban
                    </Button>
                  )}

                  {/* Navigasi antar soal */}
                  {answered !== null && currentIdx < QUESTIONS_PER_DAY - 1 && (
                    <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-800" onClick={handleNext}>
                      Soal Berikutnya <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Hint */}
          {answered === null && (
            <div className="flex justify-end">
              <button
                className="text-xs text-slate-500 hover:text-blue-400 transition-colors flex items-center gap-1"
                onClick={() => setShowHint(!showHint)}
              >
                <HelpCircle className="h-3 w-3" /> {showHint ? 'Sembunyikan hint' : 'Tampilkan hint'}
              </button>
            </div>
          )}
          {showHint && (
            <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 flex gap-3 text-sm text-slate-300">
              <HelpCircle className="h-5 w-5 text-blue-400 shrink-0" />
              <p><strong>Hint:</strong> {currentQ.hint}</p>
            </motion.div>
          )}

          {/* Summary kalau semua soal selesai */}
          {allDone && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="p-6 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 text-center space-y-2">
              <div className="text-3xl">{correctCount === QUESTIONS_PER_DAY ? '🏆' : correctCount >= 3 ? '🎉' : '💪'}</div>
              <p className="font-bold text-lg">Challenge Selesai!</p>
              <p className="text-slate-400 text-sm">{correctCount} dari {QUESTIONS_PER_DAY} soal benar • +{correctCount * XP_REWARD} XP total</p>
              <p className="text-xs text-slate-500">Soal baru tersedia besok pukul 00:00</p>
            </motion.div>
          )}

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-[#1E293B] border-slate-700 p-4 flex flex-col items-center justify-center text-center">
              <div className="text-sm text-slate-400">Total Poin</div>
              <div className="text-2xl font-bold text-white">{points}</div>
            </Card>
            <Card className="bg-[#1E293B] border-slate-700 p-4 flex flex-col items-center justify-center text-center">
              <div className="text-sm text-slate-400">XP Hari Ini</div>
              <div className="text-2xl font-bold text-orange-500">
                {isLoading ? '...' : xpDisplay > 0 ? `+${xpDisplay}` : '0'}
              </div>
            </Card>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* XP Progress */}
          <Card className={`overflow-hidden border transition-all duration-500 ${isChampion ? 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/50' : 'bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/30'}`}>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Zap className="h-5 w-5 text-orange-500" /> XP Hari Ini
                {isChampion && (
                  <Badge className="ml-auto bg-yellow-500/20 text-yellow-400 border border-yellow-500/50 text-xs">
                    🏆 Champion!
                  </Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-4xl font-bold mb-2 ${isLoading ? 'text-slate-500' : isChampion ? 'text-yellow-400' : 'text-orange-500'}`}>
                {isLoading ? '...' : `+${xpDisplay}`}
              </div>
              <div className="flex justify-between text-sm mb-1">
                <p className="text-slate-400">Target: {XP_TARGET} XP / hari</p>
                <p className="text-slate-400">{isLoading ? '' : `${Math.round(progressPercent)}%`}</p>
              </div>
              <div className="mt-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${isChampion ? 'bg-gradient-to-r from-yellow-400 to-orange-400' : 'bg-gradient-to-r from-orange-500 to-red-500'}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </div>
              {!isLoading && !isChampion && (
                <p className="text-xs text-slate-500 mt-2">{XP_TARGET - xpDisplay} XP lagi untuk unlock Daily Champion 🏆</p>
              )}
              {isChampion && (
                <p className="text-xs text-yellow-500/70 mt-2">Target harian tercapai! Kembali besok 🔥</p>
              )}
            </CardContent>
          </Card>

          {/* Soal progress */}
          <Card className="bg-[#1E293B] border-slate-700">
            <CardHeader><CardTitle className="text-base">Soal Hari Ini</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              {dailyQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrentIdx(i); setSelectedOption(null); setShowHint(false); }}
                  className={`w-full flex items-center gap-3 p-2 rounded-lg transition-colors text-left ${i === currentIdx ? 'bg-slate-700' : 'hover:bg-slate-800/50'}`}
                >
                  <div className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                    answeredList[i] === true ? 'bg-green-500/20 text-green-400' :
                    answeredList[i] === false ? 'bg-red-500/20 text-red-400' :
                    i === currentIdx ? 'bg-orange-500/20 text-orange-400' : 'bg-slate-700 text-slate-400'
                  }`}>
                    {answeredList[i] === true ? '✓' : answeredList[i] === false ? '✗' : i + 1}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-slate-300 truncate">{q.title}</p>
                    <p className="text-xs text-slate-500">{q.category} · {q.difficulty}</p>
                  </div>
                </button>
              ))}
            </CardContent>
          </Card>

          {/* Streak */}
          <Card className="bg-[#1E293B] border-slate-700">
            <CardHeader><CardTitle className="text-base">Streak Multiplier</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                <span className="text-sm text-slate-400">Streak saat ini</span>
                <span className="font-bold text-orange-500">{streak} hari</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                <span className="text-sm text-slate-400">Bonus XP</span>
                <span className={`font-bold ${xpBonus > 0 ? 'text-green-500' : 'text-slate-500'}`}>+{xpBonus}%</span>
              </div>
              <p className="text-xs text-slate-500">Streak 3 hari = +15% XP, streak 7 hari = +35% XP</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Daily Champion Modal */}
      <AnimatePresence>
        {showChampionModal && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            onClick={() => setShowChampionModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.4 }}
              className="bg-[#1E293B] border border-yellow-500/50 rounded-2xl max-w-sm w-full p-8 text-center relative overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 pointer-events-none" />
              {[...Array(6)].map((_, i) => (
                <motion.div key={i} className="absolute text-yellow-400 text-lg select-none"
                  style={{ top: `${10 + i * 12}%`, left: i % 2 === 0 ? `${5 + i * 3}%` : `${75 + i * 3}%` }}
                  animate={{ y: [-5, 5, -5], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}>✨</motion.div>
              ))}
              <motion.div animate={{ rotate: [0, -10, 10, -10, 0], scale: [1, 1.15, 1] }}
                transition={{ duration: 0.6, delay: 0.2 }} className="text-6xl mb-4">🏆</motion.div>
              <h2 className="text-2xl font-bold text-yellow-400 mb-1">Daily Champion!</h2>
              <p className="text-slate-400 text-sm mb-6">
                Luar biasa! Kamu berhasil mencapai <span className="text-white font-bold">200 XP</span> hari ini.
              </p>
              <div className="bg-slate-800/80 rounded-xl p-4 mb-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm flex items-center gap-2"><Star className="h-4 w-4 text-yellow-400" /> XP Hari Ini</span>
                  <span className="text-yellow-400 font-bold">+{xpDisplay} XP</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm flex items-center gap-2"><Trophy className="h-4 w-4 text-orange-400" /> Badge Baru</span>
                  <span className="text-orange-400 font-bold">Daily Champion 🏆</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm flex items-center gap-2"><Zap className="h-4 w-4 text-blue-400" /> Bonus Besok</span>
                  <span className="text-blue-400 font-bold">+10 XP bonus</span>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 font-bold"
                onClick={() => setShowChampionModal(false)}>
                Keren, lanjutkan! 🚀
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
