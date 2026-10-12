'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { noticesData } from '@/data/notices';
import { SectionHeading } from '@/components/common/SectionHeading';
import { NoticeCard } from '@/components/common/NoticeCard';
import { ArrowRight } from 'lucide-react';

export function NoticesPreview() {
  const { locale, t } = useLanguage();

  const previewNotices = noticesData.slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-brand-softBg dark:bg-darkTheme-surface/60 border-y border-gray-100 dark:border-darkTheme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag={t.notices.tag}
          title={t.notices.title}
          subtitle={t.notices.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {previewNotices.map((notice) => (
            <NoticeCard key={notice.id} notice={notice} locale={locale} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={`/${locale}/notices`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-islamic hover:bg-brand-dark text-white text-xs sm:text-sm font-semibold shadow transition-all duration-200"
          >
            <span>{t.notices.viewAll}</span>
            <ArrowRight className="w-4 h-4 text-brand-lime" />
          </Link>
        </div>
      </div>
    </section>
  );
}
