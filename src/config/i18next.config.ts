import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          'nav-about-me': 'About me',
          'nav-skills': 'Skills',
          'nav-projects': 'Projects',
          'nav-contact': 'Contact',
          'home-cv': 'Download CV',
          'home-frase': 'To learn is to grow, and to grow is to become a better version of oneself',
          'home-dev': 'Web Developer',
          'home-about': 'About Me',
          'home-about-text-1': 'Full Stack Developer with experience in challenging and exciting projects.',
          'home-about-text-2':
            'Committed to my work and eager to learn, I am oriented to grow professionally in a company that always seeks excellence.',
          'home-about-text-3': 'I am interested in applying good programming practices to develop quality solutions.',
          'home-skills': 'My Skills',
          'home-skills-database': 'Database',
          'home-skills-others': 'Others',
          'home-projects': 'My Projects',
          'home-projects-all': 'View all projects',
          'home-contact': 'Contact Me',
          'home-contact-input-name': 'Fullname',
          'home-contact-input-email': 'Email',
          'home-contact-input-message': 'Message',
          'home-contact-send': 'Send email',
          projects: 'My Projects',
          'projects-all': 'All my projects',
          'projects-external': 'External APIS',
          'projects-own': 'Own APIS',
          'project-button-website': 'View Website',
          'project-button-code': 'View Code',
          'project-about': 'About this project',
          'project-technologies': 'Technologies',
          'project-head': 'Project',
          'projects-head': 'Projects',
        },
      },
      es: {
        translation: {
          'nav-about-me': 'Sobre mi',
          'nav-skills': 'Habilidades',
          'nav-projects': 'Proyectos',
          'nav-contact': 'Contacto',
          'home-cv': 'Descargar CV',
          'home-frase': 'Aprender es crecer, y crecer es convertirse en una mejor versión de uno mismo',
          'home-dev': 'Desarrollador Web',
          'home-about': 'Sobre mi',
          'home-about-text-1': 'Desarrollador Full Stack con experiencia en proyectos desafiantes y emocionantes.',
          'home-about-text-2':
            'Comprometido con mi trabajo y con ganas de aprender, estoy orientado a crecer profesionalmente en una empresa que siempre busca la excelencia.',
          'home-about-text-3':
            'Me interesa aplicar buenas prácticas de programación para desarrollar soluciones de calidad.',
          'home-skills': 'Mis Habilidades',
          'home-skills-database': 'Base de Datos',
          'home-skills-others': 'Otros',
          'home-projects': 'Mis Proyectos',
          'home-projects-all': 'Ver todos los proyectos',
          'home-contact': 'Contactame',
          'home-contact-input-name': 'Nombre completo',
          'home-contact-input-email': 'Correo',
          'home-contact-input-message': 'Mensaje',
          'home-contact-send': 'Enviar correo',
          projects: 'Mis Proyectos',
          'projects-all': 'Todos mis proyectos',
          'projects-external': 'APIS Externas',
          'projects-own': 'APIS Propias',
          'project-button-website': 'Ver Sitio Web',
          'project-button-code': 'Ver Código',
          'project-about': 'Sobre este proyecto',
          'project-technologies': 'Tecnologías',
          'project-head': 'Proyecto',
          'projects-head': 'Proyectos',
        },
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
