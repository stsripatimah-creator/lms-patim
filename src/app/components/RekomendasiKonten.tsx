// src/app/components/RekomendasiKonten.tsx
// Komponen yang menampilkan rekomendasi materi berdasarkan LPI
// Ditaruh di halaman Dashboard tepat di bawah summary cards

import { useNavigate } from "react-router-dom";
import { useLPI, RekomendasiItem, LPIKategori } from "../../hooks/useLPI";

// ─── Helper ───────────────────────────────────────────────────────────────────

function getIkonTipe(tipe: RekomendasiItem["tipe"]): string {
  switch (tipe) {
    case "review":    return "🔄";
    case "lanjut":    return "▶️";
    case "tantangan": return "⚡";
  }
}

function getLabelTipe(tipe: RekomendasiItem["tipe"]): string {
  switch (tipe) {
    case "review":    return "Perlu Review";
    case "lanjut":    return "Lanjutkan";
    case "tantangan": return "Tantangan Baru";
  }
}

function getWarnaLabel(tipe: RekomendasiItem["tipe"]) {
  switch (tipe) {
    case "review":    return "bg-amber-500/20 text-amber-400";
    case "lanjut":    return "bg-blue-500/20 text-blue-400";
    case "tantangan": return "bg-green-500/20 text-green-400";
  }
}

function getJudulSection(kategori: LPIKategori): string {
  switch (kategori) {
    case "Tinggi":  return "Siap untuk Level Berikutnya? ⚡";
    case "Sedang":  return "Lanjutkan Belajarmu 📖";
    case "Rendah":  return "Materi yang Perlu Kamu Review 🔄";
    case "Kritis":  return "Yuk Mulai dari Sini 💪";
  }
}

// ─── Komponen ─────────────────────────────────────────────────────────────────

interface RekomendasiKontenProps {
  userId: string;
}

export default function RekomendasiKonten({ userId }: RekomendasiKontenProps) {
  const navigate = useNavigate();
  const { nilai, kategori, rekomendasi, loading } = useLPI(userId);

  if (loading) {
    return (
      <div className="rounded-xl border border-slate-700 bg-[#1E293B] p-6">
        <div className="h-4 bg-slate-700 rounded w-1/3 mb-4 animate-pulse" />
        <div className="space-y-3">
          {[1, 2].map((i) => (
            <div key={i} className="h-16 bg-slate-800 rounded-lg animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  if (rekomendasi.length === 0) return null;

  function handleKlik(item: RekomendasiItem) {
    if (item.lesson_id === "next" || item.lesson_id === "dasar") {
      navigate("/courses");
    } else {
      navigate(`/courses/${item.track}/${item.lesson_id}`);
    }
  }

  return (
    <div className="rounded-xl border border-slate-700 bg-[#1E293B] p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-white">
            {getJudulSection(kategori)}
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Berdasarkan LPI kamu: {nilai}/100
          </p>
        </div>
        <span className="text-xs text-slate-400 bg-slate-800 px-2 py-1 rounded-full">
          Rekomendasi Adaptif
        </span>
      </div>

      {/* List Rekomendasi */}
      <div className="space-y-3">
        {rekomendasi.map((item, index) => (
          <button
            key={index}
            onClick={() => handleKlik(item)}
            className="w-full text-left flex items-start gap-4 p-4 rounded-lg border border-slate-700 hover:border-slate-500 hover:bg-slate-800 transition-all duration-200 group"
          >
            {/* Ikon */}
            <span className="text-2xl mt-0.5 flex-shrink-0">
              {getIkonTipe(item.tipe)}
            </span>

            {/* Konten */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${getWarnaLabel(item.tipe)}`}
                >
                  {getLabelTipe(item.tipe)}
                </span>
                <span className="text-xs text-slate-500 uppercase tracking-wide">
                  {item.track}
                </span>
              </div>
              <p className="text-sm text-slate-400">{item.alasan}</p>
            </div>

            {/* Arrow */}
            <span className="text-slate-600 group-hover:text-slate-400 transition-colors mt-1 flex-shrink-0">
              →
            </span>
          </button>
        ))}
      </div>

      {/* Footer */}
      <button
        onClick={() => navigate("/courses")}
        className="mt-4 w-full text-center text-sm text-slate-500 hover:text-slate-300 transition-colors py-2"
      >
        Lihat semua materi →
      </button>
    </div>
  );
}
