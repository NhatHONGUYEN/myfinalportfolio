'use client';

import { MoveRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { BlurIn } from '../../animations/BlurIn';

export default function Hero() {
  const linkMail = () => {
    window.open(
      'https://mail.google.com/mail/?view=cm&fs=1&to=hnnhat67@gmail.com'
    );
  };

  const linkGithub = () => {
    window.open('https://github.com/NhatHONGUYEN');
  };

  return (
    <section id="about" className="py-32 mt-20">
      <BlurIn>
        <div className="container  ">
          <div className="z-10 mx-auto flex max-w-4xl flex-col items-center gap-14 text-center">
            <Avatar className="w-52 h-52">
              <AvatarImage
                src="/images/photo-profil.jpg"
                className="object-cover"
                alt="photo profil"
              />
              <AvatarFallback>NH</AvatarFallback>
            </Avatar>
            <div>
              <Badge variant="secondary" className="mb-6">
                Nhat-Quan HO NGUYEN
              </Badge>
              <h1 className="mb-4 text-3xl  lg:text-4xl text-pretty font-semibold">
                Developper full-stack
              </h1>
              <p className="mx-auto w-96 sm:w-auto sm:max-w-xl text-muted-foreground">
                I am a web developer based in Paris, passionate about coding and
                the opportunity to create cool stuff. Each project is a new
                adventure, pushing the boundaries of technology to deliver
                high-quality web solutions.
              </p>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-6 lg:flex-row">
              <div className="mt-4 flex justify-center gap-2">
                <Button onClick={linkMail} size="lg">
                  Contact me
                </Button>
                <Button
                  onClick={linkGithub}
                  size="lg"
                  variant="secondary"
                  className="group"
                >
                  Github
                  <MoveRight
                    className="ml-2 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                    strokeWidth={1}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </BlurIn>
    </section>
  );
}
