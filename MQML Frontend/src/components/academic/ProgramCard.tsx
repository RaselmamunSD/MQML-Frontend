'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AcademicProgram, Locale } from '@/types';
import { Clock, Users, ArrowRight, BookOpen } from 'lucide-react';

interface ProgramCardProps {
  program: AcademicProgram;
  locale: Locale;
}

export function ProgramCard({ program, locale }: ProgramCardProps) {
  const isBn = locale === 'bn';

  return (
    <div className="group rounded-2xl overflow-hidden bg-white dark:bg-darkTheme-surface border border-gray-200/80 dark:border-darkTheme-border shadow-sm hover:shadow-soft-lg hover:border-brand-islamic/40 dark:hover:border-brand-lime/40 transition-all duration-300 flex flex-col">
      {/* Card Image */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gray-100 dark:bg-darkTheme-card">
        <Image
          src={program.featuredImage}
          alt={program.title[locale]}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Code badge */}
        <div className="absolute top-3 left-3 bg-brand-islamic text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
          {program.code}
        </div>

        {/* Age limit badge */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-white bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-md">
          <Users className="w-3.5 h-3.5 text-brand-lime" />
          <span>{isBn ? `বয়স: ${program.ageEligibility.bn}` : `Age: ${program.ageEligibility.en}`}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-brand-islamic dark:group-hover:text-brand-lime transition-colors">
            {program.title[locale]}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
            {program.overview[locale]}
          </p>

          {/* Subjects mini list */}
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-darkTheme-border">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-islamic dark:text-brand-lime mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{isBn ? 'প্রধান পাঠ্য বিষয়সমূহ:' : 'Key Subjects:'}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {program.subjects.slice(0, 3).map((sub, i) => (
                <span
                  key={i}
                  className="text-[11px] px-2 py-0.5 rounded-md bg-gray-100 dark:bg-darkTheme-card text-gray-700 dark:text-gray-300"
                >
                  {sub[locale]}
                </span>
              ))}
              {program.subjects.length > 3 && (
                <span className="text-[11px] px-1.5 py-0.5 rounded-md text-gray-500 dark:text-gray-400">
                  +{program.subjects.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-6 pt-4 border-t border-gray-100 dark:border-darkTheme-border flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
            <Clock className="w-3.5 h-3.5" />
            <span>{program.duration[locale]}</span>
          </div>

          <Link
            href={`/${locale}/academic-programs/${program.slug}`}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-islamic dark:text-brand-lime hover:underline group/btn"
          >
            <span>{isBn ? 'বিস্তারিত দেখুন' : 'View Details'}</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
