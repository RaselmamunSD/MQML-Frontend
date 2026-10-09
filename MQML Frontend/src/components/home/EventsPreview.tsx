'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { eventsData } from '@/data/events';
import { SectionHeading } from '@/components/common/SectionHeading';
import { EventCard } from '@/components/common/EventCard';
import { ArrowRight } from 'lucide-react';

export function EventsPreview() {
  const { locale, t } = useLanguage();

  const previewEvents = eventsData.slice(0, 2);

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-darkTheme-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag={t.events.tag}
          title={t.events.title}
          subtitle={t.events.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {previewEvents.map((event) => (
            <EventCard key={event.id} event={event} locale={locale} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={`/${locale}/events`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-darkTheme-surface hover:bg-brand-islamic hover:text-white dark:hover:bg-brand-islamic border border-brand-islamic text-brand-islamic dark:text-brand-lime font-bold text-xs sm:text-sm shadow-xs transition-all duration-200"
          >
            <span>{t.events.viewAll}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
