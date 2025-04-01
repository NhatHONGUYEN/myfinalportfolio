'use client';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { ModeToggle } from '@/components/ModeToggle';
import Link from 'next/link';
import MobileHeader from './MobileHeader';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations('header');

  // Mise à jour des liens avec les traductions
  const navigationsLinks = [
    { label: t('about'), href: '#about' },
    { label: t('projects'), href: '#projects' },
    { label: t('contact'), href: '#contact' },
  ];

  return (
    <section className="absolute left-1/2 z-50 w-[min(90%,700px)] -translate-x-1/2 rounded-full border bg-background/70 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Remplace le logo par l'icône Home */}
        <p className="text-muted-foreground">Nhat.deV</p>
        {/* Desktop Navigation */}
        <NavigationMenu className="max-lg:hidden">
          <NavigationMenuList>
            {navigationsLinks.map((link) => (
              <NavigationMenuItem key={link.label}>
                <Link
                  href={link.href}
                  className={cn(
                    'relative bg-transparent px-1.5 text-sm text-muted-foreground hover:text-primary'
                  )}
                >
                  {link.label}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        {/* Right side controls */}
        <div className="flex items-center gap-2.5">
          <div className="hidden lg:flex items-center gap-2">
            <LanguageSwitcher />
            <ModeToggle />
          </div>
          <MobileHeader />
        </div>
      </div>
    </section>
  );
}
