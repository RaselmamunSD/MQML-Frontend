'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  id: string;
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function AccordionItem({
  id,
  title,
  content,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className="border border-gray-200 dark:border-darkTheme-border rounded-xl overflow-hidden mb-3 bg-white dark:bg-darkTheme-surface shadow-xs transition-colors">
      <button
        type="button"
        id={`accordion-btn-${id}`}
        aria-expanded={isOpen}
        aria-controls={`accordion-panel-${id}`}
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-semibold text-sm sm:text-base text-gray-900 dark:text-white hover:text-brand-islamic dark:hover:text-brand-lime transition-colors gap-4"
      >
        <span className="leading-snug">{title}</span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 text-brand-islamic dark:text-brand-lime transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div
          id={`accordion-panel-${id}`}
          role="region"
          aria-labelledby={`accordion-btn-${id}`}
          className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-darkTheme-border pt-4 whitespace-pre-line"
        >
          {content}
        </div>
      )}
    </div>
  );
}

interface AccordionProps {
  items: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
}

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.question}
          content={item.answer}
          isOpen={openId === item.id}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
}
