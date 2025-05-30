'use client';

import React from 'react';
import Link from 'next/link';
import { Button, ButtonProps } from '@/components/ui/button';

interface ButtonLinkProps extends Omit<ButtonProps, 'onClick'> {
  href: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

export function ButtonLink({
  href,
  target,
  rel,
  className,
  children,
  variant,
  size,
  disabled,
  ...props
}: ButtonLinkProps) {
  return (
    <Link href={href} target={target} rel={rel}>
      <Button
        className={className}
        variant={variant}
        size={size}
        disabled={disabled}
        {...props}
      >
        {children}
      </Button>
    </Link>
  );
}
