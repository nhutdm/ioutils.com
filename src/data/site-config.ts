export type Image = {
  src: string;
  alt?: string;
  caption?: string;
};

export type SiteConfig = {
  title: string;
  description: string;
  author: string;
  twitter: string;
  image?: Image;
};

const siteConfig: SiteConfig = {
  title: "IOUtils",
  description:
    "IOUtils is a free, open-source collection of handy online tools for developers and IT professionals, offering great UX to simplify your daily tasks.",
  author: "Nhut Duong",
  twitter: "@nhutdm",
  image: {
    src: "/og.png",
    alt: "IOUtils - Swiss Army knife for developers",
  },
};

export default siteConfig;
