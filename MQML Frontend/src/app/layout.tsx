import type { Metadata } from 'next';
import { Hind_Siliguri, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/layout/ThemeProvider';

const bengaliFont = Hind_Siliguri({
  subsets: ['bengali', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-bengali',
  display: 'swap',
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mqml-madrasa.edu.bd'),
  title: {
    template: '%s | মারকাযুল কুরআন নূরানী একাডেমি',
    default: 'মারকাযুল কুরআন নূরানী একাডেমি | Al-Quran Nurani Academy',
  },
  description: 'মারকাযুল কুরআন নূরানী একাডেমি - খাতাপাড়া, সাপ্টিবাড়ী, আদিতমারী, লালমনিরহাট। প্লে গ্রুপ থেকে ৫ম শ্রেণি পর্যন্ত আরবি ও জেনারেল শিক্ষার সমন্বিত আদর্শ দ্বীনি শিক্ষাপ্রতিষ্ঠান।',
  keywords: [
    'মারকাযুল কুরআন নূরানী একাডেমি',
    'নূরানী মাদরাসা',
    'নূরানী একাডেমি লালমনিরহাট',
    'আদিতমারী মাদরাসা',
    'Al-Quran Nurani Academy',
    'Markazul Quran Noorani Academy',
    'Islamic School Lalmonirhat',
    'Quranic Education',
    'Play to Class 5',
  ],
  authors: [{ name: 'Markazul Quran Noorani Academy' }],
  icons: {
    icon: '/favicon.ico',
    apple: '/images/logo.jpg',
  },
  openGraph: {
    title: 'মারকাযুল কুরআন নূরানী একাডেমি | Al-Quran Nurani Academy',
    description: 'আরবি ও জেনারেল শিক্ষার সমন্বিত আদর্শ দ্বীনি শিক্ষা প্রতিষ্ঠান (প্লে থেকে ৫ম শ্রেণি)।',
    images: ['/images/logo.jpg'],
    locale: 'bn_BD',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" suppressHydrationWarning className={`${bengaliFont.variable} ${sansFont.variable}`}>
      <body className="font-bengali min-h-screen flex flex-col bg-white dark:bg-darkTheme-bg text-gray-900 dark:text-gray-100">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
