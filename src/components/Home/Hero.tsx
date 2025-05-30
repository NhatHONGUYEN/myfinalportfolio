import { Mail, GithubIcon, FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

import { useTranslations } from 'next-intl';
import ThemeAvatar from '../Theme/ThemeAvatar';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section id="about" className="py-32  mt-20 max-w-5xl mx-auto">
      <div className="container p-8">
        <div className="z-10 mx-auto flex max-w-4xl flex-col items-center gap-14 text-center">
          <ThemeAvatar />

          <div>
            <Badge variant="secondary" className="mb-6">
              {t('badge')}
            </Badge>
            <h1 className="mb-4 text-3xl lg:text-4xl text-pretty font-semibold">
              {t('title')}
            </h1>
            <p className="mx-auto w-80 sm:w-auto sm:max-w-xl text-muted-foreground">
              {t('description')}
            </p>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 lg:flex-row">
            <div className="mt-4 flex flex-col w-full justify-center gap-8 sm:flex-row flex-wrap">
              <Link href="#contact">
                <Button
                  size="lg"
                  className="w-full transition-transform"
                  aria-label={t('buttons.contact')}
                >
                  <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                  {t('buttons.contact')}
                </Button>
              </Link>
              <Link href="https://github.com/NhatHONGUYEN" target="_blank">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full transition-transform"
                  aria-label={t('buttons.projects')}
                >
                  <GithubIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                  {t('buttons.projects')}
                </Button>
              </Link>
              <Link
                href="/CV_Nhat_Quan_HO_NGUYEN_Alternance_Dev_2025.pdf"
                target="_blank"
                download
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full transition-transform"
                  aria-label={t('buttons.resume')}
                >
                  <FileDown className="mr-2 h-4 w-4" aria-hidden="true" />
                  {t('buttons.resume')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
