# মারকাযুল কুরআন নূরানী একাডেমি (Al-Quran Nurani Academy)
### Modern Bilingual Islamic Educational Institution Web Platform

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7.53-EC5990?style=flat&logo=reacthookform)](https://react-hook-form.com/)
[![Zod](https://img.shields.io/badge/Zod-3.23-3E67B1?style=flat&logo=zod)](https://zod.dev/)

An official, modern, and production-ready web platform for **Al-Quran Nurani Academy (মারকাযুল কুরআন নূরানী একাডেমি)**, located in Khatapara, Saptibari, Aditmari, Lalmonirhat, Bangladesh.

---

## 🌟 Institutional Overview

- **Name:** মারকাযুল কুরআন নূরানী একাডেমি (Al-Quran Nurani Academy)
- **Tagline:** আরবি ও জেনারেল শিক্ষার সমন্বিত আদর্শ দ্বীনি শিক্ষা প্রতিষ্ঠান
- **Established:** 2022 AD (স্থাপিত : ২০২২ খ্রিঃ)
- **Academic Scope:** Play Group to Class Five (প্লে থেকে ৫ম শ্রেণি)
- **Address:** খাতাপাড়া, সাপ্টিবাড়ী, আদিতমারী, লালমনিরহাট, বাংলাদেশ
- **Official Contact:** ০১৭৩৪-১০৮০৪৬ (01734-108046)

---

## 🎨 Branding & Color Palette

Accurately derived from the madrasa's circular emblem and official admission banner:

| Color Name | Hex Code | Usage |
| :--- | :--- | :--- |
| **Deep Islamic Green** | `#087A35` | Primary buttons, active highlights, logos, accents |
| **Dark Green** | `#075526` | Top header bar, footer surfaces, deep cards |
| **Lime Green** | `#A8B923` | Secondary accents, badges, hover indicators |
| **White** | `#FFFFFF` | Backgrounds, crisp text, cards |
| **Royal Blue** | `#174A9C` | Quranic calligraphy and rehal motifs |
| **Accent Red** | `#D91E2B` | Admission badge, urgency alerts |
| **Dark Theme Surface** | `#0B130E` | Rich dark-green charcoal dark mode background |

---

## 🚀 Key Features

1. **Complete Bilingual Support (বাংলা & English):**
   - Bangla as default locale (`/bn`), English alternative (`/en`).
   - Deep locale routing (`/bn/...` and `/en/...`) with automatic root redirection.
   - Comprehensive translation coverage across all navigation labels, static content, buttons, badges, notices, and form validation errors.

2. **Light & Dark Theme Engine:**
   - Persistent theme switcher via `next-themes` and Tailwind `class` mode.
   - Contrast-verified accessible UI for daytime and nighttime browsing.

3. **Dedicated Pages for Every Section:**
   - **Home (`/`)**: Hero with logo, quick info cards, principal welcome, why choose us, Quranic highlights, grade previews, campus facilities, notices, events, gallery preview, parent testimonials, and admission CTA.
   - **About Us (`/about`)**: History, mission, vision, core values, and educational philosophy.
   - **Academic Programs (`/academic-programs`)**: Grades overview (Play to Class 5).
   - **Dedicated Class Pages (`/academic-programs/[slug]`)**: Separate subpages for Play Group, Nursery, Class 1, Class 2, Class 3, Class 4, and Class 5.
   - **Curriculum (`/curriculum`)**: Structured breakdowns of Noorani Qaida, Quran recitation, Arabic language, Fiqh/Aqeedah, Daily Duas, and NCTB General Curriculum (Bangla, English, Math, Science).
   - **Teachers Directory (`/teachers` & `/teachers/[id]`)**: Verified educator profiles, credentials, designations, and contact links.
   - **Campus Facilities (`/facilities`)**: Classrooms, Quran learning hall, library corner, prayer hall, student safety, and hygiene.
   - **Notice Board (`/notices` & `/notices/[id]`)**: Real-time search, category filtering (Admission, Exam, Holiday, Events, General), and PDF downloads.
   - **Events (`/events` & `/events/[id]`)**: Upcoming and past competitions and gatherings with schedule metadata.
   - **Gallery (`/gallery`)**: Categorized photo collection with keyboard-accessible Lightbox modal viewer.
   - **Admission Portal (`/admission`)**: Step-by-step admission guide, required documents, interactive application form with Zod validation, tracking ID generation, print functionality, and API backend integration layer.
   - **Contact Us (`/contact`)**: Verified address, phone, office hours, location map preview, and message form.
   - **FAQ (`/faq`)**: Accessible accordion answering frequent parental inquiries.
   - **Privacy Policy (`/privacy`) & Terms (`/terms`)**: Student privacy, media consent, and code of conduct.

4. **SEO & Performance:**
   - Next.js dynamic localized `sitemap.ts` and `robots.ts`.
   - OpenGraph metadata, favicon, and responsive image optimizations.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript 5.6
- **Styling:** Tailwind CSS 3.4
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod validation
- **Theme:** next-themes
- **Fonts:** Hind Siliguri (Bengali) + Plus Jakarta Sans (English)

---

## 💻 Local Setup & Development

### 1. Prerequisites
- Node.js `v18.17.0` or later (Tested on `v24.19.0`)
- npm `v9+`

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser. Root `/` will automatically direct to `/bn`.

### 4. Build for Production
```bash
npm run build
```

### 5. Run Production Server
```bash
npm run start
```

---

## 🔌 Backend Integration (FastAPI / Node / Django)

The application includes ready-to-wire API endpoints in `src/app/api/`:
- `POST /api/admission`: Accepts student application payload, validates fields with Zod, generates tracking ID (`MQML-2026-XXXXX`), and returns structured JSON. Connect your database or backend microservice in `src/app/api/admission/route.ts`.
- `POST /api/contact`: Handles contact form submissions.

---

## 📄 License
© 2026 মারকাযুল কুরআন নূরানী একাডেমি (Al-Quran Nurani Academy). All rights reserved.
