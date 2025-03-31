'use client';

import { useTheme } from 'next-themes';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function ThemeAvatar() {
  const { theme } = useTheme();

  const profileImageSrc =
    theme === 'light'
      ? '/images/projects/photo-profil.webp'
      : '/images/projects/Nhatdark.jpg';

  return (
    <Avatar className="w-52 h-52">
      <AvatarImage
        src={profileImageSrc}
        fetchPriority="high"
        className="object-cover"
        alt="photo profil"
        loading="eager"
        width={208}
        height={208}
      />
      <AvatarFallback>NH</AvatarFallback>
    </Avatar>
  );
}
