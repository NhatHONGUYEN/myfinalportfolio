import { navigation } from '@/lib/data';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="  py-12 md:flex mx-auto container   md:items-center md:justify-between">
        <div className="flex justify-center gap-x-6 md:order-2">
          {navigation.map((item) => (
            <Link
              target="_blank"
              rel="noopener noreferrer"
              key={item.name}
              href={item.href}
              className=" hover:text-muted-foreground dark:hover:text-muted-foreground"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="size-6" />
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center text-sm/6  md:order-1 md:mt-0">
          © 2024 Nhat, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
