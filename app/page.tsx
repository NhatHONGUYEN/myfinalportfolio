import { FC } from 'react';
import { InView } from '@/components/ui/in-view';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Projects from './components/Projects';

// Common animation variants
const animationVariants = {
  hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

// Common transition configuration
const transitionConfig = { duration: 0.3, ease: 'easeInOut' };

const Home: FC = () => {
  return (
    <>
      <InView variants={animationVariants} transition={transitionConfig}>
        <Hero />
      </InView>
      <InView variants={animationVariants} transition={transitionConfig}>
        <Projects />
      </InView>
      <InView variants={animationVariants} transition={transitionConfig}>
        <Contact />
      </InView>
    </>
  );
};

export default Home;
