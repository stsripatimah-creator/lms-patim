// src/app/components/LPICard.tsx
// Komponen card yang menampilkan nilai LPI user di halaman Progress / Dashboard

import { useLPI, LPIKategori } from "../../hooks/useLPI";

// ─── Helper ───────────────────────────────────────────────────────────────────

function getWarna(kategori: LPIKategori) {
  switch (kategori) {
    case "Tinggi":  return { bar: "#22c55e", text: "#22c55e", bg: "#1E293B" };
    case "Sedang":  return { bar: "#4F46E5", text: "#818cf8", bg: "#1E293B" };
    case "Rendah":  return { bar: "#f59e0b", text: "#f59e0b", bg: "#1E293B" };
    case "Kritis":  return { bar: "#ef4444", text: "#ef4444", bg: "#1E293B" };
  }
}

function getDeskripsi(kategori: LPIKategori): string {
  switch (kategori) {
    case "Tinggi":  return "Luar biasa! Kamu siap untuk materi yang lebih menantang.";
    case "Sedang":  return "Progres bagus! Jaga konsistensi streakmu untuk naik level.";
    case "Rendah":  return "Ada beberapa materi yang perlu di-review. Yuk semangat!";
    case "Kritis":  return "Mulai dari awal tidak apa-apa. Konsistensi adalah kuncinya.";
  }
}

// ─── Komponen ─────────────────────────────────────────────────────────────────

interface LPICardProps {
  userId: string;
}

export default function LPICard({ userId }: LPICardProps) {
  const { nilai, kategori, komponen, loading, error } = useLPI(userId);
  const warna = getWarna(kategori);

  if (loading) {
    return (
      <div className="rounded-xl border border-slate-700 bg-[#1E293B] p-6 animate-pulse">
        <div className="h-4 bg-slate-700 rounded w-1/3 mb-4" />
        <div className="h-8 bg-slate-700 rounded w-1/2 mb-2" />
        <div className="h-3 bg-slate-700 rounded w-full" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl border border-red-500/30 bg-[#1E293B] p-6">
        <p className="text-sm text-red-400">{error}</p>
      </div>
    );
  }

  const persenBar = Math.min(nilai, 100);

  return (
    <div
      className="rounded-xl border p-6"
      style={{ borderColor: warna.bar, backgroundColor: warna.bg }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-sm font-medium text-slate-400">
            Learning Performance Index
          </p>
          <div className="flex items-baseline gap-2 mt-1">
            <span
              className="text-4xl font-bold"
              style={{ color: warna.text }}
            >
              {nilai}
            </span>
            <span className="text-sm text-slate-500">/ 100</span>
          </div>
        </div>
        <span
          className="text-sm font-semibold px-3 py-1 rounded-full"
          style={{ color: warna.text, backgroundColor: warna.bar + "22" }}
        >
          {kategori}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-700 rounded-full h-2 mb-4">
        <div
          className="h-2 rounded-full transition-all duration-700"
          style={{ width: `${persenBar}%`, backgroundColor: warna.bar }}
        />
      </div>

      {/* Deskripsi */}
      <p className="text-sm text-slate-400 mb-5">{getDeskripsi(kategori)}</p>

      {/* Breakdown Komponen */}
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-lg bg-slate-800 p-3 text-center">
          <p className="text-xs text-slate-500 mb-1">Skor</p>
          <p className="text-lg font-bold text-white">{komponen.S}</p>
          <p className="text-xs text-slate-500">bobot 50%</p>
        </div>
        <div className="rounded-lg bg-slate-800 p-3 text-center">
          <p className="text-xs text-slate-500 mb-1">Konsistensi</p>
          <p className="text-lg font-bold text-white">{komponen.K}</p>
          <p className="text-xs text-slate-500">bobot 30%</p>
        </div>
        <div className="rounded-lg bg-slate-800 p-3 text-center">
          <p className="text-xs text-slate-500 mb-1">Aktivitas</p>
          <p className="text-lg font-bold text-white">{komponen.A}</p>
          <p className="text-xs text-slate-500">bobot 20%</p>
        </div>
      </div>
    </div>
  );
}
