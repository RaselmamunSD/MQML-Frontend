'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center opacity-50" />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-darkTheme-cardHover border border-gray-200 dark:border-darkTheme-border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-islamic"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'লাইট মোড অন করুন' : 'ডার্ক মোড অন করুন'}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-brand-lime transition-transform rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-brand-dark transition-transform rotate-0 hover:-rotate-12" />
      )}
    </button>
  );
}
