'use client';

import React, { useState, useMemo } from 'react';
import { NoticeItem, Locale } from '@/types';
import { NoticeCard } from '@/components/common/NoticeCard';
import { EmptyState } from '@/components/common/EmptyState';
import { Search, Filter } from 'lucide-react';

interface NoticeBoardClientProps {
  notices: NoticeItem[];
  locale: Locale;
}

export function NoticeBoardClient({ notices, locale }: NoticeBoardClientProps) {
  const isBn = locale === 'bn';
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: isBn ? 'সকল নোটিশ' : 'All Notices' },
    { id: 'admission', label: isBn ? 'ভর্তি' : 'Admission' },
    { id: 'examination', label: isBn ? 'পরীক্ষা' : 'Examination' },
    { id: 'holiday', label: isBn ? 'ছুটি' : 'Holiday' },
    { id: 'events', label: isBn ? 'ইভেন্টস' : 'Events' },
    { id: 'general', label: isBn ? 'সাধারণ' : 'General' },
  ];

  const filteredNotices = useMemo(() => {
    return notices.filter((notice) => {
      const matchCat =
        selectedCategory === 'all' || notice.category === selectedCategory;

      const title = notice.title[locale].toLowerCase();
      const summary = notice.summary[locale].toLowerCase();
      const q = searchQuery.toLowerCase();
      const matchQuery = !q || title.includes(q) || summary.includes(q);

      return matchCat && matchQuery;
    });
  }, [notices, locale, selectedCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Search and Filters Bar */}
      <div className="p-4 sm:p-6 rounded-2xl bg-brand-softBg dark:bg-darkTheme-surface border border-gray-200/80 dark:border-darkTheme-border shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isBn ? 'নোটিশ খুঁজুন...' : 'Search notices...'}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 dark:border-darkTheme-border text-xs sm:text-sm bg-white dark:bg-darkTheme-card text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-islamic"
          />
        </div>

        {/* Categories Badges */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-brand-islamic text-white shadow-xs'
                  : 'bg-white dark:bg-darkTheme-card text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-darkTheme-cardHover border border-gray-200/60 dark:border-darkTheme-border'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 px-1">
        <span>
          {isBn
            ? `মোট নোটিশ: ${filteredNotices.length} টি`
            : `Showing ${filteredNotices.length} notices`}
        </span>
        {searchQuery && (
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="text-brand-islamic dark:text-brand-lime hover:underline font-semibold"
          >
            {isBn ? 'ফিল্টার পরিষ্কার করুন' : 'Clear filters'}
          </button>
        )}
      </div>

      {/* Grid of notices */}
      {filteredNotices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotices.map((notice) => (
            <NoticeCard key={notice.id} notice={notice} locale={locale} />
          ))}
        </div>
      ) : (
        <EmptyState
          title={isBn ? 'কোন নোটিশ পাওয়া যায়নি' : 'No notices found'}
          description={
            isBn
              ? 'আপনার অনুসন্ধানের সাথে মিলে এমন কোনো বিজ্ঞপ্তি এই মুহূর্তে নেই।'
              : 'There are no notices matching your search or category filter.'
          }
          actionText={isBn ? 'সব নোটিশ দেখুন' : 'Show All Notices'}
          onAction={() => {
            setSearchQuery('');
            setSelectedCategory('all');
          }}
        />
      )}
    </div>
  );
}
