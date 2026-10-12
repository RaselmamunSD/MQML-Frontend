'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useLanguage } from '@/context/LanguageContext';
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';

export function ContactForm() {
  const { locale, t } = useLanguage();
  const isBn = locale === 'bn';

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const contactSchema = z.object({
    name: z.string().min(2, isBn ? 'আপনার নাম লিখুন' : 'Name is required'),
    phone: z.string().min(11, isBn ? 'সঠিক মোবাইল নম্বর দিন' : 'Valid phone is required'),
    subject: z.string().min(3, isBn ? 'বিষয় উল্লেখ করুন' : 'Subject is required'),
    message: z.string().min(5, isBn ? 'বার্তা কমপক্ষে ৫ অক্ষরের হতে হবে' : 'Message must be at least 5 characters'),
  });

  type ContactValues = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactValues) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setIsSuccess(true);
        reset();
      } else {
        setErrorMessage(resData.message || (isBn ? 'বার্তা প্রেরণে ত্রুটি হয়েছে' : 'Failed to send message'));
      }
    } catch {
      setErrorMessage(isBn ? 'ইন্টারনেট সমস্যা' : 'Network error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-darkTheme-surface border border-gray-200/80 dark:border-darkTheme-border shadow-soft"
    >
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
        {t.contact.formTitle}
      </h3>
      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-6">
        {t.contact.formSubtitle}
      </p>

      {isSuccess && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
          <span>{t.contact.sentSuccess}</span>
        </div>
      )}

      {errorMessage && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center gap-2">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-gray-700 dark:text-gray-200 mb-1">
            {t.contact.name} *
          </label>
          <input
            type="text"
            {...register('name')}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-darkTheme-border text-sm bg-white dark:bg-darkTheme-card text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-islamic"
          />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 dark:text-gray-200 mb-1">
            {t.contact.phone} *
          </label>
          <input
            type="tel"
            placeholder="01XXXXXXXXX"
            {...register('phone')}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-darkTheme-border text-sm bg-white dark:bg-darkTheme-card text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-islamic"
          />
          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 dark:text-gray-200 mb-1">
            {t.contact.subject} *
          </label>
          <input
            type="text"
            {...register('subject')}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-darkTheme-border text-sm bg-white dark:bg-darkTheme-card text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-islamic"
          />
          {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 dark:text-gray-200 mb-1">
            {t.contact.message} *
          </label>
          <textarea
            rows={4}
            {...register('message')}
            className="w-full px-3.5 py-2 rounded-xl border border-gray-300 dark:border-darkTheme-border text-sm bg-white dark:bg-darkTheme-card text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-islamic"
          />
          {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-4 rounded-xl bg-brand-islamic hover:bg-brand-dark text-white font-bold text-sm shadow transition flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>{t.contact.sending}</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4 text-brand-lime" />
              <span>{t.contact.send}</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
