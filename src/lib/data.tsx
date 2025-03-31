import { IconsItem, NavigationItem, Project } from './type';

export const navigation: NavigationItem[] = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/hnnq.dev/',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/NhatHONGUYEN',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://x.com/Nhatflix_',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.087-.205-7.713-2.165-10.141-5.144-.422.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14.002-7.496 14.002-13.986 0-.21 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"
          clipRule="evenodd"
        />
      </svg>
    ),
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
    date: 'Janvier, 2025',
    category: "Découverte d'Anime",
    title: 'PedroPasta',
    description:
      'Un restaurant italien authentique spécialisé dans les pâtes fraîches. Découvrez notre menu varié de pâtes artisanales, préparées avec des ingrédients de qualité et des recettes traditionnelles italiennes.',
    image: '/images/projects/PedroPasta.jpg',
    href: 'https://pedropasta-nhat-quans-projects.vercel.app/',
  },
  {
    id: 5,
    date: 'Janvier, 2025',
    category: 'Culinaire',
    title: 'Meals Finder',
    description:
      "Une application web intuitive pour découvrir et explorer des milliers de recettes. Recherchez par ingrédients, type de plat ou temps de préparation, et trouvez l'inspiration pour vos prochains repas.",
    image: '/images/projects/Recipes.png',
    href: 'https://meals-finder-lake.vercel.app/',
  },
  {
    id: 6,
    date: 'Décembre, 2024',
    category: 'E-commerce',
    title: 'Coffea',
    description:
      "Une boutique en ligne spécialisée dans la vente de cafés de qualité. Découvrez notre sélection de grains de café, moulus ou en capsules, provenant des meilleures régions productrices. Une expérience d'achat simple et rapide pour tous les amateurs de café.",
    image: '/images/projects/coffea.png',
    href: 'https://coffee-shop-five-jet.vercel.app/',
  },
  {
    id: 7,
    date: 'Juillet, 2024',
    category: 'Mode',
    title: 'Wakaranai',
    description:
      "Une boutique en ligne de vêtements tendance et de qualité. Découvrez notre collection de vêtements streetwear et fashion, alliant style japonais et tendances contemporaines. Une expérience d'achat simple pour tous les passionnés de mode.",
    image: '/images/projects/wakaranai.png',
    href: 'https://wakaranai-alpha.vercel.app/',
  },
  {
    id: 8,
    date: 'Juillet, 2024',
    category: 'Portfolio',
    title: 'Portfoliov2',
    description:
      'Mon premier portfolio développé avec React, présentant mes projets et compétences. Une interface moderne et responsive qui met en valeur mon travail de développeur web.',
    image: '/images/projects/Nhatv2.jpg',
    href: 'https://portfolio-v2-mu-neon.vercel.app/',
  },
  {
    id: 9,
    date: 'Juin, 2024',
    category: 'Restaurant',
    title: 'Barameyv3',
    description:
      "Un site web élégant pour un restaurant moderne. Présente le menu, les spécialités et l'ambiance du restaurant avec une interface utilisateur intuitive et attrayante. Une expérience en ligne qui reflète la qualité du service en salle.",
    image: '/images/projects/baramey.jpg',
    href: 'https://barameyv3.vercel.app/',
  },
  {
    id: 10,
    date: 'Avril, 2024',
    category: 'Restaurant',
    title: 'Sushi-SenSation',
    description:
      'Un restaurant japonais spécialisé dans les sushis et la cuisine nippone. Découvrez notre sélection de sushis frais, maki et plats traditionnels, préparés avec des ingrédients de première qualité. Une expérience culinaire authentique qui vous transporte au Japon.',
    image: '/images/projects/sushi.png',
    href: 'https://sushi-sensation.vercel.app/',
  },
  {
    id: 11,
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
