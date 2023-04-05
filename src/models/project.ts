export interface ProjectI {
  id: number;
  title: string;
  images: string[];
  technologies: TechnologyI[];
  repository: string;
  video: string;
  url: string;
  salient: boolean;
  category: string;
  description_en: string;
  description_es: string;
}

interface TechnologyI {
  name: string;
  image: string;
  category: string;
}
