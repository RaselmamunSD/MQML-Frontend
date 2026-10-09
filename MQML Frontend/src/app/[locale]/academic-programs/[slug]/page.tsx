import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Locale } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { academicProgramsData } from '@/data/programs';
import { PageContainer } from '@/components/common/PageContainer';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import {
  Users,
  Clock,
  BookOpen,
  Target,
  CheckCircle2,
  FileText,
  UserPlus,
  ArrowLeft,
  ChevronRight,
} from 'lucide-react';

export async function generateStaticParams() {
  const params: Array<{ locale: string; slug: string }> = [];
  const locales = ['bn', 'en'];

  for (const locale of locales) {
    for (const prog of academicProgramsData) {
      params.push({ locale, slug: prog.slug });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale; slug: string };
}): Promise<Metadata> {
  const program = academicProgramsData.find((p) => p.slug === params.slug);
  if (!program) return { title: 'Program Not Found' };

  return {
    title: `${program.title[params.locale]} | মারকাযুল কুরআন নূরানী একাডেমি`,
    description: program.overview[params.locale],
  };
}

export default function ProgramDetailPage({
  params,
}: {
  params: { locale: Locale; slug: string };
}) {
  const { locale, slug } = params;
  const t = getDictionary(locale);
  const isBn = locale === 'bn';

  const program = academicProgramsData.find((p) => p.slug === slug);
  if (!program) {
    notFound();
  }

  const otherPrograms = academicProgramsData.filter((p) => p.slug !== slug);

  return (
    <div className="bg-white dark:bg-darkTheme-bg py-6 sm:py-10">
      <PageContainer>
        <Breadcrumbs
          items={[
            { label: t.nav.programs, href: `/${locale}/academic-programs` },
            { label: program.title[locale] },
          ]}
        />

        {/* Back Link */}
        <div className="mb-6">
          <Link
            href={`/${locale}/academic-programs`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-brand-islamic dark:hover:text-brand-lime transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{isBn ? 'সকল প্রোগ্রামে ফিরে যান' : 'Back to All Programs'}</span>
          </Link>
        </div>

        {/* Hero Banner for Program */}
        <div className="relative rounded-3xl overflow-hidden shadow-soft-lg border border-gray-200/80 dark:border-darkTheme-border mb-12 bg-gray-900 text-white">
          <div className="relative h-64 sm:h-80 w-full overflow-hidden">
            <Image
              src={program.featuredImage}
              alt={program.title[locale]}
              fill
              priority
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent" />
          </div>

          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-full bg-brand-islamic text-white text-xs font-bold uppercase tracking-wider">
                {program.code}
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {program.title[locale]}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-300">
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-brand-lime" />
                  <span>{isBn ? `বয়সসীমা: ${program.ageEligibility.bn}` : `Age: ${program.ageEligibility.en}`}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-brand-lime" />
                  <span>{program.duration[locale]}</span>
                </span>
              </div>
            </div>

            <Link
              href={`/${locale}/admission?class=${program.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-lime hover:bg-brand-lime-light text-brand-dark font-extrabold text-xs sm:text-sm shadow-md transition active:scale-95 flex-shrink-0"
            >
              <UserPlus className="w-4 h-4 text-brand-dark" />
              <span>{isBn ? 'এই শ্রেণিতে ভর্তি আবেদন' : 'Apply for this Class'}</span>
            </Link>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Column (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-darkTheme-surface border border-gray-200/80 dark:border-darkTheme-border shadow-xs">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 border-b border-gray-100 dark:border-darkTheme-border pb-3">
                <BookOpen className="w-5 h-5 text-brand-islamic dark:text-brand-lime" />
                <span>{isBn ? 'শ্রেণি পরিচিতি ও সারসংক্ষেপ' : 'Class Overview'}</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {program.overview[locale]}
              </p>
            </div>

            {/* Learning Objectives */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-darkTheme-surface border border-gray-200/80 dark:border-darkTheme-border shadow-xs">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 border-b border-gray-100 dark:border-darkTheme-border pb-3">
                <Target className="w-5 h-5 text-brand-islamic dark:text-brand-lime" />
                <span>{isBn ? 'শিক্ষণীয় উদ্দেশ্যসমূহ (Learning Objectives)' : 'Learning Objectives'}</span>
              </h2>
              <ul className="space-y-3">
                {program.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-brand-islamic dark:text-brand-lime flex-shrink-0 mt-0.5" />
                    <span>{obj[locale]}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subjects Taught */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-darkTheme-surface border border-gray-200/80 dark:border-darkTheme-border shadow-xs">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 border-b border-gray-100 dark:border-darkTheme-border pb-3">
                <BookOpen className="w-5 h-5 text-brand-islamic dark:text-brand-lime" />
                <span>{isBn ? 'পাঠ্য বিষয়সমূহ (Subjects Taught)' : 'Subjects Taught'}</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {program.subjects.map((sub, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-brand-softBg dark:bg-darkTheme-card border border-gray-200/60 dark:border-darkTheme-border flex items-center gap-3 text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200"
                  >
                    <span className="w-6 h-6 rounded-full bg-brand-islamic/10 text-brand-islamic dark:text-brand-lime flex items-center justify-center text-xs font-mono">
                      {i + 1}
                    </span>
                    <span>{sub[locale]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Outcomes */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-darkTheme-surface border border-gray-200/80 dark:border-darkTheme-border shadow-xs">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 border-b border-gray-100 dark:border-darkTheme-border pb-3">
                <CheckCircle2 className="w-5 h-5 text-brand-islamic dark:text-brand-lime" />
                <span>{isBn ? 'অর্জিত দক্ষতা ও ফলাফল (Learning Outcomes)' : 'Learning Outcomes'}</span>
              </h2>
              <ul className="space-y-3">
                {program.outcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-brand-lime mt-1.5 flex-shrink-0" />
                    <span>{outcome[locale]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar Column (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Admission Requirements Card */}
            <div className="p-6 rounded-2xl bg-brand-softBg dark:bg-darkTheme-surface border border-brand-islamic/20 dark:border-darkTheme-border shadow-xs">
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4 text-brand-islamic dark:text-brand-lime" />
                <span>{isBn ? 'ভর্তির জন্য প্রয়োজনীয় কাগজপত্র' : 'Required Documents'}</span>
              </h3>
              <ul className="space-y-2.5 text-xs text-gray-600 dark:text-gray-300">
                {program.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-islamic dark:text-brand-lime flex-shrink-0 mt-0.5" />
                    <span>{req[locale]}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-gray-200/60 dark:border-darkTheme-border">
                <Link
                  href={`/${locale}/admission?class=${program.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-islamic hover:bg-brand-dark text-white font-bold text-xs shadow transition active:scale-95"
                >
                  <UserPlus className="w-4 h-4 text-brand-lime" />
                  <span>{isBn ? 'অনলাইনে আবেদন ফরম' : 'Apply Online Now'}</span>
                </Link>
              </div>
            </div>

            {/* Other Classes List */}
            <div className="p-6 rounded-2xl bg-white dark:bg-darkTheme-surface border border-gray-200/80 dark:border-darkTheme-border shadow-xs">
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3">
                {isBn ? 'অন্যান্য শ্রেণিসমূহ' : 'Other Academic Grades'}
              </h3>
              <ul className="divide-y divide-gray-100 dark:divide-darkTheme-border">
                {otherPrograms.map((op) => (
                  <li key={op.id}>
                    <Link
                      href={`/${locale}/academic-programs/${op.slug}`}
                      className="py-2.5 flex items-center justify-between text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-brand-islamic dark:hover:text-brand-lime transition group"
                    >
                      <span>{op.title[locale]}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:translate-x-1 transition-transform" />
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
