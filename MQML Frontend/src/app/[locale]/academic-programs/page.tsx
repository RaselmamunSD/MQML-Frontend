import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Locale } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { academicProgramsData } from '@/data/programs';
import { PageContainer } from '@/components/common/PageContainer';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ProgramCard } from '@/components/academic/ProgramCard';
import { UserPlus, Sparkles, BookOpen } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = getDictionary(params.locale);
  return {
    title: t.nav.programs,
    description: `${t.institution.name} - প্লে গ্রুপ থেকে ৫ম শ্রেণি পর্যন্ত একাডেমিক প্রোগ্রাম ও শ্রেণিভিত্তিক কারিকুলাম।`,
  };
}

export default function AcademicProgramsPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = params;
  const t = getDictionary(locale);
  const isBn = locale === 'bn';

  return (
    <div className="bg-white dark:bg-darkTheme-bg py-6 sm:py-10">
      <PageContainer>
        <Breadcrumbs items={[{ label: t.nav.programs }]} />

        <SectionHeading
          tag={t.programs.tag}
          title={t.programs.title}
          subtitle={t.programs.subtitle}
        />

        {/* Informative Banner */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-brand-softBg dark:bg-darkTheme-surface border border-brand-islamic/20 dark:border-darkTheme-border shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-islamic dark:text-brand-lime uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>{isBn ? 'সমন্বিত শিক্ষাধারা' : 'Harmonious Integrated Curriculum'}</span>
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
              {isBn
                ? 'নূরানী কুরআন পদ্ধতির সাথে জাতীয় শিক্ষাক্রমের যুগোপযোগী সমন্বয়'
                : 'Modern synthesis of the Noorani Quranic method with national curriculum standards'}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
              {isBn
                ? 'আমাদের প্রতিটি শ্রেণির পাঠ্যক্রমে শিশুদের মানসিক বয়সের সাথে সঙ্গতি রেখে বিষয় নির্ধারণ করা হয়েছে। বিস্তারিত জানতে নিচের যেকোনো শ্রেণিতে ক্লিক করুন।'
                : 'Curricula for each grade level are scientifically adapted to children’s cognitive development. Click any grade below for exhaustive syllabus information.'}
            </p>
          </div>

          <Link
            href={`/${locale}/admission`}
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-islamic hover:bg-brand-dark text-white text-xs sm:text-sm font-bold shadow transition active:scale-95"
          >
            <UserPlus className="w-4 h-4 text-brand-lime" />
            <span>{t.nav.applyNow}</span>
          </Link>
        </div>

        {/* Grid of All Programs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {academicProgramsData.map((program) => (
            <ProgramCard key={program.id} program={program} locale={locale} />
          ))}
        </div>

        {/* Bottom Curriculum Guide link */}
        <div className="mt-16 p-8 rounded-3xl bg-gray-50 dark:bg-darkTheme-card border border-gray-200/80 dark:border-darkTheme-border text-center">
          <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2">
            {isBn ? 'বিষয়ভিত্তিক পাঠ্যক্রম বিস্তারিত দেখতে চান?' : 'Looking for detailed subject-wise curriculum?'}
          </h4>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-5 max-w-lg mx-auto">
            {isBn
              ? 'কুরআন তিলাওয়াত, নূরানী কায়দা, আরবি ভাষা, আকাইদ ও জেনারেল বিষয়সমূহের পুঙ্খানুপুঙ্খ বিবরণ পাঠ্যক্রম পাতায় সংরক্ষিত আছে।'
              : 'Detailed breakdown of Quran, Noorani Qaida, Arabic, Fiqh, and General Academic subjects is cataloged on our Curriculum page.'}
          </p>
          <Link
            href={`/${locale}/curriculum`}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white dark:bg-darkTheme-surface hover:bg-brand-islamic hover:text-white border border-brand-islamic text-brand-islamic dark:text-brand-lime text-xs sm:text-sm font-bold shadow-xs transition"
          >
            <BookOpen className="w-4 h-4" />
            <span>{isBn ? 'পাঠ্যক্রম পাতায় যান' : 'Go to Curriculum Page'}</span>
          </Link>
        </div>
      </PageContainer>
    </div>
  );
}
