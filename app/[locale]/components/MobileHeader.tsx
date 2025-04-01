'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ModeToggle } from '@/components/ModeToggle';
import { HamburgerButton } from '@/components/ui/hamburger-button';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslations } from 'next-intl';

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('header');

  const translatedLinks = [
    { label: t('about'), href: '#about' },
    { label: t('projects'), href: '#projects' },
    { label: t('contact'), href: '#contact' },
  ];

  return (
    <>
      <HamburgerButton
        isOpen={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden"
      />

      {/* Mobile Menu Navigation */}
      <div
        className={cn(
          'fixed inset-x-0 top-[calc(100%+1rem)] flex flex-col rounded-2xl border bg-background p-6 transition-all duration-300 ease-in-out lg:hidden',
          isMenuOpen
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-4 opacity-0'
        )}
      >
        <nav className="flex flex-1 flex-col divide-y divide-border">
          {translatedLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                'py-4 text-base font-medium text-primary transition-colors first:pt-0 last:pb-0 hover:text-primary/80'
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col items-center gap-6 py-4 border-t border-border mt-4">
            <ModeToggle />
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </>
  );
}
