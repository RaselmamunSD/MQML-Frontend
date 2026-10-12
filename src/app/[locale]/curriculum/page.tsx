import { redirect } from 'next/navigation';
import { Locale } from '@/types';

export default function CurriculumPage({
  params,
}: {
  params: { locale: Locale };
}) {
  redirect(`/${params.locale}/academic-programs#curriculum-structure`);
}
