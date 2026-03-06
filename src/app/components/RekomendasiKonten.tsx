// src/app/components/RekomendasiKonten.tsx
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLPI, RekomendasiItem, LPIKategori } from "../../hooks/useLPI";

function getIkonTipe(tipe: RekomendasiItem["tipe"]): string {
  switch (tipe) {
    case "review":    return "🔄";
    case "lanjut":    return "▶️";
    case "tantangan": return "⚡";
  }
}

function getWarnaLabel(tipe: RekomendasiItem["tipe"]) {
  switch (tipe) {
    case "review":    return "bg-amber-500/20 text-amber-400";
    case "lanjut":    return "bg-blue-500/20 text-blue-400";
    case "tantangan": return "bg-green-500/20 text-green-400";
  }
}

interface RekomendasiKontenProps {
  userId: string;
}

export default function RekomendasiKonten({ userId }: RekomendasiKontenProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { nilai, kategori, rekomendasi, loading } = useLPI(userId);

  const getLabelTipe = (tipe: RekomendasiItem["tipe"]): string => {
    switch (tipe) {
      case "review":    return t('rekomendasi.review');
      case "lanjut":    return t('rekomendasi.continue');
      case "tantangan": return t('rekomendasi.challenge');
    }
  };

  const getJudulSection = (k: LPIKategori): string => {
    switch (k) {
      case "Tinggi":  return t('rekomendasi.titleHigh');
      case "Sedang":  return t('rekomendasi.titleMedium');
      case "Rendah":  return t('rekomendasi.titleLow');
      case "Kritis":  return t('rekomendasi.titleCritical');
    }
  };

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
      navigate(`/lessons/${item.lesson_id}`);
    }
  }

  return (
    <div className="rounded-xl border border-slate-700 bg-[#1E293B] p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-white">{getJudulSection(kategori)}</h3>
          <p className="text-xs text-slate-500 mt-0.5">
            {t('rekomendasi.basedOnLPI', { nilai })}
          </p>
        </div>
        <span className="text-xs text-slate-400 bg-slate-800 px-2 py-1 rounded-full">
          {t('rekomendasi.adaptiveRec')}
        </span>
      </div>

      <div className="space-y-3">
        {rekomendasi.map((item, index) => (
          <button
            key={index}
            onClick={() => handleKlik(item)}
            className="w-full text-left flex items-start gap-4 p-4 rounded-lg border border-slate-700 hover:border-slate-500 hover:bg-slate-800 transition-all duration-200 group"
          >
            <span className="text-2xl mt-0.5 flex-shrink-0">{getIkonTipe(item.tipe)}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${getWarnaLabel(item.tipe)}`}>
                  {getLabelTipe(item.tipe)}
                </span>
                <span className="text-xs text-slate-500 uppercase tracking-wide">{item.track}</span>
              </div>
              <p className="text-sm text-slate-400">{item.alasan}</p>
            </div>
            <span className="text-slate-600 group-hover:text-slate-400 transition-colors mt-1 flex-shrink-0">→</span>
          </button>
        ))}
      </div>

      <button
        onClick={() => navigate("/courses")}
        className="mt-4 w-full text-center text-sm text-slate-500 hover:text-slate-300 transition-colors py-2"
      >
        {t('rekomendasi.viewAll')}
      </button>
    </div>
  );
}
