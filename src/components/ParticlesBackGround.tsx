'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { Particles } from '@/components/ui/particles';

export default function ParticlesBackGround() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [color, setColor] = useState('#ffffff');

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      setColor(theme === 'dark' ? '#ffffff' : '#000000');
    }
  }, [theme, mounted]);

  if (!mounted) {
    return (
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <div className="absolute inset-0" />
      </div>
    );
  }

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
}
