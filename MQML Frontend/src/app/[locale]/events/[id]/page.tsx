import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Locale } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { eventsData } from '@/data/events';
import { formatDate } from '@/lib/utils';
import { PageContainer } from '@/components/common/PageContainer';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { Calendar, Clock, MapPin, Tag, ArrowLeft } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale; id: string };
}): Promise<Metadata> {
  const event = eventsData.find((e) => e.id === params.id);
  if (!event) return { title: 'Event Not Found' };

  return {
    title: `${event.title[params.locale]} | মারকাযুল কুরআন নূরানী একাডেমি`,
    description: event.summary[params.locale],
  };
}

export default function EventDetailPage({
  params,
}: {
  params: { locale: Locale; id: string };
}) {
  const { locale, id } = params;
  const t = getDictionary(locale);
  const isBn = locale === 'bn';

  const event = eventsData.find((e) => e.id === id);
  if (!event) {
    notFound();
  }

  const isUpcoming = event.status === 'upcoming';

  return (
    <div className="bg-white dark:bg-darkTheme-bg py-6 sm:py-10">
      <PageContainer>
        <Breadcrumbs
          items={[
            { label: t.nav.events, href: `/${locale}/events` },
            { label: event.title[locale] },
          ]}
        />

        <div className="mb-6">
          <Link
            href={`/${locale}/events`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-brand-islamic dark:hover:text-brand-lime transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{isBn ? 'সকল ইভেন্টে ফিরে যান' : 'Back to Events'}</span>
          </Link>
        </div>

        {/* Hero banner */}
        <div className="relative rounded-3xl overflow-hidden shadow-soft-lg mb-10 h-72 sm:h-96 w-full">
          <Image
            src={event.image}
            alt={event.title[locale]}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 space-y-3">
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white shadow ${
                isUpcoming ? 'bg-brand-islamic' : 'bg-gray-700'
              }`}
            >
              {isUpcoming ? (isBn ? 'আসন্ন ইভেন্ট' : 'Upcoming') : (isBn ? 'সম্পন্ন' : 'Completed')}
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              {event.title[locale]}
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Description (8 cols) */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-darkTheme-surface border border-gray-200/80 dark:border-darkTheme-border shadow-xs">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {isBn ? 'ইভেন্ট বিবরণ' : 'Event Description'}
            </h2>
            <div className="prose dark:prose-invert max-w-none text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              {event.description[locale]}
            </div>
          </div>

          {/* Sidebar Schedule Details (4 cols) */}
          <div className="lg:col-span-4 p-6 rounded-3xl bg-brand-softBg dark:bg-darkTheme-surface border border-brand-islamic/20 dark:border-darkTheme-border shadow-xs space-y-4">
            <h3 className="text-base font-bold text-gray-900 dark:text-white border-b border-gray-200/60 dark:border-darkTheme-border pb-2">
              {isBn ? 'সময় ও স্থানের বিবরণ' : 'Event Information'}
            </h3>

            <div className="flex items-start gap-3 text-xs sm:text-sm">
              <Calendar className="w-4 h-4 text-brand-islamic dark:text-brand-lime flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block text-gray-900 dark:text-white">
                  {isBn ? 'তারিখ' : 'Date'}
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {formatDate(event.date, locale)}
                </span>
              </div>
            </div>

            {event.time && (
              <div className="flex items-start gap-3 text-xs sm:text-sm">
                <Clock className="w-4 h-4 text-brand-islamic dark:text-brand-lime flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-gray-900 dark:text-white">
                    {isBn ? 'সময়' : 'Time'}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {event.time[locale]}
                  </span>
                </div>
              </div>
            )}

            <div className="flex items-start gap-3 text-xs sm:text-sm">
              <MapPin className="w-4 h-4 text-brand-islamic dark:text-brand-lime flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block text-gray-900 dark:text-white">
                  {isBn ? 'স্থান' : 'Location'}
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {event.location[locale]}
                </span>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
