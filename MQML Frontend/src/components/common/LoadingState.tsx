import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingStateProps {
  message?: string;
}

export function LoadingState({ message = 'লোড হচ্ছে...' }: LoadingStateProps) {
  return (
    <div className="py-20 flex flex-col items-center justify-center gap-3">
      <Loader2 className="w-8 h-8 text-brand-islamic animate-spin" />
      <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
        {message}
      </p>
    </div>
  );
}
