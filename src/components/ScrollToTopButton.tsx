'use client';

import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations('ui');

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

  return (
    <div className="fixed bottom-4 right-4">
      <Button
        onClick={scrollToTop}
        size="lg"
        className="group transition-transform"
      >
        <ArrowUp className="mr-2 h-4 w-4" aria-hidden="true" />
        {t('scrollToTop')}
      </Button>
    </div>
  );
}
