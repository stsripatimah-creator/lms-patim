import React, { useState, useEffect } from "react";
import { User, Bell, Shield, Moon, Sun, LogOut } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Switch } from "../components/ui/switch";
import { Separator } from "../components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { toast } from "sonner";
import { useAuth } from "../../context/AuthContext";

export function Settings() {
  const { user, profile, signOut } = useAuth();
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [dailyReminder, setDailyReminder] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [language, setLanguage] = useState('id');

  // Load tema dari localStorage saat pertama kali
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

  const applyTheme = (t: 'light' | 'dark') => {
    if (t === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
  };

  const handleThemeChange = (t: 'light' | 'dark') => {
    setTheme(t);
    localStorage.setItem('theme', t);
    applyTheme(t);
    toast.success(`Tema ${t === 'dark' ? 'gelap' : 'terang'} diaktifkan`);
  };

  const handleSaveProfile = () => toast.success("Profil berhasil diperbarui");
  const handleChangePassword = () => toast.success("Password berhasil diubah");
  const handleLogout = async () => {
    await signOut();
    window.location.href = '/login';
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold mb-2">Pengaturan</h1>
        <p className="text-slate-400">Kelola akun dan preferensi kamu</p>
      </div>

      {/* Profile */}
      <Card className="bg-[#1E293B] border-slate-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5 text-[#4F46E5]" /> Informasi Profile
          </CardTitle>
          <CardDescription>Perbarui informasi pribadi kamu</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-20 w-20 rounded-full border-2 border-slate-700 bg-slate-800 flex items-center justify-center text-2xl font-bold text-slate-400">
              {profile?.full_name?.charAt(0)?.toUpperCase() || user?.email?.charAt(0)?.toUpperCase() || '?'}
            </div>
            <div>
              <Button variant="outline" size="sm" className="border-slate-600 hover:bg-slate-700">Ubah Foto</Button>
              <p className="text-xs text-slate-500 mt-2">JPG, PNG atau GIF, maks. 2MB</p>
            </div>
          </div>

          <Separator className="bg-slate-700" />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Nama Lengkap</Label>
              <Input defaultValue={profile?.full_name || ''} className="bg-slate-900 border-slate-700 focus:border-[#4F46E5]" />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" defaultValue={user?.email || ''} className="bg-slate-900 border-slate-700 focus:border-[#4F46E5]" disabled />
            </div>
          </div>

          <Button onClick={handleSaveProfile} className="bg-[#4F46E5] hover:bg-[#4338ca]">Simpan Perubahan</Button>
        </CardContent>
      </Card>

      {/* Preferensi */}
      <Card className="bg-[#1E293B] border-slate-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-[#4F46E5]" /> Preferensi
          </CardTitle>
          <CardDescription>Atur pengalaman belajar kamu</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Theme */}
          <div className="flex items-center justify-between">
            <div>
              <Label>Tema Aplikasi</Label>
              <p className="text-sm text-slate-400">Pilih tampilan terang atau gelap</p>
            </div>
            <div className="flex items-center gap-2 bg-slate-800 p-1 rounded-lg">
              <button
                onClick={() => handleThemeChange('light')}
                className={`p-2 rounded transition-all ${theme === 'light' ? 'bg-[#4F46E5] text-white' : 'text-slate-400 hover:text-white'}`}
              >
                <Sun className="h-4 w-4" />
              </button>
              <button
                onClick={() => handleThemeChange('dark')}
                className={`p-2 rounded transition-all ${theme === 'dark' ? 'bg-[#4F46E5] text-white' : 'text-slate-400 hover:text-white'}`}
              >
                <Moon className="h-4 w-4" />
              </button>
            </div>
          </div>

          <Separator className="bg-slate-700" />

          <div className="flex items-center justify-between">
            <div>
              <Label>Pengingat Harian</Label>
              <p className="text-sm text-slate-400">Terima notifikasi untuk belajar setiap hari</p>
            </div>
            <Switch checked={dailyReminder} onCheckedChange={setDailyReminder} className="data-[state=checked]:bg-[#4F46E5]" />
          </div>

          <Separator className="bg-slate-700" />

          <div className="flex items-center justify-between">
            <div>
              <Label>Notifikasi Email</Label>
              <p className="text-sm text-slate-400">Terima update dan tips via email</p>
            </div>
            <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} className="data-[state=checked]:bg-[#4F46E5]" />
          </div>

          <Separator className="bg-slate-700" />

          <div className="flex items-center justify-between">
            <div>
              <Label>Bahasa</Label>
              <p className="text-sm text-slate-400">Pilih bahasa antarmuka</p>
            </div>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-[180px] bg-slate-900 border-slate-700"><SelectValue /></SelectTrigger>
              <SelectContent className="bg-[#1E293B] border-slate-700">
                <SelectItem value="id">Bahasa Indonesia</SelectItem>
                <SelectItem value="en">English</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Keamanan */}
      <Card className="bg-[#1E293B] border-slate-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-[#4F46E5]" /> Keamanan
          </CardTitle>
          <CardDescription>Kelola password dan keamanan akun</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Password Saat Ini</Label>
            <Input type="password" className="bg-slate-900 border-slate-700 focus:border-[#4F46E5]" />
          </div>
          <div className="space-y-2">
            <Label>Password Baru</Label>
            <Input type="password" className="bg-slate-900 border-slate-700 focus:border-[#4F46E5]" />
          </div>
          <div className="space-y-2">
            <Label>Konfirmasi Password Baru</Label>
            <Input type="password" className="bg-slate-900 border-slate-700 focus:border-[#4F46E5]" />
          </div>
          <Button onClick={handleChangePassword} className="bg-[#4F46E5] hover:bg-[#4338ca]">Ubah Password</Button>
        </CardContent>
      </Card>

      {/* Logout only - no delete account */}
      <Card className="bg-[#1E293B] border-slate-700">
        <CardHeader>
          <CardTitle className="text-slate-300">Sesi Akun</CardTitle>
          <CardDescription>Keluar dari aplikasi</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 border border-slate-700 rounded-lg">
            <div>
              <h4 className="font-medium mb-1">Keluar dari Akun</h4>
              <p className="text-sm text-slate-400">Keluar dari sesi saat ini</p>
            </div>
            <Button variant="outline" className="border-slate-600 hover:bg-slate-800" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" /> Keluar
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
