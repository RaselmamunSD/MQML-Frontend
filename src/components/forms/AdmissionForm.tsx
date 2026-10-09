'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useLanguage } from '@/context/LanguageContext';
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  Printer,
  RotateCcw,
  ShieldCheck,
  Send,
  User,
  Calendar,
  Phone,
  Mail,
  MapPin,
  GraduationCap,
} from 'lucide-react';

interface AdmissionFormProps {
  onSuccess?: (applicationId: string) => void;
}

export function AdmissionForm({ onSuccess }: AdmissionFormProps) {
  const { locale, t } = useLanguage();
  const isBn = locale === 'bn';

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    applicationId: string;
    studentName: string;
    desiredClass: string;
  } | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Form schema with bilingual error messages
  const formSchema = z.object({
    studentName: z
      .string()
      .min(2, isBn ? 'শিক্ষার্থীর পূর্ণ নাম লিখুন (কমপক্ষে ২ অক্ষর)' : 'Student full name is required'),
    dob: z
      .string()
      .min(1, isBn ? 'জন্ম তারিখ নির্বাচন করুন' : 'Date of birth is required'),
    gender: z.enum(['male', 'female'], {
      required_error: isBn ? 'লিঙ্গ নির্বাচন করুন' : 'Please select gender',
    }),
    desiredClass: z
      .string()
      .min(1, isBn ? 'যে শ্রেণিতে ভর্তি হতে ইচ্ছুক তা নির্বাচন করুন' : 'Please select a class'),
    fatherName: z
      .string()
      .min(2, isBn ? 'পিতার নাম লিখুন' : "Father's name is required"),
    motherName: z
      .string()
      .min(2, isBn ? 'মাতার নাম লিখুন' : "Mother's name is required"),
    guardianPhone: z
      .string()
      .min(11, isBn ? 'সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন (যেমন: ০১৭৩৪-১০৮০৪৬)' : 'Valid 11-digit phone number is required')
      .regex(/^01[3-9]\d{8}$/, isBn ? 'সঠিক বাংলাদেশি মোবাইল নম্বর দিন' : 'Valid Bangladeshi mobile number format required'),
    guardianEmail: z
      .string()
      .email(isBn ? 'সঠিক ইমেইল ফরম্যাট দিন' : 'Valid email format required')
      .optional()
      .or(z.literal('')),
    presentAddress: z
      .string()
      .min(5, isBn ? 'বর্তমান ঠিকানা বিস্তারিত লিখুন' : 'Full present address is required'),
    previousInstitute: z.string().optional(),
    additionalNotes: z.string().optional(),
    agreeTerms: z.boolean().refine((val) => val === true, {
      message: isBn ? 'শর্তাবলি ও তথ্যের সত্যতা নিশ্চিত করতে টিক চিহ্ন দিন' : 'You must certify the accuracy of provided information',
    }),
  });

  type FormValues = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentName: '',
      dob: '',
      gender: 'male',
      desiredClass: '',
      fatherName: '',
      motherName: '',
      guardianPhone: '',
      guardianEmail: '',
      presentAddress: '',
      previousInstitute: '',
      additionalNotes: '',
      agreeTerms: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/admission', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setSubmissionResult({
          success: true,
          applicationId: resData.applicationId,
          studentName: data.studentName,
          desiredClass: data.desiredClass,
        });
        if (onSuccess) {
          onSuccess(resData.applicationId);
        }
      } else {
        setSubmitError(
          resData.message || (isBn ? 'আবেদন জমা দিতে সমস্যা হয়েছে। আবার চেষ্টা করুন।' : 'Failed to submit application. Please try again.')
        );
      }
    } catch (err) {
      setSubmitError(
        isBn
          ? 'সার্ভারের সাথে সংযোগ স্থাপন করা যায়নি। ইন্টারনেট সংযোগ চেক করুন।'
          : 'Network error connecting to the server. Please check your connection.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleResetForm = () => {
    reset();
    setSubmissionResult(null);
    setSubmitError(null);
  };

  const classesOptions = [
    { value: 'play-group', label: isBn ? 'প্লে গ্রুপ (Play Group)' : 'Play Group' },
    { value: 'nursery', label: isBn ? 'নার্সারি (Nursery)' : 'Nursery' },
    { value: 'class-1', label: isBn ? 'প্রথম শ্রেণি (Class One)' : 'Class One' },
    { value: 'class-2', label: isBn ? 'দ্বিতীয় শ্রেণি (Class Two)' : 'Class Two' },
    { value: 'class-3', label: isBn ? 'তৃতীয় শ্রেণি (Class Three)' : 'Class Three' },
    { value: 'class-4', label: isBn ? 'চতুর্থ শ্রেণি (Class Four)' : 'Class Four' },
    { value: 'class-5', label: isBn ? 'পঞ্চম শ্রেণি (Class Five)' : 'Class Five' },
  ];

  // Success Confirmation Card
  if (submissionResult) {
    return (
      <div className="rounded-2xl p-6 sm:p-10 bg-white dark:bg-darkTheme-surface border border-brand-islamic dark:border-brand-lime shadow-soft-lg text-center animate-fade-in max-w-2xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-brand-islamic/10 text-brand-islamic dark:text-brand-lime flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white">
          {t.admissionForm.successTitle}
        </h3>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          {t.admissionForm.successMessage}
        </p>

        {/* Tracking Details */}
        <div className="my-6 p-4 rounded-xl bg-brand-softBg dark:bg-darkTheme-card border border-brand-islamic/20 dark:border-darkTheme-border text-left space-y-2">
          <div className="flex justify-between items-center text-xs sm:text-sm border-b border-gray-200/60 dark:border-darkTheme-border pb-2">
            <span className="text-gray-500 dark:text-gray-400">{t.admissionForm.applicationId}:</span>
            <span className="font-mono font-bold text-brand-islamic dark:text-brand-lime text-base">
              {submissionResult.applicationId}
            </span>
          </div>
          <div className="flex justify-between items-center text-xs sm:text-sm border-b border-gray-200/60 dark:border-darkTheme-border pb-2">
            <span className="text-gray-500 dark:text-gray-400">{t.admissionForm.studentName}:</span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {submissionResult.studentName}
            </span>
          </div>
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <span className="text-gray-500 dark:text-gray-400">{t.admissionForm.desiredClass}:</span>
            <span className="font-semibold text-gray-900 dark:text-white capitalize">
              {submissionResult.desiredClass.replace('-', ' ')}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={handlePrint}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gray-100 dark:bg-darkTheme-card hover:bg-gray-200 dark:hover:bg-darkTheme-cardHover text-gray-800 dark:text-white text-xs font-semibold transition"
          >
            <Printer className="w-4 h-4 text-brand-islamic" />
            <span>{t.admissionForm.printOrSave}</span>
          </button>

          <button
            type="button"
            onClick={handleResetForm}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-brand-islamic hover:bg-brand-dark text-white text-xs font-semibold shadow transition"
          >
            <RotateCcw className="w-4 h-4 text-brand-lime" />
            <span>{t.admissionForm.submitAnother}</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl p-6 sm:p-10 bg-white dark:bg-darkTheme-surface border border-gray-200/80 dark:border-darkTheme-border shadow-soft"
      noValidate
    >
      <div className="border-b border-gray-100 dark:border-darkTheme-border pb-5 mb-8">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
          {t.admissionForm.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
          {t.admissionForm.subtitle}
        </p>
      </div>

      {submitError && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 flex items-start gap-3 text-red-700 dark:text-red-400 text-xs sm:text-sm">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <span>{submitError}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Student Name */}
        <div className="md:col-span-2">
          <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-brand-islamic" />
            <span>{t.admissionForm.studentName} *</span>
          </label>
          <input
            type="text"
            placeholder={t.admissionForm.studentNamePlaceholder}
            {...register('studentName')}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-white dark:bg-darkTheme-card text-gray-900 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-islamic ${
              errors.studentName
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 dark:border-darkTheme-border'
            }`}
          />
          {errors.studentName && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.studentName.message}</span>
            </p>
          )}
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-brand-islamic" />
            <span>{t.admissionForm.dob} *</span>
          </label>
          <input
            type="date"
            {...register('dob')}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-white dark:bg-darkTheme-card text-gray-900 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-islamic ${
              errors.dob
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 dark:border-darkTheme-border'
            }`}
          />
          {errors.dob && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.dob.message}</span>
            </p>
          )}
        </div>

        {/* Gender */}
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5">
            {t.admissionForm.gender} *
          </label>
          <div className="flex items-center gap-6 py-2.5">
            <label className="flex items-center gap-2 text-xs sm:text-sm cursor-pointer">
              <input
                type="radio"
                value="male"
                {...register('gender')}
                className="text-brand-islamic focus:ring-brand-islamic"
              />
              <span>{t.admissionForm.male}</span>
            </label>
            <label className="flex items-center gap-2 text-xs sm:text-sm cursor-pointer">
              <input
                type="radio"
                value="female"
                {...register('gender')}
                className="text-brand-islamic focus:ring-brand-islamic"
              />
              <span>{t.admissionForm.female}</span>
            </label>
          </div>
        </div>

        {/* Desired Class */}
        <div className="md:col-span-2">
          <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5 flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-brand-islamic" />
            <span>{t.admissionForm.desiredClass} *</span>
          </label>
          <select
            {...register('desiredClass')}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-white dark:bg-darkTheme-card text-gray-900 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-islamic ${
              errors.desiredClass
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 dark:border-darkTheme-border'
            }`}
          >
            <option value="">-- {t.admissionForm.selectClass} --</option>
            {classesOptions.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
          {errors.desiredClass && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.desiredClass.message}</span>
            </p>
          )}
        </div>

        {/* Father Name */}
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5">
            {t.admissionForm.fatherName} *
          </label>
          <input
            type="text"
            {...register('fatherName')}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-white dark:bg-darkTheme-card text-gray-900 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-islamic ${
              errors.fatherName
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 dark:border-darkTheme-border'
            }`}
          />
          {errors.fatherName && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.fatherName.message}</span>
            </p>
          )}
        </div>

        {/* Mother Name */}
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5">
            {t.admissionForm.motherName} *
          </label>
          <input
            type="text"
            {...register('motherName')}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-white dark:bg-darkTheme-card text-gray-900 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-islamic ${
              errors.motherName
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 dark:border-darkTheme-border'
            }`}
          />
          {errors.motherName && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.motherName.message}</span>
            </p>
          )}
        </div>

        {/* Guardian Mobile */}
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5 flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-brand-islamic" />
            <span>{t.admissionForm.guardianPhone} *</span>
          </label>
          <input
            type="tel"
            placeholder={t.admissionForm.guardianPhonePlaceholder}
            {...register('guardianPhone')}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-white dark:bg-darkTheme-card text-gray-900 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-islamic ${
              errors.guardianPhone
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 dark:border-darkTheme-border'
            }`}
          />
          {errors.guardianPhone && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.guardianPhone.message}</span>
            </p>
          )}
        </div>

        {/* Guardian Email */}
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-brand-islamic" />
            <span>{t.admissionForm.guardianEmail}</span>
          </label>
          <input
            type="email"
            placeholder={t.admissionForm.guardianEmailPlaceholder}
            {...register('guardianEmail')}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-darkTheme-border text-sm bg-white dark:bg-darkTheme-card text-gray-900 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-islamic"
          />
          {errors.guardianEmail && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.guardianEmail.message}</span>
            </p>
          )}
        </div>

        {/* Present Address */}
        <div className="md:col-span-2">
          <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-brand-islamic" />
            <span>{t.admissionForm.presentAddress} *</span>
          </label>
          <textarea
            rows={2}
            placeholder={t.admissionForm.presentAddressPlaceholder}
            {...register('presentAddress')}
            className={`w-full px-4 py-2 rounded-xl border text-sm bg-white dark:bg-darkTheme-card text-gray-900 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-islamic ${
              errors.presentAddress
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 dark:border-darkTheme-border'
            }`}
          />
          {errors.presentAddress && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.presentAddress.message}</span>
            </p>
          )}
        </div>

        {/* Previous Institute */}
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5">
            {t.admissionForm.previousInstitute}
          </label>
          <input
            type="text"
            {...register('previousInstitute')}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-darkTheme-border text-sm bg-white dark:bg-darkTheme-card text-gray-900 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-islamic"
          />
        </div>

        {/* Additional Notes */}
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5">
            {t.admissionForm.additionalNotes}
          </label>
          <input
            type="text"
            {...register('additionalNotes')}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-darkTheme-border text-sm bg-white dark:bg-darkTheme-card text-gray-900 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-islamic"
          />
        </div>

        {/* Agree terms */}
        <div className="md:col-span-2 pt-2">
          <label className="flex items-start gap-2.5 cursor-pointer text-xs sm:text-sm text-gray-700 dark:text-gray-300">
            <input
              type="checkbox"
              {...register('agreeTerms')}
              className="mt-1 rounded text-brand-islamic focus:ring-brand-islamic"
            />
            <span>{t.admissionForm.agreeTerms}</span>
          </label>
          {errors.agreeTerms && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.agreeTerms.message}</span>
            </p>
          )}
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="mt-6 p-3.5 rounded-xl bg-gray-50 dark:bg-darkTheme-card border border-gray-200/60 dark:border-darkTheme-border flex items-start gap-2.5 text-xs text-gray-500 dark:text-gray-400">
        <ShieldCheck className="w-4 h-4 text-brand-islamic flex-shrink-0 mt-0.5" />
        <span>{t.admissionForm.privacyNotice}</span>
      </div>

      {/* Submit Button */}
      <div className="mt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-6 rounded-xl bg-brand-islamic hover:bg-brand-dark text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>{t.admissionForm.submitting}</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4 text-brand-lime" />
              <span>{t.admissionForm.submitButton}</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
