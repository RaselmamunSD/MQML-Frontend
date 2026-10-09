import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Locale } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { noticesData } from '@/data/notices';
import { formatDate } from '@/lib/utils';
import { PageContainer } from '@/components/common/PageContainer';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import {
  Calendar,
  Tag,
  Download,
  Printer,
  ArrowLeft,
  AlertCircle,
  FileText,
} from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale; id: string };
}): Promise<Metadata> {
  const notice = noticesData.find((n) => n.id === params.id);
  if (!notice) return { title: 'Notice Not Found' };

  return {
    title: `${notice.title[params.locale]} | মারকাযুল কুরআন নূরানী একাডেমি`,
    description: notice.summary[params.locale],
  };
}

export default function NoticeDetailPage({
  params,
}: {
  params: { locale: Locale; id: string };
}) {
  const { locale, id } = params;
  const t = getDictionary(locale);
  const isBn = locale === 'bn';

  const notice = noticesData.find((n) => n.id === id);
  if (!notice) {
    notFound();
  }

  const otherNotices = noticesData.filter((n) => n.id !== id).slice(0, 4);

  return (
    <div className="bg-white dark:bg-darkTheme-bg py-6 sm:py-10">
      <PageContainer>
        <Breadcrumbs
          items={[
            { label: t.nav.notices, href: `/${locale}/notices` },
            { label: notice.title[locale] },
          ]}
        />

        <div className="mb-6">
          <Link
            href={`/${locale}/notices`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-brand-islamic dark:hover:text-brand-lime transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{isBn ? 'সকল নোটিশে ফিরে যান' : 'Back to Notices'}</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Notice Document (8 cols) */}
          <article className="lg:col-span-8 p-6 sm:p-10 rounded-3xl bg-white dark:bg-darkTheme-surface border border-gray-200/80 dark:border-darkTheme-border shadow-soft">
            {/* Meta header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 dark:border-darkTheme-border pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-brand-islamic/10 text-brand-dark dark:bg-brand-lime/10 dark:text-brand-lime">
                  {notice.category}
                </span>
                {notice.isImportant && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full bg-brand-red/10 text-brand-red">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{isBn ? 'জরুরি' : 'Important'}</span>
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                <Calendar className="w-3.5 h-3.5" />
                <span>{formatDate(notice.publishedDate, locale)}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-950 dark:text-white leading-snug mb-6">
              {notice.title[locale]}
            </h1>

            {/* Main Content */}
            <div className="prose dark:prose-invert max-w-none text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              {notice.content[locale]}
            </div>

            {/* Attachment Bar */}
            {notice.attachmentName && (
              <div className="mt-8 p-4 rounded-2xl bg-brand-softBg dark:bg-darkTheme-card border border-brand-islamic/20 dark:border-darkTheme-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-brand-islamic text-white">
                    <FileText className="w-5 h-5 text-brand-lime" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                      {notice.attachmentName}
                    </div>
                    <div className="text-[11px] text-gray-500 dark:text-gray-400">
                      {isBn ? 'সংযুক্তি ফাইল (পিডিএফ)' : 'Attached Document (PDF)'}
                    </div>
                  </div>
                </div>

                <a
                  href={`#download`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-islamic hover:bg-brand-dark text-white text-xs font-semibold shadow transition"
                >
                  <Download className="w-3.5 h-3.5 text-brand-lime" />
                  <span>{isBn ? 'ডাউনলোড করুন' : 'Download'}</span>
                </a>
              </div>
            )}
          </article>

          {/* Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-3xl bg-brand-softBg dark:bg-darkTheme-surface border border-gray-200/80 dark:border-darkTheme-border shadow-xs">
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3">
                {isBn ? 'সাম্প্রতিক অন্যান্য নোটিশ' : 'Recent Other Notices'}
              </h3>
              <ul className="divide-y divide-gray-100 dark:divide-darkTheme-border">
                {otherNotices.map((on) => (
                  <li key={on.id} className="py-3">
                    <Link
                      href={`/${locale}/notices/${on.id}`}
                      className="block group"
                    >
                      <span className="text-[11px] text-gray-500 dark:text-gray-400 block mb-0.5">
                        {formatDate(on.publishedDate, locale)}
                      </span>
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-brand-islamic dark:group-hover:text-brand-lime transition-colors line-clamp-2">
                        {on.title[locale]}
                      </h4>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
