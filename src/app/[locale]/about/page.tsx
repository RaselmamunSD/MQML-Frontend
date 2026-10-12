import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Locale } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { institutionData } from '@/data/institution';
import { PageContainer } from '@/components/common/PageContainer';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SectionHeading } from '@/components/common/SectionHeading';
import {
  Compass,
  Eye,
  Heart,
  BookOpen,
  ShieldCheck,
  Award,
  CheckCircle2,
  Calendar,
  MapPin,
  Quote,
  UserPlus,
} from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = getDictionary(params.locale);
  return {
    title: t.nav.about,
    description: `${t.institution.name} - ইতিহাস, লক্ষ্য, উদ্দেশ্য ও প্রতিষ্ঠান পরিচিতি।`,
  };
}

export default function AboutPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = params;
  const t = getDictionary(locale);
  const isBn = locale === 'bn';
  const principal = institutionData.principal;

  const coreValues = [
    {
      title: isBn ? 'তাকওয়া ও ইখলাস' : 'Taqwa & Sincerity',
      desc: isBn
        ? 'আল্লাহর সন্তুষ্টি অর্জন ও অন্তরে খোদাভীতি জাগ্রত করাই সকল শিক্ষার ভিত্তি।'
        : 'Seeking the pleasure of Allah and instilling God-consciousness in all pursuits.',
      icon: Heart,
    },
    {
      title: isBn ? 'উত্তম চরিত্র ও আদব' : 'Moral Character & Adab',
      desc: isBn
        ? 'ইলমের আগে আদব—নবীজির সুন্নাহ অনুযায়ী সুন্দর ব্যবহার ও শিষ্টাচার গঠন।'
        : 'Adab precedes knowledge—practicing prophetic etiquettes and polite conduct.',
      icon: ShieldCheck,
    },
    {
      title: isBn ? 'জ্ঞান ও মেধা বিকাশ' : 'Academic Excellence',
      desc: isBn
        ? 'দ্বীনি শিক্ষার সাথে আধুনিক বাংলা, ইংরেজি ও গণিতে বাস্তব দক্ষতা অর্জন।'
        : 'Cultivating authentic Islamic knowledge alongside modern language and math skills.',
      icon: BookOpen,
    },
    {
      title: isBn ? 'শৃঙ্খলা ও নিয়মানুবর্তিতা' : 'Discipline & Punctuality',
      desc: isBn
        ? 'সময়নিষ্ঠা ও সুশৃঙ্খল জীবনযাপনের মাধ্যমে শিশুকে আদর্শ নাগরিকে রূপান্তর।'
        : 'Transforming children into disciplined, responsible, and punctual individuals.',
      icon: Compass,
    },
  ];

  return (
    <div className="bg-white dark:bg-darkTheme-bg py-6 sm:py-10">
      <PageContainer>
        <Breadcrumbs items={[{ label: t.nav.about }]} />

        {/* Hero Section of About */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-islamic/10 text-brand-dark dark:bg-brand-lime/10 dark:text-brand-lime text-xs font-bold uppercase tracking-wider">
              <span>{isBn ? 'প্রতিষ্ঠান পরিচিতি' : 'Institutional Overview'}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 dark:text-white tracking-tight leading-tight">
              {t.institution.name}
            </h1>

            <p className="text-base sm:text-lg font-semibold text-brand-islamic dark:text-brand-lime">
              {t.institution.tagline}
            </p>

            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              {isBn
                ? 'মারকাযুল কুরআন নূরানী একাডেমি ২০২২ সালে লালমনিরহাট জেলার আদিতমারী উপজেলার খাতাপাড়া গ্রামে প্রতিষ্ঠিত হয়। এটি একটি সমন্বিত আদর্শ দ্বীনি শিক্ষাপ্রতিষ্ঠান, যেখানে প্রখ্যাত নূরানী পদ্ধতিতে বিশুদ্ধ কুরআন তিলাওয়াত শিক্ষার সাথে সাথে প্লে গ্রুপ থেকে ৫ম শ্রেণি পর্যন্ত আধুনিক সাধারণ শিক্ষা সফলভাবে প্রদান করা হচ্ছে।'
                : 'Markazul Quran Noorani Academy was founded in 2022 in Khatapara village, Saptibari, Aditmari, Lalmonirhat. It stands as an integrated educational sanctuary dedicated to authentic Noorani Quran recitation coupled with comprehensive primary academic curricula from Play Group to Class 5.'}
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-gray-700 dark:text-gray-300">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-darkTheme-card">
                <Calendar className="w-4 h-4 text-brand-islamic dark:text-brand-lime" />
                {t.institution.established}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-darkTheme-card">
                <MapPin className="w-4 h-4 text-brand-islamic dark:text-brand-lime" />
                {t.institution.locationShort}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-3 border-4 border-brand-islamic/30 shadow-2xl bg-white dark:bg-darkTheme-surface flex items-center justify-center">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/images/logo.jpg"
                  alt="Madrasa Logo"
                  fill
                  priority
                  className="object-contain p-2"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mission and Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
          {/* Mission */}
          <div className="p-8 rounded-3xl bg-brand-softBg dark:bg-darkTheme-surface border border-gray-200/80 dark:border-darkTheme-border shadow-xs relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-brand-islamic text-white flex items-center justify-center mb-5 shadow">
              <Compass className="w-6 h-6 text-brand-lime" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {isBn ? 'আমাদের লক্ষ্য ও উদ্দেশ্য (Mission)' : 'Our Mission'}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              {isBn
                ? 'শিশুদের শৈশবেই বিশুদ্ধ কুরআন তিলাওয়াতের নূরানী বুনিয়াদ গঠন এবং সুন্নতি শিষ্টাচার ও নৈতিক শিক্ষার মাধ্যমে আলোকিত চরিত্র গড়ে তোলা। একই সাথে বাংলা, ইংরেজি ও গণিত বিষয়ে আধুনিক মানের দক্ষতা তৈরি করে তাদের ভবিষ্যৎ জীবনের উপযুক্ত নেতৃত্ব হিসেবে গড়ে তোলা।'
                : 'To lay a firm Noorani foundation of authentic Quran recitation in early childhood while nurturing righteous morals. Concurrently, to cultivate excellence in Bangla, English, and mathematics to prepare children as responsible future leaders.'}
            </p>
            <ul className="space-y-2 text-xs text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-islamic dark:text-brand-lime flex-shrink-0" />
                <span>{isBn ? '১০০% বিশুদ্ধ মাখরাজ ও তাজবীদ শিক্ষা' : '100% authentic Makharij and Tajweed phonetics'}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-islamic dark:text-brand-lime flex-shrink-0" />
                <span>{isBn ? 'প্রাথমিক স্তরে সুন্দর হস্তাক্ষর প্রশিক্ষণ' : 'Specialized calligraphy & handwriting training'}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-islamic dark:text-brand-lime flex-shrink-0" />
                <span>{isBn ? 'অসচ্ছল ও এতিম শিক্ষার্থীদের বিশেষ সুযোগ' : 'Scholarships for disadvantaged students'}</span>
              </li>
            </ul>
          </div>

          {/* Vision */}
          <div className="p-8 rounded-3xl bg-white dark:bg-darkTheme-surface border border-gray-200/80 dark:border-darkTheme-border shadow-xs relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-brand-dark text-brand-lime flex items-center justify-center mb-5 shadow">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {isBn ? 'আমাদের রূপকল্প (Vision)' : 'Our Vision'}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              {isBn
                ? 'লালমনিরহাট অঞ্চল তথা বাংলাদেশে এমন একটি আদর্শ দ্বীনি ও সাধারণ সমন্বিত শিক্ষাঙ্গন হিসেবে প্রতিষ্ঠিত হওয়া—যা প্রতিটি পরিবারকে তাদের সন্তানের দ্বীন ও দুনিয়ার সুসমন্বিত সফলতায় পূর্ণ আত্মবিশ্বাস জোগাবে।'
                : 'To become a benchmark integrated Islamic and modern academic educational model in Lalmonirhat and Bangladesh that gives every family complete peace of mind regarding their child’s spiritual and worldly excellence.'}
            </p>
            <ul className="space-y-2 text-xs text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-islamic dark:text-brand-lime flex-shrink-0" />
                <span>{isBn ? 'ইসলাম ও আধুনিকতার অনন্য মেলবন্ধন' : 'Harmonious union of Islam and modern academics'}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-islamic dark:text-brand-lime flex-shrink-0" />
                <span>{isBn ? 'সুশৃঙ্খল ও শিশুবান্ধব নিরাপদ ক্যাম্পাস' : 'Disciplined, child-friendly, secure campus'}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-islamic dark:text-brand-lime flex-shrink-0" />
                <span>{isBn ? 'নৈতিক মূল্যবোধসম্পন্ন আগামী প্রজন্ম' : 'A morally enlightened upcoming generation'}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Core Values */}
        <div className="my-16">
          <SectionHeading
            tag={isBn ? 'মৌলিক নীতিমালা' : 'Core Values'}
            title={isBn ? 'আমাদের প্রধান চার স্তম্ভ' : 'Our Four Core Pillars'}
            subtitle={isBn ? 'যে আদর্শ ও চেতনার ওপর মারকাযুল কুরআন নূরানী একাডেমি পরিচালিত হয়' : 'The guiding values underlying our educational philosophy'}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-darkTheme-surface border border-gray-200/80 dark:border-darkTheme-border shadow-xs hover:border-brand-islamic transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-islamic/10 dark:bg-brand-lime/10 text-brand-islamic dark:text-brand-lime flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Principal's Detailed Message */}
        <div className="my-16 p-8 sm:p-12 rounded-3xl bg-brand-softBg dark:bg-darkTheme-surface border border-brand-islamic/20 dark:border-darkTheme-border shadow-soft">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-3">
              <Quote className="w-10 h-10 text-brand-islamic dark:text-brand-lime flex-shrink-0" />
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  {principal.name[locale]}
                </h3>
                <p className="text-xs sm:text-sm text-brand-islamic dark:text-brand-lime font-semibold">
                  {principal.designation[locale]}, {institutionData.name[locale]}
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200/60 dark:border-darkTheme-border pt-6">
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line italic">
                &ldquo;{principal.message[locale]}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <Link
            href={`/${locale}/admission`}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-islamic hover:bg-brand-dark text-white font-bold text-sm sm:text-base shadow transition"
          >
            <UserPlus className="w-4 h-4 text-brand-lime" />
            <span>{t.nav.applyNow}</span>
          </Link>
        </div>
      </PageContainer>
    </div>
  );
}
