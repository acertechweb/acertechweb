export type Project = {
  slug: string;
  locale: "tr" | "en";
  title: string;
  sector: string;
  location: string;
  date: string;
  summary: string;
  services: string[];
  image: string;
  imageAlt: string;
  featured: boolean;
};

export const projects: Project[] = [];
