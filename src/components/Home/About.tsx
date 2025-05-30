import React from 'react';
import { Badge } from '@/components/ui/badge';
import { useTranslations } from 'next-intl';
import { InView } from '@/components/ui/in-view';

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="py-16 lg:max-w-5xl mx-auto">
      <div className="container w-80 md:w-auto mx-auto flex flex-col items-center gap-8 lg:px-16">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6">
            {t('badge')}
          </Badge>
          <h2 className="mb-3 text-pretty font-semibold md:mb-4 text-3xl lg:text-4xl">
            {t('title')}
          </h2>
        </div>

        <InView className="space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-pretty">{t('paragraphs.first')}</p>
          <p className="text-pretty">{t('paragraphs.second')}</p>
          <p className="text-pretty">{t('paragraphs.third')}</p>
        </InView>
      </div>
    </section>
  );
}
