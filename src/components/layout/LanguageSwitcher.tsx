'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { locale, switchLocale } = useLanguage();

  return (
    <div className="inline-flex items-center rounded-full bg-gray-100 dark:bg-darkTheme-card p-1 border border-gray-200 dark:border-darkTheme-border text-xs font-medium">
      <div className="pl-1.5 pr-1 text-gray-500 dark:text-gray-400">
        <Globe className="w-3.5 h-3.5" />
      </div>
      <button
        type="button"
        onClick={() => switchLocale('bn')}
        className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
          locale === 'bn'
            ? 'bg-brand-islamic text-white font-semibold shadow-sm'
            : 'text-gray-600 dark:text-gray-300 hover:text-brand-islamic'
        }`}
        aria-pressed={locale === 'bn'}
      >
        বাংলা
      </button>
      <button
        type="button"
        onClick={() => switchLocale('en')}
        className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
          locale === 'en'
            ? 'bg-brand-islamic text-white font-semibold shadow-sm'
            : 'text-gray-600 dark:text-gray-300 hover:text-brand-islamic'
        }`}
        aria-pressed={locale === 'en'}
      >
        English
      </button>
    </div>
  );
}
