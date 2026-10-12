export type Locale = 'bn' | 'en';

export interface BilingualText {
  bn: string;
  en: string;
}

export interface InstitutionInfo {
  name: BilingualText;
  arabicName: string;
  tagline: BilingualText;
  established: string;
  establishedBn: string;
  address: {
    village: BilingualText;
    union: BilingualText;
    upazila: BilingualText;
    district: BilingualText;
    full: BilingualText;
  };
  contact: {
    phone: string;
    phoneSecondary?: string;
    email: string;
    officeHours: BilingualText;
  };
  socialLinks: {
    facebook?: string;
    youtube?: string;
    whatsapp?: string;
  };
  principal: {
    name: BilingualText;
    designation: BilingualText;
    message: BilingualText;
    quote: BilingualText;
    image: string;
  };
  features: Array<{
    title: BilingualText;
    description: BilingualText;
    icon: string;
  }>;
}

export interface AcademicProgram {
  id: string;
  slug: string;
  title: BilingualText;
  code: string;
  ageEligibility: BilingualText;
  duration: BilingualText;
  overview: BilingualText;
  objectives: BilingualText[];
  subjects: BilingualText[];
  outcomes: BilingualText[];
  requirements: BilingualText[];
  featuredImage: string;
  order: number;
}

export interface CurriculumCategory {
  id: string;
  title: BilingualText;
  description: BilingualText;
  icon: string;
  subjects: Array<{
    name: BilingualText;
    description: BilingualText;
    level: BilingualText;
  }>;
}

export interface TeacherProfile {
  id: string;
  name: BilingualText;
  designation: BilingualText;
  qualifications: BilingualText;
  subjectsTaught: BilingualText[];
  experience: BilingualText;
  bio: BilingualText;
  image: string;
  phone?: string;
  email?: string;
  order: number;
}

export interface CampusFacility {
  id: string;
  title: BilingualText;
  shortDesc: BilingualText;
  description: BilingualText;
  icon: string;
  features: BilingualText[];
  image: string;
}

export interface NoticeItem {
  id: string;
  title: BilingualText;
  publishedDate: string;
  category: 'admission' | 'examination' | 'holiday' | 'events' | 'general';
  summary: BilingualText;
  content: BilingualText;
  isImportant?: boolean;
  attachmentName?: string;
  attachmentUrl?: string;
}

export interface EventItem {
  id: string;
  title: BilingualText;
  date: string;
  time?: BilingualText;
  location: BilingualText;
  category: 'academic' | 'cultural' | 'religious' | 'sports';
  status: 'upcoming' | 'past';
  summary: BilingualText;
  description: BilingualText;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: BilingualText;
  category: 'classroom' | 'quran' | 'activities' | 'events' | 'campus';
  image: string;
  caption?: BilingualText;
}

export interface FAQItem {
  id: string;
  category: 'admission' | 'curriculum' | 'schedule' | 'general';
  question: BilingualText;
  answer: BilingualText;
}

export interface TestimonialItem {
  id: string;
  guardianName: BilingualText;
  relation: BilingualText;
  studentClass: BilingualText;
  comment: BilingualText;
  rating: number;
}
