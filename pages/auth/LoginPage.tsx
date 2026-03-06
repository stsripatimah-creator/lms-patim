import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Link } from "react-router-dom"
import { motion } from "motion/react"

export function LoginPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Selamat Datang Kembali</h1>
          <p className="text-sm text-muted-foreground">
            Masukan email dan password untuk melanjutkan
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="nama@email.com" required type="email" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link to="#" className="text-sm font-medium text-primary hover:underline">
                Lupa password?
              </Link>
            </div>
            <Input id="password" required type="password" />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Ingat saya
            </Label>
          </div>
          <Button className="w-full">
            Masuk
          </Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Atau lanjut dengan
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full">
              Github
            </Button>
            <Button variant="outline" className="w-full">
              Google
            </Button>
          </div>
        </div>
        <div className="text-center text-sm">
          Belum punya akun?{" "}
          <Link to="/register" className="font-medium text-primary hover:underline">
            Daftar sekarang
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
