import React from 'react';
import { Locale } from '@/types';
import { isValidLocale, defaultLocale } from '@/lib/i18n';
import { LanguageProvider } from '@/context/LanguageContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';


export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const currentLocale: Locale = isValidLocale(params.locale)
    ? params.locale
    : defaultLocale;

  return (
    <LanguageProvider initialLocale={currentLocale}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
