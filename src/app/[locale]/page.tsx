import React from 'react';
import type { Metadata } from 'next';
import { Locale } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { HeroSection } from '@/components/home/HeroSection';
import { QuickInfoCards } from '@/components/home/QuickInfoCards';
import { WelcomeSection } from '@/components/home/WelcomeSection';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { QuranEducationHighlight } from '@/components/home/QuranEducationHighlight';
import { ProgramsPreview } from '@/components/home/ProgramsPreview';
import { FacilitiesPreview } from '@/components/home/FacilitiesPreview';
import { TeachersPreview } from '@/components/home/TeachersPreview';
import { NoticesPreview } from '@/components/home/NoticesPreview';
import { EventsPreview } from '@/components/home/EventsPreview';
import { GalleryPreview } from '@/components/home/GalleryPreview';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { AdmissionCTA } from '@/components/home/AdmissionCTA';

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = getDictionary(params.locale);
  return {
    title: t.institution.name,
    description: `${t.institution.name} - ${t.institution.tagline}. ${t.institution.locationShort}.`,
    openGraph: {
      title: `${t.institution.name} | ${t.institution.tagline}`,
      description: t.hero.description,
      images: [
        {
          url: '/images/logo.jpg',
          width: 800,
          height: 800,
          alt: t.institution.name,
        },
        {
          url: '/images/banner.jpg',
          width: 1200,
          height: 630,
          alt: t.institution.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t.institution.name} | ${t.institution.tagline}`,
      description: t.hero.description,
      images: ['/images/logo.jpg'],
    },
  };
}

export default function HomePage({
  params,
}: {
  params: { locale: Locale };
}) {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <QuickInfoCards />
      <WelcomeSection />
      <WhyChooseUs />
      <QuranEducationHighlight />
      <ProgramsPreview />
      <FacilitiesPreview />
      <TeachersPreview />
      <NoticesPreview />
      <EventsPreview />
      <GalleryPreview />
      <TestimonialsSection />
      <AdmissionCTA />
    </div>
  );
}
