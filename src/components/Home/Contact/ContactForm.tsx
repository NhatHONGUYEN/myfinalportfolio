'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createContactFormSchema, ContactFormValues } from '@/lib/schema';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import FormFieldWithError from './FormFieldWithError';

export const ContactForm = () => {
  const locale = useLocale();
  const t = useTranslations('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Utiliser le schéma de validation localisé
  const contactSchema = createContactFormSchema(locale);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          language: locale,
        }),
      });

      if (response.ok) {
        toast.success(t('form.success'), {
          duration: 5000,
          position: 'top-right',
        });
        form.reset();
      } else {
        toast.error(t('form.error'), {
          duration: 5000,
          position: 'top-right',
        });
      }
    } catch {
      toast.error(t('form.error'), {
        duration: 5000,
        position: 'top-right',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Pas besoin de fonction de traduction, les messages d'erreur sont déjà complets
  const translateError = (error: { message?: string }) => {
    return error.message || '';
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    form.setValue('message', e.target.value);
  };

  return (
    <div className="bg-background/50 max-w-lg mx-auto rounded-2xl shadow-sm border p-8 mb-16">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormFieldWithError
            control={form.control}
            name="name"
            label={t('form.name')}
            placeholder={t('form.namePlaceholder')}
            translateError={translateError}
          />

          <FormFieldWithError
            control={form.control}
            name="email"
            label={t('form.email')}
            placeholder={t('form.emailPlaceholder')}
            type="email"
            translateError={translateError}
          />

          <FormFieldWithError
            control={form.control}
            name="message"
            label={t('form.message')}
            placeholder={t('form.messagePlaceholder')}
            isTextarea={true}
            maxLength={500}
            onChangeHandler={handleMessageChange}
            translateError={translateError}
          />

          <Button
            type="submit"
            className="w-full transition-transform"
            disabled={isSubmitting}
            size="lg"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-x-2">
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                {t('form.submitting')}
              </div>
            ) : (
              <>{t('form.submit')}</>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
