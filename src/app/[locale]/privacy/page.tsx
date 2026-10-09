import React from 'react';
import type { Metadata } from 'next';
import { Locale } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { PageContainer } from '@/components/common/PageContainer';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { ShieldCheck, Lock, UserCheck } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = getDictionary(params.locale);
  return {
    title: t.footer.privacyPolicy,
    description: `${t.institution.name} - গোপনীয়তা নীতি ও শিক্ষার্থী তথ্য সুরক্ষা।`,
  };
}

export default function PrivacyPolicyPage({
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
        <Breadcrumbs items={[{ label: t.footer.privacyPolicy }]} />

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="border-b border-gray-100 dark:border-darkTheme-border pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-islamic/10 text-brand-dark dark:bg-brand-lime/10 dark:text-brand-lime text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{isBn ? 'তথ্য সুরক্ষা' : 'Data Protection'}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
              {t.footer.privacyPolicy}
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2">
              {isBn ? 'সর্বশেষ হালনাগাদ: অক্টোবর ২০২৬' : 'Last updated: October 2026'}
            </p>
          </div>

          <div className="space-y-6 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                {isBn ? '১. শিক্ষার্থী ও অভিভাবকের তথ্য সংরক্ষণ' : '1. Student & Guardian Information Collection'}
              </h2>
              <p>
                {isBn
                  ? 'মারকাযুল কুরআন নূরানী একাডেমি-তে ভর্তি আবেদনের সময় প্রদত্ত শিক্ষার্থীর নাম, জন্ম তারিখ, পিতা-মাতার নাম, মোবাইল নম্বর এবং বর্তমান ঠিকানা অত্যন্ত বিশ্বস্ততা ও গোপনীয়তার সাথে সংরক্ষণ করা হয়।'
                  : 'At Markazul Quran Noorani Academy, student names, birth dates, parental details, contact numbers, and residential addresses provided during admission are stored with rigorous confidentiality.'}
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                {isBn ? '২. তথ্যের ব্যবহার' : '2. Utilization of Data'}
              </h2>
              <p>
                {isBn
                  ? 'সংগৃহীত তথ্য কেবল প্রাতিষ্ঠানিক ভর্তি প্রক্রিয়া, অভিভাবকের সাথে শিক্ষা ও ফি সংক্রান্ত যোগাযোগ, জরুরি নোটিশ প্রদান এবং পরীক্ষার মূল্যায়ন নিশ্চিত করার লক্ষ্যে ব্যবহৃত হয়। কোনো অবস্থাতেই তৃতীয় কোনো পক্ষের কাছে বাণিজ্যিক উদ্দেশ্যে তথ্য প্রকাশ করা হয় না।'
                  : 'Collected information is strictly used for admissions verification, academic communication, emergency notifications, and progress reporting. No personal data is ever commercialized or disclosed to third parties.'}
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                {isBn ? '৩. শিশুদের ছবি ও মিডিয়া ব্যবহারের নীতি' : '3. Photographs and Media Policy'}
              </h2>
              <p>
                {isBn
                  ? 'মাদরাসার শিক্ষা কার্যক্রম, কিরাত প্রতিযোগিতা ও বার্ষিক অনুষ্ঠানের স্থিরচিত্র প্রকাশের ক্ষেত্রে শিক্ষার্থীদের শালীনতা, নিরাপত্তা ও অভিভাবকের সম্মতির পূর্ণ সম্মান প্রদর্শন করা হয়।'
                  : 'Photographs of academic events and competitions are published respectfully, ensuring child dignity, modesty, and security in alignment with parental authorization.'}
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                {isBn ? '৪. যোগাযোগ' : '4. Contact for Privacy Inquiries'}
              </h2>
              <p>
                {isBn
                  ? 'আপনার তথ্যের সংশোধন বা গোপনীয়তা বিষয়ে যেকোনো জিজ্ঞাসার জন্য সরাসরি আমাদের অফিসে অথবা ০১৭৩৪-১০৮০৪৬ নম্বরে যোগাযোগ করতে পারেন।'
                  : 'For privacy inquiries or record revisions, contact the academy office or call 01734-108046.'}
              </p>
            </section>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
