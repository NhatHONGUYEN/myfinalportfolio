import Link from "next/link";
import React from "react";

interface navItems {
  name: string;
  link: string;
}

export default function Header() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },

    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div
      className={`flex max-w-fit fixed top-10 inset-x-0 mx-auto border rounded-full bg-white dark:bg-black shadow z-[5000] px-8 py-2 items-center justify-center space-x-4 `}
    >
      {navItems.map((navItem: navItems, idx: number) => (
        <Link
          key={idx}
          href={navItem.link}
          className="relative flex items-center space-x-1 text-neutral-600 dark:text-neutral-50 hover:text-neutral-500 dark:hover:text-neutral-300"
        >
          <span className="text-sm">{navItem.name}</span>
        </Link>
      ))}
    </div>
  );
}
