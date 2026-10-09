import { TeacherProfile } from '@/types';

export const teachersData: TeacherProfile[] = [
  {
    id: 'teacher-1',
    order: 1,
    name: {
      bn: 'মাওলানা ক্বারী মুফতি রফিকুল ইসলাম',
      en: 'Mawlana Qari Mufti Rafiqul Islam',
    },
    designation: {
      bn: 'প্রধান শিক্ষক ও মুহতামিম',
      en: 'Head Teacher & Principal',
    },
    qualifications: {
      bn: 'দাওরায়ে হাদিস (মাস্টার্স), ইফতা (মুফতি), নূরানী মুয়াল্লিম প্রশিক্ষণ সনদ',
      en: 'Dawrah-e-Hadith (Masters), Ifta (Mufti), Certified Noorani Muallim',
    },
    subjectsTaught: [
      { bn: 'পবিত্র কুরআন তাজবীদ', en: 'Quranic Tajweed' },
      { bn: 'আকাইদ ও ফিকহ', en: 'Aqeedah & Fiqh' },
    ],
    experience: {
      bn: '১০+ বছরের পাঠদান ও প্রাতিষ্ঠানিক ব্যবস্থাপনা অভিজ্ঞতা',
      en: '10+ years of teaching & institutional management experience',
    },
    bio: {
      bn: 'মারকাযুল কুরআন নূরানী একাডেমি-র প্রতিষ্ঠাতা প্রধান শিক্ষক। শিশুদের তাজবীদসহ বিশুদ্ধ কুরআন তিলাওয়াত ও সুন্নতি জীবন গঠনে তিনি নিবেদিতপ্রাণ।',
      en: 'Founding head teacher of Markazul Quran Noorani Academy. Dedicated to nurturing pure Quran recitation and Sunnah-based character in young students.',
    },
    image: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=600&q=80',
    phone: '01734-108046',
    email: 'principal@mqml.edu.bd',
  },
  {
    id: 'teacher-2',
    order: 2,
    name: {
      bn: 'হাফেজ ক্বারী মাহফুজুর রহমান',
      en: 'Hafez Qari Mahfuzur Rahman',
    },
    designation: {
      bn: 'সিনিয়র নূরানী প্রশিক্ষক ও সহকারী শিক্ষক',
      en: 'Senior Noorani Instructor & Assistant Teacher',
    },
    qualifications: {
      bn: 'হিফজুল কুরআন, নূরানী তা’লীমুল কুরআন বোর্ড সনদপ্রাপ্ত মোয়াল্লিম',
      en: 'Hafez-ul-Quran, Certified Noorani Muallim (Board Certified)',
    },
    subjectsTaught: [
      { bn: 'নূরানী কায়দা ও আমপারা', en: 'Noorani Qaida & Amma Para' },
      { bn: 'হাতে লেখা প্রশিক্ষণ', en: 'Calligraphy & Penmanship' },
    ],
    experience: {
      bn: '৭ বছরের নূরানী পদ্ধতিতে পাঠদান অভিজ্ঞতা',
      en: '7 years of specialized Noorani teaching experience',
    },
    bio: {
      bn: 'শিশুদের অত্যন্ত সহজ ও আকর্ষণীয় পদ্ধতিতে সুন্দর হাতের লেখা এবং বিশুদ্ধ মাখরাজে কুরআন পাঠদানে অভিজ্ঞ।',
      en: 'Expert in teaching beautiful penmanship and accurate phonetics to young learners with immense patience.',
    },
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
    phone: '01734-108046',
  },
  {
    id: 'teacher-3',
    order: 3,
    name: {
      bn: 'মাওলানা আবদুল্লাহ আল নোমান',
      en: 'Mawlana Abdullah Al Noman',
    },
    designation: {
      bn: 'সহকারী শিক্ষক (আরবি ও দ্বীনিয়াত)',
      en: 'Assistant Teacher (Arabic & Deeniyat)',
    },
    qualifications: {
      bn: 'দাওরায়ে হাদিস, উচ্চতর আরবি ভাষা ডিপ্লোমা',
      en: 'Dawrah-e-Hadith, Advanced Arabic Language Diploma',
    },
    subjectsTaught: [
      { bn: 'মৌলিক আরবি ভাষা', en: 'Basic Arabic' },
      { bn: 'মাসনুন দোয়া ও হাদিস', en: 'Masnoon Duas & Hadith' },
    ],
    experience: {
      bn: '৫ বছরের পাঠদান অভিজ্ঞতা',
      en: '5 years of pedagogical experience',
    },
    bio: {
      bn: 'শিশুদের অন্তরে প্রাত্যহিক সুন্নাহ আমল ও দোয়া অনুশীলনের অভ্যাস গড়ে তোলার ক্ষেত্রে নিবিড় ভূমিকা রাখছেন।',
      en: 'Focuses on integrating practical prophetic etiquettes and daily prayers into students daily routines.',
    },
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    phone: '01734-108046',
  },
  {
    id: 'teacher-4',
    order: 4,
    name: {
      bn: 'মোঃ শফিকুল ইসলাম (বি.এস.সি)',
      en: 'Md. Shafiqul Islam (B.Sc)',
    },
    designation: {
      bn: 'সহকারী শিক্ষক (গণিত ও সাধারণ বিজ্ঞান)',
      en: 'Assistant Teacher (Mathematics & Science)',
    },
    qualifications: {
      bn: 'বি.এস.সি (গণিত), বি.এড (প্রশিক্ষণপ্রাপ্ত)',
      en: 'B.Sc (Mathematics), B.Ed (Trained)',
    },
    subjectsTaught: [
      { bn: 'প্রাথমিক গণিত', en: 'Elementary Mathematics' },
      { bn: 'প্রাথমিক বিজ্ঞান', en: 'General Science' },
    ],
    experience: {
      bn: '৬ বছরের প্রাথমিক শিক্ষা অভিজ্ঞতা',
      en: '6 years of primary teaching experience',
    },
    bio: {
      bn: 'শিশুদের গণিত ভীতি দূর করে বাস্তব জীবনের উদাহরণের মাধ্যমে আনন্দময় গণিত শিক্ষাদানে বিশেষভাবে দক্ষ।',
      en: 'Skilled in removing math anxiety through real-life practical examples and friendly guidance.',
    },
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    phone: '01734-108046',
  },
  {
    id: 'teacher-5',
    order: 5,
    name: {
      bn: 'মোঃ তানভীর হাসান (বি.এ. অনার্স, এম.এ)',
      en: 'Md. Tanveer Hasan (B.A Hons, M.A)',
    },
    designation: {
      bn: 'সহকারী শিক্ষক (ইংরেজি ও বাংলা)',
      en: 'Assistant Teacher (English & Bengali)',
    },
    qualifications: {
      bn: 'বি.এ (সম্মান), এম.এ (ইংরেজি ভাষা ও সাহিত্য)',
      en: 'B.A (Hons), M.A (English Language & Literature)',
    },
    subjectsTaught: [
      { bn: 'English for Today', en: 'English for Today' },
      { bn: 'আমার বাংলা বই ও ব্যাকরণ', en: 'Bengali Literature & Grammar' },
    ],
    experience: {
      bn: '৫ বছরের ভাষা শিক্ষাদান অভিজ্ঞতা',
      en: '5 years of language instruction experience',
    },
    bio: {
      bn: 'ইংরেজি স্পোকেন ও কারেক্ট স্পেলিং অনুশীলনে যত্নশীল এবং বাংলা বিশুদ্ধ উচ্চারণে পারদর্শী।',
      en: 'Passionate about English spoken drills, spelling accuracy, and Bengali phonetic refinement.',
    },
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    phone: '01734-108046',
  },
];
