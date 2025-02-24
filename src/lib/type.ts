export type IconsItem = {
  key: number;
  src: string;
  alt: string;
};

export type Project = {
  id: number;
  date: string;
  category: string;
  title: string;
  description: string;
  image: string;
  href: string;
};

export type NavigationItem = {
  name: string;
  href: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};
