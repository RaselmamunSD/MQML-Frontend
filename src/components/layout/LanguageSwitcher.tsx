'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export function LanguageSwitcher() {
  const { locale, switchLocale } = useLanguage();

  return (
    <div
      className="inline-flex items-center p-0.5 rounded-full bg-white dark:bg-darkTheme-surface border border-gray-200/90 dark:border-white/20 shadow-xs select-none"
      role="group"
      aria-label="Language selection"
    >
      <button
        type="button"
        onClick={() => switchLocale('bn')}
        className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 focus:outline-none ${
          locale === 'bn'
            ? 'bg-[#98d5ba] text-[#0f3822] shadow-xs'
            : 'bg-transparent text-gray-700 dark:text-gray-200 hover:text-brand-islamic dark:hover:text-brand-lime'
        }`}
        aria-pressed={locale === 'bn'}
        title="বাংলা ভাষা নির্বাচন করুন"
      >
        বাং
      </button>

      <button
        type="button"
        onClick={() => switchLocale('en')}
        className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 focus:outline-none ${
          locale === 'en'
            ? 'bg-[#98d5ba] text-[#0f3822] shadow-xs'
            : 'bg-transparent text-gray-700 dark:text-gray-200 hover:text-brand-islamic dark:hover:text-brand-lime'
        }`}
        aria-pressed={locale === 'en'}
        title="Select English"
      >
        EN
      </button>
    </div>
  );
}
