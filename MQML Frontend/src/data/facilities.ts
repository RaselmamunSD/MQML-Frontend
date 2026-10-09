import { CampusFacility } from '@/types';

export const facilitiesData: CampusFacility[] = [
  {
    id: 'fac-classrooms',
    title: {
      bn: 'সুপরিসর ও স্বাস্থ্যসম্মত শ্রেণিকক্ষ',
      en: 'Spacious & Well-Ventilated Classrooms',
    },
    shortDesc: {
      bn: 'পর্যাপ্ত আলো-বাতাস ও শিশুবান্ধব বসার সুব্যবস্থা সংবলিত নান্দনিক শ্রেণিকক্ষ।',
      en: 'Bright, airy, and ergonomically arranged learning spaces designed for children.',
    },
    description: {
      bn: 'মারকাযুল কুরআন নূরানী একাডেমি-র প্রতিটি শ্রেণিকক্ষ পর্যাপ্ত প্রাকৃতিক আলো-বাতাসসমৃদ্ধ। শিক্ষার্থীদের জন্য আরামদায়ক ও বয়সোপযোগী ডেস্ক-বেঞ্চ এবং নূরানী পদ্ধতিতে বসার বিশেষ ব্যবস্থা রাখা হয়েছে যাতে শিশুদের শারীরিক ক্লান্তি না আসে।',
      en: 'Every classroom at Markazul Quran Noorani Academy is endowed with abundant natural light and airflow. Comfortable desks and proper floor-seating for Noorani sessions keep children enthusiastic.',
    },
    icon: 'School',
    features: [
      { bn: 'পর্যাপ্ত ফ্যান ও আলোর সুব্যবস্থা', en: 'Adequate lighting and ventilation' },
      { bn: 'শিশুবান্ধব ও বয়সোপযোগী বসার ব্যবস্থা', en: 'Child-friendly ergonomic seating' },
      { bn: 'আধুনিক হোয়াইটবোর্ড ও চার্ট ডিসপ্লে', en: 'Modern whiteboards and instructional charts' },
      { bn: 'দৈনিক নিয়মিত জীবাণুমুক্তকরণ', en: 'Daily sanitization and cleanliness' },
    ],
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'fac-quran-hall',
    title: {
      bn: 'পবিত্র কুরআন শিক্ষার স্নিগ্ধ পরিবেশ',
      en: 'Serene Quranic Learning Atmosphere',
    },
    shortDesc: {
      bn: 'কুরআনুল কারীমের মর্যাদার সাথে সঙ্গতিপূর্ণ সুসজ্জিত ও শান্ত পাঠচত্বর।',
      en: 'A tranquil and spiritually enriching hall dedicated to Quranic recitation.',
    },
    description: {
      bn: 'পবিত্র কুরআন তিলাওয়াতের জন্য একটি নিস্তব্ধ ও আধ্যাত্মিক পরিবেশ নিশ্চিত করা হয়েছে। আধুনিক রেহাল, নরম কার্পেটিং এবং শিক্ষকের সামনে সারিবদ্ধ হয়ে আদবের সাথে বসার ঐতিহ্যবাহী পরিবেশ শিশুদের একাগ্রতা বহুগুণ বাড়িয়ে দেয়।',
      en: 'A quiet, spiritually uplifting atmosphere is maintained for Holy Quran recitation. Equipped with clean carpeting and proper wooden rehals (bookstands), students study with reverence and deep concentration.',
    },
    icon: 'BookOpen',
    features: [
      { bn: 'উন্নত মানের রেহাল ও সুসজ্জিত গালিচা', en: 'High-quality wooden rehals and comfortable carpets' },
      { bn: 'কোলাহলমুক্ত ও শান্ত শিক্ষাঙ্গন', en: 'Noise-free and serene environment' },
      { bn: 'ব্যক্তিগত পাঠ পর্যবেক্ষণের সুযোগ', en: 'One-on-one recitation monitoring' },
      { bn: 'পবিত্রতা ও সুগন্ধিময় পরিবেশ', en: 'Pristine hygiene and pleasant ambience' },
    ],
    image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'fac-prayer',
    title: {
      bn: 'নামাজ ও অজুখানা সুবিধা',
      en: 'Prayer Space & Dedicated Wudu Area',
    },
    shortDesc: {
      bn: 'ব্যবহারিক নামাজ প্রশিক্ষণ ও পরিষ্কার-পরিচ্ছন্ন ওজুখানা।',
      en: 'Practical Salah training area and clean ablution facilities.',
    },
    description: {
      bn: 'শিক্ষার্থীদের নিয়মিত নামাজের অভ্যাস গড়ে তুলতে মাদরাসায় রয়েছে সুপরিসর নামাজখানা। শিক্ষকগণের সরাসরি তত্ত্বাবধানে শিক্ষার্থীরা জামাতের সাথে যোহরের নামাজ আদায় করে এবং নামাজের আরকান-আহকাম হাতে-কলমে শেখে।',
      en: 'To nurture the habit of regular prayers from childhood, a dedicated prayer space is provided where students perform Zuhr prayer in congregation under teacher supervision and learn practical fiqh of prayer.',
    },
    icon: 'Compass',
    features: [
      { bn: 'সুপরিসর ও পরিষ্কার অজুখানা', en: 'Spacious and hygienic Wudu area' },
      { bn: 'শিক্ষকদের সাথে জামাতে নামাজ আদায়', en: 'Congregational prayers led by teachers' },
      { bn: 'ব্যবহারিক অজু ও নামাজের প্রশিক্ষণ', en: 'Practical demonstration of Wudu and Salah' },
      { bn: 'বিশুদ্ধ পানির সার্বক্ষণিক ব্যবস্থা', en: 'Continuous clean running water' },
    ],
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'fac-library',
    title: {
      bn: 'শিশুতোষ ও দ্বীনি কিতাবখানা',
      en: 'Children’s Islamic & Academic Reading Corner',
    },
    shortDesc: {
      bn: 'শিশুদের নৈতিক গল্প, নবীজিদের জীবনী ও সাধারণ জ্ঞানের বইয়ের সমৃদ্ধ সংকলন।',
      en: 'Rich collection of moral storybooks, prophetic tales, and children’s literature.',
    },
    description: {
      bn: 'পড়ার অভ্যাস গড়ে তোলার লক্ষ্যে শিশুতোষ ইসলামিক গল্পের বই, সচিত্র সাহাবিদের জীবনী, সাধারণ জ্ঞান ও চিত্রাঙ্কনের বই সমৃদ্ধ একটি লাইব্রেরি কর্নার রয়েছে। এটি শিশুদের চিন্তাশক্তি ও সৃজনশীলতা বৃদ্ধি করে।',
      en: 'To instill a love for reading, we maintain an engaging reading corner loaded with illustrated Islamic stories, biographies of Prophets and Sahabah, and general knowledge books tailored for early ages.',
    },
    icon: 'Library',
    features: [
      { bn: 'শিশুদের উপযোগী ইসলামিক গল্পের বই', en: 'Age-appropriate Islamic tale collections' },
      { bn: 'বাংলা ও ইংরেজি সচিত্র কিতাব', en: 'Illustrated Bengali and English storybooks' },
      { bn: 'শিক্ষকদের সহায়তায় গল্প পাঠ আসর', en: 'Guided storytelling sessions by teachers' },
      { bn: 'সৃজনশীল মেধা বিকাশের উপকরণ', en: 'Creative cognitive development resources' },
    ],
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'fac-safety',
    title: {
      bn: 'নিরাপত্তা ও নিবিড় তত্ত্বাবধান',
      en: 'Student Safety & Vigilant Supervision',
    },
    shortDesc: {
      bn: 'শিশুদের সার্বিক নিরাপত্তা ও ক্যাম্পাসে অভিভাবকদের আস্থার পরিবেশ।',
      en: 'Ensuring round-the-clock safety and trusted parental peace of mind.',
    },
    description: {
      bn: 'প্রতিটি শিশুর শারীরিক ও মানসিক নিরাপত্তা আমাদের সর্বোচ্চ অগ্রাধিকার। ক্যাম্পাসে সার্বক্ষণিক শিক্ষক ও সহকারীদের নজরদারি থাকে, যেন কোনো শিশু আঘাত না পায় বা অননুমোদিত কেউ প্রবেশ করতে না পারে।',
      en: 'Every student’s physical and emotional safety is paramount. Staff and teachers actively monitor grounds during class hours, breaks, and dismissal times.',
    },
    icon: 'ShieldCheck',
    features: [
      { bn: 'সুরক্ষিত গেট ও প্রবেশ নিয়ন্ত্রণ', en: 'Gated entrance with controlled access' },
      { bn: 'টিফিনের সময়ে সার্বক্ষণিক শিক্ষকের উপস্থিতি', en: 'Active teacher supervision during recess' },
      { bn: 'প্রাথমিক চিকিৎসা (ফার্স্ট এইড) বক্স', en: 'First-aid kit readily available on campus' },
      { bn: 'অভিভাবক ছাড়া ছুটি না দেওয়ার কড়া নিয়ম', en: 'Strict pickup verification with parents' },
    ],
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'fac-hygiene',
    title: {
      bn: 'স্বাস্থ্যসম্মত পরিবেশ ও বিশুদ্ধ খাবার পানি',
      en: 'Hygiene, Sanitation & Pure Drinking Water',
    },
    shortDesc: {
      bn: 'বিশুদ্ধ ফিল্টার পানি ও নিয়মিত পরিচ্ছন্ন শৌচাগার ব্যবস্থা।',
      en: 'Purified drinking water and meticulously cleaned washroom facilities.',
    },
    description: {
      bn: 'নবীর সুন্নাহ হলো পরিচ্ছন্নতা ঈমানের অঙ্গ। তাই মাদরাসা চত্বর, হাত ধোয়ার বেসিন ও টয়লেটগুলো দৈনিক একাধিকবার পরিষ্কার ও জীবাণুমুক্ত করা হয়। শিক্ষার্থীদের জন্য রয়েছে শতভাগ বিশুদ্ধ ফিল্টার করা খাবার পানি।',
      en: 'Guided by the prophetic principle that cleanliness is half of faith, our washrooms and handwashing stations are cleaned multiple times daily. Safe, filtered drinking water is provided at all times.',
    },
    icon: 'Sparkles',
    features: [
      { bn: '১০০% নিরাপদ ও বিশুদ্ধ ফিল্টার পানি', en: '100% safe, filtered drinking water' },
      { bn: 'শিশুবান্ধব পরিচ্ছন্ন ওয়াশরুম', en: 'Hygienic child-friendly restrooms' },
      { bn: 'খাওয়ার আগে ও পরে হাত ধোয়ার সুব্যবস্থা', en: 'Designated handwashing stations' },
      { bn: 'স্বাস্থ্য সচেতনতামূলক নিয়মিত নির্দেশনা', en: 'Regular student health and hygiene reminders' },
    ],
    image: 'https://images.unsplash.com/photo-1584697964190-705b89368d83?auto=format&fit=crop&w=800&q=80',
  },
];
