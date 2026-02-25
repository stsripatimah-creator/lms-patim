import { toast } from "sonner";
import { CheckCircle, XCircle, Info, AlertTriangle } from "lucide-react";

export const notify = {
  success: (message: string, description?: string) => {
    toast.success(message, {
      description,
      icon: <CheckCircle className="h-5 w-5" />,
    });
  },
  
  error: (message: string, description?: string) => {
    toast.error(message, {
      description,
      icon: <XCircle className="h-5 w-5" />,
    });
  },
  
  info: (message: string, description?: string) => {
    toast.info(message, {
      description,
      icon: <Info className="h-5 w-5" />,
    });
  },
  
  warning: (message: string, description?: string) => {
    toast.warning(message, {
      description,
      icon: <AlertTriangle className="h-5 w-5" />,
    });
  },

  custom: (message: string, options?: any) => {
    toast(message, options);
  },

  // Specific app notifications
  progressSaved: () => {
    toast.success("Progress tersimpan", {
      description: "Autosave aktif",
      icon: <CheckCircle className="h-5 w-5" />,
    });
  },

  lessonCompleted: (xp: number = 20) => {
    toast.success("Pelajaran selesai!", {
      description: `+${xp} XP`,
      icon: <CheckCircle className="h-5 w-5" />,
    });
  },

  streakMaintained: (days: number) => {
    toast.success(`Streak ${days} hari dipertahankan! 🔥`, {
      description: "Kamu keren!",
    });
  },

  badgeUnlocked: (badgeName: string) => {
    toast.success("Badge baru terbuka!", {
      description: badgeName,
      icon: "🏆",
      duration: 5000,
    });
  },
};
