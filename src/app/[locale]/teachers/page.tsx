import React from 'react';
import type { Metadata } from 'next';
import { Locale } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { teachersData } from '@/data/teachers';
import { PageContainer } from '@/components/common/PageContainer';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SectionHeading } from '@/components/common/SectionHeading';
import { TeacherCard } from '@/components/common/TeacherCard';

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = getDictionary(params.locale);
  return {
    title: t.nav.teachers,
    description: `${t.institution.name} - অভিজ্ঞ, নিবেদিতপ্রাণ ও স্নেহশীল শিক্ষক পরিচিতি।`,
  };
}

export default function TeachersPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = params;
  const t = getDictionary(locale);

  return (
    <div className="bg-white dark:bg-darkTheme-bg py-6 sm:py-10">
      <PageContainer>
        <Breadcrumbs items={[{ label: t.nav.teachers }]} />

        <SectionHeading
          tag={t.teachers.tag}
          title={t.teachers.title}
          subtitle={t.teachers.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachersData.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} locale={locale} />
          ))}
        </div>
      </PageContainer>
    </div>
  );
}
