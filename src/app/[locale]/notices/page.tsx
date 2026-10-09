import React from 'react';
import type { Metadata } from 'next';
import { Locale } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { noticesData } from '@/data/notices';
import { PageContainer } from '@/components/common/PageContainer';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SectionHeading } from '@/components/common/SectionHeading';
import { NoticeBoardClient } from '@/components/notices/NoticeBoardClient';

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = getDictionary(params.locale);
  return {
    title: t.nav.notices,
    description: `${t.institution.name} - নোটিশ বোর্ড, পরীক্ষা ও ছুটির বিজ্ঞপ্তি।`,
  };
}

export default function NoticesPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = params;
  const t = getDictionary(locale);

  return (
    <div className="bg-white dark:bg-darkTheme-bg py-6 sm:py-10">
      <PageContainer>
        <Breadcrumbs items={[{ label: t.nav.notices }]} />

        <SectionHeading
          tag={t.notices.tag}
          title={t.notices.title}
          subtitle={t.notices.subtitle}
        />

        <NoticeBoardClient notices={noticesData} locale={locale} />
      </PageContainer>
    </div>
  );
}
