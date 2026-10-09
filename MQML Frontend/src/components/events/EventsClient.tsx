'use client';

import React, { useState } from 'react';
import { EventItem, Locale } from '@/types';
import { EventCard } from '@/components/common/EventCard';
import { EmptyState } from '@/components/common/EmptyState';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface EventsClientProps {
  events: EventItem[];
  locale: Locale;
}

export function EventsClient({ events, locale }: EventsClientProps) {
  const isBn = locale === 'bn';
  const [activeTab, setActiveTab] = useState<'all' | 'upcoming' | 'past'>('all');

  const filteredEvents = events.filter((e) => {
    if (activeTab === 'all') return true;
    return e.status === activeTab;
  });

  return (
    <div className="space-y-8">
      {/* Tabs */}
      <div className="flex items-center justify-center gap-2 border-b border-gray-200 dark:border-darkTheme-border pb-4">
        <button
          type="button"
          onClick={() => setActiveTab('all')}
          className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'all'
              ? 'bg-brand-islamic text-white shadow-xs'
              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-darkTheme-card'
          }`}
        >
          {isBn ? 'সকল ইভেন্ট' : 'All Events'}
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('upcoming')}
          className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'upcoming'
              ? 'bg-brand-islamic text-white shadow-xs'
              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-darkTheme-card'
          }`}
        >
          {isBn ? 'আসন্ন ইভেন্টসমূহ' : 'Upcoming Events'}
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('past')}
          className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'past'
              ? 'bg-brand-islamic text-white shadow-xs'
              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-darkTheme-card'
          }`}
        >
          {isBn ? 'সম্পন্ন ইভেন্টসমূহ' : 'Past Events'}
        </button>
      </div>

      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} locale={locale} />
          ))}
        </div>
      ) : (
        <EmptyState
          title={isBn ? 'কোন ইভেন্ট পাওয়া যায়নি' : 'No events found'}
          description={
            isBn
              ? 'এই ক্যাটাগরিতে বর্তমানে কোনো ইভেন্ট নেই।'
              : 'There are no events listed under this tab.'
          }
          actionText={isBn ? 'সকল ইভেন্ট দেখুন' : 'Show All Events'}
          onAction={() => setActiveTab('all')}
        />
      )}
    </div>
  );
}
