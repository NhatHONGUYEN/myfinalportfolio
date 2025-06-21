'use client';

import React from 'react';
import { projects } from '@/lib/data';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, Code, Lightbulb, Target } from 'lucide-react';
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
      <div className="container w-80 md:w-auto mx-auto flex flex-col items-center gap-16 lg:px-16">
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

          {/* Section Technologies */}
          {project.technologies && (
            <div className="mt-8 p-6 bg-muted/50 rounded-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Code className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">{t('technologies')}</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Section Apprentissages */}
          {project.learnings && (
            <div className="mt-8 p-6 bg-muted/50 rounded-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">{t('learnings')}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {project.learnings[locale]}
              </p>
            </div>
          )}

          {/* Section Motivation */}
          {project.motivation && (
            <div className="mt-8 p-6 bg-muted/50 rounded-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">{t('motivation')}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {project.motivation[locale]}
              </p>
            </div>
          )}

          {/* Section Galerie d'images */}
          {project.gallery && (
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-xl font-semibold">{t('gallery')}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.gallery.map((imageUrl, index) => (
                  <div
                    key={index}
                    className="relative aspect-video overflow-hidden rounded-xl"
                  >
                    <Image
                      src={imageUrl}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      fill
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section Vidéo */}
          {project.video && (
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-xl font-semibold">{t('video')}</h2>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-2xl">
                <video
                  src={project.video}
                  controls
                  className="w-full h-full object-cover"
                  poster={project.image}
                >
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              </div>
            </div>
          )}

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
