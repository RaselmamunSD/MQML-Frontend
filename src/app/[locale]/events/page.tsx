import React from 'react';
import type { Metadata } from 'next';
import { Locale } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { eventsData } from '@/data/events';
import { PageContainer } from '@/components/common/PageContainer';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SectionHeading } from '@/components/common/SectionHeading';
import { EventsClient } from '@/components/events/EventsClient';

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = getDictionary(params.locale);
  return {
    title: t.nav.events,
    description: `${t.institution.name} - কিরাত প্রতিযোগিতা, বার্ষিক ক্রীড়া ও ইসলামিক অনুষ্ঠানসমূহ।`,
  };
}

export default function EventsPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = params;
  const t = getDictionary(locale);

  return (
    <div className="bg-white dark:bg-darkTheme-bg py-6 sm:py-10">
      <PageContainer>
        <Breadcrumbs items={[{ label: t.nav.events }]} />

        <SectionHeading
          tag={t.events.tag}
          title={t.events.title}
          subtitle={t.events.subtitle}
        />

        <EventsClient events={eventsData} locale={locale} />
      </PageContainer>
    </div>
  );
}
