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
      fr: 'Mai, 2025',
      en: 'May, 2025',
    },
    category: {
      fr: 'Gestion',
      en: 'Management',
    },
    title: 'TodoBase',
    description: {
      fr: "Une To-Do List personnelle conçue pour m'accompagner dans l'apprentissage de Java, Spring Boot et Angular. Ce projet m'a permis d'apprendre à utiliser ces technologies, d'organiser mes tâches d'étude et de suivre ma progression au fil des étapes.",
      en: 'A personal To-Do List designed to guide my learning of Java, Spring Boot and Angular. This project enabled me to learn how to use these technologies, organize my study tasks, and track my progress through each phase.',
    },
    image: '/images/projects/Todobase.jpg',
    href: 'https://todoappnhat.netlify.app',
    technologies: [
      'Java',
      'Spring Boot',
      'Angular',
      'TypeScript',
      'PostgreSQL',
      'Docker',
    ],
    learnings: {
      fr: "Ce projet m'a permis de découvrir l'écosystème Java et Spring Boot. J'ai appris à créer des APIs REST robustes, à gérer l'authentification JWT, et à structurer une application Angular avec des services et des guards. La gestion des états avec Angular et l'intégration avec une base de données PostgreSQL ont été des défis enrichissants.",
      en: 'This project allowed me to discover the Java and Spring Boot ecosystem. I learned to create robust REST APIs, manage JWT authentication, and structure an Angular application with services and guards. State management with Angular and integration with a PostgreSQL database were enriching challenges.',
    },
    motivation: {
      fr: "Voulant élargir mes compétences au-delà de React/Next.js, j'ai choisi de me lancer dans Java et Angular pour diversifier mon profil technique. Une todo-list était le projet parfait pour apprendre les bases : CRUD, authentification, et architecture MVC. C'était aussi un moyen d'organiser concrètement mon apprentissage !",
      en: 'Wanting to expand my skills beyond React/Next.js, I chose to dive into Java and Angular to diversify my technical profile. A todo-list was the perfect project to learn the basics: CRUD, authentication, and MVC architecture. It was also a way to concretely organize my learning!',
    },
    gallery: [
      '/images/projects/ToDoBase.png',
      '/images/projects/ToDoBase1.png',
      '/images/projects/ToDoBase2.png',
    ],
    video: '/videos/ToDoBaseVideo.mp4',
  },
  {
    id: 2,
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
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'PostgreSQL',
      'Stripe',
      'OpenAI API',
    ],
    learnings: {
      fr: "Ce projet m'a permis d'approfondir l'intégration de l'IA conversationnelle avec OpenAI, la gestion des paiements avec Stripe, et la création d'un système d'abonnement complet. J'ai aussi travaillé sur l'UX/UI pour rendre l'expérience utilisateur fluide et engageante.",
      en: 'This project allowed me to deepen conversational AI integration with OpenAI, payment management with Stripe, and creating a complete subscription system. I also worked on UX/UI to make the user experience smooth and engaging.',
    },
    motivation: {
      fr: "Passionné de sport, je voulais créer une plateforme qui combine technologie et fitness. L'idée d'un coach virtuel intelligent qui s'adapte aux besoins de chaque utilisateur m'a motivé à explorer l'IA conversationnelle et les systèmes d'abonnement.",
      en: "Passionate about sports, I wanted to create a platform that combines technology and fitness. The idea of an intelligent virtual coach that adapts to each user's needs motivated me to explore conversational AI and subscription systems.",
    },
  },

  {
    id: 3,
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
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'PostgreSQL',
      'NextAuth.js',
      'Twilio',
    ],
    learnings: {
      fr: "Ce projet m'a initié au développement d'applications sensibles avec gestion des données médicales. J'ai appris l'importance de la sécurité, de l'authentification robuste avec NextAuth.js, et l'intégration d'APIs de notification SMS avec Twilio pour les rappels de rendez-vous.",
      en: 'This project introduced me to developing sensitive applications with medical data management. I learned the importance of security, robust authentication with NextAuth.js, and SMS notification API integration with Twilio for appointment reminders.',
    },
    motivation: {
      fr: "Ayant vécu des difficultés pour prendre rendez-vous médicaux, je voulais créer une solution qui simplifie cette démarche. L'objectif était de créer un pont numérique entre patients et professionnels de santé, tout en respectant la confidentialité des données.",
      en: 'Having experienced difficulties making medical appointments, I wanted to create a solution that simplifies this process. The goal was to create a digital bridge between patients and healthcare professionals, while respecting data confidentiality.',
    },
  },

  {
    id: 4,
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
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Zustand',
      'Cloudinary',
    ],
    learnings: {
      fr: "Ce projet m'a permis d'explorer la gamification dans l'apprentissage et les animations avancées avec Framer Motion. J'ai appris à créer une expérience utilisateur engageante avec un système de progression, des badges, et une mascotte interactive qui guide l'utilisateur.",
      en: 'This project allowed me to explore gamification in learning and advanced animations with Framer Motion. I learned to create an engaging user experience with a progression system, badges, and an interactive mascot that guides the user.',
    },
    motivation: {
      fr: "Passionné par la culture coréenne et l'apprentissage des langues, je voulais créer une expérience d'apprentissage différente, plus ludique et moins intimidante. Pochacco apporte cette dimension kawaii qui rend l'apprentissage du coréen plus accessible et amusant.",
      en: 'Passionate about Korean culture and language learning, I wanted to create a different learning experience, more playful and less intimidating. Pochacco brings this kawaii dimension that makes learning Korean more accessible and fun.',
    },
  },

  {
    id: 5,
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
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Jikan API',
      'Framer Motion',
      'React Query',
    ],
    learnings: {
      fr: "Ce projet m'a appris à travailler avec des APIs externes complexes comme Jikan API (MyAnimeList). J'ai découvert React Query pour la gestion optimisée des données, le cache et la synchronisation. Les animations fluides avec Framer Motion ont aussi été un défi intéressant.",
      en: 'This project taught me to work with complex external APIs like Jikan API (MyAnimeList). I discovered React Query for optimized data management, caching and synchronization. Smooth animations with Framer Motion were also an interesting challenge.',
    },
    motivation: {
      fr: "Grand fan d'anime, je voulais créer une plateforme qui centralise toutes les informations sur mes séries préférées. L'objectif était de proposer une alternative moderne et élégante aux sites existants, avec une UX soignée et des données riches.",
      en: 'As a big anime fan, I wanted to create a platform that centralizes all information about my favorite series. The goal was to offer a modern and elegant alternative to existing sites, with polished UX and rich data.',
    },
  },
  {
    id: 6,
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
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'MDX',
      'Contentlayer',
      'Vercel',
    ],
    learnings: {
      fr: "Ce projet m'a initié au développement de blogs avec du contenu statique. J'ai appris à utiliser MDX pour écrire du contenu riche, Contentlayer pour la gestion des articles, et à optimiser le SEO. C'était aussi l'occasion de travailler sur le design et la typographie.",
      en: 'This project introduced me to blog development with static content. I learned to use MDX for rich content writing, Contentlayer for article management, and SEO optimization. It was also an opportunity to work on design and typography.',
    },
    motivation: {
      fr: "Voulant documenter mon parcours de reconversion, j'ai créé ce blog pour partager mes apprentissages et aider d'autres personnes dans la même situation. C'est devenu mon espace de réflexion et de partage avec la communauté dev.",
      en: 'Wanting to document my career transition journey, I created this blog to share my learnings and help others in the same situation. It became my space for reflection and sharing with the dev community.',
    },
  },
  {
    id: 7,
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
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'React Hook Form',
    ],
    learnings: {
      fr: "Ce projet m'a permis de travailler sur l'identité visuelle d'un restaurant et l'expérience utilisateur d'un site vitrine. J'ai appris à créer des animations subtiles qui mettent en valeur les plats, et à optimiser les formulaires de contact avec React Hook Form.",
      en: "This project allowed me to work on a restaurant's visual identity and the user experience of a showcase site. I learned to create subtle animations that highlight dishes, and to optimize contact forms with React Hook Form.",
    },
    motivation: {
      fr: "Passionné de cuisine italienne, je voulais créer un site qui transmette l'authenticité et la passion d'un vrai restaurant italien. L'objectif était de faire saliver les visiteurs et de leur donner envie de réserver une table !",
      en: 'Passionate about Italian cuisine, I wanted to create a site that conveys the authenticity and passion of a real Italian restaurant. The goal was to make visitors salivate and make them want to book a table!',
    },
  },
  {
    id: 8,
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
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'TheMealDB API',
      'React Query',
      'Zustand',
    ],
    learnings: {
      fr: "Ce projet m'a appris à créer une application de recherche complexe avec filtres multiples. J'ai découvert l'optimisation des performances avec React Query, la gestion des états de recherche, et comment créer une UX fluide pour la découverte de contenu.",
      en: 'This project taught me to create a complex search application with multiple filters. I discovered performance optimization with React Query, search state management, and how to create a smooth UX for content discovery.',
    },
    motivation: {
      fr: "Toujours en quête de nouvelles recettes pour varier mes repas, j'ai voulu créer une app qui facilite la découverte culinaire. L'idée était de proposer une alternative moderne aux sites de recettes traditionnels, avec une recherche intelligente.",
      en: 'Always looking for new recipes to vary my meals, I wanted to create an app that facilitates culinary discovery. The idea was to offer a modern alternative to traditional recipe sites, with intelligent search.',
    },
  },
  {
    id: 9,
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
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Zustand',
      'Stripe',
      'Framer Motion',
    ],
    learnings: {
      fr: "Mon premier vrai projet e-commerce ! J'ai appris à gérer un panier d'achat avec Zustand, intégrer les paiements Stripe, et créer une expérience d'achat fluide. La gestion des états globaux et les animations de transition ont été des défis enrichissants.",
      en: 'My first real e-commerce project! I learned to manage a shopping cart with Zustand, integrate Stripe payments, and create a smooth shopping experience. Global state management and transition animations were enriching challenges.',
    },
    motivation: {
      fr: "Grand amateur de café, je voulais créer une boutique en ligne qui reflète ma passion pour cette boisson. C'était l'occasion parfaite d'apprendre l'e-commerce et de travailler sur une interface élégante et fonctionnelle.",
      en: 'As a big coffee lover, I wanted to create an online store that reflects my passion for this beverage. It was the perfect opportunity to learn e-commerce and work on an elegant and functional interface.',
    },
  },
  {
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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
    src: 'https://angular.io/assets/images/logos/angular/angular.svg',
    alt: 'Angular',
  },
  {
    key: 2,
    src: 'https://www.vectorlogo.zone/logos/java/java-icon.svg',
    alt: 'Java',
  },
  {
    key: 3,
    src: 'https://www.vectorlogo.zone/logos/docker/docker-icon.svg',
    alt: 'Docker',
  },
  {
    key: 4,
    src: 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg',
    alt: 'Spring Boot',
  },
  {
    key: 5,
    src: 'https://www.postgresql.org/media/img/about/press/elephant.png',
    alt: 'PostgreSQL',
  },
  {
    key: 6,
    src: 'https://shadcnblocks.com/images/block/logos/typescript-icon.svg',
    alt: 'TypeScript',
  },
  {
    key: 7,
    src: '/images/NextJs.png',
    alt: 'Next.js',
  },
  {
    key: 8,
    src: 'https://shadcnblocks.com/images/block/logos/tailwind-icon.svg',
    alt: 'Tailwind CSS',
  },
  {
    key: 9,
    src: 'https://shadcnblocks.com/images/block/logos/github-icon.svg',
    alt: 'GitHub',
  },
  {
    key: 10,
    src: '/images/projects/zustand.svg',
    alt: 'Zustand',
  },
];
