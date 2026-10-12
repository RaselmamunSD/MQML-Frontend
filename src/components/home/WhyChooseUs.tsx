'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { institutionData } from '@/data/institution';
import { SectionHeading } from '@/components/common/SectionHeading';
import {
  PenTool,
  BookOpen,
  Sparkles,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
} from 'lucide-react';

export function WhyChooseUs() {
  const { locale, t } = useLanguage();

  const iconMap: Record<string, React.ElementType> = {
    PenTool,
    BookOpen,
    Sparkles,
    GraduationCap,
    HeartHandshake,
    ShieldCheck,
  };

  return (
    <section className="py-16 sm:py-24 bg-brand-softBg dark:bg-darkTheme-surface/60 border-y border-gray-100 dark:border-darkTheme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag={t.whyChoose.tag}
          title={t.whyChoose.title}
          subtitle={t.whyChoose.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {institutionData.features.map((feature, idx) => {
            const Icon = iconMap[feature.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-darkTheme-surface border border-gray-200/80 dark:border-darkTheme-border shadow-xs hover:shadow-soft hover:border-brand-islamic/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-islamic/10 dark:bg-brand-lime/10 text-brand-islamic dark:text-brand-lime flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-brand-islamic dark:group-hover:text-brand-lime transition-colors leading-snug">
                    {feature.title[locale]}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description[locale]}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-gray-100 dark:border-darkTheme-border flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-brand-islamic dark:text-brand-lime">
                    0{idx + 1}
                  </span>
                  <span className="w-6 h-0.5 bg-brand-lime/40 rounded-full" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
