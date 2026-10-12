import React from 'react';
import { SearchX } from 'lucide-react';

interface EmptyStateProps {
  title: string;
  description?: string;
  actionText?: string;
  onAction?: () => void;
}

export function EmptyState({
  title,
  description,
  actionText,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="py-16 px-4 text-center rounded-2xl border-2 border-dashed border-gray-200 dark:border-darkTheme-border bg-gray-50/50 dark:bg-darkTheme-surface/50 max-w-lg mx-auto my-8">
      <div className="w-14 h-14 rounded-full bg-brand-islamic/10 dark:bg-brand-lime/10 text-brand-islamic dark:text-brand-lime flex items-center justify-center mx-auto mb-4">
        <SearchX className="w-7 h-7" />
      </div>
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
          {description}
        </p>
      )}
      {actionText && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="px-4 py-2 text-xs font-semibold rounded-lg bg-brand-islamic text-white hover:bg-brand-dark transition-colors"
        >
          {actionText}
        </button>
      )}
    </div>
  );
}
