'use client';

import React, { useState, useEffect, useRef } from 'react';
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
  ChevronDown,
  Info,
  Users,
  Calendar,
  Building,
} from 'lucide-react';

export function Header() {
  const { locale, t } = useLanguage();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isBn = locale === 'bn';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsAboutDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setIsAboutDropdownOpen(false);
  }, [pathname]);

  const aboutDropdownItems = [
    {
      href: `/${locale}/about`,
      label: isBn ? 'আমাদের পরিচিতি' : 'About Madrasa',
      icon: Info,
      desc: isBn ? 'ইতিহাস, লক্ষ্য ও দর্শন' : 'History & Mission',
    },
    {
      href: `/${locale}/teachers`,
      label: t.nav.teachers,
      icon: Users,
      desc: isBn ? 'যোগ্য ও অভিজ্ঞ শিক্ষকবৃন্দ' : 'Dedicated Faculty',
    },
    {
      href: `/${locale}/events`,
      label: t.nav.events,
      icon: Calendar,
      desc: isBn ? 'কিরাত ও বার্ষিক কার্যক্রম' : 'Activities & Programs',
    },
    {
      href: `/${locale}/facilities`,
      label: t.nav.facilities,
      icon: Building,
      desc: isBn ? 'ক্যাম্পাস ও পরিবেশ' : 'Campus Infrastructure',
    },
  ];

  const mainNavLinks = [
    { href: `/${locale}`, label: t.nav.home },
    // About is rendered as dropdown
    { href: `/${locale}/academic-programs`, label: t.nav.programs },
    { href: `/${locale}/notices`, label: t.nav.notices },
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

  const isAboutActive =
    pathname.startsWith(`/${locale}/about`) ||
    pathname.startsWith(`/${locale}/teachers`) ||
    pathname.startsWith(`/${locale}/events`) ||
    pathname.startsWith(`/${locale}/facilities`);

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
            <nav className="hidden lg:flex items-center gap-1">
              {/* Home */}
              <Link
                href={`/${locale}`}
                className={`px-2.5 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 ${
                  isActive(`/${locale}`)
                    ? 'text-brand-islamic dark:text-brand-lime bg-brand-islamic/10 dark:bg-brand-lime/10 font-bold'
                    : 'text-gray-700 dark:text-gray-200 hover:text-brand-islamic dark:hover:text-brand-lime hover:bg-gray-100 dark:hover:bg-darkTheme-card'
                }`}
              >
                {t.nav.home}
              </Link>

              {/* About Us Dropdown Menu */}
              <div
                className="relative"
                ref={dropdownRef}
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                  aria-expanded={isAboutDropdownOpen}
                  className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 focus:outline-none ${
                    isAboutActive
                      ? 'text-brand-islamic dark:text-brand-lime bg-brand-islamic/10 dark:bg-brand-lime/10 font-bold'
                      : 'text-gray-700 dark:text-gray-200 hover:text-brand-islamic dark:hover:text-brand-lime hover:bg-gray-100 dark:hover:bg-darkTheme-card'
                  }`}
                >
                  <span>{t.nav.about}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isAboutDropdownOpen ? 'rotate-180 text-brand-islamic dark:text-brand-lime' : ''
                    }`}
                  />
                </button>

                {/* Dropdown Popover */}
                {isAboutDropdownOpen && (
                  <div className="absolute left-0 top-full pt-1.5 w-60 z-50 animate-fade-in">
                    <div className="rounded-2xl bg-white dark:bg-darkTheme-surface p-2 shadow-2xl border border-gray-200/90 dark:border-darkTheme-border space-y-1">
                      {aboutDropdownItems.map((item) => {
                        const Icon = item.icon;
                        const active = isActive(item.href);
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsAboutDropdownOpen(false)}
                            className={`flex items-start gap-3 p-2.5 rounded-xl transition-colors ${
                              active
                                ? 'bg-brand-islamic/10 dark:bg-brand-lime/10 text-brand-islamic dark:text-brand-lime'
                                : 'hover:bg-gray-50 dark:hover:bg-darkTheme-card text-gray-800 dark:text-gray-200'
                            }`}
                          >
                            <div className="p-1.5 rounded-lg bg-brand-islamic/10 dark:bg-brand-lime/10 text-brand-islamic dark:text-brand-lime flex-shrink-0 mt-0.5">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-bold leading-snug">
                                {item.label}
                              </div>
                              <div className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">
                                {item.desc}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Other Main Links */}
              {mainNavLinks.slice(1).map((link) => {
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

            {/* Mobile controls & toggle button */}
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
