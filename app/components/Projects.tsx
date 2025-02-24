import { Badge } from '@/components/ui/badge';

import Image from 'next/image';
import { projects } from '@/lib/data';
import Link from 'next/link';
import { BlurIn } from '../../animations/BlurIn';

export default function Projects() {
  return (
    <section id="projects" className="py-32">
      <BlurIn>
        <div className="container w-96 md:w-auto  mx-auto flex flex-col items-center gap-16 lg:px-16">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6">
              Latest Updates
            </Badge>
            <h2 className="mb-3 text-pretty  font-semibold md:mb-4 text-3xl  lg:text-4xl">
              Discover My Latest Projects
            </h2>
            <p className="mb-8 text-muted-foreground  lg:max-w-2xl ">
              Explore my latest articles and tutorials on web development,
              design systems, and accessibility.
            </p>
          </div>
          <div className="grid  gap-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {projects.map((project) => (
              <article
                key={project.id}
                className="flex flex-col items-start justify-between"
              >
                <div className="relative w-full">
                  <Image
                    alt={project.title}
                    src={project.image}
                    className="aspect-video w-full rounded-2xl object-cover sm:aspect-2/1 lg:aspect-3/2"
                    width={500}
                    height={300}
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-primary/10 ring-inset" />
                </div>
                <div className="max-w-xl h-full">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time
                      dateTime={project.date}
                      className="text-muted-foreground"
                    >
                      {project.date}
                    </time>
                    <div className="relative z-10 rounded-full bg-secondary px-3 py-1.5 font-medium text-primary hover:bg-secondary-foreground hover:text-secondary">
                      {project.category}
                    </div>
                  </div>
                  <div className="group relative text-left">
                    <h3 className="mt-3 text-lg/6 font-semibold  group-hover:text-muted-foreground">
                      <Link
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="absolute inset-0" />
                        {project.title}
                      </Link>
                    </h3>
                    <p className="mt-5 text-sm/6  text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </BlurIn>
    </section>
  );
}
