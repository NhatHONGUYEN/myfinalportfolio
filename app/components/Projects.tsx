'use client';

import { ArrowRight, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    date: 'December, 2024',
    category: 'E-commerce',
    title: 'Coffea',
    description:
      'Coffea is your online shop for buying the best coffees from around the world. Discover our selection of high-quality beans and enjoy a smooth and secure shopping experience.',
    padding: 'mb-10',
    image: '/images/coffea.png',
    href: 'https://coffee-shop-five-jet.vercel.app/',
  },
  {
    id: 2,
    date: 'June, 2024',
    category: 'E-commerce',
    title: 'Wakaranai',
    description:
      'Wakaranai offers trendy clothing for men and women. Explore our wide range of clothing and find your style with our unique collections.',
    padding: 'mb-16',
    image: '/images/wakaranai.png',
    href: 'https://wakaranai-alpha.vercel.app/',
  },
  {
    id: 3,
    date: 'April, 2024',
    category: 'Showcase Website',
    title: 'Sushi-Sensation',
    description:
      'Sushi-Sensation is the website of our Japanese restaurant. Discover our menu, book a table, or order online for quick delivery.',
    padding: 'mb-16',
    image: '/images/sushi.png',
    href: 'https://sushi-sensation.vercel.app/',
  },
];

const Projects = () => {
  const [selection, setSelection] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    carouselApi.scrollTo(selection);
  }, [carouselApi, selection]);
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setSelection(carouselApi.selectedScrollSnap());
    };
    carouselApi.on('select', updateSelection);
    return () => {
      carouselApi.off('select', updateSelection);
    };
  }, [carouselApi]);
  return (
    <section className="py-32 ">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8 md:flex-row ">
          <div className="aspect-[5/6] overflow-clip rounded-3xl bg-accent">
            <Carousel
              setApi={setCarouselApi}
              className="h-full w-full [&>div]:h-full"
            >
              <CarouselContent className="mx-0 h-full w-full">
                {projects.map((project) => (
                  <CarouselItem key={project.id} className="px-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                      width={800}
                      height={800}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="flex shrink-0 flex-col md:w-1/2 md:pr-8 lg:pl-24 lg:text-left 2xl:pl-32">
            <h2 className="mb-6 text-pretty text-3xl font-bold lg:text-5xl">
              My projects
            </h2>
            <p className="mb-16 text-muted-foreground lg:text-xl">
              Thanks to each project, I have been able to improve a specific
              skill, allowing me to continuously progress and prepare to tackle
              new challenges with confidence.
            </p>
            <ul className="space-y-2">
              {projects.map((project, i) => (
                <li
                  key={project.id}
                  className="group relative w-full rounded-xl cursor-pointer px-6 py-3 transition data-[open]:bg-accent"
                  data-open={selection === i ? 'true' : undefined}
                  onClick={() => setSelection(i)}
                >
                  <div className="flex items-center justify-between gap-x-2">
                    <div className="text-sm font-semibold text-accent-foreground">
                      {project.title}
                    </div>
                    <div className="flex size-8 items-center justify-center rounded-full bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground group-data-[open]:bg-primary group-data-[open]:text-primary-foreground">
                      <ChevronDown className="size-4 shrink-0 transition-transform duration-200 group-data-[open]:rotate-180" />
                    </div>
                  </div>
                  <div className="hidden text-sm font-medium group-data-[open]:block">
                    <p className="my-4 text-muted-foreground lg:my-6">
                      {project.description}
                    </p>
                    <a
                      href="#"
                      className="group/link flex items-center pb-3 text-sm text-accent-foreground"
                    >
                      Learn more{' '}
                      <ArrowRight className="ml-2 size-4 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
