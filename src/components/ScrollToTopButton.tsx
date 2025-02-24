'use client';

import { BlurIn } from '../../animations/BlurIn';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const label = 'Go to top';
  return (
    <div className="fixed bottom-4 right-4">
      <BlurIn>
        <Button onClick={scrollToTop} size="lg" className="group flex-col">
          {label}
        </Button>
      </BlurIn>
    </div>
  );
}
