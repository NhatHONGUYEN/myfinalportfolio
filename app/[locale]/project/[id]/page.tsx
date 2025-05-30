'use client';

import React from 'react';
import { projects } from '@/lib/data';
import Image from 'next/image';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Badge } from '@/components/ui/badge';
import { notFound, useParams } from 'next/navigation';
import { ButtonLink } from '@/components/ui/button-link';

export default function ProjectPage() {
  const params = useParams();
  const projectId = parseInt(params.id as string);
  const locale = params.locale as 'fr' | 'en';

  const t = useTranslations('project');

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  return (
    <section className="py-16 max-w-5xl mx-auto">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-start gap-4">
            <ButtonLink
              href={`/${locale}/all-projects`}
              variant="ghost"
              className="group mb-4"
              aria-label={t('backToProjects')}
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              {t('backToProjects')}
            </ButtonLink>

            <Badge variant="secondary" className="mb-2">
              {project.category[locale]}
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight">
              {project.title}
            </h1>

            <p className="text-muted-foreground">
              {t('publishedIn')} {project.date[locale]}
            </p>
          </div>

          <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
            <Image
              src={project.image}
              alt={project.title}
              className="object-cover"
              fill
              priority
            />
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg">{project.description[locale]}</p>
          </div>

          <div className="mt-8">
            <ButtonLink
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="gap-2"
            >
              <ExternalLink className="h-4 w-4" />
              {t('visitWebsite')}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
