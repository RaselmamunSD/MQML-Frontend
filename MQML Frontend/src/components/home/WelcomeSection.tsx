'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { institutionData } from '@/data/institution';
import { Quote, ArrowRight, CheckCircle2 } from 'lucide-react';

export function WelcomeSection() {
  const { locale, t } = useLanguage();
  const isBn = locale === 'bn';
  const principal = institutionData.principal;

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-darkTheme-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual/Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden shadow-soft-lg border-2 border-brand-islamic/20 dark:border-darkTheme-border bg-brand-softBg dark:bg-darkTheme-surface p-6 sm:p-8">
              {/* Islamic Arch Decoration */}
              <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-brand-islamic shadow-md bg-white">
                <Image
                  src="/images/logo.jpg"
                  alt="Madrasa Emblem"
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div className="mt-6 text-center">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {principal.name[locale]}
                </h3>
                <p className="text-xs text-brand-islamic dark:text-brand-lime font-semibold mt-1">
                  {principal.designation[locale]}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  {institutionData.name[locale]}
                </p>
              </div>

              {/* Quote pill */}
              <div className="mt-6 p-4 rounded-2xl bg-white dark:bg-darkTheme-card border border-gray-200/60 dark:border-darkTheme-border relative">
                <Quote className="w-6 h-6 text-brand-lime/80 absolute -top-3 left-4 bg-white dark:bg-darkTheme-card px-1" />
                <p className="text-xs italic text-gray-700 dark:text-gray-300 leading-relaxed text-center pt-1">
                  &ldquo;{principal.quote[locale]}&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Message & Details (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-islamic/10 text-brand-dark dark:bg-brand-lime/10 dark:text-brand-lime">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-islamic dark:bg-brand-lime" />
                <span>{t.welcome.tag}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 dark:text-white tracking-tight">
                {t.welcome.title}
              </h2>
              <p className="text-sm font-semibold text-brand-islamic dark:text-brand-lime">
                {t.welcome.subtitle}
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              {principal.message[locale]}
            </p>

            {/* Quick Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-brand-islamic dark:text-brand-lime flex-shrink-0" />
                <span>{isBn ? 'স্নেহশীল ও ব্যক্তিগত নজরদারি' : 'Attentive & caring supervision'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-brand-islamic dark:text-brand-lime flex-shrink-0" />
                <span>{isBn ? 'সহীহ কুরআন ও সুন্দর হাতের লেখা' : 'Pure Tajweed & Calligraphy'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-brand-islamic dark:text-brand-lime flex-shrink-0" />
                <span>{isBn ? 'দরিদ্র ও মেধাবীদের বিশেষ সুবিধা' : 'Scholarships for needy students'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-brand-islamic dark:text-brand-lime flex-shrink-0" />
                <span>{isBn ? 'শীতাতপ ও মনোরম পরিবেশ' : 'Disciplined safe environment'}</span>
              </div>
            </div>

            {/* Link to About */}
            <div className="pt-4">
              <Link
                href={`/${locale}/about`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-islamic hover:bg-brand-dark text-white text-xs sm:text-sm font-bold shadow transition-all duration-200 active:scale-95"
              >
                <span>{isBn ? 'আমাদের ইতিহাস ও লক্ষ্য জানুন' : 'Learn More About Us'}</span>
                <ArrowRight className="w-4 h-4 text-brand-lime" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
