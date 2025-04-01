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

export default function ClientWrapper({ messages, locale, children }: Props) {
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
}
