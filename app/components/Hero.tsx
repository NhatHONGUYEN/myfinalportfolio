'use client';

import { MoveRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

import IconList from './IconList';

const Hero = () => {
  const linkMail = () => {
    window.open(
      'https://mail.google.com/mail/?view=cm&fs=1&to=hnnhat67@gmail.com'
    );
  };

  const linkGithub = () => {
    window.open('https://github.com/NhatHONGUYEN');
  };

  return (
    <section id="home" className="p-10 mt-24 md:mt-0  md:py-40 ">
      <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-20 mx-auto">
        <div className="flex   justify-end ">
          <Image
            src="/images/photo-profil.jpg"
            alt="photo-profil"
            className="max-h-[600px]  w-full object-contain"
            width={1000}
            height={800}
          />
        </div>
        <div className="flex flex-col items-center text-center lg:max-w-3xl lg:items-start lg:text-left">
          <p className="text-muted-foreground ">Nhat-Quan HO NGUYEN</p>
          <h1 className="my-4 text-pretty text-4xl font-bold ">
            Developper full-stack
          </h1>
          <p className="mb-8 max-w-xl text-muted-foreground  ">
            I am a web developer based in Paris, passionate about coding and the
            opportunity to create cool stuff. Each project is a new adventure,
            pushing the boundaries of technology to deliver high-quality web
            solutions.
          </p>
          <div className=" flex w-fit flex-col items-center gap-4 sm:flex-row">
            <span className="inline-flex items-center -space-x-4"></span>
            <div>
              <IconList />
            </div>
          </div>
          <div className="mt-10 flex flex-col justify-center items-center gap-4 sm:flex-row">
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
    </section>
  );
};

export default Hero;
