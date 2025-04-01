'use client';

import { Button } from '@/components/ui/button';
import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const { locale: pathLocale } = useParams() as { locale: string };
  const locale = useLocale() as 'fr' | 'en';

  // Fonction pour obtenir le nouveau chemin en changeant la locale
  const getPathWithNewLocale = (newLocale: string) => {
    // Obtenir le chemin sans la locale
    const pathWithoutLocale = pathname.replace(`/${pathLocale}`, '');
    return `/${newLocale}${pathWithoutLocale}`;
  };

  const languageLabels = {
    fr: {
      changeLanguage: 'Changer de langue',
      french: 'Français',
      english: 'Anglais',
    },
    en: {
      changeLanguage: 'Change language',
      french: 'French',
      english: 'English',
    },
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">
            {languageLabels[locale].changeLanguage}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link href={getPathWithNewLocale('fr')} locale="fr">
            {languageLabels[locale].french}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={getPathWithNewLocale('en')} locale="en">
            {languageLabels[locale].english}
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
