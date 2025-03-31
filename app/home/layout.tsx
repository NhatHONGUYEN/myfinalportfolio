import { ThemeProvider } from '@/components/theme-provider';
import ParticlesBackGround from '@/components/ParticlesBackGround';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
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
  );
}
