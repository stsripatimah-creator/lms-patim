import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useAuth } from "../../context/AuthContext";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";

export function Login() {
  const { signIn } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    const { error } = await signIn(email, password)
    setLoading(false)

    if (error) {
      toast.error('Login gagal: ' + error.message)
    } else {
      toast.success('Berhasil masuk!')
      navigate('/dashboard')
    }
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-[#0B1220]">
      {/* Left Panel - Form */}
      <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
        <div className="mb-8">
          <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Kembali
          </Link>
          <div className="flex items-center gap-2 font-bold text-xl mb-2">
            <span className="text-[#4F46E5] text-2xl">⚡</span> StepByWeb
          </div>
          <h1 className="text-3xl font-bold text-white">Selamat Datang Kembali</h1>
          <p className="text-slate-400">Masukan email dan password untuk melanjutkan.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4 max-w-sm w-full">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Email</label>
            <Input
              placeholder="nama@email.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Password</label>
            <Input
              placeholder="••••••••"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button className="w-full" type="submit" disabled={loading}>
            {loading ? 'Memproses...' : 'Masuk'}
          </Button>
        </form>

        <p className="mt-6 text-sm text-slate-400">
          Belum punya akun?{" "}
          <Link to="/register" className="text-[#4F46E5] hover:underline font-medium">
            Daftar sekarang
          </Link>
        </p>
      </div>

      {/* Right Panel - Visual */}
      <div className="hidden lg:flex flex-col justify-center items-center bg-[#0F172A] p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#4F46E5]/20 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0EA5E9]/20 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4">Belajar Coding<br/>Step by Step</h2>
          <p className="text-slate-400">Platform gamifikasi untuk belajar HTML, CSS, dan JavaScript.</p>
        </div>
      </div>
    </div>
  )
}