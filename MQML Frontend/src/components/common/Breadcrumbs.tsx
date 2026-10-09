'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const { locale, t } = useLanguage();

  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 rounded-lg bg-gray-50 dark:bg-darkTheme-surface border border-gray-200/60 dark:border-darkTheme-border mb-6">
      <ol className="flex items-center flex-wrap gap-1.5 text-xs text-gray-600 dark:text-gray-300">
        <li>
          <Link
            href={`/${locale}`}
            className="flex items-center gap-1 hover:text-brand-islamic dark:hover:text-brand-lime transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>{t.common.home}</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-gray-400" />
              {isLast || !item.href ? (
                <span className="font-semibold text-brand-islamic dark:text-brand-lime truncate max-w-[200px] sm:max-w-none">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-brand-islamic dark:hover:text-brand-lime transition-colors truncate max-w-[150px] sm:max-w-none"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
