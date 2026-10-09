import React from 'react';
import type { Metadata } from 'next';
import { Locale } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { galleryData } from '@/data/gallery';
import { PageContainer } from '@/components/common/PageContainer';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SectionHeading } from '@/components/common/SectionHeading';
import { GalleryClient } from '@/components/gallery/GalleryClient';

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = getDictionary(params.locale);
  return {
    title: t.nav.gallery,
    description: `${t.institution.name} - চিত্রশালা, শ্রেণিকক্ষ ও নূরানী কুরআন শিক্ষার স্থিরচিত্র।`,
  };
}

export default function GalleryPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = params;
  const t = getDictionary(locale);

  return (
    <div className="bg-white dark:bg-darkTheme-bg py-6 sm:py-10">
      <PageContainer>
        <Breadcrumbs items={[{ label: t.nav.gallery }]} />

        <SectionHeading
          tag={t.gallery.tag}
          title={t.gallery.title}
          subtitle={t.gallery.subtitle}
        />

        <GalleryClient items={galleryData} locale={locale} />
      </PageContainer>
    </div>
  );
}
