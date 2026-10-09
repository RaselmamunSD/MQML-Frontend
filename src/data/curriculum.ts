import { CurriculumCategory } from '@/types';

export const curriculumCategoriesData: CurriculumCategory[] = [
  {
    id: 'curr-quran',
    title: {
      bn: 'কুরআন তিলাওয়াত ও তাজবীদ',
      en: 'Quran Reading, Recitation & Tajweed',
    },
    description: {
      bn: 'মাখরাজ, সিফাত ও তারতীলের সাথে সহীহ তিলাওয়াতের ওপর সর্বোচ্চ গুরুত্ব প্রদান।',
      en: 'Uncompromising emphasis on authentic articulation (Makhraj), Tajweed rules, and melodious Tarteel.',
    },
    icon: 'BookOpen',
    subjects: [
      {
        name: { bn: 'নাজেরা কুরআনুল কারীম', en: 'Nazira Holy Quran' },
        description: { bn: 'সম্পূর্ণ ৩০ পারা নির্ভুল ও সাবলীল তিলাওয়াত।', en: 'Flawless and fluent recitation of all 30 Juz.' },
        level: { bn: '১ম থেকে ৫ম শ্রেণি', en: 'Class 1 to 5' },
      },
      {
        name: { bn: 'তাজবীদ ও মাখরাজ বিশ্লেষণ', en: 'Tajweed & Makharij Rules' },
        description: { bn: 'হরফের বিশুদ্ধ উচ্চারণস্থল ও গুণাবলি অনুধাবন।', en: 'Precise vocal points and phonetic characteristics of letters.' },
        level: { bn: 'সকল শ্রেণি', en: 'All Classes' },
      },
      {
        name: { bn: 'হিফজুল কুরআন (নির্বাচিত সুরা)', en: 'Selected Surah Memorization' },
        description: { bn: 'আমপারার বিভিন্ন সুরা ও প্রতিদিনের নামাজের সুরা মুখস্থ।', en: 'Memorization of Juz Amma and prayers recitations.' },
        level: { bn: 'প্লে থেকে ৫ম শ্রেণি', en: 'Play to Class 5' },
      },
    ],
  },
  {
    id: 'curr-noorani',
    title: {
      bn: 'নূরানী কায়দা পদ্ধতি',
      en: 'Noorani Qaida Methodology',
    },
    description: {
      bn: 'সহজ, বৈজ্ঞানিক ও মনস্তাত্ত্বিক নূরানী পদ্ধতিতে শিশুদের আরবি হরফ ও পঠন প্রশিক্ষণ।',
      en: 'Scientifically proven and child-friendly Noorani pedagogical method.',
    },
    icon: 'Sparkles',
    subjects: [
      {
        name: { bn: 'হরফ পরিচিতি ও আকৃতি', en: 'Letter Recognition & Shapes' },
        description: { bn: 'একক ও যৌগিক (মুরাক্কাব) হরফের সঠিক রূপ নির্ণয়।', en: 'Single and connected Arabic letter identification.' },
        level: { bn: 'প্লে ও নার্সারি', en: 'Play & Nursery' },
      },
      {
        name: { bn: 'হরকত, তানভীন ও জজম', en: 'Harkat, Tanween & Sukoon' },
        description: { bn: 'শব্দ গঠনের মৌলিক স্বরচিহ্নের বাস্তব প্রয়োগ।', en: 'Practical application of vowel markers in word formation.' },
        level: { bn: 'নার্সারি ও ১ম শ্রেণি', en: 'Nursery & Class 1' },
      },
      {
        name: { bn: 'তাশদীদ, মাদ্দ ও গুন্নাহ', en: 'Tashdeed, Madd & Ghunnah' },
        description: { bn: 'কুরআন তিলাওয়াতের সৌন্দর্য ও নিয়মের অনুশীলন।', en: 'Rules of elongation, doubling, and nasal sounds.' },
        level: { bn: '১ম শ্রেণি', en: 'Class 1' },
      },
    ],
  },
  {
    id: 'curr-arabic',
    title: {
      bn: 'আরবি ভাষা ও যোগাযোগ',
      en: 'Basic Arabic Language & Vocabulary',
    },
    description: {
      bn: 'কুরআনের ভাষা ও ইসলামি পরিভাষা বোঝার জন্য প্রাথমিক আরবি শিক্ষা।',
      en: 'Fostering comprehension of Quranic vocabulary and fundamental Arabic phrasing.',
    },
    icon: 'Languages',
    subjects: [
      {
        name: { bn: 'দৈনন্দিন আরবি শব্দভাণ্ডার', en: 'Everyday Arabic Vocabulary' },
        description: { bn: 'পরিবার, ফলমূল, খাদ্য ও জীবজন্তুর আরবি নাম।', en: 'Common vocabulary for fruits, family, objects, and animals.' },
        level: { bn: 'নার্সারি থেকে ২য় শ্রেণি', en: 'Nursery to Class 2' },
      },
      {
        name: { bn: 'মৌলিক আরবি বাক্য ও কথোপকথন', en: 'Elementary Arabic Phrasing' },
        description: { bn: 'সহজ কথ্য আরবি ও পারস্পরিক ভাববিনিময়।', en: 'Simple dialogue and conversational pleasantries.' },
        level: { bn: '৩য় থেকে ৫ম শ্রেণি', en: 'Class 3 to 5' },
      },
    ],
  },
  {
    id: 'curr-islamic',
    title: {
      bn: 'আকাইদ, ফিকহ ও ইসলামি ইতিহাস',
      en: 'Islamic Studies, Aqeedah & Fiqh',
    },
    description: {
      bn: 'সহীহ আকিদা, ঈমান ও আমলের মৌলিক বিধানসমূহ শিক্ষাদান।',
      en: 'Core tenets of sound Islamic creed, jurisprudence, and prophetic history.',
    },
    icon: 'ShieldCheck',
    subjects: [
      {
        name: { bn: 'ঈমান ও মৌলিক আকাইদ', en: 'Iman & Fundamentals of Aqeedah' },
        description: { bn: 'তাওহীদ, রিসালাত ও আখেরাতে অবিচল বিশ্বাসের বুনিয়াদ।', en: 'Unshakable conviction in Tawheed, Risalat, and Akhirah.' },
        level: { bn: 'সকল শ্রেণি', en: 'All Classes' },
      },
      {
        name: { bn: 'নামাজ ও তাহারাত (পবিত্রতা)', en: 'Salah & Taharah (Cleanliness)' },
        description: { bn: 'অজু, গোসল, তায়াম্মুম এবং নামাজের ব্যবহারিক প্রশিক্ষণ।', en: 'Hands-on training for Wudu, Tayammum, and Salah actions.' },
        level: { bn: '১ম থেকে ৫ম শ্রেণি', en: 'Class 1 to 5' },
      },
      {
        name: { bn: 'সিরাতুন নবী (সা.) ও সাহাবিগণের জীবনী', en: 'Seerah & Stories of the Sahabah' },
        description: { bn: 'রাসূলুল্লাহ (সা.) ও সাহাবিদের জীবনাদর্শ থেকে নৈতিক শিক্ষা।', en: 'Inspirational moral lessons from the life of the Prophet and Sahabah.' },
        level: { bn: '২য় থেকে ৫ম শ্রেণি', en: 'Class 2 to 5' },
      },
    ],
  },
  {
    id: 'curr-duas',
    title: {
      bn: 'দৈনন্দিন মাসনুন দোয়া ও সুন্নাহ আদব',
      en: 'Daily Masnoon Duas & Islamic Etiquette',
    },
    description: {
      bn: 'ঘুম থেকে জাগা থেকে শুরু করে প্রতিটি কাজের সুন্নাহ ও মাসনুন দোয়া।',
      en: 'Living the prophetic lifestyle through daily supplications and noble courtesies.',
    },
    icon: 'Heart',
    subjects: [
      {
        name: { bn: 'দৈনন্দিন নির্বাচিত ৪০ মাসনুন দোয়া', en: '40 Selected Daily Supplications' },
        description: { bn: 'খাওয়া, পানি পান, ঘর থেকে বের হওয়া, মসজিদে প্রবেশের দোয়া।', en: 'Duas for eating, waking, travelling, and entering the mosque.' },
        level: { bn: 'প্লে থেকে ৫ম শ্রেণি', en: 'Play to Class 5' },
      },
      {
        name: { bn: 'দৈনন্দিন সুন্নাহ ও আদব-কায়দা', en: 'Daily Sunnah & Social Manners' },
        description: { bn: 'মাতা-পিতা ও শিক্ষকের প্রতি সম্মান এবং বিনম্র আচরণ।', en: 'Respect for parents, teachers, elders, and peers.' },
        level: { bn: 'সকল শ্রেণি', en: 'All Classes' },
      },
    ],
  },
  {
    id: 'curr-general',
    title: {
      bn: 'জেনারেল কারিকুলাম (বাংলা, ইংরেজি, গণিত)',
      en: 'General Academic Curriculum',
    },
    description: {
      bn: 'জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) মানসম্মত সাধারণ শিক্ষা।',
      en: 'Comprehensive modern academic subjects in line with national curriculum standards.',
    },
    icon: 'GraduationCap',
    subjects: [
      {
        name: { bn: 'বাংলা ভাষা ও সাহিত্য', en: 'Bangla Language & Creative Writing' },
        description: { bn: 'পঠন, লিখন, ব্যাকরণ, অনুচ্ছেদ ও শব্দশৈলী উন্নয়ন।', en: 'Reading fluency, grammar, vocabulary, and creative composition.' },
        level: { bn: 'প্লে থেকে ৫ম শ্রেণি', en: 'Play to Class 5' },
      },
      {
        name: { bn: 'English for Today & Grammar', en: 'English Language & Communication' },
        description: { bn: 'স্পোকেন ইংলিশ, স্পেলিং, ব্যাকরণ ও কার্যকর যোগাযোগ।', en: 'Spoken English, spelling drills, functional grammar, and dialogue.' },
        level: { bn: 'প্লে থেকে ৫ম শ্রেণি', en: 'Play to Class 5' },
      },
      {
        name: { bn: 'প্রাথমিক গণিত ও সমাধান', en: 'Elementary Mathematics' },
        description: { bn: 'সংখ্যা গণনা, যোগ, বিয়োগ, গুণ, ভাগ, ভগ্নাংশ ও জ্যামিতি।', en: 'Numeracy, arithmetic operations, fractions, logic, and geometry.' },
        level: { bn: 'প্লে থেকে ৫ম শ্রেণি', en: 'Play to Class 5' },
      },
      {
        name: { bn: 'বিজ্ঞান ও পরিবেশ সচেতনতা', en: 'General Science & Environment' },
        description: { bn: 'প্রকৃতি, মানবদেহ, স্বাস্থ্যবিধি ও বৈজ্ঞানিক পর্যবেক্ষণ।', en: 'Nature, human body hygiene, weather, and scientific curiosity.' },
        level: { bn: '৩য় থেকে ৫ম শ্রেণি', en: 'Class 3 to 5' },
      },
    ],
  },
  {
    id: 'curr-handwriting',
    title: {
      bn: 'সুন্দর হাতের লেখা (হস্তাক্ষর প্রশিক্ষণ)',
      en: 'Beautiful Handwriting & Calligraphy',
    },
    description: {
      bn: 'নূরানী পদ্ধতির বিশেষ বৈশিষ্ট্যের আলোকে আকর্ষণীয় হাতের লেখা প্রশিক্ষণ।',
      en: 'Specialized Noorani penmanship for captivating handwriting.',
    },
    icon: 'PenTool',
    subjects: [
      {
        name: { bn: 'আরবি ক্যালিগ্রাফি ও হরকত বিন্যাস', en: 'Arabic Calligraphic Penmanship' },
        description: { bn: 'লাইন সোজা রাখা ও প্রতিটি হরফের সমানুপাতিক রূপদান।', en: 'Straight alignment and proportionate letter balancing.' },
        level: { bn: 'সকল শ্রেণি', en: 'All Classes' },
      },
      {
        name: { bn: 'বাংলা ও ইংরেজি দ্রুত ও সুন্দর লেখা', en: 'Bengali & English Cursive Writing' },
        description: { bn: 'পরীক্ষায় বেশি নম্বর পাওয়ার উপযোগী স্পষ্ট ও আকর্ষণীয় লিখন।', en: 'Fast, neat, and illegibility-free exam writing mastery.' },
        level: { bn: 'সকল শ্রেণি', en: 'All Classes' },
      },
    ],
  },
];
