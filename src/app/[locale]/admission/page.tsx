import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Locale } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { faqsData } from '@/data/faqs';
import { PageContainer } from '@/components/common/PageContainer';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SectionHeading } from '@/components/common/SectionHeading';
import { AdmissionForm } from '@/components/forms/AdmissionForm';
import { Accordion } from '@/components/ui/Accordion';
import {
  CheckCircle2,
  FileText,
  Calendar,
  HelpCircle,
  Phone,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = getDictionary(params.locale);
  return {
    title: t.nav.admission,
    description: `${t.institution.name} - প্লে থেকে ৫ম শ্রেণি পর্যন্ত নতুন শিক্ষাবর্ষে অনলাইনে ভর্তি আবেদন।`,
  };
}

export default function AdmissionPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = params;
  const t = getDictionary(locale);
  const isBn = locale === 'bn';

  const admissionFaqs = faqsData.filter((f) => f.category === 'admission').map((f) => ({
    id: f.id,
    question: f.question[locale],
    answer: f.answer[locale],
  }));

  return (
    <div className="bg-white dark:bg-darkTheme-bg py-6 sm:py-10">
      <PageContainer>
        <Breadcrumbs items={[{ label: t.nav.admission }]} />

        {/* Admission Top Banner */}
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-brand-dark via-brand-islamic to-brand-dark text-white shadow-xl relative overflow-hidden mb-14">
          <div className="absolute inset-0 islamic-pattern opacity-10 pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full bg-brand-red text-white text-xs font-bold uppercase tracking-wider shadow">
              {t.admission.bannerBadge} • {isBn ? 'প্লে থেকে ৫ম শ্রেণি' : 'Play to Class 5'}
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {t.admission.title}
            </h1>
            <p className="text-sm sm:text-base text-gray-100 leading-relaxed">
              {t.admission.subtitle}
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs text-gray-200">
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-brand-lime" />
                <span>{locale === 'bn' ? 'সরাসরি হেল্পলাইন: ০১৭৩৪-১০৮০৪৬' : 'Helpline: 01734-108046'}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-lime" />
                <span>{isBn ? 'আসন সংখ্যা সীমিত' : 'Limited Seats Available'}</span>
              </span>
            </div>
          </div>
        </div>

        {/* 3 Step Process & Required Docs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* 3 Steps (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-brand-islamic dark:text-brand-lime" />
              <span>{t.admission.stepsTitle}</span>
            </h2>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white dark:bg-darkTheme-surface border border-gray-200/80 dark:border-darkTheme-border shadow-xs flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-brand-islamic text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  ১
                </span>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">
                    {t.admission.step1Title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">
                    {t.admission.step1Desc}
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-darkTheme-surface border border-gray-200/80 dark:border-darkTheme-border shadow-xs flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-brand-islamic text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  ২
                </span>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">
                    {t.admission.step2Title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">
                    {t.admission.step2Desc}
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-darkTheme-surface border border-gray-200/80 dark:border-darkTheme-border shadow-xs flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-brand-islamic text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  ৩
                </span>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">
                    {t.admission.step3Title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">
                    {t.admission.step3Desc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Required Docs (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-brand-softBg dark:bg-darkTheme-surface border border-brand-islamic/20 dark:border-darkTheme-border shadow-xs flex flex-col justify-between">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-brand-islamic dark:text-brand-lime" />
                <span>{t.admission.requiredDocsTitle}</span>
              </h2>

              <ul className="space-y-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                {t.admission.requiredDocs.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-islamic dark:text-brand-lime flex-shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200/60 dark:border-darkTheme-border text-xs text-gray-500 dark:text-gray-400">
              {isBn
                ? 'যেকোনো সহায়তার জন্য সরাসরি অফিসে যোগাযোগ করুন অথবা ফোনে কথা বলুন।'
                : 'For assistance or questions, visit our admissions desk or call our helpline.'}
            </div>
          </div>
        </div>

        {/* The Admission Application Form */}
        <div className="my-16" id="apply-form">
          <SectionHeading
            tag={isBn ? 'আবেদন ফরম' : 'Application Form'}
            title={t.admissionForm.title}
            subtitle={t.admissionForm.subtitle}
          />

          <AdmissionForm />
        </div>

        {/* Admission FAQs */}
        {admissionFaqs.length > 0 && (
          <div className="my-16 max-w-3xl mx-auto">
            <SectionHeading
              tag="FAQ"
              title={isBn ? 'ভর্তি সংক্রান্ত সাধারণ প্রশ্নোত্তর' : 'Admission FAQs'}
            />
            <Accordion items={admissionFaqs} />
          </div>
        )}
      </PageContainer>
    </div>
  );
}
