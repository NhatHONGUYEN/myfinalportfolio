import Contact from './components/Contact';
import Header from './components/Header';
import Hero from './components/Hero';
import IconGrid from './components/IconGrid';

import Projects from './components/Projects';

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
