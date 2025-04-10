import {
  GitHubIcon,
  InstagramIcon,
  TwitterIcon,
} from '../components/SocialIcons';
import { IconsItem, NavigationItem, Project } from './type';

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
    date: {
      fr: 'Avril, 2025',
      en: 'April, 2025',
    },
    category: {
      fr: 'Sport',
      en: 'Sport',
    },
    title: 'CoachLeague',
    description: {
      fr: "Une plateforme d'abonnement pour salle de sport avec un tableau de bord intuitif. Les utilisateurs peuvent gérer leurs abonnements, suivre leurs progrès et interagir avec Coach Max, un bot intelligent qui offre des conseils personnalisés et des programmes d'entraînement adaptés.",
      en: 'A gym membership platform with an intuitive dashboard. Users can manage their subscriptions, track their progress, and interact with Coach Max, an intelligent bot that provides personalized advice and tailored workout programs.',
    },
    image: '/images/projects/HeroCoach.jpg',
    href: 'https://coach-sportif.vercel.app/',
  },

  {
    id: 2,
    date: {
      fr: 'Mars, 2025',
      en: 'March, 2025',
    },
    category: {
      fr: 'Santé',
      en: 'Health',
    },
    title: 'DocBoard',
    description: {
      fr: "Une plateforme complète pour la prise de rendez-vous entre patients et médecins, dotée d'un tableau de bord intuitif. Gérez vos rendez-vous, consultez votre historique médical et restez connecté avec vos professionnels de santé sans effort.",
      en: 'A comprehensive platform for scheduling appointments between patients and doctors, featuring an intuitive dashboard. Manage your appointments, check your medical history, and stay connected with your healthcare professionals effortlessly.',
    },
    image: '/images/projects/DocBoard - Medical Dashboard.png',
    href: 'https://doc-board.vercel.app/',
  },

  {
    id: 3,
    date: {
      fr: 'Mars, 2025',
      en: 'March, 2025',
    },
    category: {
      fr: 'Apprentissage des Langues',
      en: 'Language Learning',
    },
    title: 'Mocou',
    description: {
      fr: 'Une plateforme ludique et interactive pour apprendre le coréen avec le personnage adorable Pochacco. Explorez les leçons, pratiquez des exercices et suivez votre progression alors que Pochacco vous guide dans votre apprentissage du coréen.',
      en: 'A fun and interactive platform for learning Korean with the adorable Pochacco character. Explore lessons, practice exercises, and track your progress as Pochacco guides you through your Korean learning journey.',
    },
    image:
      'https://res.cloudinary.com/nhatflux/image/upload/f_webp/cznrzf6wnnixp9vcvnen',
    href: 'https://mocou.vercel.app/',
  },

  {
    id: 4,
    date: {
      fr: 'Février, 2025',
      en: 'February, 2025',
    },
    category: {
      fr: "Découverte d'Anime",
      en: 'Anime Discovery',
    },
    title: 'Anima',
    description: {
      fr: "Anima est le hub ultime pour les amateurs d'anime ! Plongez dans un monde d'informations détaillées sur vos séries préférées, des bandes-annonces aux analyses des personnages, en passant par les doubleurs et les notes.",
      en: 'Anima is the ultimate hub for anime enthusiasts! Dive into a world of detailed information about your favorite series, from trailers to character analysis, voice actors, and ratings.',
    },
    image:
      'https://res.cloudinary.com/nhatflux/image/upload/f_webp/bkr8remsm7dgqrfwkfsf',
    href: 'https://anima-dusky.vercel.app/',
  },
  {
    id: 5,
    date: {
      fr: 'Février, 2025',
      en: 'February, 2025',
    },
    category: {
      fr: 'Blog',
      en: 'Blog',
    },
    title: 'NhatBlog',
    description: {
      fr: "Mon journal intime de développeur où je partage mes expériences, mes conseils et mes apprentissages dans le monde du développement web. Un espace personnel pour documenter mon parcours et aider d'autres développeurs dans leur transition.",
      en: 'My developer diary where I share my experiences, tips, and learnings in the world of web development. A personal space to document my journey and help other developers in their transition.',
    },
    image: '/images/projects/blog.webp',
    href: 'https://nhathnblog.vercel.app/',
  },
  {
    id: 6,
    date: {
      fr: 'Janvier, 2025',
      en: 'January, 2025',
    },
    category: {
      fr: 'Restaurant',
      en: 'Restaurant',
    },
    title: 'PedroPasta',
    description: {
      fr: 'Un restaurant italien authentique spécialisé dans les pâtes fraîches. Découvrez notre menu varié de pâtes artisanales, préparées avec des ingrédients de qualité et des recettes traditionnelles italiennes.',
      en: 'An authentic Italian restaurant specializing in fresh pasta. Discover our varied menu of handcrafted pasta, prepared with quality ingredients and traditional Italian recipes.',
    },
    image: '/images/projects/PedroPasta.jpg',
    href: 'https://pedropasta-nhat-quans-projects.vercel.app/',
  },
  {
    id: 7,
    date: {
      fr: 'Janvier, 2025',
      en: 'January, 2025',
    },
    category: {
      fr: 'Culinaire',
      en: 'Culinary',
    },
    title: 'Meals Finder',
    description: {
      fr: "Une application web intuitive pour découvrir et explorer des milliers de recettes. Recherchez par ingrédients, type de plat ou temps de préparation, et trouvez l'inspiration pour vos prochains repas.",
      en: 'An intuitive web application to discover and explore thousands of recipes. Search by ingredients, dish type, or preparation time, and find inspiration for your next meals.',
    },
    image: '/images/projects/Recipes.png',
    href: 'https://meals-finder-lake.vercel.app/',
  },
  {
    id: 8,
    date: {
      fr: 'Décembre, 2024',
      en: 'December, 2024',
    },
    category: {
      fr: 'E-commerce',
      en: 'E-commerce',
    },
    title: 'Coffea',
    description: {
      fr: "Une boutique en ligne spécialisée dans la vente de cafés de qualité. Découvrez notre sélection de grains de café, moulus ou en capsules, provenant des meilleures régions productrices. Une expérience d'achat simple et rapide pour tous les amateurs de café.",
      en: 'An online store specializing in the sale of quality coffees. Discover our selection of coffee beans, ground or in capsules, from the best producing regions. A simple and fast shopping experience for all coffee lovers.',
    },
    image: '/images/projects/coffea.png',
    href: 'https://coffee-shop-five-jet.vercel.app/',
  },
  {
    id: 9,
    date: {
      fr: 'Juillet, 2024',
      en: 'July, 2024',
    },
    category: {
      fr: 'Mode',
      en: 'Fashion',
    },
    title: 'Wakaranai',
    description: {
      fr: "Une boutique en ligne de vêtements tendance et de qualité. Découvrez notre collection de vêtements streetwear et fashion, alliant style japonais et tendances contemporaines. Une expérience d'achat simple pour tous les passionnés de mode.",
      en: 'An online shop for trendy and quality clothing. Discover our collection of streetwear and fashion clothing, combining Japanese style and contemporary trends. A simple shopping experience for all fashion enthusiasts.',
    },
    image: '/images/projects/wakaranai.png',
    href: 'https://wakaranai-alpha.vercel.app/',
  },
  {
    id: 10,
    date: {
      fr: 'Juillet, 2024',
      en: 'July, 2024',
    },
    category: {
      fr: 'Portfolio',
      en: 'Portfolio',
    },
    title: 'Portfoliov2',
    description: {
      fr: 'Mon premier portfolio développé avec React, présentant mes projets et compétences. Une interface moderne et responsive qui met en valeur mon travail de développeur web.',
      en: 'My first portfolio developed with React, showcasing my projects and skills. A modern and responsive interface that highlights my work as a web developer.',
    },
    image: '/images/projects/Nhatv2.jpg',
    href: 'https://portfolio-v2-mu-neon.vercel.app/',
  },
  {
    id: 11,
    date: {
      fr: 'Juin, 2024',
      en: 'June, 2024',
    },
    category: {
      fr: 'Restaurant',
      en: 'Restaurant',
    },
    title: 'Barameyv3',
    description: {
      fr: "Un site web élégant pour un restaurant moderne. Présente le menu, les spécialités et l'ambiance du restaurant avec une interface utilisateur intuitive et attrayante. Une expérience en ligne qui reflète la qualité du service en salle.",
      en: 'An elegant website for a modern restaurant. Features the menu, specialties, and ambiance of the restaurant with an intuitive and attractive user interface. An online experience that reflects the quality of the in-room service.',
    },
    image: '/images/projects/baramey.jpg',
    href: 'https://barameyv3.vercel.app/',
  },
  {
    id: 12,
    date: {
      fr: 'Avril, 2024',
      en: 'April, 2024',
    },
    category: {
      fr: 'Restaurant',
      en: 'Restaurant',
    },
    title: 'Sushi-SenSation',
    description: {
      fr: 'Un restaurant japonais spécialisé dans les sushis et la cuisine nippone. Découvrez notre sélection de sushis frais, maki et plats traditionnels, préparés avec des ingrédients de première qualité. Une expérience culinaire authentique qui vous transporte au Japon.',
      en: 'A Japanese restaurant specializing in sushi and Japanese cuisine. Discover our selection of fresh sushi, maki, and traditional dishes, prepared with premium ingredients. An authentic culinary experience that transports you to Japan.',
    },
    image: '/images/projects/sushi.png',
    href: 'https://sushi-sensation.vercel.app/',
  },
  {
    id: 13,
    date: {
      fr: 'Avril, 2024',
      en: 'April, 2024',
    },
    category: {
      fr: 'Portfolio',
      en: 'Portfolio',
    },
    title: 'Nhatflix',
    description: {
      fr: 'Un CV interactif et dynamique présentant mon parcours de danseur. Découvrez mes performances, mes styles de danse et mon expérience à travers une interface moderne et immersive. Une présentation unique qui met en valeur mon art et ma passion pour la danse.',
      en: 'An interactive and dynamic CV showcasing my journey as a dancer. Discover my performances, dance styles, and experience through a modern and immersive interface. A unique presentation that highlights my art and passion for dance.',
    },
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
