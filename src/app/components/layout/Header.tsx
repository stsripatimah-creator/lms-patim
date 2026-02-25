import React, { useState } from "react";
import { Bell, Search, Menu, User, Settings, LogOut, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useAuth } from "../../../context/AuthContext";

interface HeaderProps {
  onMenuClick?: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const { user, profile, signOut } = useAuth();
  const navigate = useNavigate();

  const displayName = profile?.full_name || user?.email?.split("@")[0] || "Pengguna";
  const displayEmail = user?.email || "";
  const streak = profile?.streak ?? 0;
  const level = profile?.level || "Beginner";
  const initials = displayName.charAt(0).toUpperCase();

  const [notifications, setNotifications] = useState([
    { id: 1, text: "Selamat datang di StepByWeb! 🎉", time: "Baru saja", unread: true },
    { id: 2, text: "Mulai pelajaran pertamamu sekarang", time: "1 jam lalu", unread: true },
    { id: 3, text: "Jangan lupa daily challenge hari ini!", time: "3 jam lalu", unread: false },
  ]);

  const unreadCount = notifications.filter(n => n.unread).length;

  const handleMarkAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  };

  const handleMarkOneRead = (id: number) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, unread: false } : n));
  };

  const handleLogout = async () => {
    await signOut();
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-slate-800 bg-[#0B1220]/80 px-6 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="md:hidden text-slate-400" onClick={onMenuClick}>
          <Menu className="h-6 w-6" />
        </Button>
        <div className="hidden md:block w-96">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
            <Input placeholder="Cari materi pelajaran..." className="pl-9 bg-slate-900 border-slate-700 focus:border-[#4F46E5]" />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Streak */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-lg">
          <span className="text-base">🔥</span>
          <span className="font-bold text-orange-500">{streak}</span>
          <span className="text-xs text-slate-400">Hari</span>
        </div>

        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white relative">
              <Bell className="h-5 w-5" />
              {unreadCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-[#22C55E] text-white text-xs border-2 border-[#0B1220]">
                  {unreadCount}
                </Badge>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-72 bg-[#1E293B] border-slate-700">
            <div className="flex items-center justify-between px-4 py-2">
              <span className="text-sm font-semibold text-slate-200">Notifikasi</span>
              {unreadCount > 0 && (
                <button
                  onClick={handleMarkAllRead}
                  className="text-xs text-[#4F46E5] hover:text-[#6366f1] transition-colors"
                >
                  Tandai semua dibaca
                </button>
              )}
            </div>
            <DropdownMenuSeparator className="bg-slate-700" />
            {notifications.map(notif => (
              <div
                key={notif.id}
                onClick={() => handleMarkOneRead(notif.id)}
                className={`flex items-start gap-3 px-4 py-3 cursor-pointer hover:bg-slate-700/50 transition-colors ${notif.unread ? 'bg-slate-800/30' : ''}`}
              >
                <div className={`h-2 w-2 rounded-full mt-1.5 shrink-0 ${notif.unread ? 'bg-[#4F46E5]' : 'bg-transparent'}`} />
                <div>
                  <p className={`text-sm ${notif.unread ? 'text-white' : 'text-slate-400'}`}>{notif.text}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{notif.time}</p>
                </div>
              </div>
            ))}
            {unreadCount === 0 && (
              <p className="text-xs text-slate-500 text-center py-3">Semua notifikasi sudah dibaca ✓</p>
            )}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Profile Dropdown */}
        <div className="border-l border-slate-800 pl-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 hover:opacity-80 transition-opacity outline-none">
                <div className="hidden text-right text-sm md:block">
                  <p className="font-medium text-white">{displayName}</p>
                  <p className="text-xs text-slate-500">{level}</p>
                </div>
                <div className="h-9 w-9 rounded-full border-2 border-slate-700 bg-[#4F46E5] flex items-center justify-center text-white font-bold text-sm">
                  {initials}
                </div>
                <ChevronDown className="h-4 w-4 text-slate-500 hidden md:block" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-[#1E293B] border-slate-700">
              <DropdownMenuLabel className="text-slate-200">
                <div className="flex flex-col">
                  <span className="font-medium">{displayName}</span>
                  <span className="text-xs text-slate-400 font-normal">{displayEmail}</span>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-slate-700" />
              <DropdownMenuItem asChild className="text-slate-300 hover:bg-slate-700 hover:text-white cursor-pointer">
                <Link to="/dashboard" className="flex items-center">
                  <User className="mr-2 h-4 w-4" /> Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="text-slate-300 hover:bg-slate-700 hover:text-white cursor-pointer">
                <Link to="/settings" className="flex items-center">
                  <Settings className="mr-2 h-4 w-4" /> Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-slate-700" />
              <DropdownMenuItem onClick={handleLogout} className="text-red-400 hover:bg-red-500/10 hover:text-red-300 cursor-pointer">
                <LogOut className="mr-2 h-4 w-4" /> Keluar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
