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

// Mise à jour des liens
const navigationsLinks = [
  { label: 'À propos', href: '#about' },
  { label: 'Projets', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
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
          <div className="hidden lg:flex">
            <ModeToggle />
          </div>
          <MobileHeader />
        </div>
      </div>
    </section>
  );
}
