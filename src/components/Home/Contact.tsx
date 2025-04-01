import { Mail, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section
      id="contact"
      className="isolate  w-80 lg:w-auto mx-auto px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="mx-auto  max-w-2xl sm:text-center">
        <h2 className=" font-semibold tracking-tight text-balance text-3xl  lg:text-4xl  ">
          {t('title')}
        </h2>
        <p className="mt-2 text-muted-foreground ">{t('subtitle')}</p>
      </div>
      <div className="mx-auto mt-20 max-w-lg space-y-16">
        <div className="flex gap-x-6  text-left">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary">
            <Mail
              aria-hidden="true"
              className="size-6 text-primary-foreground"
            />
          </div>
          <div>
            <h3 className=" font-semibold ">{t('email.title')}</h3>
            <p className="mt-2  text-muted-foreground ">
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
            <h3 className=" font-semibold ">{t('phone.title')}</h3>
            <p className="mt-2  text-muted-foreground ">
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
    </section>
  );
}
