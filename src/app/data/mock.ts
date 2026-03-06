import { Code, Hash, Monitor, Trophy, Zap, Clock, CheckCircle, Lock, PlayCircle, FileCode } from "lucide-react";

export const USER = {
  name: "Budi Santoso",
  email: "budi@example.com",
  level: "Intermediate",
  streak: 7,
  points: 1250,
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop",
  progress: {
    html: 75,
    css: 45,
    js: 10
  }
};

export const TRACKS = [
  {
    id: "html",
    title: "HTML Fundamentals",
    description: "Structure the web with semantic HTML.",
    icon: Hash,
    color: "bg-orange-500",
    progress: 75,
    totalLessons: 12,
    completedLessons: 9,
    levels: ["Dasar", "Menengah", "Mahir"]
  },
  {
    id: "css",
    title: "CSS Styling",
    description: "Style your pages with modern CSS.",
    icon: Code,
    color: "bg-blue-500",
    progress: 58,
    totalLessons: 12,
    completedLessons: 7,
    levels: ["Dasar", "Menengah", "Mahir"]
  },
  {
    id: "js",
    title: "JavaScript Logic",
    description: "Make it interactive with JS.",
    icon: Monitor,
    color: "bg-yellow-500",
    progress: 25,
    totalLessons: 12,
    completedLessons: 3,
    levels: ["Dasar", "Menengah", "Mahir"]
  }
];

export const RECENT_ACTIVITY = [
  { id: 1, title: "Selesai: Form Dasar", time: "2 jam lalu", type: "lesson", lessonId: "html-4" },
  { id: 2, title: "Earned Badge: Early Bird", time: "1 hari lalu", type: "badge" },
  { id: 3, title: "Mulai: CSS Grid Layout", time: "2 hari lalu", type: "lesson", lessonId: "css-6" },
  { id: 4, title: "Selesai: Operators & Expressions", time: "3 hari lalu", type: "lesson", lessonId: "js-3" },
  { id: 5, title: "Earned Badge: 7-Day Streak", time: "1 minggu lalu", type: "badge" }
];

export const BADGES = [
  { id: 1, name: "First Run", description: "Completed first lesson", icon: PlayCircle, unlocked: true },
  { id: 2, name: "7-Day Streak", description: "Learning for 7 days in a row", icon: Zap, unlocked: true },
  { id: 3, name: "HTML Beginner", description: "Completed HTML Basic", icon: Hash, unlocked: true },
  { id: 4, name: "CSS Stylist", description: "Completed CSS Basic", icon: Code, unlocked: false },
  { id: 5, name: "JS Explorer", description: "Completed JS Basic", icon: FileCode, unlocked: false },
  { id: 6, name: "Code Master", description: "Completed all Advanced tracks", icon: Trophy, unlocked: false },
];

export const CERTIFICATES = [
  {
    id: "cert-html",
    title: "HTML Fundamentals",
    subtitle: "Sertifikat Penyelesaian Belajar",
    description: "Telah menyelesaikan seluruh materi HTML Fundamentals dengan hasil memuaskan.",
    issuedDate: "15 Januari 2025",
    track: "HTML",
    color: "from-orange-500 to-red-500",
    borderColor: "border-orange-500/30",
    bgColor: "bg-orange-500/10",
    textColor: "text-orange-400",
    earned: true,
    credentialId: "SBW-HTML-2025-001",
  },
  {
    id: "cert-css",
    title: "CSS Styling",
    subtitle: "Sertifikat Penyelesaian Belajar",
    description: "Telah menyelesaikan seluruh materi CSS Styling dengan hasil memuaskan.",
    issuedDate: null,
    track: "CSS",
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500/30",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-400",
    earned: false,
    credentialId: null,
  },
  {
    id: "cert-js",
    title: "JavaScript Logic",
    subtitle: "Sertifikat Penyelesaian Belajar",
    description: "Telah menyelesaikan seluruh materi JavaScript Logic dengan hasil memuaskan.",
    issuedDate: null,
    track: "JavaScript",
    color: "from-yellow-500 to-orange-400",
    borderColor: "border-yellow-500/30",
    bgColor: "bg-yellow-500/10",
    textColor: "text-yellow-400",
    earned: false,
    credentialId: null,
  },
];

export const LESSON_MOCK = {
  id: "html-basics-1",
  title: "Introduction to HTML",
  track: "HTML",
  level: "Basic",
  duration: "10 min",
  content: `
    <h2>Apa itu HTML?</h2>
    <p>HTML adalah singkatan dari HyperText Markup Language. Ini adalah bahasa standar untuk membuat halaman web.</p>
    <br/>
    <h3>Structure Dasar</h3>
    <pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Page Title&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello World&lt;/h1&gt;
    &lt;p&gt;This is a paragraph.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
  `,
  quiz: [
    {
      question: "Apa kepanjangan dari HTML?",
      options: ["HyperText Makeup Language", "HyperText Markup Language", "HyperTool Markup Language"],
      correct: 1
    }
  ],
  defaultCode: `<h1>Hello World</h1>\n<p>Selamat datang di StepByWeb!</p>`
};