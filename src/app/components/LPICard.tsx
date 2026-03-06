// src/app/components/LPICard.tsx
import { useTranslation } from "react-i18next";
import { useLPI, LPIKategori } from "../../hooks/useLPI";

function getWarna(kategori: LPIKategori) {
  switch (kategori) {
    case "Tinggi":  return { bar: "#22c55e", text: "#22c55e", bg: "#1E293B" };
    case "Sedang":  return { bar: "#4F46E5", text: "#818cf8", bg: "#1E293B" };
    case "Rendah":  return { bar: "#f59e0b", text: "#f59e0b", bg: "#1E293B" };
    case "Kritis":  return { bar: "#ef4444", text: "#ef4444", bg: "#1E293B" };
  }
}

interface LPICardProps {
  userId: string;
}

export default function LPICard({ userId }: LPICardProps) {
  const { t } = useTranslation();
  const { nilai, kategori, komponen, loading, error } = useLPI(userId);
  const warna = getWarna(kategori);

  const getDeskripsi = (k: LPIKategori): string => {
    switch (k) {
      case "Tinggi":  return t('lpi.descHigh');
      case "Sedang":  return t('lpi.descMedium');
      case "Rendah":  return t('lpi.descLow');
      case "Kritis":  return t('lpi.descCritical');
    }
  };

  const getKategoriLabel = (k: LPIKategori): string => {
    switch (k) {
      case "Tinggi":  return t('lpi.high');
      case "Sedang":  return t('lpi.medium');
      case "Rendah":  return t('lpi.low');
      case "Kritis":  return t('lpi.critical');
    }
  };

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
    <div className="rounded-xl border p-6" style={{ borderColor: warna.bar, backgroundColor: warna.bg }}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-sm font-medium text-slate-400">{t('lpi.title')}</p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-4xl font-bold" style={{ color: warna.text }}>{nilai}</span>
            <span className="text-sm text-slate-500">{t('lpi.outOf')}</span>
          </div>
        </div>
        <span className="text-sm font-semibold px-3 py-1 rounded-full" style={{ color: warna.text, backgroundColor: warna.bar + "22" }}>
          {getKategoriLabel(kategori)}
        </span>
      </div>

      <div className="w-full bg-slate-700 rounded-full h-2 mb-4">
        <div className="h-2 rounded-full transition-all duration-700" style={{ width: `${persenBar}%`, backgroundColor: warna.bar }} />
      </div>

      <p className="text-sm text-slate-400 mb-5">{getDeskripsi(kategori)}</p>

      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-lg bg-slate-800 p-3 text-center">
          <p className="text-xs text-slate-500 mb-1">{t('lpi.score')}</p>
          <p className="text-lg font-bold text-white">{komponen.S}</p>
          <p className="text-xs text-slate-500">{t('lpi.weight50')}</p>
        </div>
        <div className="rounded-lg bg-slate-800 p-3 text-center">
          <p className="text-xs text-slate-500 mb-1">{t('lpi.consistency')}</p>
          <p className="text-lg font-bold text-white">{komponen.K}</p>
          <p className="text-xs text-slate-500">{t('lpi.weight30')}</p>
        </div>
        <div className="rounded-lg bg-slate-800 p-3 text-center">
          <p className="text-xs text-slate-500 mb-1">{t('lpi.activity')}</p>
          <p className="text-lg font-bold text-white">{komponen.A}</p>
          <p className="text-xs text-slate-500">{t('lpi.weight20')}</p>
        </div>
      </div>
    </div>
  );
}
