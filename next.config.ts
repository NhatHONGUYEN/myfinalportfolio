import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // Domaine autorisé
      },
      {
        protocol: 'https',
        hostname: 'tanstack.com', // Domaine autorisé
      },
      {
        protocol: 'https',
        hostname: 'www.prisma.io', // Domaine autorisé
      },
      {
        protocol: 'https',
        hostname: 'www.postgresql.org', // Domaine autorisé
      },
      {
        protocol: 'https',
        hostname: 'authjs.dev', // Domaine autorisé
      },
      {
        protocol: 'https',
        hostname: 'seeklogo.com', // Domaine autorisé
      },
      {
        protocol: 'https',
        hostname: 'worldvectorlogo.com', // Domaine autorisé
      },
      {
        protocol: 'https',
        hostname: 'myfinalportfolio-five.vercel.app', // Domaine autorisé
      },
    ],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
