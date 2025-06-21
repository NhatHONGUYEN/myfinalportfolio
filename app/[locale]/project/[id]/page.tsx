'use client';

import React from 'react';
import { projects } from '@/lib/data';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Badge } from '@/components/ui/badge';
import { notFound, useParams } from 'next/navigation';
import { ButtonLink } from '@/components/ui/button-link';
import dynamic from 'next/dynamic';

// Composant VideoPlayer importé dynamiquement pour éviter les problèmes d'hydratation
const VideoPlayer = dynamic(
  () =>
    Promise.resolve(({ src, poster }: { src: string; poster: string }) => (
      <div className="relative aspect-video overflow-hidden rounded-2xl">
        <video
          src={src}
          controls
          className="w-full h-full object-cover"
          poster={poster}
        >
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      </div>
    )),
  {
    ssr: false,
    loading: () => (
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-muted animate-pulse">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-muted-foreground">Chargement de la vidéo...</div>
        </div>
      </div>
    ),
  }
);

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

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg">{project.description[locale]}</p>
          </div>

          {/* Section Technologies */}
          {project.technologies && (
            <div className="mt-12">
              <h2 className="mb-6 text-2xl font-semibold">
                {t('technologies')}
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Section Motivation */}
          {project.motivation && (
            <div className="mt-12">
              <h2 className="mb-6 text-2xl font-semibold">{t('motivation')}</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  {project.motivation[locale]}
                </p>
              </div>
            </div>
          )}

          {/* Section Apprentissages */}
          {project.learnings && (
            <div className="mt-12">
              <h2 className="mb-6 text-2xl font-semibold">{t('learnings')}</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  {project.learnings[locale]}
                </p>
              </div>
            </div>
          )}

          {/* Section Défis rencontrés */}
          {project.challenges && (
            <div className="mt-12">
              <h2 className="mb-6 text-2xl font-semibold">{t('challenges')}</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenges[locale]}
                </p>
              </div>
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
              <VideoPlayer src={project.video} poster={project.image} />
            </div>
          )}

          <div className="mt-8 flex flex-col gap-4">
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

            {project.github && (
              <div className="flex flex-col gap-3">
                {typeof project.github === 'string' ? (
                  <ButtonLink
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="lg"
                    variant="outline"
                    className="gap-2"
                  >
                    <Github className="h-4 w-4" />
                    {t('viewCode')}
                  </ButtonLink>
                ) : (
                  <>
                    <h3 className="text-lg font-semibold">
                      {t('repositories')}
                    </h3>
                    <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
                      {Object.entries(project.github).map(([key, url]) => {
                        if (!url) return null;
                        const label = [
                          'frontend',
                          'backend',
                          'config',
                          'mobile',
                        ].includes(key)
                          ? t(
                              key as
                                | 'frontend'
                                | 'backend'
                                | 'config'
                                | 'mobile'
                            )
                          : key.charAt(0).toUpperCase() + key.slice(1);
                        return (
                          <ButtonLink
                            key={key}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="sm"
                            variant="outline"
                            className="gap-2"
                          >
                            <Github className="h-4 w-4" />
                            {label}
                          </ButtonLink>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
