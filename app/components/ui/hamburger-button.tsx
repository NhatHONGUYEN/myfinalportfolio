'use client';

import { Button } from '@/components/ui/button';

type HamburgerButtonProps = {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
};

export function HamburgerButton({
  isOpen,
  onClick,
  className,
}: HamburgerButtonProps) {
  return (
    <Button
      className={`relative flex size-8 text-muted-foreground ${className}`}
      onClick={onClick}
    >
      <span className="sr-only">Open main menu</span>
      <div className="absolute top-1/2 left-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
        <span
          aria-hidden="true"
          className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${
            isOpen ? 'rotate-45' : '-translate-y-1.5'
          }`}
        />
        <span
          aria-hidden="true"
          className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          aria-hidden="true"
          className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${
            isOpen ? '-rotate-45' : 'translate-y-1.5'
          }`}
        />
      </div>
    </Button>
  );
}
