import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from '@/components/theme-provider';
import ParticlesBackGround from '@/components/ParticlesBackGround';
import ScrollToTopButton from '@/components/ScrollToTopButton';

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
      <body className={`${workSans.variable} antialiased max-w-5xl mx-auto`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* ParticlesBackGround en arrière-plan */}
          <div className="fixed inset-0 -z-10">
            <ParticlesBackGround />
          </div>

          {/* Contenu principal */}
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
