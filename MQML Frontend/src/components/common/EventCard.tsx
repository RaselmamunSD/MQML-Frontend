import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { EventItem, Locale } from '@/types';
import { formatDate } from '@/lib/utils';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

interface EventCardProps {
  event: EventItem;
  locale: Locale;
}

export function EventCard({ event, locale }: EventCardProps) {
  const isBn = locale === 'bn';
  const isUpcoming = event.status === 'upcoming';

  return (
    <div className="group rounded-2xl overflow-hidden bg-white dark:bg-darkTheme-surface border border-gray-200/80 dark:border-darkTheme-border shadow-xs hover:shadow-soft transition-all duration-300 flex flex-col">
      {/* Event Image */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-darkTheme-card">
        <Image
          src={event.image}
          alt={event.title[locale]}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Status badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`text-[11px] font-bold px-2.5 py-1 rounded-full shadow ${
              isUpcoming
                ? 'bg-brand-islamic text-white'
                : 'bg-gray-700/80 text-gray-200'
            }`}
          >
            {isUpcoming ? (isBn ? 'আসন্ন ইভেন্ট' : 'Upcoming') : (isBn ? 'সম্পন্ন' : 'Completed')}
          </span>
        </div>

        {/* Date tag */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-white bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-md">
          <Calendar className="w-3.5 h-3.5 text-brand-lime" />
          <span>{formatDate(event.date, locale)}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-brand-islamic dark:group-hover:text-brand-lime transition-colors leading-snug">
            {event.title[locale]}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
            {event.summary[locale]}
          </p>

          <div className="mt-4 space-y-1.5 text-xs text-gray-500 dark:text-gray-400">
            {event.time && (
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-brand-islamic dark:text-brand-lime flex-shrink-0" />
                <span>{event.time[locale]}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-brand-islamic dark:text-brand-lime flex-shrink-0" />
              <span className="line-clamp-1">{event.location[locale]}</span>
            </div>
          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-5 pt-3 border-t border-gray-100 dark:border-darkTheme-border">
          <Link
            href={`/${locale}/events/${event.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-islamic dark:text-brand-lime hover:underline group/btn"
          >
            <span>{isBn ? 'বিস্তারিত জানুন' : 'Learn More'}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
