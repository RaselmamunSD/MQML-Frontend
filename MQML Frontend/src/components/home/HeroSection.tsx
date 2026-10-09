'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { UserPlus, BookOpen, Phone, Sparkles, CheckCircle2, Shield } from 'lucide-react';

export function HeroSection() {
  const { locale, t } = useLanguage();
  const isBn = locale === 'bn';

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-softBg via-white to-white dark:from-darkTheme-surface dark:via-darkTheme-bg dark:to-darkTheme-bg border-b border-gray-100 dark:border-darkTheme-border pt-8 pb-16 sm:pt-14 sm:pb-24">
      {/* Decorative Islamic Background Pattern */}
      <div className="absolute inset-0 islamic-pattern opacity-40 pointer-events-none" />

      {/* Subtle Glow Accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-islamic/5 dark:bg-brand-lime/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Admission badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-islamic/10 dark:bg-brand-lime/10 text-brand-dark dark:text-brand-lime border border-brand-islamic/20 dark:border-brand-lime/20 text-xs sm:text-sm font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <div className="text-sm sm:text-base font-semibold text-brand-islamic dark:text-brand-lime tracking-wide">
                {t.institution.arabicName}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 dark:text-white tracking-tight leading-[1.2]">
                {t.hero.title}
              </h1>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t.hero.description}
            </p>

            {/* Key feature pills */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 text-xs font-semibold text-gray-700 dark:text-gray-200">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-darkTheme-card border border-gray-200/80 dark:border-darkTheme-border shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-islamic dark:text-brand-lime" />
                {isBn ? 'প্লে থেকে ৫ম শ্রেণি' : 'Play to Class 5'}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-darkTheme-card border border-gray-200/80 dark:border-darkTheme-border shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-brand-lime" />
                {isBn ? 'নূরানী সুন্দর হাতের লেখা' : 'Noorani Calligraphy'}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-darkTheme-card border border-gray-200/80 dark:border-darkTheme-border shadow-xs">
                <Shield className="w-3.5 h-3.5 text-brand-islamic dark:text-brand-lime" />
                {isBn ? 'সুন্নতি আমল ও তরবিয়ত' : 'Prophetic Tarbiyah'}
              </span>
            </div>

            {/* Call to Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <Link
                href={`/${locale}/admission`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-brand-islamic hover:bg-brand-dark text-white font-bold text-sm sm:text-base shadow-soft-lg hover:shadow-lg transition-all duration-200 active:scale-95 border border-brand-islamic"
              >
                <UserPlus className="w-5 h-5 text-brand-lime" />
                <span>{t.hero.applyCta}</span>
              </Link>

              <Link
                href={`/${locale}/academic-programs`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-darkTheme-card hover:bg-gray-50 dark:hover:bg-darkTheme-cardHover text-gray-800 dark:text-white font-bold text-sm sm:text-base border border-gray-300 dark:border-darkTheme-border shadow-xs transition-all duration-200"
              >
                <BookOpen className="w-5 h-5 text-brand-islamic dark:text-brand-lime" />
                <span>{t.hero.exploreCta}</span>
              </Link>

              <a
                href="tel:01734108046"
                className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-gray-600 dark:text-gray-300 hover:text-brand-islamic dark:hover:text-brand-lime transition"
              >
                <Phone className="w-4 h-4 text-brand-islamic" />
                <span>{isBn ? '০১৭৩৪-১০৮০৪৬' : '01734-108046'}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Graphic & Madrasa Logo Emblem (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg aspect-square">
              {/* Decorative Islamic Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-brand-islamic/30 dark:border-brand-lime/30 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-brand-lime/20 dark:border-brand-islamic/20" />

              {/* Center Card with Logo & Real Madrasa Visual */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-darkTheme-card bg-white dark:bg-darkTheme-surface flex flex-col">
                <div className="relative flex-1 w-full bg-gradient-to-br from-brand-islamic/5 to-brand-lime/10 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=800&q=80"
                    alt="Madrasa Quran Recitation and Learning"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Floating Logo Badge */}
                <div className="absolute top-4 right-4 bg-white dark:bg-darkTheme-card p-2 rounded-2xl shadow-xl border border-gray-100 dark:border-darkTheme-border flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-islamic bg-white flex-shrink-0">
                    <Image
                      src="/images/logo.jpg"
                      alt="Logo"
                      fill
                      className="object-contain p-0.5"
                    />
                  </div>
                  <div className="pr-2">
                    <div className="text-[11px] font-bold text-brand-dark dark:text-brand-lime">
                      {isBn ? 'অনুমোদিত নূরানী একাডেমি' : 'Certified Academy'}
                    </div>
                    <div className="text-[10px] text-gray-500 dark:text-gray-400">
                      {t.institution.established}
                    </div>
                  </div>
                </div>

                {/* Bottom Overlay Info Card */}
                <div className="p-4 sm:p-5 bg-white dark:bg-darkTheme-surface border-t border-gray-100 dark:border-darkTheme-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-brand-dark dark:text-brand-lime">
                        {t.institution.name}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {t.institution.locationShort}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-2.5 py-1 rounded bg-brand-islamic text-white text-xs font-bold">
                        {isBn ? 'ভর্তি উন্মুক্ত' : 'Open'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
