'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { noticesData } from '@/data/notices';
import { Bell, ChevronRight, AlertCircle } from 'lucide-react';

export function NoticeTicker() {
  const { locale, t } = useLanguage();
  const isBn = locale === 'bn';

  // Sort or take top notices
  const activeNotices = noticesData.slice(0, 5);

  return (
    <div className="w-full bg-emerald-50/90 dark:bg-darkTheme-surface/95 border-b border-brand-islamic/20 dark:border-darkTheme-border text-xs text-gray-800 dark:text-gray-200 overflow-hidden shadow-xs backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 flex items-center h-9 sm:h-10">
        {/* Left Badge */}
        <div className="flex-shrink-0 z-10 pr-2 sm:pr-3 flex items-center">
          <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-brand-red text-white text-[11px] sm:text-xs font-bold shadow-xs whitespace-nowrap">
            <Bell className="w-3 h-3 sm:w-3.5 sm:h-3.5 animate-bounce" />
            <span>{isBn ? 'সর্বশেষ নোটিশ' : 'Latest Notice'}</span>
          </div>
        </div>

        {/* Marquee Scrolling Track */}
        <div className="flex-1 overflow-hidden relative select-none">
          <div className="animate-marquee items-center gap-6 sm:gap-8">
            {/* Repeat list twice for seamless loop */}
            {[...activeNotices, ...activeNotices].map((notice, idx) => (
              <div key={`${notice.id}-${idx}`} className="inline-flex items-center gap-2">
                <Link
                  href={`/${locale}/notices/${notice.id}`}
                  className="hover:text-brand-islamic dark:hover:text-brand-lime transition-colors font-medium flex items-center gap-1.5 group"
                >
                  {notice.isImportant && (
                    <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-brand-red/10 text-brand-red dark:bg-brand-red/20 border border-brand-red/30">
                      {isBn ? 'জরুরি' : 'Important'}
                    </span>
                  )}
                  <span className="group-hover:underline">
                    {notice.title[locale]}
                  </span>
                </Link>
                <span className="text-brand-lime/80 text-sm select-none">✦</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right shortcut link to All Notices */}
        <div className="flex-shrink-0 z-10 pl-2 sm:pl-3 hidden md:flex items-center">
          <Link
            href={`/${locale}/notices`}
            className="text-[11px] font-bold text-brand-islamic dark:text-brand-lime hover:underline flex items-center gap-0.5 whitespace-nowrap bg-white/70 dark:bg-darkTheme-card/70 px-2 py-0.5 rounded-md border border-brand-islamic/20 dark:border-darkTheme-border"
          >
            <span>{isBn ? 'সকল নোটিশ' : 'All Notices'}</span>
            <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
