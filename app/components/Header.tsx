'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { ModeToggle } from '@/components/ModeToggle';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Mise à jour des liens
const navigationsLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="absolute left-1/2 z-50 w-[min(90%,700px)] -translate-x-1/2 rounded-full border bg-background/70 backdrop-blur-md ">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Remplace le logo par l'icône Home */}
        <p className="text-muted-foreground">Nhat.deV</p>
        {/* Desktop Navigation */}
        <NavigationMenu className="max-lg:hidden">
          <NavigationMenuList>
            {navigationsLinks.map((link) => (
              <NavigationMenuItem key={link.label} className="">
                <Link
                  href={link.href}
                  className={cn(
                    'relative bg-transparent px-1.5 text-sm  text-muted-foreground hover:text-primary'
                  )}
                >
                  {link.label}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        {/* Remplace les boutons d'authentification par ModeToggle */}
        <div className="flex items-center gap-2.5">
          <div className="hidden lg:flex">
            <ModeToggle />
          </div>
          {/* Hamburger Menu Button (Mobile Only) */}
          <Button
            className="relative flex size-8 text-muted-foreground lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <div className="absolute top-1/2 left-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${
                  isMenuOpen ? 'rotate-45' : '-translate-y-1.5'
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${
                  isMenuOpen ? '-rotate-45' : 'translate-y-1.5'
                }`}
              ></span>
            </div>
          </Button>
        </div>
      </div>

      {/*  Mobile Menu Navigation */}
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
            {' '}
            <ModeToggle />
          </div>
        </nav>
      </div>
    </section>
  );
}
