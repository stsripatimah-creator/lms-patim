import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useAuth } from "../../context/AuthContext";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";

export function Register() {
  const { signUp } = useAuth()
  const navigate = useNavigate()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error('Password tidak cocok!')
      return
    }

    if (password.length < 6) {
      toast.error('Password minimal 6 karakter!')
      return
    }

    setLoading(true)
    const { error } = await signUp(email, password, fullName)
    setLoading(false)

    if (error) {
      toast.error('Registrasi gagal: ' + error.message)
    } else {
      toast.success('Akun berhasil dibuat! Silakan login.')
      navigate('/login')
    }
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-[#0B1220]">
      {/* Right Panel - Visual */}
      <div className="hidden lg:flex flex-col justify-center items-center bg-[#0F172A] p-12 text-center relative overflow-hidden order-last">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#0EA5E9]/20 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#4F46E5]/20 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-white mb-4">Bergabung dengan Komunitas</h2>
          <p className="text-slate-400">Belajar bersama ribuan developer lainnya.</p>
        </div>
      </div>

      {/* Left Panel - Form */}
      <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
        <div className="mb-8">
          <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Kembali
          </Link>
          <div className="flex items-center gap-2 font-bold text-xl mb-2">
            <span className="text-[#4F46E5] text-2xl">⚡</span> StepByWeb
          </div>
          <h1 className="text-3xl font-bold text-white">Buat Akun Baru</h1>
          <p className="text-slate-400">Mulai perjalanan codingmu hari ini.</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4 max-w-sm w-full">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Nama Lengkap</label>
            <Input
              placeholder="Budi Santoso"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Email</label>
            <Input
              placeholder="budi@example.com"
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
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Konfirmasi Password</label>
            <Input
              placeholder="••••••••"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <Button className="w-full" type="submit" disabled={loading}>
            {loading ? 'Memproses...' : 'Daftar Sekarang'}
          </Button>
        </form>

        <p className="mt-6 text-sm text-slate-400">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-[#4F46E5] hover:underline font-medium">
            Masuk di sini
          </Link>
        </p>
      </div>
    </div>
  )
}