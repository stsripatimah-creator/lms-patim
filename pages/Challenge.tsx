import React, { useState } from "react";
import { Timer, Zap, HelpCircle, CheckCircle, XCircle, Code, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { motion } from "motion/react";
import { toast } from "sonner";
import { useAuth } from "../../context/AuthContext";
import { supabase } from "../../lib/supabase";
import { useTranslation } from "react-i18next";

const XP_REWARD = 50;

const QUESTION_POOL = [
  {
    title: "CSS Flexbox Challenge",
    desc: "Properti mana yang digunakan untuk mengatur alignment vertikal dalam flex container?",
    options: ["justify-content", "align-items", "flex-direction", "align-content"],
    correct: 1,
    category: "CSS Intermediate"
  },
  {
    title: "HTML Semantik",
    desc: "Tag HTML mana yang paling tepat untuk menampilkan navigasi utama sebuah website?",
    options: ["<div>", "<section>", "<nav>", "<header>"],
    correct: 2,
    category: "HTML Basic"
  },
  {
    title: "JavaScript Variable",
    desc: "Keyword mana yang digunakan untuk mendeklarasikan variabel yang nilainya tidak bisa diubah?",
    options: ["var", "let", "const", "static"],
    correct: 2,
    category: "JS Basic"
  },
  {
    title: "CSS Box Model",
    desc: "Urutan yang benar dari luar ke dalam pada CSS Box Model adalah?",
    options: ["margin → border → padding → content", "padding → border → margin → content", "border → margin → padding → content", "content → padding → margin → border"],
    correct: 0,
    category: "CSS Basic"
  },
  {
    title: "HTML Form",
    desc: "Atribut apa yang digunakan untuk membuat input wajib diisi sebelum form disubmit?",
    options: ["mandatory", "required", "validate", "important"],
    correct: 1,
    category: "HTML Intermediate"
  },
  {
    title: "CSS Selector",
    desc: "Selector CSS mana yang memiliki specificity paling tinggi?",
    options: ["element selector", "class selector", "ID selector", "universal selector"],
    correct: 2,
    category: "CSS Intermediate"
  },
  {
    title: "JavaScript Array",
    desc: "Method mana yang digunakan untuk menambahkan elemen di akhir array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correct: 0,
    category: "JS Basic"
  },
  {
    title: "HTML Link",
    desc: "Atribut apa yang digunakan untuk membuka link di tab baru?",
    options: ["target='_self'", "target='_blank'", "target='_new'", "target='_tab'"],
    correct: 1,
    category: "HTML Basic"
  },
  {
    title: "CSS Flexbox Direction",
    desc: "Nilai default dari properti flex-direction adalah?",
    options: ["column", "row-reverse", "row", "column-reverse"],
    correct: 2,
    category: "CSS Intermediate"
  },
  {
    title: "JavaScript DOM",
    desc: "Method mana yang digunakan untuk memilih elemen HTML berdasarkan ID-nya?",
    options: ["document.querySelector()", "document.getElement()", "document.getElementById()", "document.findById()"],
    correct: 2,
    category: "JS Intermediate"
  },
];

// Pilih soal berdasarkan hari (ganti tiap hari, konsisten dalam 1 hari)
function getDailyQuestion() {
  const dayIndex = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
  return QUESTION_POOL[dayIndex % QUESTION_POOL.length];
}

export function Challenge() {
  const { user, profile } = useAuth();
  const { t } = useTranslation();
  const [answered, setAnswered] = useState<boolean | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [xpToday, setXpToday] = useState(0);

  const streak = profile?.streak ?? 0;
  const points = profile?.points ?? 0;
  const xpBonus = streak >= 7 ? 35 : streak >= 3 ? 15 : 0;

  const QUESTION = getDailyQuestion();

  const updateSupabase = async () => {
    if (!user) return;
    try {
      const { data: profileData } = await supabase
        .from('profiles')
        .select('points, streak, last_active')
        .eq('id', user.id)
        .single();

      if (profileData) {
        const today = new Date().toDateString();
        const lastActive = profileData.last_active
          ? new Date(profileData.last_active).toDateString()
          : null;
        const yesterday = new Date(Date.now() - 86400000).toDateString();

        let newStreak = profileData.streak || 0;
        if (lastActive === today) {
          newStreak = profileData.streak;
        } else if (lastActive === yesterday) {
          newStreak = (profileData.streak || 0) + 1;
        } else {
          newStreak = 1;
        }

        const xpGained = Math.round(XP_REWARD * (1 + xpBonus / 100));
        setXpToday(xpGained);

        await supabase.from('profiles').update({
          points: (profileData.points || 0) + xpGained,
          streak: newStreak,
          last_active: new Date().toISOString()
        }).eq('id', user.id);
      }
    } catch (err) {
      console.error('Error updating Supabase:', err);
    }
  };

  const handleSubmit = async () => {
    if (selectedOption === null) return;
    if (selectedOption === QUESTION.correct) {
      setAnswered(true);
      await updateSupabase();
      const xpGained = Math.round(XP_REWARD * (1 + xpBonus / 100));
      toast.success(`Jawaban Benar! +${xpGained} XP telah diklaim!`);
    } else {
      setAnswered(false);
      toast.error(t('challenge.wrong'));
    }
  };

  return (
    <div className="grid lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="lg:col-span-2 space-y-8">
        <div className="text-center space-y-2">
          <Badge variant="outline" className="border-orange-500/50 text-orange-500 bg-orange-500/10 px-3 py-1">
            <Zap className="h-3 w-3 mr-1" /> {t('challenge.dailyStreak', { streak })}
          </Badge>
          <h1 className="text-3xl font-bold">{t('challenge.title')}</h1>
          <div className="flex items-center justify-center gap-2 text-slate-400 font-mono">
            <Timer className="h-4 w-4" /> {t('challenge.resetIn')} 06:12:45
          </div>
        </div>

        <Card className="bg-[#1E293B] border-slate-700 overflow-hidden relative">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-500 to-red-500" />
          <CardHeader>
            <div className="flex justify-between items-start">
              <Badge className="bg-slate-700 text-slate-300">{QUESTION.category}</Badge>
              <div className="text-orange-500 font-bold">+{XP_REWARD} XP</div>
            </div>
            <CardTitle className="mt-4 text-xl">{QUESTION.title}</CardTitle>
            <p className="text-slate-400 mt-2">{QUESTION.desc}</p>
          </CardHeader>
          <CardContent className="space-y-3">
            {QUESTION.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => !answered && setSelectedOption(idx)}
                disabled={answered === true}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between
                  ${selectedOption === idx ? 'border-orange-500 bg-orange-500/10 text-white' : 'border-slate-700 bg-slate-800/50 text-slate-300 hover:bg-slate-800 hover:border-slate-600'}
                  ${answered !== null && idx === QUESTION.correct ? 'border-green-500 bg-green-500/20' : ''}
                  ${answered === false && selectedOption === idx ? 'border-red-500 bg-red-500/20' : ''}
                `}
              >
                <span>{opt}</span>
                {answered !== null && idx === QUESTION.correct && <CheckCircle className="h-5 w-5 text-green-500" />}
                {answered === false && selectedOption === idx && <XCircle className="h-5 w-5 text-red-500" />}
              </button>
            ))}
          </CardContent>
          <CardFooter className="pt-2 pb-6">
            {answered === true ? (
              <Button className="bg-green-600 hover:bg-green-700 w-full cursor-default" disabled>
                <CheckCircle className="h-4 w-4 mr-2" /> Reward Telah Diklaim!
              </Button>
            ) : (
              <Button className="bg-orange-500 hover:bg-orange-600 w-full" onClick={handleSubmit} disabled={selectedOption === null}>
                {t('challenge.submitAnswer')}
              </Button>
            )}
          </CardFooter>
        </Card>

        <Card className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-indigo-500/30 overflow-hidden relative">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500" />
          <CardHeader>
            <div className="flex justify-between items-start">
              <Badge className="bg-indigo-500/20 text-indigo-400 border-indigo-500/50">HTML + CSS</Badge>
              <div className="text-indigo-400 font-bold">+30 XP</div>
            </div>
            <CardTitle className="mt-4 text-xl flex items-center gap-2">
              <Code className="h-5 w-5 text-indigo-400" /> {t('challenge.codingChallenge')}
            </CardTitle>
            <p className="text-slate-400 mt-2">{t('challenge.codingDesc')}</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">{t('challenge.difficulty')}</span>
                <Badge variant="outline" className="text-indigo-400 border-indigo-500/50">{t('challenge.intermediate')}</Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">{t('challenge.estimatedTime')}</span>
                <span className="text-white font-medium">15 {t('challenge.minutes')}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-2 pb-6">
            <Button className="bg-indigo-600 hover:bg-indigo-700 w-full group" onClick={() => toast.info(t('challenge.comingSoon'))}>
              {t('challenge.startChallenge')} <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardFooter>
        </Card>

        {answered === false && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 flex gap-3 text-sm text-slate-300">
            <HelpCircle className="h-5 w-5 text-blue-400 shrink-0" />
            <p><strong>{t('challenge.hint')}:</strong> {t('challenge.hintText')}</p>
          </motion.div>
        )}

        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-[#1E293B] border-slate-700 p-4 flex flex-col items-center justify-center text-center">
            <div className="text-sm text-slate-400">{t('challenge.totalPoints')}</div>
            <div className="text-2xl font-bold text-white">{points}</div>
          </Card>
          <Card className="bg-[#1E293B] border-slate-700 p-4 flex flex-col items-center justify-center text-center">
            <div className="text-sm text-slate-400">{t('challenge.xpToday')}</div>
            <div className="text-2xl font-bold text-orange-500">{xpToday > 0 ? `+${xpToday}` : '0'}</div>
          </Card>
        </div>
      </div>

      <div className="space-y-6">
        <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/30">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Zap className="h-5 w-5 text-orange-500" /> {t('challenge.xpToday')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-orange-500 mb-2">+{xpToday}</div>
            <p className="text-sm text-slate-400">{t('challenge.xpTarget')}</p>
            <div className="mt-3 h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-500"
                style={{ width: `${Math.min((xpToday / 200) * 100, 100)}%` }} />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1E293B] border-slate-700">
          <CardHeader><CardTitle className="text-base">{t('challenge.streakMultiplier')}</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
              <span className="text-sm text-slate-400">{t('challenge.currentStreak')}</span>
              <span className="font-bold text-orange-500">{streak} {t('challenge.days')}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
              <span className="text-sm text-slate-400">{t('challenge.xpBonus')}</span>
              <span className={`font-bold ${xpBonus > 0 ? 'text-green-500' : 'text-slate-500'}`}>+{xpBonus}%</span>
            </div>
            <p className="text-xs text-slate-500 mt-2">{t('challenge.streakTip')}</p>
          </CardContent>
        </Card>

        <Card className="bg-[#1E293B] border-slate-700">
          <CardHeader><CardTitle className="text-base">{t('challenge.nextBadge')}</CardTitle></CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-12 w-12 bg-yellow-500/20 rounded-full flex items-center justify-center text-2xl">🏆</div>
              <div>
                <p className="font-medium">Challenge Master</p>
                <p className="text-xs text-slate-400">30 {t('challenge.challenges')}</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">{t('challenge.progress')}</span>
                <span className="font-bold">0/30</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-yellow-500 to-orange-500" style={{ width: '0%' }} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
