import { Locale } from '@/types';
import { bn } from '@/messages/bn';
import { en } from '@/messages/en';

export const defaultLocale: Locale = 'bn';
export const locales: Locale[] = ['bn', 'en'];

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getDictionary(locale: Locale) {
  return locale === 'en' ? en : bn;
}
