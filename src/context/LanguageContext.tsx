'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Locale } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { bn } from '@/messages/bn';

interface LanguageContextType {
  locale: Locale;
  t: typeof bn;
  switchLocale: (newLocale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  children,
  initialLocale = 'bn',
}: {
  children: React.ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (initialLocale && initialLocale !== locale) {
      setLocale(initialLocale);
    }
  }, [initialLocale]);

  const switchLocale = (newLocale: Locale) => {
    if (newLocale === locale) return;
    setLocale(newLocale);
    localStorage.setItem('mqml_preferred_locale', newLocale);

    // Compute new path by replacing current locale in path
    if (pathname) {
      const segments = pathname.split('/');
      if (segments[1] === 'bn' || segments[1] === 'en') {
        segments[1] = newLocale;
        router.push(segments.join('/'));
      } else {
        router.push(`/${newLocale}${pathname}`);
      }
    } else {
      router.push(`/${newLocale}`);
    }
  };

  const t = getDictionary(locale);

  return (
    <LanguageContext.Provider value={{ locale, t, switchLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
