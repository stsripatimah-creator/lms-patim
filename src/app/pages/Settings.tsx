import React, { useState, useEffect, useRef } from "react";
import { User, Bell, Shield, LogOut, Camera } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Switch } from "../components/ui/switch";
import { Separator } from "../components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { toast } from "sonner";
import { useAuth } from "../../context/AuthContext";
import { supabase } from "../../lib/supabase";
import { useTranslation } from "react-i18next";

export function Settings() {
  const { user, profile, signOut, updateProfile, refreshProfile } = useAuth();
  const { t, i18n } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [fullName, setFullName] = useState(profile?.full_name || '');
  const [isSaving, setIsSaving] = useState(false);
  const [isUploadingPhoto, setIsUploadingPhoto] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(profile?.avatar_url || null);
  const [dailyReminder, setDailyReminder] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'id');

  useEffect(() => {
    if (profile?.full_name) setFullName(profile.full_name);
    if (profile?.avatar_url) setAvatarUrl(profile.avatar_url);
  }, [profile?.full_name, profile?.avatar_url]);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    i18n.changeLanguage(lang);
  };

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;

    if (file.size > 2 * 1024 * 1024) {
      toast.error('Ukuran file maksimal 2MB');
      return;
    }
    if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
      toast.error('Format file harus JPG, PNG, atau GIF');
      return;
    }

    setIsUploadingPhoto(true);
    try {
      const fileExt = file.name.split('.').pop();
      const filePath = `${user.id}/avatar.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file, { upsert: true });

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath);

      const { error: updateError } = await supabase
        .from('profiles')
        .update({ avatar_url: publicUrl })
        .eq('id', user.id);

      if (updateError) throw updateError;

      setAvatarUrl(publicUrl);
      await refreshProfile();
      toast.success('Foto profil berhasil diperbarui!');
    } catch (err: any) {
      toast.error('Gagal upload foto: ' + err.message);
    } finally {
      setIsUploadingPhoto(false);
    }
  };

  const handleSaveProfile = async () => {
    setIsSaving(true);
    const { error } = await updateProfile({ full_name: fullName });
    setIsSaving(false);
    if (error) {
      toast.error(t('settings.saveError') + ': ' + error.message);
    } else {
      toast.success(t('settings.saveSuccess'));
    }
  };

  const handleChangePassword = () => toast.success(t('settings.security.passwordSuccess'));

  const handleLogout = async () => {
    await signOut();
    window.location.href = '/login';
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold mb-2">{t('settings.title')}</h1>
        <p className="text-slate-400">{t('settings.subtitle')}</p>
      </div>

      {/* Profile */}
      <Card className="bg-[#1E293B] border-slate-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5 text-[#4F46E5]" /> {t('settings.profile.title')}
          </CardTitle>
          <CardDescription>{t('settings.profile.desc')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="h-20 w-20 rounded-full border-2 border-slate-700 bg-slate-800 flex items-center justify-center text-2xl font-bold text-slate-400 overflow-hidden">
                {avatarUrl ? (
                  <img src={avatarUrl} alt="Avatar" className="h-full w-full object-cover" />
                ) : (
                  profile?.full_name?.charAt(0)?.toUpperCase() || user?.email?.charAt(0)?.toUpperCase() || '?'
                )}
              </div>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="absolute inset-0 rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Camera className="h-6 w-6 text-white" />
              </button>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/gif"
              className="hidden"
              onChange={handlePhotoUpload}
            />

            <div>
              <Button
                variant="outline"
                size="sm"
                className="border-slate-600 hover:bg-slate-700"
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploadingPhoto}
              >
                {isUploadingPhoto ? 'Mengupload...' : t('settings.profile.changePhoto')}
              </Button>
              <p className="text-xs text-slate-500 mt-2">{t('settings.profile.photoHint')}</p>
            </div>
          </div>

          <Separator className="bg-slate-700" />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>{t('settings.profile.fullName')}</Label>
              <Input
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                className="bg-slate-900 border-slate-700 focus:border-[#4F46E5]"
              />
            </div>
            <div className="space-y-2">
              <Label>{t('settings.profile.email')}</Label>
              <Input
                type="email"
                defaultValue={user?.email || ''}
                className="bg-slate-900 border-slate-700 focus:border-[#4F46E5]"
                disabled
              />
            </div>
          </div>

          <Button onClick={handleSaveProfile} disabled={isSaving} className="bg-[#4F46E5] hover:bg-[#4338ca]">
            {isSaving ? t('common.saving') : t('common.save')}
          </Button>
        </CardContent>
      </Card>

      {/* Preferensi */}
      <Card className="bg-[#1E293B] border-slate-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-[#4F46E5]" /> {t('settings.preferences.title')}
          </CardTitle>
          <CardDescription>{t('settings.preferences.desc')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <Label>{t('settings.preferences.reminder')}</Label>
              <p className="text-sm text-slate-400">{t('settings.preferences.reminderDesc')}</p>
            </div>
            <Switch checked={dailyReminder} onCheckedChange={setDailyReminder} className="data-[state=checked]:bg-[#4F46E5]" />
          </div>

          <Separator className="bg-slate-700" />

          <div className="flex items-center justify-between">
            <div>
              <Label>{t('settings.preferences.emailNotif')}</Label>
              <p className="text-sm text-slate-400">{t('settings.preferences.emailNotifDesc')}</p>
            </div>
            <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} className="data-[state=checked]:bg-[#4F46E5]" />
          </div>

          <Separator className="bg-slate-700" />

          <div className="flex items-center justify-between">
            <div>
              <Label>{t('settings.preferences.language')}</Label>
              <p className="text-sm text-slate-400">{t('settings.preferences.languageDesc')}</p>
            </div>
            <Select value={language} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-[180px] bg-slate-900 border-slate-700">
                <SelectValue />
              </SelectTrigger>
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
            <Shield className="h-5 w-5 text-[#4F46E5]" /> {t('settings.security.title')}
          </CardTitle>
          <CardDescription>{t('settings.security.desc')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>{t('settings.security.currentPassword')}</Label>
            <Input type="password" className="bg-slate-900 border-slate-700 focus:border-[#4F46E5]" />
          </div>
          <div className="space-y-2">
            <Label>{t('settings.security.newPassword')}</Label>
            <Input type="password" className="bg-slate-900 border-slate-700 focus:border-[#4F46E5]" />
          </div>
          <div className="space-y-2">
            <Label>{t('settings.security.confirmPassword')}</Label>
            <Input type="password" className="bg-slate-900 border-slate-700 focus:border-[#4F46E5]" />
          </div>
          <Button onClick={handleChangePassword} className="bg-[#4F46E5] hover:bg-[#4338ca]">
            {t('settings.security.changePassword')}
          </Button>
        </CardContent>
      </Card>

      {/* Sesi */}
      <Card className="bg-[#1E293B] border-slate-700">
        <CardHeader>
          <CardTitle className="text-slate-300">{t('settings.session.title')}</CardTitle>
          <CardDescription>{t('settings.session.desc')}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 border border-slate-700 rounded-lg">
            <div>
              <h4 className="font-medium mb-1">{t('settings.session.logoutTitle')}</h4>
              <p className="text-sm text-slate-400">{t('settings.session.logoutDesc')}</p>
            </div>
            <Button variant="outline" className="border-slate-600 hover:bg-slate-800" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" /> {t('common.logout')}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
