import { MoveRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import ThemeAvatar from './ThemeAvatar';

export default function Hero() {
  return (
    <section id="about" className="py-32  mt-20">
      <div className="container">
        <div className="z-10 mx-auto flex max-w-4xl flex-col items-center gap-14 text-center">
          <ThemeAvatar />

          <div>
            <Badge variant="secondary" className="mb-6">
              Nhat-Quan HO NGUYEN
            </Badge>
            <h1 className="mb-4 text-3xl lg:text-4xl text-pretty font-semibold">
              Développeur Full-Stack
            </h1>
            <p className="mx-auto w-80 sm:w-auto sm:max-w-xl text-muted-foreground">
              Développeur Full-Stack spécialisé en React, Next.js et Node.js. Je
              crée des applications web modernes et performantes, et je
              recherche actuellement une alternance pour développer mes
              compétences.
            </p>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 lg:flex-row">
            <div className="mt-4 flex justify-center gap-2">
              <Link
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hnnhat67@gmail.com"
                target="_blank"
              >
                <Button size="lg" aria-label="Me contacter par email">
                  Me contacter
                </Button>
              </Link>
              <Link href="https://github.com/NhatHONGUYEN" target="_blank">
                <Button
                  size="lg"
                  variant="secondary"
                  className="group"
                  aria-label="Visiter mon profil GitHub"
                >
                  GitHub
                  <MoveRight
                    className="ml-2 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                    strokeWidth={1}
                  />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
