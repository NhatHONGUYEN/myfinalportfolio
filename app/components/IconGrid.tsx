import Image from 'next/image';

interface DataItem {
  key: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const DATA: DataItem[] = [
  {
    key: 1,
    src: 'https://shadcnblocks.com/images/block/logos/github-icon.svg',
    alt: 'GitHub',
    width: 64,
    height: 64,
  },
  {
    key: 2,
    src: 'https://shadcnblocks.com/images/block/logos/tailwind-icon.svg',
    alt: 'Tailwind CSS',
    width: 64,
    height: 64,
  },
  {
    key: 3,
    src: 'https://shadcnblocks.com/images/block/logos/nextjs-icon.svg',
    alt: 'Next.js',
    width: 64,
    height: 64,
  },
  {
    key: 4,
    src: 'https://shadcnblocks.com/images/block/logos/typescript-icon.svg',
    alt: 'TypeScript',
    width: 64,
    height: 64,
  },
  {
    key: 5,
    src: '/images/motion.png',
    alt: 'Framer Motion',
    width: 64,
    height: 64,
  },
  {
    key: 6,
    src: 'https://tanstack.com/favicon.ico', // TanStack Query
    alt: 'TanStack Query',
    width: 64,
    height: 64,
  },
  {
    key: 7,
    src: '/images/prisma.png',
    alt: 'Prisma',
    width: 64,
    height: 64,
  },
  {
    key: 8,
    src: 'https://www.postgresql.org/media/img/about/press/elephant.png', // PostgreSQL
    alt: 'PostgreSQL',
    width: 64,
    height: 64,
  },
  {
    key: 9,
    src: 'https://authjs.dev/img/logo-sm.png', // Auth.js
    alt: 'Auth.js',
    width: 64,
    height: 64,
  },
  {
    key: 10,
    src: '/images/zustand.png',
    alt: 'Zustand',
    width: 96,
    height: 96,
  },
];

export default function IconGrid() {
  return (
    <section className="py-32">
      <div className="container">
        {/* Heading Section */}
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h4 className="text-3xl font-medium lg:text-4xl">This is my stack</h4>
          <p className="text-xl text-muted-foreground lg:-mt-1">
            From next-gen startups to established enterprises
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-20">
          {DATA.map((logo) => (
            <div key={logo.key} className="p-4 flex justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain transition-opacity hover:opacity-70"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
