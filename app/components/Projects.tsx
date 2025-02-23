import { ArrowRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import Image from 'next/image';
import { projects } from '@/lib/data';
import Link from 'next/link';

export default function Projects() {
  return (
    <section className="py-32">
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6">
            Latest Updates
          </Badge>
          <h2 className="mb-3 text-pretty text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            Discover My Latest Projects
          </h2>
          <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
            Explore my latest articles and tutorials on web development, design
            systems, and accessibility.
          </p>
          <Button variant="link" className="w-full sm:w-auto" asChild>
            <a href={'https://shadcnblocks.com'} target="_blank">
              View all projects
              <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="grid grid-rows-[auto_auto_1fr_auto]"
            >
              <div className="aspect-[16/9] w-full">
                <Link
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity duration-200 fade-in hover:opacity-70"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-center"
                    width={400}
                    height={225}
                    quality={100}
                    priority
                  />
                </Link>
              </div>
              <CardHeader>
                <h3 className="text-lg font-semibold hover:underline md:text-xl">
                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </Link>
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter>
                <Link
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-foreground hover:underline"
                >
                  Read more
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
