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

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const { locale } = useParams() as { locale: string };

  // Fonction pour obtenir le nouveau chemin en changeant la locale
  const getPathWithNewLocale = (newLocale: string) => {
    // Obtenir le chemin sans la locale
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    return `/${newLocale}${pathWithoutLocale}`;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Changer de langue</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link href={getPathWithNewLocale('fr')} locale="fr">
            Français
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={getPathWithNewLocale('en')} locale="en">
            English
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
