'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { galleryData } from '@/data/gallery';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Lightbox } from '@/components/common/Lightbox';
import { ArrowRight, Eye } from 'lucide-react';

export function GalleryPreview() {
  const { locale, t } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const previewImages = galleryData.slice(0, 6);

  const formattedImages = previewImages.map((img) => ({
    src: img.image,
    title: img.title[locale],
    caption: img.caption ? img.caption[locale] : undefined,
  }));

  return (
    <section className="py-16 sm:py-24 bg-brand-softBg dark:bg-darkTheme-surface/60 border-y border-gray-100 dark:border-darkTheme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag={t.gallery.tag}
          title={t.gallery.title}
          subtitle={t.gallery.subtitle}
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {previewImages.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-xs hover:shadow-soft transition-all duration-300 border border-gray-200/80 dark:border-darkTheme-border"
            >
              <Image
                src={item.image}
                alt={item.title[locale]}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="p-2 rounded-full bg-white/20 backdrop-blur-xs text-white">
                  <Eye className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={`/${locale}/gallery`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-islamic hover:bg-brand-dark text-white text-xs sm:text-sm font-semibold shadow transition-all duration-200"
          >
            <span>{t.gallery.viewAll}</span>
            <ArrowRight className="w-4 h-4 text-brand-lime" />
          </Link>
        </div>
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
    </section>
  );
}
