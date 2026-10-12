'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUp,
  Heart,
  ChevronRight,
  ShieldCheck,
  Award,
} from 'lucide-react';

export function Footer() {
  const { locale, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/academic-programs`, label: t.nav.programs },
    { href: `/${locale}/academic-programs#curriculum-structure`, label: t.nav.curriculum },
    { href: `/${locale}/teachers`, label: t.nav.teachers },
    { href: `/${locale}/facilities`, label: t.nav.facilities },
    { href: `/${locale}/notices`, label: t.nav.notices },
    { href: `/${locale}/events`, label: t.nav.events },
    { href: `/${locale}/gallery`, label: t.nav.gallery },
    { href: `/${locale}/admission`, label: t.nav.admission },
    { href: `/${locale}/faq`, label: t.nav.faq },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ];

  const programLinks = [
    { href: `/${locale}/academic-programs/play-group`, label: locale === 'bn' ? 'প্লে গ্রুপ (Play Group)' : 'Play Group' },
    { href: `/${locale}/academic-programs/nursery`, label: locale === 'bn' ? 'নার্সারি (Nursery)' : 'Nursery' },
    { href: `/${locale}/academic-programs/class-1`, label: locale === 'bn' ? 'প্রথম শ্রেণি (Class 1)' : 'Class One' },
    { href: `/${locale}/academic-programs/class-2`, label: locale === 'bn' ? 'দ্বিতীয় শ্রেণি (Class 2)' : 'Class Two' },
    { href: `/${locale}/academic-programs/class-3`, label: locale === 'bn' ? 'তৃতীয় শ্রেণি (Class 3)' : 'Class Three' },
    { href: `/${locale}/academic-programs/class-4`, label: locale === 'bn' ? 'চতুর্থ শ্রেণি (Class 4)' : 'Class Four' },
    { href: `/${locale}/academic-programs/class-5`, label: locale === 'bn' ? 'পঞ্চম শ্রেণি (Class 5)' : 'Class Five' },
  ];

  return (
    <footer className="bg-darkTheme-surface text-gray-200 border-t border-brand-dark/40 relative">
      {/* Subtle top Islamic decorative bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-brand-dark via-brand-lime to-brand-islamic" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-brand-lime bg-white shadow-md flex-shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="Madrasa Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <h3 className="font-bold text-base text-white leading-tight">
                  {t.institution.name}
                </h3>
                <p className="text-xs text-brand-lime font-medium mt-0.5">
                  {t.institution.established}
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed">
              {t.footer.aboutText}
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-brand-lime">
              <ShieldCheck className="w-4 h-4" />
              <span>{locale === 'bn' ? 'আদর্শ দ্বীনি ও জেনারেল শিক্ষা' : 'Ideal Integrated Education'}</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-brand-lime">
              <Award className="w-4 h-4" />
              <span>{locale === 'bn' ? 'নূরানী পদ্ধতিতে সুন্দর হাতের লেখা' : 'Noorani Calligraphy & Handwriting'}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-lime" />
              {t.nav.quickLinks}
            </h4>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-3 text-xs">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-brand-lime transition-colors flex items-center gap-1 group py-0.5"
                  >
                    <ChevronRight className="w-3 h-3 text-brand-lime group-hover:translate-x-0.5 transition-transform" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Academic Programs */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-lime" />
              {t.nav.academicLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              {programLinks.map((prog) => (
                <li key={prog.href}>
                  <Link
                    href={prog.href}
                    className="text-gray-300 hover:text-brand-lime transition-colors flex items-center gap-1.5 group py-0.5"
                  >
                    <ChevronRight className="w-3 h-3 text-brand-lime group-hover:translate-x-0.5 transition-transform" />
                    <span>{prog.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-lime" />
              {t.nav.contactInfo}
            </h4>
            <ul className="space-y-3 text-xs text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-lime flex-shrink-0 mt-0.5" />
                <span>{t.contact.addressDesc}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-lime flex-shrink-0" />
                <a
                  href="tel:01734108046"
                  className="hover:text-brand-lime transition font-semibold"
                >
                  {t.contact.phoneDesc}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-lime flex-shrink-0" />
                <a
                  href="mailto:markazulquran.lalmonirhat@gmail.com"
                  className="hover:text-brand-lime transition"
                >
                  markazulquran.lalmonirhat@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-lime flex-shrink-0 mt-0.5" />
                <span>{t.contact.hoursDesc}</span>
              </li>
            </ul>

            <div className="mt-5">
              <Link
                href={`/${locale}/admission`}
                className="inline-block w-full text-center py-2 px-4 rounded-lg bg-brand-islamic hover:bg-brand-dark text-white text-xs font-semibold shadow transition-all duration-200"
              >
                {t.nav.applyNow}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} {t.institution.name}। {t.footer.allRightsReserved}
          </p>

          <div className="flex items-center gap-6">
            <Link
              href={`/${locale}/privacy`}
              className="hover:text-brand-lime transition-colors"
            >
              {t.footer.privacyPolicy}
            </Link>
            <span>•</span>
            <Link
              href={`/${locale}/terms`}
              className="hover:text-brand-lime transition-colors"
            >
              {t.footer.termsConditions}
            </Link>
            <span>•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-brand-lime hover:text-white transition-colors"
              aria-label={t.footer.backToTop}
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
