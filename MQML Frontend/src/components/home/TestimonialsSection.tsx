'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { testimonialsData } from '@/data/testimonials';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const { locale, t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-darkTheme-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag={t.testimonials.tag}
          title={t.testimonials.title}
          subtitle={t.testimonials.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-darkTheme-surface border border-gray-200/80 dark:border-darkTheme-border shadow-soft flex flex-col justify-between relative group hover:border-brand-islamic/40 transition-all"
            >
              <Quote className="w-8 h-8 text-brand-lime/30 absolute top-5 right-5" />

              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed italic">
                  &ldquo;{item.comment[locale]}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-darkTheme-border">
                <h4 className="font-bold text-sm text-gray-900 dark:text-white">
                  {item.guardianName[locale]}
                </h4>
                <p className="text-xs text-brand-islamic dark:text-brand-lime font-medium mt-0.5">
                  {item.relation[locale]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
