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

            {/* Location Map Preview */}
            <div className="p-6 rounded-3xl bg-white dark:bg-darkTheme-surface border border-gray-200/80 dark:border-darkTheme-border shadow-xs">
              <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-islamic dark:text-brand-lime" />
                <span>{isBn ? 'গুগল ম্যাপে আমাদের অবস্থান' : 'Campus Location on Map'}</span>
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                {institutionData.address.full[locale]}
              </p>
              <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-darkTheme-border bg-gray-100 dark:bg-darkTheme-card h-48 flex items-center justify-center text-center p-4">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-brand-islamic/20 text-brand-islamic dark:text-brand-lime flex items-center justify-center mx-auto">
                    <MapPin className="w-6 h-6 animate-bounce" />
                  </div>
                  <div className="text-xs font-bold text-gray-900 dark:text-white">
                    {institutionData.name[locale]}
                  </div>
                  <div className="text-[11px] text-gray-500 dark:text-gray-400">
                    {institutionData.address.village[locale]}, {institutionData.address.upazila[locale]}, {institutionData.address.district[locale]}
                  </div>
                </div>
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
