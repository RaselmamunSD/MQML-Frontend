'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { GalleryItem, Locale } from '@/types';
import { Lightbox } from '@/components/common/Lightbox';
import { Eye, Filter } from 'lucide-react';

interface GalleryClientProps {
  items: GalleryItem[];
  locale: Locale;
}

export function GalleryClient({ items, locale }: GalleryClientProps) {
  const isBn = locale === 'bn';
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: isBn ? 'সকল ছবি' : 'All Photos' },
    { id: 'classroom', label: isBn ? 'শ্রেণিকক্ষ' : 'Classrooms' },
    { id: 'quran', label: isBn ? 'কুরআন তিলাওয়াত' : 'Quran Recitation' },
    { id: 'activities', label: isBn ? 'হাতের লেখা ও কার্যক্রম' : 'Activities' },
    { id: 'events', label: isBn ? 'ইভেন্ট ও উৎসব' : 'Events' },
    { id: 'campus', label: isBn ? 'ক্যাম্পাস' : 'Campus' },
  ];

  const filteredItems = items.filter((item) => {
    if (selectedCat === 'all') return true;
    return item.category === selectedCat;
  });

  const formattedImages = filteredItems.map((item) => ({
    src: item.image,
    title: item.title[locale],
    caption: item.caption ? item.caption[locale] : undefined,
  }));

  return (
    <div className="space-y-8">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCat(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedCat === cat.id
                ? 'bg-brand-islamic text-white shadow-xs'
                : 'bg-gray-100 dark:bg-darkTheme-card text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-darkTheme-cardHover'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setLightboxIndex(idx)}
            className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-xs hover:shadow-soft-lg bg-gray-100 dark:bg-darkTheme-card border border-gray-200/80 dark:border-darkTheme-border transition-all duration-300"
          >
            <div className="relative aspect-4/3 w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title[locale]}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* Hover Eye Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white">
                  <Eye className="w-5 h-5" />
                </div>
              </div>

              {/* Caption */}
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-1">
                  {item.title[locale]}
                </h4>
                {item.caption && (
                  <p className="text-[11px] text-gray-300 line-clamp-1 mt-0.5">
                    {item.caption[locale]}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          isOpen={true}
          images={formattedImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((prev) =>
              prev !== null && prev > 0 ? prev - 1 : formattedImages.length - 1
            )
          }
          onNext={() =>
            setLightboxIndex((prev) =>
              prev !== null && prev < formattedImages.length - 1 ? prev + 1 : 0
            )
          }
        />
      )}
    </div>
  );
}
