import { IconsItem, NavigationItem, Project } from './type';
import {
  InstagramIcon,
  GitHubIcon,
  TwitterIcon,
} from '../../app/components/SocialIcons';

export const navigation: NavigationItem[] = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/hnnq.dev/',
    icon: InstagramIcon,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/NhatHONGUYEN',
    icon: GitHubIcon,
  },
  {
    name: 'Twitter',
    href: 'https://x.com/Nhatflix_',
    icon: TwitterIcon,
  },
];

export const projects: Project[] = [
  {
    id: 1,
    date: 'Mars, 2025',
    category: 'Santé',
    title: 'DocBoard',
    description:
      "Une plateforme complète pour la prise de rendez-vous entre patients et médecins, dotée d'un tableau de bord intuitif. Gérez vos rendez-vous, consultez votre historique médical et restez connecté avec vos professionnels de santé sans effort.",
    image: '/images/projects/DocBoard - Medical Dashboard.png',
    href: 'https://doc-board.vercel.app/',
  },

  {
    id: 2,
    date: 'Mars, 2025',
    category: 'Apprentissage des Langues',
    title: 'Mocou',
    description:
      'Une plateforme ludique et interactive pour apprendre le coréen avec le personnage adorable Pochacco. Explorez les leçons, pratiquez des exercices et suivez votre progression alors que Pochacco vous guide dans votre apprentissage du coréen.',
    image:
      'https://res.cloudinary.com/nhatflux/image/upload/f_webp/cznrzf6wnnixp9vcvnen',
    href: 'https://mocou.vercel.app/',
  },

  {
    id: 3,
    date: 'Février, 2025',
    category: "Découverte d'Anime",
    title: 'Anima',
    description:
      "Anima est le hub ultime pour les amateurs d'anime ! Plongez dans un monde d'informations détaillées sur vos séries préférées, des bandes-annonces aux analyses des personnages, en passant par les doubleurs et les notes.",
    image:
      'https://res.cloudinary.com/nhatflux/image/upload/f_webp/bkr8remsm7dgqrfwkfsf',
    href: 'https://anima-dusky.vercel.app/',
  },
  {
    id: 4,
    date: 'Février, 2025',
    category: 'Blog',
    title: 'NhatBlog',
    description:
      "Mon journal intime de développeur où je partage mes expériences, mes conseils et mes apprentissages dans le monde du développement web. Un espace personnel pour documenter mon parcours et aider d'autres développeurs dans leur transition.",
    image: '/images/projects/blog.webp',
    href: 'https://nhathnblog.vercel.app/',
  },
  {
    id: 5,
    date: 'Janvier, 2025',
    category: 'Restaurant',
    title: 'PedroPasta',
    description:
      'Un restaurant italien authentique spécialisé dans les pâtes fraîches. Découvrez notre menu varié de pâtes artisanales, préparées avec des ingrédients de qualité et des recettes traditionnelles italiennes.',
    image: '/images/projects/PedroPasta.jpg',
    href: 'https://pedropasta-nhat-quans-projects.vercel.app/',
  },
  {
    id: 6,
    date: 'Janvier, 2025',
    category: 'Culinaire',
    title: 'Meals Finder',
    description:
      "Une application web intuitive pour découvrir et explorer des milliers de recettes. Recherchez par ingrédients, type de plat ou temps de préparation, et trouvez l'inspiration pour vos prochains repas.",
    image: '/images/projects/Recipes.png',
    href: 'https://meals-finder-lake.vercel.app/',
  },
  {
    id: 7,
    date: 'Décembre, 2024',
    category: 'E-commerce',
    title: 'Coffea',
    description:
      "Une boutique en ligne spécialisée dans la vente de cafés de qualité. Découvrez notre sélection de grains de café, moulus ou en capsules, provenant des meilleures régions productrices. Une expérience d'achat simple et rapide pour tous les amateurs de café.",
    image: '/images/projects/coffea.png',
    href: 'https://coffee-shop-five-jet.vercel.app/',
  },
  {
    id: 8,
    date: 'Juillet, 2024',
    category: 'Mode',
    title: 'Wakaranai',
    description:
      "Une boutique en ligne de vêtements tendance et de qualité. Découvrez notre collection de vêtements streetwear et fashion, alliant style japonais et tendances contemporaines. Une expérience d'achat simple pour tous les passionnés de mode.",
    image: '/images/projects/wakaranai.png',
    href: 'https://wakaranai-alpha.vercel.app/',
  },
  {
    id: 9,
    date: 'Juillet, 2024',
    category: 'Portfolio',
    title: 'Portfoliov2',
    description:
      'Mon premier portfolio développé avec React, présentant mes projets et compétences. Une interface moderne et responsive qui met en valeur mon travail de développeur web.',
    image: '/images/projects/Nhatv2.jpg',
    href: 'https://portfolio-v2-mu-neon.vercel.app/',
  },
  {
    id: 10,
    date: 'Juin, 2024',
    category: 'Restaurant',
    title: 'Barameyv3',
    description:
      "Un site web élégant pour un restaurant moderne. Présente le menu, les spécialités et l'ambiance du restaurant avec une interface utilisateur intuitive et attrayante. Une expérience en ligne qui reflète la qualité du service en salle.",
    image: '/images/projects/baramey.jpg',
    href: 'https://barameyv3.vercel.app/',
  },
  {
    id: 11,
    date: 'Avril, 2024',
    category: 'Restaurant',
    title: 'Sushi-SenSation',
    description:
      'Un restaurant japonais spécialisé dans les sushis et la cuisine nippone. Découvrez notre sélection de sushis frais, maki et plats traditionnels, préparés avec des ingrédients de première qualité. Une expérience culinaire authentique qui vous transporte au Japon.',
    image: '/images/projects/sushi.png',
    href: 'https://sushi-sensation.vercel.app/',
  },
  {
    id: 12,
    date: 'Avril, 2024',
    category: 'Portfolio',
    title: 'Nhatflix',
    description:
      'Un CV interactif et dynamique présentant mon parcours de danseur. Découvrez mes performances, mes styles de danse et mon expérience à travers une interface moderne et immersive. Une présentation unique qui met en valeur mon art et ma passion pour la danse.',
    image: '/images/projects/light.jpg',
    href: 'https://nhatflix.vercel.app/',
  },
];

export const IconsList: IconsItem[] = [
  {
    key: 1,
    src: 'https://shadcnblocks.com/images/block/logos/github-icon.svg',
    alt: 'GitHub',
  },
  {
    key: 2,
    src: 'https://shadcnblocks.com/images/block/logos/tailwind-icon.svg',
    alt: 'Tailwind CSS',
  },
  {
    key: 3,
    src: '/images/NextJs.png',
    alt: 'Next.js',
  },
  {
    key: 4,
    src: 'https://shadcnblocks.com/images/block/logos/typescript-icon.svg',
    alt: 'TypeScript',
  },
  {
    key: 5,
    src: '/images/motion.png',
    alt: 'Framer Motion',
  },
  {
    key: 6,
    src: 'https://tanstack.com/favicon.ico', // TanStack Query
    alt: 'TanStack Query',
  },
  {
    key: 7,
    src: '/images/prisma.png',
    alt: 'Prisma',
  },
  {
    key: 8,
    src: 'https://www.postgresql.org/media/img/about/press/elephant.png', // PostgreSQL
    alt: 'PostgreSQL',
  },
  {
    key: 9,
    src: 'https://authjs.dev/img/logo-sm.png', // Auth.js
    alt: 'Auth.js',
  },
  {
    key: 10,
    src: '/images/projects/zustand.svg',
    alt: 'Zustand',
  },
];
