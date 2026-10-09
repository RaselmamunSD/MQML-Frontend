'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { UserPlus, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export function AdmissionCTA() {
  const { locale, t } = useLanguage();
  const isBn = locale === 'bn';

  return (
    <section className="py-16 sm:py-20 bg-brand-softBg dark:bg-darkTheme-surface/40 border-t border-gray-100 dark:border-darkTheme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-brand-islamic via-brand-dark to-brand-islamic text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle Decorative Background Motif */}
          <div className="absolute inset-0 islamic-pattern opacity-10 pointer-events-none" />

          {/* Accent glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-lime/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-red text-white text-xs font-bold uppercase tracking-wider shadow">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                <span>{isBn ? 'ভর্তি চলছে — আসন সংখ্যা সীমিত' : 'Admission Open — Limited Seats'}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                {t.institution.name}
              </h2>

              <p className="text-sm sm:text-base text-gray-100 font-medium">
                {t.institution.tagline}
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-gray-200 pt-1">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-brand-lime" />
                  {t.institution.locationShort}
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-brand-lime" />
                  {locale === 'bn' ? '০১৭৩৪-১০৮০৪৬' : '01734-108046'}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full sm:w-auto flex-shrink-0">
              <Link
                href={`/${locale}/admission`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-lime hover:bg-brand-lime-light text-brand-dark font-extrabold text-sm sm:text-base shadow-lg transition-all duration-200 active:scale-95 text-center"
              >
                <UserPlus className="w-5 h-5 text-brand-dark" />
                <span>{t.hero.applyCta}</span>
              </Link>

              <a
                href="tel:01734108046"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all text-center"
              >
                <Phone className="w-4 h-4 text-brand-lime" />
                <span>{isBn ? 'ফোন করে বিস্তারিত জানুন' : 'Call for Enquiries'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
