const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // Domaine autorisé
        port: '', // Facultatif (laisser vide pour le port par défaut)
        pathname: '/**', // Autoriser toutes les images à partir de ce domaine
      },
    ],
  },
};

export default nextConfig;
