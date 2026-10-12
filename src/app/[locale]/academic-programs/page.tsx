import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Locale } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { academicProgramsData } from '@/data/programs';
import { curriculumCategoriesData } from '@/data/curriculum';
import { PageContainer } from '@/components/common/PageContainer';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ProgramCard } from '@/components/academic/ProgramCard';
import {
  BookOpen,
  Sparkles,
  Languages,
  ShieldCheck,
  Heart,
  GraduationCap,
  PenTool,
  Phone,
  Layers,
  ArrowDown,
  CheckCircle2,
} from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = getDictionary(params.locale);
  return {
    title: `${t.nav.programs} ও কারিকুলাম`,
    description: `${t.institution.name} - প্লে গ্রুপ থেকে ৫ম শ্রেণি পর্যন্ত একাডেমিক প্রোগ্রাম, পূর্ণাঙ্গ পাঠ্যক্রম ও বিষয়ভিত্তিক রূপরেখা।`,
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

  const iconMap: Record<string, React.ElementType> = {
    BookOpen,
    Sparkles,
    Languages,
    ShieldCheck,
    Heart,
    GraduationCap,
    PenTool,
  };

  return (
    <div className="bg-white dark:bg-darkTheme-bg py-6 sm:py-10">
      <PageContainer>
        <Breadcrumbs items={[{ label: t.nav.programs }]} />

        {/* Hero Section Heading */}
        <SectionHeading
          tag={isBn ? 'একাডেমিক প্রোগ্রাম ও সমন্বিত কারিকুলাম' : 'Academic Programs & Curriculum'}
          title={isBn ? 'প্লে থেকে ৫ম শ্রেণি ও পূর্ণাঙ্গ পাঠ্যক্রম রূপরেখা' : 'Grade-wise Programs & Integrated Curriculum'}
          subtitle={isBn
            ? 'নূরানী পদ্ধতিতে বিশুদ্ধ কুরআন তিলাওয়াত ও আরবি ভাষার বুনিয়াদী শিক্ষার পাশাপাশি জাতীয় শিক্ষাক্রম অনুযায়ী আধুনিক সাধারণ শিক্ষার সুবিন্যস্ত কারিকুলাম।'
            : 'Structured Quranic Noorani recitation and authentic Islamic ethos harmoniously fused with modern national primary academics.'}
        />

        {/* Quick Navigation Jump Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 my-6">
          <a
            href="#programs-list"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-islamic/10 dark:bg-brand-lime/10 hover:bg-brand-islamic hover:text-white dark:hover:bg-brand-lime dark:hover:text-brand-dark text-brand-islamic dark:text-brand-lime font-bold text-xs sm:text-sm border border-brand-islamic/20 transition-all duration-200"
          >
            <GraduationCap className="w-4 h-4" />
            <span>{isBn ? 'শ্রেণিভিত্তিক প্রোগ্রামসমূহ (প্লে - ৫ম)' : 'Grade Programs (Play - 5)'}</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
          <a
            href="#curriculum-structure"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-islamic text-white hover:bg-brand-dark font-bold text-xs sm:text-sm shadow-xs transition-all duration-200"
          >
            <BookOpen className="w-4 h-4 text-brand-lime" />
            <span>{isBn ? 'পূর্ণাঙ্গ পাঠ্যক্রম ও বিষয় কাঠামো (Curriculum)' : 'Comprehensive Curriculum'}</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Highlights Banner */}
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
                ? 'আমাদের প্রতিটি শ্রেণির পাঠ্যক্রমে শিশুদের মানসিক বয়সের সাথে সঙ্গতি রেখে বিষয় নির্ধারণ করা হয়েছে। নিচে প্রথমে শ্রেণিভিত্তিক বিবরণ ও এরপর পূর্ণাঙ্গ বিষয়ভিত্তিক পাঠ্যক্রম বিস্তারিত দেখুন।'
                : 'Curricula for each grade are scientifically adapted to children’s cognitive development. Explore grade-wise classes below followed by comprehensive subject syllabi.'}
            </p>
          </div>

          <div className="flex-shrink-0 flex items-center gap-3">
            <a
              href="tel:01734108046"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-darkTheme-card hover:bg-gray-100 text-brand-dark dark:text-white text-xs sm:text-sm font-bold border border-gray-200 dark:border-darkTheme-border transition shadow-xs"
            >
              <Phone className="w-4 h-4 text-brand-islamic dark:text-brand-lime" />
              <span>{locale === 'bn' ? '০১৭৩৪-১০৮০৪৬' : '01734-108046'}</span>
            </a>
          </div>
        </div>

        {/* SECTION 1: Grade-wise Academic Programs */}
        <section id="programs-list" className="scroll-mt-28 mb-20">
          <div className="flex items-center justify-between gap-4 border-b border-gray-200/80 dark:border-darkTheme-border pb-4 mb-8">
            <div>
              <span className="text-xs font-bold text-brand-islamic dark:text-brand-lime uppercase tracking-wider">
                {isBn ? 'ধাপ ০১ : শ্রেণি কার্যক্রম' : 'Step 01 : Grade Programs'}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {isBn ? 'শ্রেণিভিত্তিক শিক্ষা কার্যক্রম' : 'Academic Programs by Grade'}
              </h2>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 hidden sm:inline-block font-medium">
              {isBn ? 'প্লে গ্রুপ থেকে ৫ম শ্রেণি' : 'Play to Class 5'}
            </span>
          </div>

          {/* Grid of Programs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {academicProgramsData.map((program) => (
              <ProgramCard key={program.id} program={program} locale={locale} />
            ))}
          </div>
        </section>

        {/* SECTION 2: Integrated Curriculum & Subjects */}
        <section id="curriculum-structure" className="scroll-mt-28 pt-8 border-t-2 border-dashed border-gray-200 dark:border-darkTheme-border">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-islamic/10 dark:bg-brand-lime/10 text-brand-islamic dark:text-brand-lime text-xs font-bold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>{isBn ? 'ধাপ ০২ : বিষয়ভিত্তিক পাঠ্যক্রম' : 'Step 02 : Subject Curriculum'}</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
              {isBn ? 'আমাদের পূর্ণাঙ্গ ও সুবিন্যস্ত পাঠ্যক্রম (Curriculum)' : 'Comprehensive Madrasa Curriculum'}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
              {isBn
                ? 'পবিত্র কুরআন শিক্ষা ও সুন্নাহর মৌলিক জ্ঞান অর্জনের সাথে জাতীয় শিক্ষাক্রম অনুযায়ী সাধারণ শিক্ষার নিখুঁত সমন্বয়। নিচে প্রতিটি বিষয়ের স্তরভিত্তিক রূপরেখা উপস্থাপন করা হলো।'
                : 'Structured Quranic and Sunnah knowledge fused seamlessly with national primary academic standards across all disciplines.'}
            </p>
          </div>

          {/* Categories Stack */}
          <div className="space-y-10 my-10">
            {curriculumCategoriesData.map((cat, idx) => {
              const Icon = iconMap[cat.icon] || BookOpen;
              return (
                <div
                  key={cat.id}
                  className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-darkTheme-surface border border-gray-200/80 dark:border-darkTheme-border shadow-xs hover:border-brand-islamic/40 transition-colors"
                >
                  {/* Category Header */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-100 dark:border-darkTheme-border pb-5 mb-6">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-brand-islamic/10 dark:bg-brand-lime/10 text-brand-islamic dark:text-brand-lime flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono font-bold text-brand-islamic dark:text-brand-lime">
                          0{idx + 1}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                          {cat.title[locale]}
                        </h3>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-md sm:text-right">
                      {cat.description[locale]}
                    </p>
                  </div>

                  {/* Subject Cards inside Category */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cat.subjects.map((sub, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-4 sm:p-5 rounded-2xl bg-brand-softBg dark:bg-darkTheme-card border border-gray-200/60 dark:border-darkTheme-border flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                              {sub.name[locale]}
                            </h4>
                          </div>
                          <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                            {sub.description[locale]}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-gray-200/50 dark:border-darkTheme-border/50 flex items-center justify-between text-[11px]">
                          <span className="text-gray-500 dark:text-gray-400 font-medium">
                            {isBn ? 'শ্রেণি পর্যায়:' : 'Target Levels:'}
                          </span>
                          <span className="font-semibold text-brand-islamic dark:text-brand-lime px-2 py-0.5 rounded bg-white dark:bg-darkTheme-surface border border-gray-200/60 dark:border-darkTheme-border">
                            {sub.level[locale]}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom Curriculum Summary Highlights */}
        <div className="mt-16 p-8 rounded-3xl bg-brand-softBg dark:bg-darkTheme-surface border border-brand-islamic/20 dark:border-darkTheme-border text-center">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
            {isBn ? 'সন্তানের দ্বীনি ও আধুনিক শিক্ষার নিশ্চয়তা' : 'Ensure Your Child’s Balanced Moral & Modern Education'}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            {isBn
              ? 'মারকাযুল কুরআন নূরানী একাডেমি-তে নতুন শিক্ষাবর্ষে ভর্তি চলছে। আসন সংখ্যা সীমিত, আপনার সন্তানের আসনটি এখনই নিশ্চিত করুন।'
              : 'Admissions are open for the upcoming academic session. Limited seats available. Inquire or apply today.'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href={`/${locale}/admission`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-islamic hover:bg-brand-dark text-white font-bold text-xs sm:text-sm shadow transition"
            >
              <CheckCircle2 className="w-4 h-4 text-brand-lime" />
              <span>{isBn ? 'ভর্তি তথ্য দেখুন' : 'View Admission Details'}</span>
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-darkTheme-card hover:bg-gray-100 text-gray-800 dark:text-white font-bold text-xs sm:text-sm border border-gray-200 dark:border-darkTheme-border shadow-xs transition"
            >
              <Phone className="w-4 h-4 text-brand-islamic dark:text-brand-lime" />
              <span>{t.nav.contact}</span>
            </Link>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
