import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TeacherProfile, Locale } from '@/types';
import { GraduationCap, BookOpen, Award, Phone } from 'lucide-react';

interface TeacherCardProps {
  teacher: TeacherProfile;
  locale: Locale;
}

export function TeacherCard({ teacher, locale }: TeacherCardProps) {
  const isBn = locale === 'bn';

  return (
    <div className="rounded-2xl overflow-hidden bg-white dark:bg-darkTheme-surface border border-gray-200/80 dark:border-darkTheme-border shadow-sm hover:shadow-soft-lg hover:border-brand-islamic/40 dark:hover:border-brand-lime/40 transition-all duration-300 flex flex-col group">
      {/* Top Image area */}
      <div className="relative h-60 w-full overflow-hidden bg-gray-100 dark:bg-darkTheme-card">
        <Image
          src={teacher.image}
          alt={teacher.name[locale]}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <div className="absolute bottom-3 left-4 right-4">
          <span className="inline-block text-[11px] font-semibold text-brand-lime bg-black/60 backdrop-blur-xs px-2.5 py-0.5 rounded-full mb-1">
            {teacher.designation[locale]}
          </span>
          <h3 className="text-lg font-bold text-white leading-snug">
            {teacher.name[locale]}
          </h3>
        </div>
      </div>

      {/* Details */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          {/* Qualifications */}
          <div className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300">
            <GraduationCap className="w-4 h-4 text-brand-islamic dark:text-brand-lime flex-shrink-0 mt-0.5" />
            <span className="line-clamp-2">{teacher.qualifications[locale]}</span>
          </div>

          {/* Subjects */}
          <div className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300">
            <BookOpen className="w-4 h-4 text-brand-islamic dark:text-brand-lime flex-shrink-0 mt-0.5" />
            <div className="flex flex-wrap gap-1">
              {teacher.subjectsTaught.map((sub, i) => (
                <span
                  key={i}
                  className="bg-gray-100 dark:bg-darkTheme-card px-2 py-0.5 rounded text-[11px]"
                >
                  {sub[locale]}
                </span>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
            <Award className="w-4 h-4 text-brand-islamic dark:text-brand-lime flex-shrink-0" />
            <span>{teacher.experience[locale]}</span>
          </div>
        </div>

        {/* Action Link */}
        <div className="pt-3 border-t border-gray-100 dark:border-darkTheme-border flex items-center justify-between">
          <Link
            href={`/${locale}/teachers/${teacher.id}`}
            className="text-xs font-bold text-brand-islamic dark:text-brand-lime hover:underline"
          >
            {isBn ? 'প্রোফাইল দেখুন →' : 'View Profile →'}
          </Link>

          {teacher.phone && (
            <a
              href={`tel:${teacher.phone}`}
              className="p-1.5 rounded-full bg-brand-islamic/10 dark:bg-brand-lime/10 text-brand-islamic dark:text-brand-lime hover:bg-brand-islamic hover:text-white transition"
              title="Call"
              aria-label="Call"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
