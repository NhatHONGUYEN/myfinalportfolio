'use client';

import { MenuIcon } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const features = [
    {
      title: 'project',
      href: '#project',
    },
    {
      title: 'contact',
      href: '#contact',
    },
  ];

  return (
    <section className="py-4">
      <div className="container">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="logo"
              className="w-auto"
              width={100}
              height={100}
            />
          </div>
          <div className="flex flex-col">
            <div className="grid md:grid-cols-2">
              {features.map((feature, index) => (
                <Link
                  href={feature.href}
                  key={index}
                  className="rounded-md p-3 transition-colors hover:bg-muted/70"
                >
                  <div key={feature.title}>
                    <p className="mb-1 font-semibold">{feature.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden items-center gap-4 lg:flex">
            <Button variant="outline">Sign in</Button>
            <Button>Start for free</Button>
          </div>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-scroll">
              <SheetHeader>
                <SheetTitle>
                  <div className="flex items-center gap-4">
                    <Image src="/logo.png" alt="logo" className="w-8" />
                  </div>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col">
                <div className="grid md:grid-cols-2">
                  {features.map((feature, index) => (
                    <a
                      href={feature.href}
                      key={index}
                      className="rounded-md p-3 transition-colors hover:bg-muted/70"
                    >
                      <div key={feature.title}>
                        <p className="mb-1 font-semibold">{feature.title}</p>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="flex flex-col gap-6 mt-6">
                  <a href="#" className="font-medium">
                    Templates
                  </a>
                  <a href="#" className="font-medium">
                    Blog
                  </a>
                  <a href="#" className="font-medium">
                    Pricing
                  </a>
                </div>
                <div className="mt-6 flex flex-col gap-4">
                  <Button variant="outline">Sign in</Button>
                  <Button>Start for free</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
}
