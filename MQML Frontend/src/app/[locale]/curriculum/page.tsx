import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Locale } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { curriculumCategoriesData } from '@/data/curriculum';
import { PageContainer } from '@/components/common/PageContainer';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SectionHeading } from '@/components/common/SectionHeading';
import {
  BookOpen,
  Sparkles,
  Languages,
  ShieldCheck,
  Heart,
  GraduationCap,
  PenTool,
  CheckCircle2,
  UserPlus,
} from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = getDictionary(params.locale);
  return {
    title: t.nav.curriculum,
    description: `${t.institution.name} - সমন্বিত ইসলামি ও সাধারণ পাঠ্যক্রম এবং বিষয় পরিচিতি।`,
  };
}

export default function CurriculumPage({
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
        <Breadcrumbs items={[{ label: t.nav.curriculum }]} />

        <SectionHeading
          tag={isBn ? 'সমন্বিত শিক্ষাক্রম' : 'Integrated Curriculum'}
          title={isBn ? 'আমাদের পূর্ণাঙ্গ ও সুবিন্যস্ত পাঠ্যক্রম' : 'Comprehensive Madrasa Curriculum'}
          subtitle={isBn
            ? 'পবিত্র কুরআন শিক্ষা ও সুন্নাহর মৌলিক জ্ঞান অর্জনের সাথে জাতীয় শিক্ষাক্রম অনুযায়ী সাধারণ শিক্ষার নিখুঁত সমন্বয়'
            : 'Structured Quranic and Sunnah knowledge fused seamlessly with national primary academic standards'}
        />

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

        {/* CTA */}
        <div className="mt-16 p-8 rounded-3xl bg-brand-softBg dark:bg-darkTheme-surface border border-brand-islamic/20 dark:border-darkTheme-border text-center">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
            {isBn ? 'সন্তানের জন্য সেরা পাঠ্যক্রম বেছে নিন' : 'Choose the Ideal Curriculum for Your Child'}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            {isBn
              ? 'মারকাযুল কুরআন নূরানী একাডেমি-তে নতুন শিক্ষাবর্ষের ভর্তি কার্যক্রম চলছে। এখনই আবেদন করুন।'
              : 'Admissions are open for the new academic session. Secure your child’s seat today.'}
          </p>
          <Link
            href={`/${locale}/admission`}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-islamic hover:bg-brand-dark text-white font-bold text-sm shadow transition"
          >
            <UserPlus className="w-4 h-4 text-brand-lime" />
            <span>{t.nav.applyNow}</span>
          </Link>
        </div>
      </PageContainer>
    </div>
  );
}
