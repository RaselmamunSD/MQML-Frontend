import { AcademicProgram } from '@/types';

export const academicProgramsData: AcademicProgram[] = [
  {
    id: 'prog-play',
    slug: 'play-group',
    order: 1,
    code: 'PG',
    title: {
      bn: 'প্লে গ্রুপ (Play Group)',
      en: 'Play Group',
    },
    ageEligibility: {
      bn: '৩.৫ - ৪.৫ বছর',
      en: '3.5 - 4.5 Years',
    },
    duration: {
      bn: '১ শিক্ষাবর্ষ',
      en: '1 Academic Year',
    },
    overview: {
      bn: 'প্লে গ্রুপ হলো শিশুদের প্রথম প্রাতিষ্ঠানিক শিক্ষাজীবন। আনন্দমুখর, স্নেহময় ও খেলাধুলার পরিবেশে শিশুদের আরবি ও বাংলা বর্ণমালার সাথে পরিচিতি এবং মৌলিক শিষ্টাচার শেখানো হয়।',
      en: 'Play Group is a child’s very first academic step. In a loving, playful, and joyful environment, children are gently introduced to Arabic & Bengali alphabets and early Islamic manners.',
    },
    objectives: [
      {
        bn: 'স্নেহশীল পরিবেশে মাদরাসা ও পড়ালেখার প্রতি শিশুদের আগ্রহ তৈরি করা।',
        en: 'Foster affection and enthusiasm for learning and madrasa life.',
      },
      {
        bn: 'নূরানী কায়দার প্রাথমিক হরফ পরিচিতি ও সহীহ মাখরাজের সূচনা।',
        en: 'Gentle introduction to Arabic alphabet shapes and correct Makhraj.',
      },
      {
        bn: 'বাংলা বর্ণমালা ও প্রাথমিক মৌখিক ইংরেজি শব্দ ভাণ্ডার গঠন।',
        en: 'Foundations of Bengali alphabet identification and early English oral vocabulary.',
      },
      {
        bn: 'দৈনন্দিন সালাম ও ছোট ছোট মাসনুন দোয়া মুখে মুখে শেখা।',
        en: 'Practicing Salam, Bismillah, and basic daily Sunnah etiquettes orally.',
      },
    ],
    subjects: [
      { bn: 'নূরানী হরফ শিক্ষা ও মাখরাজ', en: 'Noorani Letter Recognition & Makhraj' },
      { bn: 'বাংলা বর্ণমালা পরিচিতি ও ছড়া', en: 'Bengali Alphabets & Rhymes' },
      { bn: 'মৌখিক ইংরেজি ও ছড়া', en: 'Oral English & Islamic Rhymes' },
      { bn: 'মৌখিক সংখ্যা গণনা (১-১০ ও 1-10)', en: 'Counting Numbers (1-10 & Bengali)' },
      { bn: 'মাসনুন দোয়া ও আদব', en: 'Daily Masnoon Duas & Manners' },
      { bn: 'চিত্রাঙ্কন ও সুন্দর দাগ টানা', en: 'Coloring & Line Tracing' },
    ],
    outcomes: [
      {
        bn: '২৯টি আরবি হরফ ও বাংলা স্বরবর্ণ সঠিকভাবে চিনতে ও বলতে পারা।',
        en: 'Identify and correctly pronounce 29 Arabic letters and Bengali vowels.',
      },
      {
        bn: 'পেন্সিল ধরা ও প্রাথমিক লেখার জন্য হাতের পেশি প্রস্তুত হওয়া।',
        en: 'Proper pencil grip and early hand-eye motor development for writing.',
      },
      {
        bn: 'সালাম দেওয়া, খাওয়ার ও ঘুমানোর দোয়া সাবলীলভাবে মুখস্থ বলা।',
        en: 'Fluently reciting basic daily supplications and greeting elders with Salam.',
      },
    ],
    requirements: [
      { bn: 'শিক্ষার্থীর ডিজিটাল জন্ম নিবন্ধন সনদ', en: 'Digital Birth Registration Certificate' },
      { bn: 'পাসপোর্ট সাইজ ছবি ৪ কপি', en: '4 Passport-size Photographs' },
      { bn: 'পিতা-মাতার এনআইডি ফটোকপি', en: 'Parents’ NID Photocopy' },
    ],
    featuredImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'prog-nursery',
    slug: 'nursery',
    order: 2,
    code: 'NUR',
    title: {
      bn: 'নার্সারি (Nursery)',
      en: 'Nursery',
    },
    ageEligibility: {
      bn: '৪.৫ - ৫.৫ বছর',
      en: '4.5 - 5.5 Years',
    },
    duration: {
      bn: '১ শিক্ষাবর্ষ',
      en: '1 Academic Year',
    },
    overview: {
      bn: 'নার্সারি শ্রেণিতে শিশুদের নূরানী কায়দার হরকত, তানভীন ও সাধারণ শব্দের গঠন শেখানো হয়। একই সাথে বাংলা, ইংরেজি বর্ণমালার নিয়মিত লিখন ও মৌলিক গণনা নিশ্চিত করা হয়।',
      en: 'In Nursery, children learn Harkat, Tanween, and joint letters of Noorani Qaida. Simultaneously, systematic writing in Bengali and English alongside foundational math is solidified.',
    },
    objectives: [
      {
        bn: 'নূরানী হরকত ও তানভীনের মাধ্যমে আরবি শব্দ পড়ার সক্ষমতা তৈরি।',
        en: 'Develop Arabic word reading skills through Harkat and Tanween.',
      },
      {
        bn: 'বাংলা ও ইংরেজি বর্ণমালার সুন্দর ও পরিচ্ছন্ন হাতের লেখা গঠন।',
        en: 'Cultivate beautiful, neat handwriting in Bengali and English scripts.',
      },
      {
        bn: '১ থেকে ৫০ পর্যন্ত গণনা ও মৌলিক জোড়-বিজোড়ের প্রাথমিক ধারণা।',
        en: 'Count numbers 1 to 50 and introduce basic spatial & numerical concepts.',
      },
      {
        bn: '১০টি নির্বাচিত ছোট সুরা সহীহভাবে মুখস্থ করানো।',
        en: 'Memorize the last 10 Surahs of the Quran with accurate tajweed.',
      },
    ],
    subjects: [
      { bn: 'নূরানী কায়দা (হরকত, তানভীন ও মুরাক্কাব)', en: 'Noorani Qaida (Harkat, Tanween, Joint Letters)' },
      { bn: 'হিফজুল কুরআন (ছোট সুরা ও নামাজ)', en: 'Quran Memorization (Selected Surahs & Salah)' },
      { bn: 'বাংলা পাঠ ও লিখন', en: 'Bengali Reading & Writing' },
      { bn: 'ইংরেজি পাঠ ও লিখন', en: 'English Reading & Writing' },
      { bn: 'প্রাথমিক গণিত ও নামতা', en: 'Basic Math & Tables' },
      { bn: 'ইসলামি আদব ও হাদিস', en: 'Islamic Etiquette & 20 Short Hadiths' },
    ],
    outcomes: [
      {
        bn: 'নূরানী কায়দার যে কোনো অংশ দেখে সহীহ উচ্চারণে পড়তে পারা।',
        en: 'Read any portion of the Noorani Qaida with authentic pronunciation.',
      },
      {
        bn: 'বাংলা যুক্তবর্ণহীন বাক্য ও ইংরেজি সহজ শব্দ স্বতঃস্ফূর্তভাবে লিখতে পারা।',
        en: 'Write simple Bengali sentences and early English words independently.',
      },
      {
        bn: 'নামাজের প্রয়োজনীয় তাসবীহ ও ছোট সুরাগুলো সহীহভাবে আদায় করা।',
        en: 'Recite essential Salah supplications and short surahs accurately.',
      },
    ],
    requirements: [
      { bn: 'শিক্ষার্থীর ডিজিটাল জন্ম নিবন্ধন সনদ', en: 'Digital Birth Registration Certificate' },
      { bn: 'পাসপোর্ট সাইজ ছবি ৪ কপি', en: '4 Passport-size Photographs' },
      { bn: 'পিতা-মাতার এনআইডি ফটোকপি', en: 'Parents’ NID Photocopy' },
    ],
    featuredImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'prog-class-1',
    slug: 'class-1',
    order: 3,
    code: 'CLS-1',
    title: {
      bn: 'প্রথম শ্রেণি (Class One)',
      en: 'Class One',
    },
    ageEligibility: {
      bn: '৫.৫ - ৬.৫ বছর',
      en: '5.5 - 6.5 Years',
    },
    duration: {
      bn: '১ শিক্ষাবর্ষ',
      en: '1 Academic Year',
    },
    overview: {
      bn: 'প্রথম শ্রেণিতে আমপারা (৩০তম পারা) সহীহ তিলাওয়াত শুরু হয় এবং জাতীয় শিক্ষাক্রম অনুযায়ী প্রথম শ্রেণির বাংলা, ইংরেজি ও গণিত বই সমান গুরুত্বে পাঠদান করা হয়।',
      en: 'In Class One, direct recitation of the 30th Juz (Amma Para) commences, while national curriculum grade 1 textbooks in Bangla, English, and Math are comprehensively taught.',
    },
    objectives: [
      {
        bn: 'পবিত্র কুরআনের ৩০তম পারার তিলাওয়াত সাবলীলভাবে সম্পন্ন করা।',
        en: 'Fluently recite the 30th Juz of the Holy Quran with Tajweed.',
      },
      {
        bn: 'বাংলা ও ইংরেজি বর্ণমালার যুক্তাক্ষর ও বাক্য গঠনের দক্ষতা অর্জন।',
        en: 'Master Bengali conjunct letters and early English sentence construction.',
      },
      {
        bn: 'যোগ ও বিয়োগের বাস্তবসম্মত গাণিতিক সমাধান শেখা।',
        en: 'Solve practical addition and subtraction arithmetic problems.',
      },
      {
        bn: 'নামাজের সকল আরকান-আহকাম ও ব্যবহারিক প্রশিক্ষণ।',
        en: 'Practical demonstration of all pillars and etiquettes of Salah.',
      },
    ],
    subjects: [
      { bn: 'কুরআন তিলাওয়াত (আমপারা) ও তাজবীদ', en: 'Quran Recitation (Juz 30) & Tajweed' },
      { bn: 'ইসলাম শিক্ষা ও দ্বীনিয়াত', en: 'Islamic Studies & Deeniyat' },
      { bn: 'আমার বাংলা বই (১ম শ্রেণি)', en: 'Amar Bangla Boi (Grade 1)' },
      { bn: 'English for Today (Class 1)', en: 'English for Today (Class 1)' },
      { bn: 'প্রাথমিক গণিত (১ম শ্রেণি)', en: 'Primary Mathematics (Grade 1)' },
      { bn: 'সুন্দর হাতের লেখা ও ড্রয়িং', en: 'Calligraphy & Drawing' },
    ],
    outcomes: [
      {
        bn: 'তাজবীদ মেনে বিশুদ্ধ মাখরাজে আমপারা তিলাওয়াত করতে পারা।',
        en: 'Recite Juz 30 applying foundational Tajweed rules cleanly.',
      },
      {
        bn: 'বাংলা পাঠ্যপুস্তক সাবলীলভাবে রিডিং পড়া ও প্রশ্নের উত্তর লেখা।',
        en: 'Read Bengali prose comfortably and write coherent textbook answers.',
      },
      {
        bn: 'ইংরেজি সহজ বাক্যালাপ ও স্পেলিং নির্ভুলভাবে সমাধান করা।',
        en: 'Perform simple English conversational greetings and spellings.',
      },
    ],
    requirements: [
      { bn: 'ডিজিটাল জন্ম সনদ', en: 'Digital Birth Certificate' },
      { bn: 'ছবি ৪ কপি', en: '4 Passport-size Photos' },
      { bn: 'পিতা-মাতার এনআইডি', en: 'Parents’ NID' },
      { bn: 'নার্সারি পাসের প্রশংসাপত্র (যদি থাকে)', en: 'Nursery Completion Certificate (if applicable)' },
    ],
    featuredImage: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'prog-class-2',
    slug: 'class-2',
    order: 4,
    code: 'CLS-2',
    title: {
      bn: 'দ্বিতীয় শ্রেণি (Class Two)',
      en: 'Class Two',
    },
    ageEligibility: {
      bn: '৬.৫ - ৭.৫ বছর',
      en: '6.5 - 7.5 Years',
    },
    duration: {
      bn: '১ শিক্ষাবর্ষ',
      en: '1 Academic Year',
    },
    overview: {
      bn: 'পবিত্র কুরআনুল কারীমের নাজেরা তিলাওয়াত পূর্ণাঙ্গভাবে শুরু হয়। একই সাথে বাংলা ব্যাকরণ, ইংরেজি গ্রামার ও গুণের মৌলিক সমাধান দক্ষতার বিকাশ ঘটে।',
      en: 'Full Nazira recitation of the Holy Quran begins alongside fundamental Bengali grammar, English language skills, and multiplication math operations.',
    },
    objectives: [
      {
        bn: 'নাজেরা তিলাওয়াত সহীহ মাখরাজ ও সিফাত সহকারে গতিশীল করা।',
        en: 'Build speed and precision in Holy Quran Nazira reading with proper Sifat.',
      },
      {
        bn: 'নামাজ ও রোজার জরুরি মাসায়েল সম্পর্কে অবগত হওয়া।',
        en: 'Comprehend essential Masail of Salah, Taharah, and Fasting.',
      },
      {
        bn: 'বাংলা অনুচ্ছেদ লিখন ও ইংরেজি ছোট বাক্য রচনা।',
        en: 'Compose short Bengali paragraphs and constructive English sentences.',
      },
      {
        bn: 'গুণ ও ভাগের মৌলিক প্রক্রিয়া আয়ত্ত করা।',
        en: 'Grasp multiplication tables and foundational division concepts.',
      },
    ],
    subjects: [
      { bn: 'পবিত্র কুরআন নাজেরা ও তাজবীদ', en: 'Holy Quran Nazira & Tajweed' },
      { bn: 'মাসনুন দোয়া, আকাইদ ও ফিকহ', en: 'Duas, Aqeedah & Basic Fiqh' },
      { bn: 'আমার বাংলা বই (২য় শ্রেণি)', en: 'Amar Bangla Boi (Grade 2)' },
      { bn: 'English for Today (Class 2)', en: 'English for Today (Class 2)' },
      { bn: 'প্রাথমিক গণিত (২য় শ্রেণি)', en: 'Primary Mathematics (Grade 2)' },
      { bn: 'পরিবেশ পরিচিতি ও সাধারণ জ্ঞান', en: 'Environmental Studies & GK' },
    ],
    outcomes: [
      {
        bn: 'কুরআনের যে কোনো পৃষ্ঠা দেখে দেখে বিশুদ্ধ উচ্চারণে তিলাওয়াত।',
        en: 'Smoothly recite any page of the Quran applying Tajweed principles.',
      },
      {
        bn: 'বাংলা ও ইংরেজি উভয় ভাষায় স্পষ্ট উচ্চারণ ও সুন্দর হাতের লেখা।',
        en: 'Demonstrate articulate speech and neat handwriting in both languages.',
      },
    ],
    requirements: [
      { bn: 'ডিজিটাল জন্ম সনদ', en: 'Digital Birth Certificate' },
      { bn: 'ছবি ৪ কপি', en: '4 Photos' },
      { bn: 'পিতা-মাতার এনআইডি', en: 'Parents’ NID' },
      { bn: 'পূর্ববর্তী শ্রেণির মার্কশিট/ছাড়পত্র', en: 'Previous Grade Marksheet/TC' },
    ],
    featuredImage: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'prog-class-3',
    slug: 'class-3',
    order: 5,
    code: 'CLS-3',
    title: {
      bn: 'তৃতীয় শ্রেণি (Class Three)',
      en: 'Class Three',
    },
    ageEligibility: {
      bn: '৭.৫ - ৮.৫ বছর',
      en: '7.5 - 8.5 Years',
    },
    duration: {
      bn: '১ শিক্ষাবর্ষ',
      en: '1 Academic Year',
    },
    overview: {
      bn: 'তৃতীয় শ্রেণিতে শিক্ষার্থীদের চিন্তাশক্তি ও বিশ্লেষণধর্মী পড়ালেখার সূচনা হয়। কুরআন খতমের দিকে এগিয়ে যাওয়ার পাশাপাশি বাংলাদেশ ও বিশ্বপরিচয় এবং প্রাথমিক বিজ্ঞান বিষয় সংযুক্ত হয়।',
      en: 'Class 3 marks the beginning of conceptual learning. Students progress towards Quran completion while exploring Bangladesh & Global Studies and Elementary Science.',
    },
    objectives: [
      {
        bn: 'পবিত্র কুরআনের ১০ থেকে ১৫ পারা সহীহ নাজেরা তিলাওয়াত সম্পন্ন করা।',
        en: 'Complete 10-15 Juz Nazira recitation with Tajweed certification.',
      },
      {
        bn: 'নবী-রাসূলগণের জীবনী ও ইসলামিক ইতিহাস সম্পর্কে জানা।',
        en: 'Study the biographies of Prophets and introductory Islamic history.',
      },
      {
        bn: 'প্রাথমিক বিজ্ঞান ও পরিবেশ সচেতনতা বৃদ্ধি।',
        en: 'Cultivate understanding of primary natural science and environmental care.',
      },
      {
        bn: 'ইংরেজি প্যারাগ্রাফ ও ডায়ালগ অনুশীলনের সূচনা।',
        en: 'Initiate English descriptive paragraph writing and dialogue practice.',
      },
    ],
    subjects: [
      { bn: 'পবিত্র কুরআন নাজেরা ও হিফজুল মুখতাসার', en: 'Holy Quran Nazira & Selected Memorization' },
      { bn: 'ইসলাম ও নৈতিক শিক্ষা', en: 'Islamic & Moral Education' },
      { bn: 'বাংলা সাহিত্য ও ব্যাকরণ', en: 'Bangla Literature & Grammar' },
      { bn: 'English for Today & Grammar', en: 'English for Today & Grammar' },
      { bn: 'প্রাথমিক গণিত', en: 'Elementary Mathematics' },
      { bn: 'প্রাথমিক বিজ্ঞান', en: 'Elementary Science' },
      { bn: 'বাংলাদেশ ও বিশ্বপরিচয়', en: 'Bangladesh & Global Studies' },
    ],
    outcomes: [
      {
        bn: 'কুরআনুল কারীম নির্ভুল ও সুমধুর কণ্ঠে তিলাওয়াতে পারদর্শিতা।',
        en: 'Proficient, melodious, and error-free Quranic recitation.',
      },
      {
        bn: 'গাণিতিক সমস্যার বিশ্লেষণী সমাধান ও ভাষা ব্যবহারে আত্মবিশ্বাস।',
        en: 'Analytical arithmetic problem solving and confident bilingual expression.',
      },
    ],
    requirements: [
      { bn: 'ডিজিটাল জন্ম সনদ', en: 'Digital Birth Certificate' },
      { bn: 'ছবি ৪ কপি', en: '4 Photos' },
      { bn: 'পিতা-মাতার এনআইডি', en: 'Parents’ NID' },
      { bn: 'পূর্ববর্তী শ্রেণির মার্কশিট/ছাড়পত্র', en: 'Previous Grade Marksheet/TC' },
    ],
    featuredImage: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'prog-class-4',
    slug: 'class-4',
    order: 6,
    code: 'CLS-4',
    title: {
      bn: 'চতুর্থ শ্রেণি (Class Four)',
      en: 'Class Four',
    },
    ageEligibility: {
      bn: '৮.৫ - ৯.৫ বছর',
      en: '8.5 - 9.5 Years',
    },
    duration: {
      bn: '১ শিক্ষাবর্ষ',
      en: '1 Academic Year',
    },
    overview: {
      bn: 'চতুর্থ শ্রেণিতে কুরআনুল কারীম খতমের চূড়ান্ত পর্যায় অর্জিত হয় এবং প্রাথমিক পর্যায়ের আধুনিক শিক্ষার মানদণ্ড নিশ্চিত করে পঞ্চম শ্রেণির বোর্ড প্রস্তুতির বুনিয়াদ গড়া হয়।',
      en: 'Class Four culminates in the completion of Quran Nazira and solidifies the academic foundation required for the final elementary graduation in Class Five.',
    },
    objectives: [
      {
        bn: 'সম্পূর্ণ পবিত্র কুরআন নাজেরা খতম সম্পন্ন করা।',
        en: 'Complete the full Nazira reading of the 30 Juz of the Holy Quran.',
      },
      {
        bn: 'আরবি ভাষার মৌলিক বাক্য গঠন ও শব্দের অর্থ বুঝতে পারা।',
        en: 'Understand basic conversational Arabic phrases and Quranic vocabulary.',
      },
      {
        bn: 'গণিতের ভগ্নাংশ, পরিমাপ ও জ্যামিতিক ধারণাসমূহ আয়ত্ত করা।',
        en: 'Master fractions, geometric shapes, and unit measurement calculations.',
      },
      {
        bn: 'উন্নত নৈতিক চরিত্র ও সমাজসেবামূলক মানসিকতা গড়ে তোলা।',
        en: 'Foster a sense of community responsibility, kindness, and Islamic decorum.',
      },
    ],
    subjects: [
      { bn: 'পবিত্র কুরআন খতম ও তাজবীদ আহকাম', en: 'Complete Quran Nazira & Tajweed Rules' },
      { bn: 'আরবি ভাষা শিক্ষা ও কথোপকথন', en: 'Elementary Arabic & Conversation' },
      { bn: 'ইসলাম ও নৈতিক শিক্ষা', en: 'Islamic Studies & Moral Education' },
      { bn: 'আমার বাংলা বই ও নির্মিতি', en: 'Bangla Textbook & Creative Writing' },
      { bn: 'English for Today & Composition', en: 'English for Today & Composition' },
      { bn: 'প্রাথমিক গণিত ও জ্যামিতি', en: 'Primary Mathematics & Geometry' },
      { bn: 'প্রাথমিক বিজ্ঞান', en: 'Elementary Science' },
      { bn: 'বাংলাদেশ ও বিশ্বপরিচয়', en: 'Bangladesh & Global Studies' },
    ],
    outcomes: [
      {
        bn: 'তাজবীদসহ পূর্ণ কুরআন তিলাওয়াত এবং দৈনন্দিন জীবনে ইসলামী অনুশাসন পালন।',
        en: 'Full Quranic recitation proficiency and steadfast observance of daily Islamic practices.',
      },
      {
        bn: 'জাতীয় পাঠ্যক্রমের সকল বিষয়ে বোর্ড পরীক্ষার মান অনুযায়ী চমৎকার দখল।',
        en: 'High academic competency across all national curriculum subjects.',
      },
    ],
    requirements: [
      { bn: 'ডিজিটাল জন্ম সনদ', en: 'Digital Birth Certificate' },
      { bn: 'ছবি ৪ কপি', en: '4 Photos' },
      { bn: 'পিতা-মাতার এনআইডি', en: 'Parents’ NID' },
      { bn: 'পূর্ববর্তী শ্রেণির ছাড়পত্র ও নম্বরপত্র', en: 'Previous Grade Report Card / TC' },
    ],
    featuredImage: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'prog-class-5',
    slug: 'class-5',
    order: 7,
    code: 'CLS-5',
    title: {
      bn: 'পঞ্চম শ্রেণি (Class Five)',
      en: 'Class Five',
    },
    ageEligibility: {
      bn: '৯.৫ - ১০.৫+ বছর',
      en: '9.5 - 10.5+ Years',
    },
    duration: {
      bn: '১ শিক্ষাবর্ষ',
      en: '1 Academic Year',
    },
    overview: {
      bn: 'পঞ্চম শ্রেণি মারকাযুল কুরআন নূরানী একাডেমি-র সমাপনী স্তর। এখানে শিক্ষার্থীরা কুরআন খতমের পাশাপাশি উচ্চতর মাদরাসা ও স্কুলের জন্য পূর্ণাঙ্গ আত্মবিশ্বাস ও মেধা নিয়ে প্রস্তুত হয়।',
      en: 'Class Five represents the premier elementary graduating tier. Here, students consolidate their Quranic mastery and graduate with exceptional academic competence for future higher studies.',
    },
    objectives: [
      {
        bn: 'তাজবীদ ও তারতীলের সাথে সাবলীল কুরআন তিলাওয়াত ও নির্দিষ্ট অংশের হিফজ।',
        en: 'Deliver masterful Quranic recitation with Tarteel and select juz memorization.',
      },
      {
        bn: 'পঞ্চম শ্রেণির সমাপনী পরীক্ষার সর্বোচ্চ ফলাফলের জন্য সামগ্রিক প্রস্তুতি।',
        en: 'Comprehensive preparation for primary graduating standards with stellar results.',
      },
      {
        bn: 'আরবি ও ইংরেজি ভাষায় মৌলিক যোগাযোগ ও স্বতঃস্ফূর্ত লেখার সক্ষমতা।',
        en: 'Empower spontaneous written and oral communication in Arabic and English.',
      },
      {
        bn: 'উচ্চতর মাদরাসা বা স্বনামধন্য স্কুলে ভর্তির পূর্ণ যোগ্যতা অর্জন।',
        en: 'Equip graduates with premier eligibility for higher madrasas or secondary schools.',
      },
    ],
    subjects: [
      { bn: 'পবিত্র কুরআন তিলাওয়াত, তারতীল ও তাজবীদ', en: 'Quran Recitation, Tarteel & Advanced Tajweed' },
      { bn: 'ইসলাম ও নৈতিক শিক্ষা', en: 'Islamic & Moral Education' },
      { bn: 'বাংলা ও ব্যাকরণ নির্মিতি', en: 'Bangla & Essay/Grammar Writing' },
      { bn: 'English for Today, Grammar & Composition', en: 'English for Today, Grammar & Composition' },
      { bn: 'প্রাথমিক গণিত', en: 'Primary Mathematics' },
      { bn: 'প্রাথমিক বিজ্ঞান', en: 'Elementary Science' },
      { bn: 'বাংলাদেশ ও বিশ্বপরিচয়', en: 'Bangladesh & Global Studies' },
      { bn: 'আরবি ভাষা ও দৈনন্দিন দোয়া', en: 'Arabic Language & Masnoon Supplications' },
    ],
    outcomes: [
      {
        bn: 'কুরআন তিলাওয়াতে পূর্ণ আত্মবিশ্বাস এবং সুন্নাহসম্মত আদর্শ জীবনযাপনের মানসিকতা।',
        en: 'Unshakable confidence in Quran recitation and dedication to righteous Sunnah living.',
      },
      {
        bn: 'পরবর্তী শিক্ষাস্তরে শ্রেষ্ঠত্ব প্রদর্শনের জন্য গণিত ও ভাষায় প্রাতিষ্ঠানিক শক্ত বুনিয়াদ।',
        en: 'Formidable academic grounding in mathematics and languages for future educational success.',
      },
    ],
    requirements: [
      { bn: 'ডিজিটাল জন্ম সনদ', en: 'Digital Birth Certificate' },
      { bn: 'ছবি ৪ কপি', en: '4 Photos' },
      { bn: 'পিতা-মাতার এনআইডি', en: 'Parents’ NID' },
      { bn: 'চতুর্থ শ্রেণির উত্তীর্ণ সনদ ও মার্কশিট', en: 'Class 4 Transfer/Completion Certificate' },
    ],
    featuredImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
  },
];
