'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface BlurInProps {
  children: React.ReactNode; // Typage de children
}

export function BlurIn({ children }: BlurInProps) {
  const variants1 = {
    hidden: { filter: 'blur(10px)', opacity: 0 },
    visible: { filter: 'blur(0px)', opacity: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible" // Déclenche l'animation lorsque l'élément est visible
      viewport={{ once: true, amount: 0.1 }} // Options similaires à useInView
      transition={{ duration: 0.7, ease: 'easeInOut' }} // Durée fixe à 0.7
      variants={variants1}
      className={`text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem] `}
    >
      {children}
    </motion.div>
  );
}
