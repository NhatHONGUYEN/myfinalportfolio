const nextConfig = {
  /* config options here */
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
    ],
  },
};

export default nextConfig;
