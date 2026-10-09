'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import {
  GraduationCap,
  BookOpen,
  Languages,
  BookMarked,
  ArrowRight,
} from 'lucide-react';

export function QuickInfoCards() {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  const cards = [
    {
      title: isBn ? 'প্লে থেকে ৫ম শ্রেণি' : 'Play to Class 5',
      subtitle: isBn ? 'প্রাথমিক শ্রেণি কার্যক্রম' : 'Primary Grade Levels',
      desc: isBn
        ? 'কোমলমতি শিশুদের জন্য প্রতিটি স্তরে আধুনিক ও বয়সোপযোগী পাঠ্যক্রম।'
        : 'Age-appropriate modern academic curriculum for young minds.',
      icon: GraduationCap,
      href: `/${locale}/academic-programs`,
      color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    },
    {
      title: isBn ? 'ইসলামি ও কুরআন শিক্ষা' : 'Islamic & Quranic Education',
      subtitle: isBn ? 'নূরানী সহীহ তিলাওয়াত' : 'Pure Noorani Recitation',
      desc: isBn
        ? 'সহীহ মাখরাজ, তাজবীদ, তারতীল এবং দৈনন্দিন মাসনুন দোয়া শিক্ষা।'
        : 'Accurate Tajweed phonetics, Tarteel recitation, and Masnoon supplications.',
      icon: BookOpen,
      href: `/${locale}/curriculum`,
      color: 'bg-green-500/10 text-brand-islamic dark:text-brand-lime border-brand-islamic/20',
    },
    {
      title: isBn ? 'আরবি ভাষা শিক্ষা' : 'Arabic Language Learning',
      subtitle: isBn ? 'কুরআনের ভাষা অনুধাবন' : 'Language of the Quran',
      desc: isBn
        ? 'প্রাথমিক স্তর থেকেই মৌলিক আরবি শব্দভাণ্ডার ও কথপোকথনে দক্ষতা।'
        : 'Foundational Arabic vocabulary and basic conversational fluency.',
      icon: Languages,
      href: `/${locale}/curriculum`,
      color: 'bg-blue-500/10 text-brand-blue dark:text-blue-400 border-blue-500/20',
    },
    {
      title: isBn ? 'জেনারেল শিক্ষা' : 'General Academic Education',
      subtitle: isBn ? 'বাংলা, ইংরেজি ও গণিত' : 'Bangla, English & Math',
      desc: isBn
        ? 'জাতীয় শিক্ষাক্রম অনুযায়ী বাংলা, ইংরেজি ও গণিতে শক্ত বুনিয়াদ।'
        : 'Strong foundations in primary national curriculum subjects.',
      icon: BookMarked,
      href: `/${locale}/curriculum`,
      color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    },
  ];

  return (
    <section className="relative -mt-8 sm:-mt-12 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <Link
              key={idx}
              href={card.href}
              className="p-6 rounded-2xl bg-white dark:bg-darkTheme-surface border border-gray-200/80 dark:border-darkTheme-border shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 border ${card.color}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                  {card.subtitle}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-brand-islamic dark:group-hover:text-brand-lime transition-colors">
                  {card.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 dark:border-darkTheme-border flex items-center gap-1 text-xs font-bold text-brand-islamic dark:text-brand-lime group-hover:gap-2 transition-all">
                <span>{isBn ? 'আরও জানুন' : 'Learn More'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
