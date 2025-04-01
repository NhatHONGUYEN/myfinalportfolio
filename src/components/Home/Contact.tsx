'use client';

import { Mail, Phone, Loader2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createContactFormSchema, ContactFormValues } from '@/lib/schema';
import { useState } from 'react';
import { toast } from 'sonner';
import { useLocale } from 'next-intl';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  const locale = useLocale();
  const t = useTranslations('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageLength, setMessageLength] = useState(0);

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
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success(t('form.success'), {
          duration: 5000,
          position: 'top-right',
        });
        form.reset();
        setMessageLength(0);
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

  return (
    <section
      className="w-full max-w-3xl mx-auto px-6 py-16  lg:px-8"
      id="contact"
    >
      <div className="text-center ">
        <h2 className="font-semibold tracking-tight text-balance text-3xl lg:text-4xl">
          {t('title')}
        </h2>
        <p className="mt-2 text-muted-foreground">{t('subtitle')}</p>
      </div>

      <div className="mt-20 ">
        {/* Contact Form */}
        <div className="bg-background/50 max-w-lg mx-auto rounded-2xl shadow-sm border p-8 mb-16">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>{t('form.name')}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t('form.namePlaceholder')}
                        {...field}
                      />
                    </FormControl>
                    {fieldState.error && (
                      <p className="text-[0.8rem] font-medium text-destructive mt-2">
                        {translateError(fieldState.error)}
                      </p>
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
                      <Input
                        type="email"
                        placeholder={t('form.emailPlaceholder')}
                        {...field}
                      />
                    </FormControl>
                    {fieldState.error && (
                      <p className="text-[0.8rem] font-medium text-destructive mt-2">
                        {translateError(fieldState.error)}
                      </p>
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
                      <Textarea
                        className="min-h-32"
                        placeholder={t('form.messagePlaceholder')}
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          setMessageLength(e.target.value.length);
                        }}
                      />
                    </FormControl>
                    <div className="flex justify-end text-xs text-muted-foreground mt-1">
                      <span>{messageLength}/500</span>
                    </div>
                    {fieldState.error && (
                      <p className="text-[0.8rem] font-medium text-destructive mt-2">
                        {translateError(fieldState.error)}
                      </p>
                    )}
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full transition-transform"
                disabled={isSubmitting}
                size="lg"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-x-2">
                    <Loader2
                      className="h-4 w-4 animate-spin"
                      aria-hidden="true"
                    />
                    {t('form.submitting')}
                  </div>
                ) : (
                  <>{t('form.submit')}</>
                )}
              </Button>
            </form>
          </Form>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      </div>
    </section>
  );
}
