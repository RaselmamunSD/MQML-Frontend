import React from 'react';
import type { Metadata } from 'next';
import { Locale } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { PageContainer } from '@/components/common/PageContainer';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { Scale, CheckCircle2 } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = getDictionary(params.locale);
  return {
    title: t.footer.termsConditions,
    description: `${t.institution.name} - প্রতিষ্ঠান ও ওয়েবসাইট ব্যবহারের নিয়মাবলি।`,
  };
}

export default function TermsPage({
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
        <Breadcrumbs items={[{ label: t.footer.termsConditions }]} />

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="border-b border-gray-100 dark:border-darkTheme-border pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-islamic/10 text-brand-dark dark:bg-brand-lime/10 dark:text-brand-lime text-xs font-bold uppercase tracking-wider mb-3">
              <Scale className="w-3.5 h-3.5" />
              <span>{isBn ? 'নীতিমালা ও শর্তাবলি' : 'Terms & Conditions'}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
              {t.footer.termsConditions}
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2">
              {isBn ? 'মারকাযুল কুরআন নূরানী একাডেমি প্রাতিষ্ঠানিক আচরণবিধি' : 'Markazul Quran Noorani Academy Rules & Guidelines'}
            </p>
          </div>

          <div className="space-y-6 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                {isBn ? '১. ভর্তি ও পাঠদান সংক্রান্ত নিয়ম' : '1. Admission and Class Attendance'}
              </h2>
              <p>
                {isBn
                  ? 'ভর্তিকৃত প্রতিটি শিক্ষার্থীকে প্রতিদিন ক্লাসের নির্ধারিত সময়ে উপস্থিত থাকতে হবে। যৌক্তিক কারণ ব্যতিরেকে অনুপস্থিতি কাম্য নয়।'
                  : 'All enrolled students must attend classes punctually as scheduled. Unexcused absence is discouraged.'}
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                {isBn ? '২. শৃঙ্খলা ও আদব-কায়দা' : '2. Discipline and Conduct'}
              </h2>
              <p>
                {isBn
                  ? 'মাদরাসার আঙ্গিনায় শিক্ষক, সহপাঠী ও দায়িত্বশীলদের সাথে সুন্নাহসম্মত সুন্দর আচরণ বজায় রাখা বাধ্যতামূলক।'
                  : 'Students and guardians are expected to uphold prophetic manners, courtesy, and respect within the campus grounds.'}
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                {isBn ? '৩. অনলাইন আবেদন সংক্রান্ত ঘোষণা' : '3. Online Application Declaration'}
              </h2>
              <p>
                {isBn
                  ? 'ওয়েবসাইটের মাধ্যমে প্রেরিত সকল আবেদন প্রাতিষ্ঠানিক যাচাই-বাছাই সাপেক্ষে চূড়ান্ত হবে। মিথ্যা তথ্য প্রদান করলে আবেদন বাতিল বলে গণ্য হবে।'
                  : 'Online application submissions are subject to administrative verification and document validation.'}
              </p>
            </section>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
