import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  tag,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div
      className={cn(
        'mb-10 sm:mb-14',
        isCenter ? 'text-center max-w-3xl mx-auto' : 'text-left max-w-3xl',
        className
      )}
    >
      {tag && (
        <div
          className={cn(
            'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-xs',
            'bg-brand-islamic/10 text-brand-dark dark:bg-brand-lime/10 dark:text-brand-lime border border-brand-islamic/20 dark:border-brand-lime/30'
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-islamic dark:bg-brand-lime" />
          <span>{tag}</span>
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-snug">
        {title}
      </h2>

      {/* Decorative accent divider */}
      <div
        className={cn(
          'flex items-center gap-2 mt-3.5 mb-3.5',
          isCenter ? 'justify-center' : 'justify-start'
        )}
      >
        <span className="h-0.5 w-10 bg-brand-islamic dark:bg-brand-lime rounded-full" />
        <span className="w-2 h-2 rotate-45 bg-brand-lime dark:bg-brand-islamic" />
        <span className="h-0.5 w-10 bg-brand-islamic dark:bg-brand-lime rounded-full" />
      </div>

      {subtitle && (
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
