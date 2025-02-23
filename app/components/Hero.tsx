'use client';

import { MoveRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

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
    <section>
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Badge variant="outline">✨ Nhat-Quan HO NGUYEN</Badge>
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-5xl">
              Developper full-stack
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground ">
              I am a web developer based in Paris, passionate about coding and
              the opportunity to create cool stuff. Each project is a new
              adventure, pushing the boundaries of technology to deliver
              high-quality web solutions.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
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
          <Image
            src={'/profilpic.png'}
            alt={'profilpic'}
            className="max-h-[800px] w-full rounded-md object-cover"
            width={400}
            height={400}
            quality={100}
            priority
          />
        </div>
      </div>
    </section>
  );
}
