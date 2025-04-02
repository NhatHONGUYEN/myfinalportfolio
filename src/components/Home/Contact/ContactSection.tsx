import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export const ContactSection = () => {
  const t = useTranslations('contact');

  return (
    <section
      className="w-full max-w-3xl mx-auto px-6 py-16 lg:px-8"
      id="contact"
    >
      <div className="text-center">
        <h2 className="font-semibold tracking-tight text-balance text-3xl lg:text-4xl">
          {t('title')}
        </h2>
        <p className="mt-2 text-muted-foreground">{t('subtitle')}</p>
      </div>

      <div className="mt-20">
        {/* Contact Form */}
        <ContactForm />

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactInfo
            icon={
              <Mail
                aria-hidden="true"
                className="size-6 text-primary-foreground"
              />
            }
            title={t('email.title')}
            description={t('email.description')}
            contactValue="hnnhat67@gmail.com"
            link="https://mail.google.com/mail/?view=cm&fs=1&to=hnnhat67@gmail.com"
          />

          <ContactInfo
            icon={
              <Phone
                aria-hidden="true"
                className="size-6 text-primary-foreground"
              />
            }
            title={t('phone.title')}
            description={t('phone.description')}
            contactValue="+33 7 69 57 74 67"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
