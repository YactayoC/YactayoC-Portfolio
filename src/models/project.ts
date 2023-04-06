export interface Project {
  id: number;
  title: string;
  images: string[];
  technologies: Technology[];
  repository: string;
  video: string;
  url: string;
  salient: boolean;
  category: string;
  description_en: string;
  description_es: string;
}

interface Technology {
  name: string;
  image: string;
  category: string;
}
