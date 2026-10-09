'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { teachersData } from '@/data/teachers';
import { SectionHeading } from '@/components/common/SectionHeading';
import { TeacherCard } from '@/components/common/TeacherCard';
import { ArrowRight } from 'lucide-react';

export function TeachersPreview() {
  const { locale, t } = useLanguage();
  const isBn = locale === 'bn';

  const previewTeachers = teachersData.slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-darkTheme-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag={t.teachers.tag}
          title={t.teachers.title}
          subtitle={t.teachers.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewTeachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} locale={locale} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={`/${locale}/teachers`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-darkTheme-surface hover:bg-brand-islamic hover:text-white dark:hover:bg-brand-islamic border border-brand-islamic text-brand-islamic dark:text-brand-lime font-bold text-xs sm:text-sm shadow-xs transition-all duration-200"
          >
            <span>{t.teachers.viewAll}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
