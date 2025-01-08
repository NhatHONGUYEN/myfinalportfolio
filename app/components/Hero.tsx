'use client';

import { ArrowDownRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import profilPicture from '../public/images/photo-profil.jpg';
import IconList from './IconList';

const Hero = () => {
  const linkMail = () => {
    window.open(
      'https://mail.google.com/mail/?view=cm&fs=1&to=hnnhat67@gmail.com'
    );
  };

  return (
    <section className="py-40">
      <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-0 mx-auto">
        <div className="flex justify-end ">
          <Image
            src={profilPicture}
            alt="photo-profil"
            className="max-h-[600px] w-full rounded-md object-contain"
            width={1000}
            height={800}
          />
        </div>
        <div className="flex flex-col items-center text-center lg:max-w-3xl lg:items-start lg:text-left">
          <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl xl:text-7xl">
            Developper full-stack
          </h1>
          <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
            I am a web developer based in Paris, passionate about coding and the
            opportunity to create cool stuff. Each project is a new adventure,
            pushing the boundaries of technology to deliver high-quality web
            solutions.
          </p>
          <div className="mb-12 flex w-fit flex-col items-center gap-4 sm:flex-row">
            <span className="inline-flex items-center -space-x-4"></span>
            <div>
              <IconList />
            </div>
          </div>
          <div className="flex w-full flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Button
              onClick={linkMail}
              variant="outline"
              className="w-full sm:w-auto"
            >
              Contact me
              <ArrowDownRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
