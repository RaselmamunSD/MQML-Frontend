'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { facilitiesData } from '@/data/facilities';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function FacilitiesPreview() {
  const { locale, t } = useLanguage();
  const isBn = locale === 'bn';

  const previewFacilities = facilitiesData.slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-brand-softBg dark:bg-darkTheme-surface/60 border-y border-gray-100 dark:border-darkTheme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag={t.facilities.tag}
          title={t.facilities.title}
          subtitle={t.facilities.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewFacilities.map((fac) => (
            <div
              key={fac.id}
              className="rounded-2xl overflow-hidden bg-white dark:bg-darkTheme-surface border border-gray-200/80 dark:border-darkTheme-border shadow-xs hover:shadow-soft transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={fac.image}
                  alt={fac.title[locale]}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-brand-islamic dark:group-hover:text-brand-lime transition-colors">
                    {fac.title[locale]}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {fac.shortDesc[locale]}
                  </p>

                  <ul className="mt-4 space-y-1.5 text-xs text-gray-600 dark:text-gray-300">
                    {fac.features.slice(0, 2).map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-islamic dark:text-brand-lime flex-shrink-0" />
                        <span>{feat[locale]}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-darkTheme-border">
                  <Link
                    href={`/${locale}/facilities`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-islamic dark:text-brand-lime hover:underline"
                  >
                    <span>{isBn ? 'বিস্তারিত দেখুন' : 'Explore Facility'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={`/${locale}/facilities`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-islamic hover:bg-brand-dark text-white text-xs sm:text-sm font-semibold shadow transition-all duration-200"
          >
            <span>{t.facilities.viewAll}</span>
            <ArrowRight className="w-4 h-4 text-brand-lime" />
          </Link>
        </div>
      </div>
    </section>
  );
}
