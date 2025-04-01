import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import './globals.css';
import Footer from './components/Footer';
import { ThemeProvider } from '@/components/theme-provider';
import ParticlesBackGround from '@/components/ParticlesBackGround';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import ClientWrapper from './components/ClientWrapper';

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-work-sans',
});

export const metadata: Metadata = {
  title: 'Nhat Portfolio',
  description: 'A simple portfolio website to present my projects and skills.',
  icons: {
    icon: '/images/coffee.svg',
  },
  openGraph: {
    title: 'Nhat Portfolio',
    description:
      'A simple portfolio website to present my projects and skills.',
    url: 'https://myfinalportfolio-five.vercel.app/',
    siteName: 'Nhat Portfolio',
    images: [
      {
        url: 'https://myfinalportfolio-five.vercel.app/images/projects/photo-profil.webp',
        width: 1200,
        height: 630,
        alt: 'Nhat Portfolio - A simple portfolio website',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nhat Portfolio',
    description:
      'A simple portfolio website to present my projects and skills.',
    images: [
      {
        url: 'https://myfinalportfolio-five.vercel.app/images/projects/photo-profil.webp',
        alt: 'Nhat Portfolio - A simple portfolio website',
      },
    ],
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body className={`${workSans.variable} antialiased `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed inset-0 -z-10">
            <ParticlesBackGround />
          </div>
          <ClientWrapper messages={messages} locale={locale}>
            <div className="relative z-10">
              {children}
              <Footer />
              <ScrollToTopButton />
            </div>
          </ClientWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
