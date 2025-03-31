'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ModeToggle } from '@/components/ModeToggle';
import { HamburgerButton } from '../../src/components/ui/hamburger-button';

const navigationsLinks = [
  { label: 'À propos', href: '#about' },
  { label: 'Projets', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          {navigationsLinks.map((link) => (
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
          <div className="divide-y divide-border py-4">
            <ModeToggle />
          </div>
        </nav>
      </div>
    </>
  );
}
