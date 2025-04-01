export type IconsItem = {
  key: number;
  src: string;
  alt: string;
};

export type Project = {
  id: number;
  date: {
    fr: string;
    en: string;
  };
  category: {
    fr: string;
    en: string;
  };
  title: string;
  description: {
    fr: string;
    en: string;
  };
  image: string;
  href: string;
};

export type NavigationItem = {
  name: string;
  href: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};
