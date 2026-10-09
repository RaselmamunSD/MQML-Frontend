'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileNavigation } from './MobileNavigation';
import { NoticeTicker } from './NoticeTicker';
import {
  Menu,
  Phone,
  MapPin,
  Clock,
  UserPlus,
} from 'lucide-react';

export function Header() {
  const { locale, t } = useLanguage();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/academic-programs`, label: t.nav.programs },
    { href: `/${locale}/curriculum`, label: t.nav.curriculum },
    { href: `/${locale}/teachers`, label: t.nav.teachers },
    { href: `/${locale}/facilities`, label: t.nav.facilities },
    { href: `/${locale}/notices`, label: t.nav.notices },
    { href: `/${locale}/events`, label: t.nav.events },
    { href: `/${locale}/gallery`, label: t.nav.gallery },
    { href: `/${locale}/admission`, label: t.nav.admission },
    { href: `/${locale}/contact`, label: t.nav.contact },
    { href: `/${locale}/faq`, label: t.nav.faq },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}` && pathname === `/${locale}`) return true;
    if (href !== `/${locale}` && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <>
      <header className="w-full z-40 sticky top-0 transition-all duration-300">
        {/* Top Info Bar */}
        <div className="hidden lg:block bg-brand-dark text-white py-1.5 px-4 text-xs border-b border-white/10">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 text-gray-200">
                <MapPin className="w-3.5 h-3.5 text-brand-lime" />
                {t.institution.locationShort}
              </span>
              <a
                href="tel:01734108046"
                className="flex items-center gap-1.5 text-gray-200 hover:text-brand-lime transition"
              >
                <Phone className="w-3.5 h-3.5 text-brand-lime" />
                {locale === 'bn' ? '০১৭৩৪-১০৮০৪৬' : '01734-108046'}
              </a>
              <span className="flex items-center gap-1.5 text-gray-300">
                <Clock className="w-3.5 h-3.5 text-brand-lime" />
                {locale === 'bn' ? 'শনিবার-বৃহস্পতিবার: সকাল ৮:০০ - বিকাল ৪:০০' : 'Sat-Thu: 8:00 AM - 4:00 PM'}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-brand-lime font-medium">
                {t.institution.established}
              </span>
              <div className="h-3 w-px bg-white/20" />
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div
          className={`w-full transition-all duration-300 ${
            isScrolled
              ? 'bg-white/95 dark:bg-darkTheme-bg/95 backdrop-blur-md shadow-md py-2.5 border-b border-gray-200/80 dark:border-darkTheme-border'
              : 'bg-white dark:bg-darkTheme-surface py-3.5 border-b border-gray-100 dark:border-darkTheme-border'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Logo and Brand Title */}
            <Link
              href={`/${locale}`}
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-islamic rounded-lg p-0.5"
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-brand-islamic shadow-sm flex-shrink-0 bg-white">
                <Image
                  src="/images/logo.jpg"
                  alt="মারকাযুল কুরআন নূরানী একাডেমি লোগো"
                  fill
                  priority
                  className="object-contain p-0.5 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base sm:text-lg text-brand-dark dark:text-brand-lime tracking-tight leading-tight group-hover:text-brand-islamic transition-colors">
                  {t.institution.name}
                </span>
                <span className="text-[11px] sm:text-xs text-gray-600 dark:text-gray-300 line-clamp-1 font-medium">
                  {t.institution.tagline}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-2.5 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 ${
                      active
                        ? 'text-brand-islamic dark:text-brand-lime bg-brand-islamic/10 dark:bg-brand-lime/10 font-bold'
                        : 'text-gray-700 dark:text-gray-200 hover:text-brand-islamic dark:hover:text-brand-lime hover:bg-gray-100 dark:hover:bg-darkTheme-card'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Action Buttons & Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Desktop CTA */}
              <Link
                href={`/${locale}/admission`}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-islamic hover:bg-brand-dark text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow transition-all duration-200 active:scale-95 border border-brand-islamic"
              >
                <UserPlus className="w-4 h-4 text-brand-lime" />
                <span>{t.nav.applyNow}</span>
              </Link>

              {/* Mobile controls */}
              <div className="lg:hidden flex items-center gap-1.5">
                <LanguageSwitcher />
                <ThemeToggle />
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-darkTheme-card border border-gray-200 dark:border-darkTheme-border transition focus:outline-none focus:ring-2 focus:ring-brand-islamic"
                  aria-label="Open mobile menu"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Secondary Subnav bar for Tablet/Medium Screens (Between lg and xl) */}
          <div className="hidden lg:flex xl:hidden border-t border-gray-100 dark:border-darkTheme-border px-4 py-1.5 max-w-7xl mx-auto overflow-x-auto justify-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-2 py-1 rounded text-xs whitespace-nowrap font-medium transition ${
                    active
                      ? 'text-brand-islamic dark:text-brand-lime bg-brand-islamic/10 dark:bg-brand-lime/10 font-bold'
                      : 'text-gray-600 dark:text-gray-300 hover:text-brand-islamic'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Continuous Scrolling Notice Bar Under Navbar */}
        <NoticeTicker />
      </header>

      {/* Mobile Drawer */}
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
