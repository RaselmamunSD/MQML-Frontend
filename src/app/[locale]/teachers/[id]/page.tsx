import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Locale } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { teachersData } from '@/data/teachers';
import { PageContainer } from '@/components/common/PageContainer';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import {
  GraduationCap,
  BookOpen,
  Award,
  Phone,
  Mail,
  ArrowLeft,
  Calendar,
} from 'lucide-react';

export async function generateStaticParams() {
  const params: Array<{ locale: string; id: string }> = [];
  const locales = ['bn', 'en'];

  for (const locale of locales) {
    for (const teacher of teachersData) {
      params.push({ locale, id: teacher.id });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale; id: string };
}): Promise<Metadata> {
  const teacher = teachersData.find((t) => t.id === params.id);
  if (!teacher) return { title: 'Teacher Not Found' };

  return {
    title: `${teacher.name[params.locale]} | মারকাযুল কুরআন নূরানী একাডেমি`,
    description: teacher.bio[params.locale],
  };
}

export default function TeacherDetailPage({
  params,
}: {
  params: { locale: Locale; id: string };
}) {
  const { locale, id } = params;
  const t = getDictionary(locale);
  const isBn = locale === 'bn';

  const teacher = teachersData.find((t) => t.id === id);
  if (!teacher) {
    notFound();
  }

  return (
    <div className="bg-white dark:bg-darkTheme-bg py-6 sm:py-10">
      <PageContainer>
        <Breadcrumbs
          items={[
            { label: t.nav.teachers, href: `/${locale}/teachers` },
            { label: teacher.name[locale] },
          ]}
        />

        <div className="mb-6">
          <Link
            href={`/${locale}/teachers`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-brand-islamic dark:hover:text-brand-lime transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{isBn ? 'সকল শিক্ষকে ফিরে যান' : 'Back to Teachers'}</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Photo & Quick Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-3xl overflow-hidden bg-white dark:bg-darkTheme-surface border border-gray-200/80 dark:border-darkTheme-border shadow-soft p-5 text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-brand-islamic shadow-md bg-gray-100 dark:bg-darkTheme-card mb-4">
                <Image
                  src={teacher.image}
                  alt={teacher.name[locale]}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              <span className="inline-block text-xs font-bold text-brand-dark dark:text-brand-lime bg-brand-islamic/10 dark:bg-brand-lime/10 px-3 py-1 rounded-full mb-2">
                {teacher.designation[locale]}
              </span>

              <h1 className="text-xl font-extrabold text-gray-900 dark:text-white">
                {teacher.name[locale]}
              </h1>

              {/* Contact info */}
              <div className="mt-6 pt-5 border-t border-gray-100 dark:border-darkTheme-border space-y-3 text-left text-xs">
                {teacher.phone && (
                  <div className="flex items-center gap-2.5 text-gray-700 dark:text-gray-300">
                    <Phone className="w-4 h-4 text-brand-islamic dark:text-brand-lime flex-shrink-0" />
                    <a href={`tel:${teacher.phone}`} className="hover:underline font-semibold">
                      {teacher.phone}
                    </a>
                  </div>
                )}
                {teacher.email && (
                  <div className="flex items-center gap-2.5 text-gray-700 dark:text-gray-300">
                    <Mail className="w-4 h-4 text-brand-islamic dark:text-brand-lime flex-shrink-0" />
                    <a href={`mailto:${teacher.email}`} className="hover:underline">
                      {teacher.email}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Qualifications, Subjects (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Bio */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-darkTheme-surface border border-gray-200/80 dark:border-darkTheme-border shadow-xs">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                {isBn ? 'পরিচিতি ও শিক্ষাদান দর্শন' : 'Biography & Teaching Philosophy'}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {teacher.bio[locale]}
              </p>
            </div>

            {/* Qualifications */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-darkTheme-surface border border-gray-200/80 dark:border-darkTheme-border shadow-xs">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-brand-islamic dark:text-brand-lime" />
                <span>{isBn ? 'শিক্ষাগত যোগ্যতা' : 'Educational Qualifications'}</span>
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-200 bg-brand-softBg dark:bg-darkTheme-card p-4 rounded-xl border border-gray-200/60 dark:border-darkTheme-border font-medium">
                {teacher.qualifications[locale]}
              </p>
            </div>

            {/* Subjects and Experience */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-white dark:bg-darkTheme-surface border border-gray-200/80 dark:border-darkTheme-border shadow-xs">
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-brand-islamic dark:text-brand-lime" />
                  <span>{isBn ? 'পাঠদানরত বিষয়সমূহ' : 'Subjects Taught'}</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {teacher.subjectsTaught.map((sub, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-darkTheme-card text-xs font-semibold text-gray-800 dark:text-gray-200"
                    >
                      {sub[locale]}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white dark:bg-darkTheme-surface border border-gray-200/80 dark:border-darkTheme-border shadow-xs">
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-brand-islamic dark:text-brand-lime" />
                  <span>{isBn ? 'শিক্ষকতার অভিজ্ঞতা' : 'Teaching Experience'}</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                  {teacher.experience[locale]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
