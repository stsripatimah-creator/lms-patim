// src/hooks/useLPI.ts
// Custom hook untuk menghitung Learning Performance Index (LPI)
// LPI = (0.5 × S) + (0.3 × K) + (0.2 × A)

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

// ─── Types ────────────────────────────────────────────────────────────────────

export type LPIKategori = "Tinggi" | "Sedang" | "Rendah" | "Kritis";

export interface KomponenLPI {
  S: number; // Skor rata-rata (0–100)
  K: number; // Konsistensi streak (0–100)
  A: number; // Aktivitas penyelesaian (0–100)
}

export interface HasilLPI {
  nilai: number;
  kategori: LPIKategori;
  komponen: KomponenLPI;
  rekomendasi: RekomendasiItem[];
  loading: boolean;
  error: string | null;
}

export interface RekomendasiItem {
  lesson_id: string;
  track: string;
  alasan: string;
  tipe: "review" | "lanjut" | "tantangan";
}

// ─── Konstanta ────────────────────────────────────────────────────────────────

// Ganti sesuai total lesson yang ada di StepByWeb
const TOTAL_LESSON = 36; // contoh: 12 HTML + 12 CSS + 12 JS

// Threshold skor untuk dikategorikan "perlu review"
const THRESHOLD_REVIEW = 70;

// ─── Fungsi Hitung LPI ────────────────────────────────────────────────────────

function hitungS(progressData: { score: number; completed: boolean }[]): number {
  const selesai = progressData.filter((p) => p.completed === true);
  if (selesai.length === 0) return 0;
  const total = selesai.reduce((sum, p) => sum + (p.score ?? 0), 0);
  return Math.round(total / selesai.length);
}

function hitungK(currentStreak: number, longestStreak: number): number {
  if (longestStreak === 0) return 0;
  return Math.round((currentStreak / longestStreak) * 100);
}

function hitungA(jumlahSelesai: number, totalLesson: number): number {
  if (totalLesson === 0) return 0;
  return Math.round((jumlahSelesai / totalLesson) * 100);
}

function hitungNilaiLPI(S: number, K: number, A: number): number {
  const lpi = 0.5 * S + 0.3 * K + 0.2 * A;
  return Math.round(lpi * 10) / 10;
}

function getKategori(lpi: number): LPIKategori {
  if (lpi >= 80) return "Tinggi";
  if (lpi >= 60) return "Sedang";
  if (lpi >= 40) return "Rendah";
  return "Kritis";
}

function buatRekomendasi(
  kategori: LPIKategori,
  progressData: { lesson_id: string; track: string; score: number; completed: boolean }[]
): RekomendasiItem[] {
  const rekomendasi: RekomendasiItem[] = [];

  if (kategori === "Tinggi") {
    // Cari lesson yang belum dimulai (belum ada di progress)
    // Untuk sekarang return pesan motivasi
    rekomendasi.push({
      lesson_id: "next",
      track: "advanced",
      alasan: "Performa kamu sangat baik! Saatnya tantangan lebih tinggi.",
      tipe: "tantangan",
    });
  } else if (kategori === "Sedang") {
    // Rekomendasikan lesson berikutnya yang belum selesai
    const belumSelesai = progressData.find((p) => !p.completed);
    if (belumSelesai) {
      rekomendasi.push({
        lesson_id: belumSelesai.lesson_id,
        track: belumSelesai.track,
        alasan: "Lanjutkan progress belajarmu dan jaga streak harianmu!",
        tipe: "lanjut",
      });
    }
  } else {
    // Rendah atau Kritis — rekomendasikan review lesson dengan skor rendah
    const perluReview = progressData
      .filter((p) => p.completed && p.score < THRESHOLD_REVIEW)
      .slice(0, 3); // maksimal 3 rekomendasi

    perluReview.forEach((p) => {
      rekomendasi.push({
        lesson_id: p.lesson_id,
        track: p.track,
        alasan: `Skor kamu ${p.score}/100 — yuk review materi ini lagi.`,
        tipe: "review",
      });
    });

    if (rekomendasi.length === 0) {
      rekomendasi.push({
        lesson_id: "dasar",
        track: "html",
        alasan: "Mulai dari materi dasar untuk membangun fondasi yang kuat.",
        tipe: "review",
      });
    }
  }

  return rekomendasi;
}

// ─── Hook Utama ───────────────────────────────────────────────────────────────

export function useLPI(userId: string | undefined): HasilLPI {
  const [hasil, setHasil] = useState<HasilLPI>({
    nilai: 0,
    kategori: "Kritis",
    komponen: { S: 0, K: 0, A: 0 },
    rekomendasi: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    if (!userId) return;

    async function fetchDanHitung() {
      try {
        setHasil((prev) => ({ ...prev, loading: true, error: null }));

        // Ambil data progress user
        const { data: progressData, error: progressError } = await supabase
          .from("user_progress")
          .select("lesson_id, track, completed, score")
          .eq("user_id", userId);

        if (progressError) throw progressError;

        // Ambil data streak user
        const { data: streakData, error: streakError } = await supabase
          .from("user_streaks")
          .select("current_streak, longest_streak")
          .eq("user_id", userId)
          .single();

        if (streakError && streakError.code !== "PGRST116") throw streakError;

        const progress = progressData ?? [];
        const streak = streakData ?? { current_streak: 0, longest_streak: 0 };

        // Hitung tiap komponen
        const S = hitungS(progress);
        const K = hitungK(streak.current_streak, streak.longest_streak);
        const A = hitungA(
          progress.filter((p) => p.completed).length,
          TOTAL_LESSON
        );

        // Hitung LPI final
        const nilaiLPI = hitungNilaiLPI(S, K, A);
        const kategori = getKategori(nilaiLPI);
        const rekomendasi = buatRekomendasi(kategori, progress);

        setHasil({
          nilai: nilaiLPI,
          kategori,
          komponen: { S, K, A },
          rekomendasi,
          loading: false,
          error: null,
        });
      } catch (err) {
        setHasil((prev) => ({
          ...prev,
          loading: false,
          error: "Gagal memuat data LPI.",
        }));
        console.error("LPI Error:", err);
      }
    }

    fetchDanHitung();
  }, [userId]);

  return hasil;
}
