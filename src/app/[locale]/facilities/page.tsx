import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Locale } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { facilitiesData } from '@/data/facilities';
import { PageContainer } from '@/components/common/PageContainer';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SectionHeading } from '@/components/common/SectionHeading';
import { CheckCircle2, UserPlus } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = getDictionary(params.locale);
  return {
    title: t.nav.facilities,
    description: `${t.institution.name} - ক্যাম্পাস ও আধুনিক শিখন পরিবেশের সুযোগ-সুবিধাসমূহ।`,
  };
}

export default function FacilitiesPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = params;
  const t = getDictionary(locale);
  const isBn = locale === 'bn';

  return (
    <div className="bg-white dark:bg-darkTheme-bg py-6 sm:py-10">
      <PageContainer>
        <Breadcrumbs items={[{ label: t.nav.facilities }]} />

        <SectionHeading
          tag={t.facilities.tag}
          title={t.facilities.title}
          subtitle={t.facilities.subtitle}
        />

        {/* Facilities Grid */}
        <div className="space-y-12 my-10">
          {facilitiesData.map((fac, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={fac.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl p-6 sm:p-8 bg-brand-softBg dark:bg-darkTheme-surface border border-gray-200/80 dark:border-darkTheme-border shadow-xs"
              >
                {/* Image (5 cols) */}
                <div
                  className={`lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-md ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <Image
                    src={fac.image}
                    alt={fac.title[locale]}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Content (7 cols) */}
                <div
                  className={`lg:col-span-7 space-y-4 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <span className="text-xs font-mono font-bold text-brand-islamic dark:text-brand-lime">
                    0{idx + 1}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                    {fac.title[locale]}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {fac.description[locale]}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-bold text-brand-islamic dark:text-brand-lime uppercase tracking-wider mb-2.5">
                      {isBn ? 'প্রধান সুবিধাসমূহ:' : 'Key Highlights:'}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {fac.features.map((feat, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 p-2.5 rounded-xl bg-white dark:bg-darkTheme-card border border-gray-200/50 dark:border-darkTheme-border text-xs text-gray-700 dark:text-gray-200 font-medium"
                        >
                          <CheckCircle2 className="w-4 h-4 text-brand-islamic dark:text-brand-lime flex-shrink-0" />
                          <span>{feat[locale]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
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
