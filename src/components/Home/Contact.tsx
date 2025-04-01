'use client';

import { Mail, Phone, Send } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, ContactFormValues } from '@/lib/schema';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function Contact() {
  const t = useTranslations('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    'success' | 'error' | null
  >(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        form.reset();
      } else {
        setSubmissionStatus('error');
      }
    } catch {
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fonction utilitaire pour traduire les messages d'erreur de validation
  const translateError = (error: { message?: string }) => {
    if (!error.message) return '';

    switch (error.message) {
      case 'required':
        return t('form.required');
      case 'invalidEmail':
        return t('form.invalidEmail');
      case 'minLength':
        return t('form.minLength').replace('{min}', '2');
      case 'maxLength':
        return t('form.maxLength').replace('{max}', '50');
      default:
        return error.message;
    }
  };

  return (
    <section
      id="contact"
      className="w-full max-w-6xl mx-auto px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-semibold tracking-tight text-balance text-3xl lg:text-4xl">
          {t('title')}
        </h2>
        <p className="mt-2 text-muted-foreground">{t('subtitle')}</p>
      </div>

      <div className="mx-auto mt-20 max-w-6xl grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
        {/* Contact Info */}
        <div className="space-y-10">
          <div className="flex gap-x-6 text-left">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary">
              <Mail
                aria-hidden="true"
                className="size-6 text-primary-foreground"
              />
            </div>
            <div>
              <h3 className="font-semibold">{t('email.title')}</h3>
              <p className="mt-2 text-muted-foreground">
                {t('email.description')}
              </p>
              <p className="mt-4 text-sm font-semibold">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=hnnhat67@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline"
                >
                  hnnhat67@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="flex gap-x-6 text-left">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary">
              <Phone
                aria-hidden="true"
                className="size-6 text-primary-foreground"
              />
            </div>
            <div>
              <h3 className="font-semibold">{t('phone.title')}</h3>
              <p className="mt-2 text-muted-foreground">
                {t('phone.description')}
              </p>
              <p className="mt-4 text-sm font-semibold">
                <span className="font-semibold hover:underline">
                  +33 7 69 57 74 67
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-background/50 rounded-2xl shadow-sm border p-8">
          {submissionStatus && (
            <Alert
              className={`mb-6 ${
                submissionStatus === 'success'
                  ? 'bg-green-50 text-green-800 dark:bg-green-950 dark:text-green-300'
                  : 'bg-red-50 text-red-800 dark:bg-red-950 dark:text-red-300'
              }`}
            >
              <AlertDescription>
                {submissionStatus === 'success'
                  ? t('form.success')
                  : t('form.error')}
              </AlertDescription>
            </Alert>
          )}

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>{t('form.name')}</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    {fieldState.error && (
                      <FormMessage>
                        {translateError(fieldState.error)}
                      </FormMessage>
                    )}
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>{t('form.email')}</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                    {fieldState.error && (
                      <FormMessage>
                        {translateError(fieldState.error)}
                      </FormMessage>
                    )}
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>{t('form.message')}</FormLabel>
                    <FormControl>
                      <Textarea className="min-h-32" {...field} />
                    </FormControl>
                    {fieldState.error && (
                      <FormMessage>
                        {translateError(fieldState.error)}
                      </FormMessage>
                    )}
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    <span>{t('form.submit')}...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    <span>{t('form.submit')}</span>
                  </div>
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
