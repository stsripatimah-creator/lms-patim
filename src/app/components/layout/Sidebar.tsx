import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LayoutDashboard, BookOpen, Trophy, BarChart2, Settings, Zap, LogOut, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Belajar", href: "/courses", icon: BookOpen },
  { label: "Challenge", href: "/challenge", icon: Zap },
  { label: "Progress", href: "/progress", icon: BarChart2 },
  { label: "Achievements", href: "/achievements", icon: Trophy },
  { label: "Settings", href: "/settings", icon: Settings },
];

interface SidebarProps {
  onClose?: () => void;
  isCollapsed?: boolean;
  onToggle?: () => void;
}

export function Sidebar({ onClose, isCollapsed = false, onToggle }: SidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleLogout = () => {
    // Clear any stored user data
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
    // Navigate to landing page
    navigate('/');
  };

  return (
    <aside className={cn(
      "flex h-full flex-col border-r border-slate-800 bg-[#0B1220] transition-all duration-300",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <div className="flex h-16 items-center border-b border-slate-800 px-6">
        <Link to="/" className="flex items-center gap-2 font-bold text-white text-xl" onClick={handleNavClick}>
            <span className="text-[#4F46E5] text-2xl font-mono font-bold">&lt;/&gt;</span>
            {!isCollapsed && <span>StepByWeb</span>}
        </Link>
      </div>
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-3">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href || location.pathname.startsWith(item.href + '/');
            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={handleNavClick}
                title={isCollapsed ? item.label : undefined}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-[#4F46E5]/10 text-[#4F46E5]"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white",
                  isCollapsed && "justify-center"
                )}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                {!isCollapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>
      </div>
      
      {/* Toggle Button */}
      {onToggle && (
        <div className="border-t border-slate-800 p-3">
          <button
            onClick={onToggle}
            className={cn(
              "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white transition-colors",
              isCollapsed && "justify-center"
            )}
            title={isCollapsed ? "Buka Sidebar" : "Tutup Sidebar"}
          >
            {isCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
            {!isCollapsed && <span>Tutup Sidebar</span>}
          </button>
        </div>
      )}
      
      <div className="border-t border-slate-800 p-4">
        <button 
          onClick={handleLogout}
          className={cn(
            "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white transition-colors",
            isCollapsed && "justify-center"
          )}
          title={isCollapsed ? "Keluar" : undefined}
        >
          <LogOut className="h-5 w-5 flex-shrink-0" />
          {!isCollapsed && <span>Keluar</span>}
        </button>
      </div>
    </aside>
  );
}