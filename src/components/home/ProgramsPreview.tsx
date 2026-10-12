'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { academicProgramsData } from '@/data/programs';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ProgramCard } from '@/components/academic/ProgramCard';
import { ArrowRight } from 'lucide-react';

export function ProgramsPreview() {
  const { locale, t } = useLanguage();
  const isBn = locale === 'bn';

  // Show first 4 programs on homepage
  const featuredPrograms = academicProgramsData.slice(0, 4);

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-darkTheme-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag={t.programs.tag}
          title={t.programs.title}
          subtitle={t.programs.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featuredPrograms.map((program) => (
            <ProgramCard key={program.id} program={program} locale={locale} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={`/${locale}/academic-programs`}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-darkTheme-surface hover:bg-brand-islamic hover:text-white dark:hover:bg-brand-islamic border border-brand-islamic text-brand-islamic dark:text-brand-lime font-bold text-sm shadow-xs transition-all duration-200"
          >
            <span>{isBn ? 'সকল শ্রেণি (প্লে থেকে ৫ম) বিস্তারিত দেখুন' : 'Explore All Grades (Play to Class 5)'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
