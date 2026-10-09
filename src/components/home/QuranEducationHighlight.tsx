'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { CheckCircle2, ArrowRight, BookOpen, Star } from 'lucide-react';

export function QuranEducationHighlight() {
  const { locale, t } = useLanguage();
  const isBn = locale === 'bn';

  const points = [
    t.quranHighlight.point1,
    t.quranHighlight.point2,
    t.quranHighlight.point3,
    t.quranHighlight.point4,
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-darkTheme-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-brand-islamic via-brand-dark to-slate-900 text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle Islamic Motif */}
          <div className="absolute inset-0 islamic-pattern opacity-10 pointer-events-none" />

          {/* Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-lime/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-lime border border-white/20 text-xs font-bold uppercase tracking-wider">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span>{t.quranHighlight.tag}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug">
                {t.quranHighlight.title}
              </h2>

              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                {t.quranHighlight.subtitle}
              </p>

              {/* Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {points.map((pt, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-lime flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-100 font-medium">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href={`/${locale}/curriculum`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-lime hover:bg-brand-lime-light text-brand-dark font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>{isBn ? 'সম্পূর্ণ পাঠ্যক্রম দেখুন' : 'Explore Full Curriculum'}</span>
                </Link>

                <Link
                  href={`/${locale}/admission`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/30 transition-all"
                >
                  <span>{isBn ? 'ভর্তির নিয়মাবলি' : 'Admission Rules'}</span>
                  <ArrowRight className="w-4 h-4 text-brand-lime" />
                </Link>
              </div>
            </div>

            {/* Right Visual Image (5 cols) */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=800&q=80"
                  alt="Quran Recitation Environment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="text-xs text-brand-lime font-mono">
                    {locale === 'bn' ? 'মারকাযুল কুরআন নূরানী একাডেমি' : 'Markazul Quran Noorani Academy'}
                  </span>
                  <p className="text-xs text-white font-semibold mt-0.5">
                    {locale === 'bn' ? 'সহীহ তিলাওয়াত ও বিশুদ্ধ মাখরাজ শিক্ষা' : 'Authentic Tajweed & Phonetics'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
