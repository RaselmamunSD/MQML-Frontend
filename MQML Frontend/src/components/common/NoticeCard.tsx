import React from 'react';
import Link from 'next/link';
import { NoticeItem, Locale } from '@/types';
import { formatDate } from '@/lib/utils';
import { Calendar, FileText, ArrowRight, AlertCircle, Download } from 'lucide-react';

interface NoticeCardProps {
  notice: NoticeItem;
  locale: Locale;
}

export function NoticeCard({ notice, locale }: NoticeCardProps) {
  const isBn = locale === 'bn';

  const categoryLabels: Record<string, { bn: string; en: string; color: string }> = {
    admission: { bn: 'ভর্তি', en: 'Admission', color: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20' },
    examination: { bn: 'পরীক্ষা', en: 'Exam', color: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20' },
    holiday: { bn: 'ছুটি', en: 'Holiday', color: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20' },
    events: { bn: 'ইভেন্ট', en: 'Event', color: 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20' },
    general: { bn: 'সাধারণ', en: 'General', color: 'bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20' },
  };

  const cat = categoryLabels[notice.category] || categoryLabels.general;

  return (
    <div
      className={`rounded-2xl p-5 sm:p-6 bg-white dark:bg-darkTheme-surface border transition-all duration-300 flex flex-col justify-between ${
        notice.isImportant
          ? 'border-brand-islamic dark:border-brand-lime shadow-soft'
          : 'border-gray-200/80 dark:border-darkTheme-border shadow-xs hover:shadow-soft'
      }`}
    >
      <div>
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span
              className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${cat.color}`}
            >
              {cat[locale]}
            </span>
            {notice.isImportant && (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-brand-red/10 text-brand-red border border-brand-red/20">
                <AlertCircle className="w-3 h-3" />
                <span>{isBn ? 'জরুরি' : 'Important'}</span>
              </span>
            )}
          </div>

          <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
            <Calendar className="w-3.5 h-3.5" />
            <span>{formatDate(notice.publishedDate, locale)}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white leading-snug group-hover:text-brand-islamic">
          <Link
            href={`/${locale}/notices/${notice.id}`}
            className="hover:text-brand-islamic dark:hover:text-brand-lime transition-colors"
          >
            {notice.title[locale]}
          </Link>
        </h3>

        {/* Summary */}
        <p className="mt-2.5 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
          {notice.summary[locale]}
        </p>
      </div>

      {/* Footer Links */}
      <div className="mt-5 pt-4 border-t border-gray-100 dark:border-darkTheme-border flex items-center justify-between gap-2">
        <Link
          href={`/${locale}/notices/${notice.id}`}
          className="inline-flex items-center gap-1 text-xs font-bold text-brand-islamic dark:text-brand-lime hover:underline"
        >
          <span>{isBn ? 'সম্পূর্ণ নোটিশ' : 'Full Notice'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        {notice.attachmentName && (
          <span className="inline-flex items-center gap-1 text-[11px] text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-darkTheme-card px-2 py-1 rounded">
            <Download className="w-3 h-3" />
            <span>PDF</span>
          </span>
        )}
      </div>
    </div>
  );
}
