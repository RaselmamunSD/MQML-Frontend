import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Locale } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { faqsData } from '@/data/faqs';
import { PageContainer } from '@/components/common/PageContainer';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Accordion } from '@/components/ui/Accordion';
import { HelpCircle, Phone, MessageSquare } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = getDictionary(params.locale);
  return {
    title: t.nav.faq,
    description: `${t.institution.name} - সচরাচর জিজ্ঞাসিত প্রশ্নাবলি ও উত্তর।`,
  };
}

export default function FAQPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = params;
  const t = getDictionary(locale);
  const isBn = locale === 'bn';

  const allFaqs = faqsData.map((f) => ({
    id: f.id,
    question: f.question[locale],
    answer: f.answer[locale],
  }));

  return (
    <div className="bg-white dark:bg-darkTheme-bg py-6 sm:py-10">
      <PageContainer>
        <Breadcrumbs items={[{ label: t.nav.faq }]} />

        <SectionHeading
          tag={t.faq.tag}
          title={t.faq.title}
          subtitle={t.faq.subtitle}
        />

        <div className="max-w-3xl mx-auto my-10">
          <Accordion items={allFaqs} />
        </div>

        {/* Still have questions banner */}
        <div className="mt-16 p-8 rounded-3xl bg-brand-softBg dark:bg-darkTheme-surface border border-brand-islamic/20 dark:border-darkTheme-border text-center max-w-2xl mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-brand-islamic/10 text-brand-islamic dark:text-brand-lime flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            {isBn ? 'আপনার প্রশ্নের উত্তর পাননি?' : 'Still have questions?'}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {isBn
              ? 'আমাদের হেল্পলাইনে সরাসরি ফোন করতে পারেন অথবা বার্তা পাঠিয়ে তথ্য জানতে পারেন।'
              : 'Feel free to contact our administrative desk via phone or submit an inquiry message.'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:01734108046"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-islamic hover:bg-brand-dark text-white text-xs font-bold shadow transition"
            >
              <Phone className="w-3.5 h-3.5 text-brand-lime" />
              <span>{isBn ? 'কল করুন: ০১৭৩৪-১০৮০৪৬' : 'Call: 01734-108046'}</span>
            </a>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-darkTheme-card border border-gray-300 dark:border-darkTheme-border text-xs font-bold text-gray-800 dark:text-white hover:bg-gray-50 transition"
            >
              <MessageSquare className="w-3.5 h-3.5 text-brand-islamic dark:text-brand-lime" />
              <span>{isBn ? 'বার্তা পাঠান' : 'Send Message'}</span>
            </Link>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
