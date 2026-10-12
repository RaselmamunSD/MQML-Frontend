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

  const isDark = mounted ? resolvedTheme === 'dark' : false;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full bg-white dark:bg-darkTheme-surface border border-gray-200/90 dark:border-white/20 shadow-xs flex items-center justify-center text-slate-800 dark:text-amber-400 hover:bg-gray-100 dark:hover:bg-darkTheme-cardHover transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-islamic flex-shrink-0"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'লাইট মোড চালু করুন (Switch to Light Mode)' : 'ডার্ক মোড চালু করুন (Switch to Dark Mode)'}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 fill-amber-400/20 transition-transform duration-300 hover:rotate-90" />
      ) : (
        <Moon className="w-4 h-4 text-slate-800 fill-slate-800/15 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
}
