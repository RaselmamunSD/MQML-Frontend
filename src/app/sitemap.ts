import { MetadataRoute } from 'next';
import { academicProgramsData } from '@/data/programs';
import { noticesData } from '@/data/notices';
import { eventsData } from '@/data/events';
import { teachersData } from '@/data/teachers';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mqml-madrasa.edu.bd';
  const locales = ['bn', 'en'];

  const staticPages = [
    '',
    '/about',
    '/academic-programs',
    '/curriculum',
    '/teachers',
    '/facilities',
    '/notices',
    '/events',
    '/gallery',
    '/admission',
    '/contact',
    '/faq',
    '/privacy',
    '/terms',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of staticPages) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: page === '' ? 1.0 : 0.8,
      });
    }

    // Program detail pages
    for (const prog of academicProgramsData) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/academic-programs/${prog.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }

    // Notices detail pages
    for (const notice of noticesData) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/notices/${notice.id}`,
        lastModified: new Date(notice.publishedDate),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    }

    // Events detail pages
    for (const event of eventsData) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/events/${event.id}`,
        lastModified: new Date(event.date),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    }

    // Teachers detail pages
    for (const teacher of teachersData) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/teachers/${teacher.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    }
  }

  return sitemapEntries;
}
