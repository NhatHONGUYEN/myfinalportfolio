import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from '@/components/theme-provider';
import ParticlesBackGround from '@/components/ParticlesBackGround';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Head from 'next/head';

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <Head>
        <meta property="og:title" content="Nhat Portfolio" />
        <meta
          property="og:description"
          content="A simple portfolio website to present my projects and skills."
        />
        <meta
          property="og:image"
          content="https://myfinalportfolio-five.vercel.app/images/projects/photo-profil.webp"
        />
        <meta
          property="og:url"
          content="https://myfinalportfolio-five.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nhat Portfolio" />
        <meta
          name="twitter:description"
          content="A simple portfolio website to present my projects and skills."
        />
        <meta
          name="twitter:image"
          content="https://myfinalportfolio-five.vercel.app/images/projects/photo-profil.webp"
        />
      </Head>
      <body className={`${workSans.variable} antialiased max-w-5xl mx-auto`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed inset-0 -z-10">
            <ParticlesBackGround />
          </div>
          <div className="relative z-10">
            <Header />
            {children}
            <Footer />
            <ScrollToTopButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
