import Contact from '@/components/Home/Contact';
import Header from '@/components/Home/Header';
import Hero from '@/components/Home/Hero';
import IconGrid from '@/components/Home/IconGrid';
import Projects from '@/components/Home/Projects';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <IconGrid />
      <Projects />
      <Contact />
    </>
  );
}
