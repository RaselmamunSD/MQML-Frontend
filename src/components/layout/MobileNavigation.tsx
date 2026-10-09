'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import {
  X,
  Home,
  Info,
  GraduationCap,
  BookOpen,
  Users,
  Building,
  Bell,
  Calendar,
  Image as GalleryIcon,
  UserPlus,
  Phone,
  HelpCircle,
} from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavProps) {
  const { locale, t } = useLanguage();
  const pathname = usePathname();

  if (!isOpen) return null;

  const navLinks = [
    { href: `/${locale}`, label: t.nav.home, icon: Home },
    { href: `/${locale}/about`, label: t.nav.about, icon: Info },
    { href: `/${locale}/academic-programs`, label: t.nav.programs, icon: GraduationCap },
    { href: `/${locale}/curriculum`, label: t.nav.curriculum, icon: BookOpen },
    { href: `/${locale}/teachers`, label: t.nav.teachers, icon: Users },
    { href: `/${locale}/facilities`, label: t.nav.facilities, icon: Building },
    { href: `/${locale}/notices`, label: t.nav.notices, icon: Bell },
    { href: `/${locale}/events`, label: t.nav.events, icon: Calendar },
    { href: `/${locale}/gallery`, label: t.nav.gallery, icon: GalleryIcon },
    { href: `/${locale}/admission`, label: t.nav.admission, icon: UserPlus },
    { href: `/${locale}/contact`, label: t.nav.contact, icon: Phone },
    { href: `/${locale}/faq`, label: t.nav.faq, icon: HelpCircle },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}` && pathname === `/${locale}`) return true;
    if (href !== `/${locale}` && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="relative ml-auto w-full max-w-xs sm:max-w-sm bg-white dark:bg-darkTheme-surface h-full shadow-2xl flex flex-col z-10 overflow-hidden border-l border-gray-200 dark:border-darkTheme-border animate-fade-in">
        {/* Drawer Header */}
        <div className="p-4 border-b border-gray-100 dark:border-darkTheme-border flex items-center justify-between bg-brand-softBg dark:bg-darkTheme-card">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-brand-islamic shadow-sm flex-shrink-0 bg-white">
              <Image
                src="/images/logo.jpg"
                alt="Madrasa Logo"
                fill
                className="object-contain p-0.5"
              />
            </div>
            <div>
              <h3 className="font-bold text-sm text-brand-dark dark:text-brand-lime leading-tight">
                {t.institution.name}
              </h3>
              <p className="text-[11px] text-gray-500 dark:text-gray-400">
                {t.institution.established}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-gray-500 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-darkTheme-cardHover transition"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toggles bar */}
        <div className="px-4 py-2.5 border-b border-gray-100 dark:border-darkTheme-border flex items-center justify-between bg-white dark:bg-darkTheme-surface">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        {/* Navigation list */}
        <div className="flex-1 overflow-y-auto py-2 px-3 space-y-1">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? 'bg-brand-islamic text-white shadow-sm'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-darkTheme-card'
                }`}
              >
                <Icon className={`w-4 h-4 ${active ? 'text-white' : 'text-brand-islamic dark:text-brand-lime'}`} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Drawer Footer CTA */}
        <div className="p-4 border-t border-gray-100 dark:border-darkTheme-border bg-gray-50 dark:bg-darkTheme-card">
          <Link
            href={`/${locale}/admission`}
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-brand-islamic hover:bg-brand-dark text-white font-semibold text-sm shadow-md transition-all active:scale-[0.98]"
          >
            <UserPlus className="w-4 h-4 text-brand-lime" />
            <span>{t.nav.applyNow}</span>
          </Link>
          <div className="mt-2 text-center text-xs text-gray-500 dark:text-gray-400">
            {t.institution.locationShort}
          </div>
        </div>
      </div>
    </div>
  );
}
