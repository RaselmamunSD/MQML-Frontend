import React from 'react';
import type { Metadata } from 'next';
import { Locale } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { institutionData } from '@/data/institution';
import { PageContainer } from '@/components/common/PageContainer';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ContactForm } from '@/components/forms/ContactForm';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Sparkles,
  ExternalLink,
  Navigation,
} from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = getDictionary(params.locale);
  return {
    title: t.nav.contact,
    description: `${t.institution.name} - যোগাযোগের ঠিকানা, মোবাইল নম্বর ও অবস্থান।`,
  };
}

export default function ContactPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = params;
  const t = getDictionary(locale);
  const isBn = locale === 'bn';

  return (
    <div className="bg-white dark:bg-darkTheme-bg py-6 sm:py-10">
      <PageContainer>
        <Breadcrumbs items={[{ label: t.nav.contact }]} />

        <SectionHeading
          tag={t.contact.tag}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Cards & Location (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-brand-softBg dark:bg-darkTheme-surface border border-brand-islamic/20 dark:border-darkTheme-border shadow-xs space-y-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white border-b border-gray-200/60 dark:border-darkTheme-border pb-3">
                {t.nav.contactInfo}
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-islamic/10 text-brand-islamic dark:text-brand-lime flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {t.contact.addressTitle}
                  </h4>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mt-0.5">
                    {t.contact.addressDesc}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-islamic/10 text-brand-islamic dark:text-brand-lime flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {t.contact.phoneTitle}
                  </h4>
                  <a
                    href="tel:01734108046"
                    className="text-sm font-bold text-brand-islamic dark:text-brand-lime hover:underline mt-0.5 block"
                  >
                    {t.contact.phoneDesc}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-islamic/10 text-brand-islamic dark:text-brand-lime flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {t.contact.emailTitle}
                  </h4>
                  <a
                    href="mailto:markazulquran.lalmonirhat@gmail.com"
                    className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 hover:underline mt-0.5 block"
                  >
                    markazulquran.lalmonirhat@gmail.com
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-islamic/10 text-brand-islamic dark:text-brand-lime flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {t.contact.hoursTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mt-0.5">
                    {t.contact.hoursDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* Location Live Map */}
            <div className="p-6 rounded-3xl bg-white dark:bg-darkTheme-surface border border-gray-200/80 dark:border-darkTheme-border shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brand-islamic dark:text-brand-lime" />
                    <span>{isBn ? 'গুগল ম্যাপে আমাদের অবস্থান (Live Map)' : 'Campus Location (Live Map)'}</span>
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {institutionData.address.full[locale]}
                  </p>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Khatapara,+Saptibari,+Aditmari,+Lalmonirhat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-islamic/10 text-brand-islamic dark:bg-brand-lime/10 dark:text-brand-lime hover:bg-brand-islamic hover:text-white dark:hover:bg-brand-lime dark:hover:text-brand-dark text-xs font-semibold transition flex-shrink-0"
                >
                  <span>{isBn ? 'বড় ম্যাপে দেখুন' : 'Open in Maps'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Live Google Map iframe */}
              <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-gray-200 dark:border-darkTheme-border shadow-inner bg-gray-100 dark:bg-darkTheme-card">
                <iframe
                  src="https://maps.google.com/maps?q=Khatapara%2C%20Saptibari%2C%20Aditmari%2C%20Lalmonirhat&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title={isBn ? 'মারকাযুল কুরআন নূরানী একাডেমি গুগল ম্যাপ' : 'Markazul Quran Noorani Academy Live Google Map'}
                />
              </div>

              {/* Get Directions Link */}
              <div className="mt-3 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-100 dark:border-darkTheme-border">
                <span>{isBn ? 'ঠিকানা: খাতাপাড়া, আদিতমারী, লালমনিরহাট' : 'Khatapara, Aditmari, Lalmonirhat'}</span>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Khatapara,+Saptibari,+Aditmari,+Lalmonirhat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-brand-islamic dark:text-brand-lime hover:underline"
                >
                  <Navigation className="w-3 h-3" />
                  <span>{isBn ? 'দিকনির্দেশনা পান' : 'Get Directions'}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
