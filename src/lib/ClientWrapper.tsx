'use client';

import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';

type Messages = {
  hero: {
    badge: string;
    title: string;
    description: string;
    buttons: {
      contact: string;
      projects: string;
    };
  };
  metadata: {
    title: string;
    description: string;
  };
};

type Props = {
  messages: Messages;
  locale: string;
  children: ReactNode;
};

// Mapping des fuseaux horaires par locale
const timeZoneMapping = {
  en: 'Europe/London',
  fr: 'Europe/Paris',
};

export default function ClientWrapper({ messages, locale, children }: Props) {
  const timeZone =
    timeZoneMapping[locale as keyof typeof timeZoneMapping] || 'UTC';

  return (
    <NextIntlClientProvider
      messages={messages}
      locale={locale}
      timeZone={timeZone}
    >
      {children}
    </NextIntlClientProvider>
  );
}
