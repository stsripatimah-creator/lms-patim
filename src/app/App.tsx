import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import { Shell } from "./components/layout/Shell";
import { LandingPage } from "./pages/Landing";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Dashboard } from "./pages/Dashboard";
import { CourseCatalog } from "./pages/CourseCatalog";
import { CourseDetail } from "./pages/CourseDetail";
import { Curriculum } from "./pages/Curriculum";
import { LessonPlayer } from "./pages/learn/LessonPlayer";
import { Challenge } from "./pages/Challenge";
import { Analytics } from "./pages/Analytics";
import { Achievements } from "./pages/Achievements";
import { Settings } from "./pages/Settings";
import { Button } from "./components/ui/button";
import { AuthProvider } from "../context/AuthContext";
import { useAuth } from "../context/AuthContext";

// Protected Route Wrapper
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()

  if (loading) return (
    <div className="flex h-screen items-center justify-center bg-[#0B1220]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4F46E5]" />
    </div>
  )

  if (!user) return <Navigate to="/login" replace />

  return <Shell>{children}</Shell>;
}

// Protected Route Wrapper for LessonPlayer (no Shell)
function LessonRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()

  if (loading) return null
  if (!user) return <Navigate to="/login" replace />

  return <>{children}</>;
}

// 404 Page
function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[#0B1220] text-white">
      <h1 className="text-4xl font-bold text-[#4F46E5] mb-4">404</h1>
      <p className="text-slate-400 mb-8">Halaman tidak ditemukan</p>
      <Button variant="outline" onClick={() => window.history.back()}>Kembali</Button>
    </div>
  );
}

function AppRoutes() {
  const location = useLocation();
  
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      {/* Protected Routes */}
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/courses" element={<ProtectedRoute><CourseCatalog /></ProtectedRoute>} />
      <Route path="/courses/:courseId" element={<ProtectedRoute><Curriculum /></ProtectedRoute>} />
      <Route path="/lessons/:lessonId" element={<LessonRoute><LessonPlayer /></LessonRoute>} />
      <Route path="/challenge" element={<ProtectedRoute><Challenge /></ProtectedRoute>} />
      <Route path="/progress" element={<ProtectedRoute><Analytics /></ProtectedRoute>} />
      <Route path="/achievements" element={<ProtectedRoute><Achievements /></ProtectedRoute>} />
      <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
        <Toaster position="top-center" theme="dark" />
      </BrowserRouter>
    </AuthProvider>
  );
}