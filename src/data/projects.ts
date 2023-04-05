import { Project } from '@/models';

export const dataProjects: Project[] = [
  {
    id: 1,
    title: 'TODO List',
    images: [
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1660177071/portfolio/t1_tb4lxj.png',
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1660177071/portfolio/t2_gjwm1r.png',
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1660177071/portfolio/t3_ogyosz.png',
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1660177071/portfolio/t4_npgdic.png'
    ],
    technologies: [
      {
        name: 'HTML',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659633663/portfolio/Icons/html_1_e9aolg.png',
        category: 'frontend'
      },
      {
        name: 'JavaScript',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659633533/portfolio/Icons/js_c7snhd.png',
        category: 'frontend'
      },
      {
        name: 'CSS',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659639470/portfolio/Icons/css-3_1_niqnca.png',
        category: 'frontend'
      }
    ],
    repository: 'https://github.com/YactayoC/ToDoList',
    video:
      'https://res.cloudinary.com/sebas-2001-yac/video/upload/v1660177229/portfolio/Videos/2022-08-10_19-19-45_s2ogcc.mp4',
    url: 'https://awesome-leavitt-29caf5.netlify.app/',
    salient: false,
    category: 'own',
    description_en:
      'Todo list is a project in which you can register a list of tasks which are stored in the LocalStorage and delete them as they are completed. The project was made in HTML, CSS and Vanilla Js; and deployed in netflify.',
    description_es:
      'Todo list es un proyecto en el que se puede registrar una lista de tareas que se almacenan en el LocalStorage y borrarlas a medida que se completan. El proyecto fue realizado en HTML, CSS y Vanilla Js; y desplegado en netflify.'
  },
  {
    id: 2,
    title: 'LyricMusicAPI',
    images: [
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1660176575/portfolio/l1_tlpgxd.png',
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1660176575/portfolio/l2_enlxdx.png',
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1660176575/portfolio/l3_hhqjd8.png',
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1660176574/portfolio/l4_mmohpt.png'
    ],
    technologies: [
      {
        name: 'HTML',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659633663/portfolio/Icons/html_1_e9aolg.png',
        category: 'frontend'
      },
      {
        name: 'JavaScript',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659633533/portfolio/Icons/js_c7snhd.png',
        category: 'frontend'
      },
      {
        name: 'SASS',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659633755/portfolio/Icons/Sass_b4trxh.png',
        category: 'frontend'
      }
    ],
    repository: 'https://github.com/YactayoC/LyricMusic_API',
    video:
      'https://res.cloudinary.com/sebas-2001-yac/video/upload/v1660176914/portfolio/Videos/2022-08-10_19-14-28_icx6lp.mp4',
    url: 'https://lyrics-music.netlify.app/',
    salient: false,
    category: 'external',
    description_en:
      'LyricMusic is a project which searches the lyrics of the songs and collects them by using an external API, just put the name in a form and search for them to show you the lyrics. The project was made with HTML, CSS and Vanilla Js and deployed in netlify.',
    description_es:
      'LyricMusic es un proyecto que busca las letras de las canciones y las recopila usando una API externa, solo tienes que poner el nombre en un formulario y buscarlas para que te muestre la letra. El proyecto fue hecho con HTML, CSS y Vanilla Js y desplegado en netlify.'
  },
  {
    id: 3,
    title: 'PokedexAPI',
    images: [
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659745710/portfolio/Screenshot_3_f3v4uy.png',
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1660176012/portfolio/p2_qibpp2.png',
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1660175689/portfolio/p3_uucmnt.png',
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1660175663/portfolio/p4_bcfzss.png'
    ],
    technologies: [
      {
        name: 'HTML',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659633663/portfolio/Icons/html_1_e9aolg.png',
        category: 'frontend'
      },
      {
        name: 'JavaScript',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659633533/portfolio/Icons/js_c7snhd.png',
        category: 'frontend'
      },
      {
        name: 'SASS',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659633755/portfolio/Icons/Sass_b4trxh.png',
        category: 'frontend'
      }
    ],
    repository: 'https://github.com/YactayoC/Pokedex_API',
    video:
      'https://res.cloudinary.com/sebas-2001-yac/video/upload/v1659745673/portfolio/Videos/2022-08-05_19-24-42_ga3xmx.mp4',
    url: 'https://curious-beijinho-ac8e5d.netlify.app/',
    salient: true,
    category: 'external',
    description_en:
      'Pokedex is a project which collects pokemon through an external API, in this case in the main page it generates pokemon randomly and also has a page to search for pokemon. ',
    description_es:
      'Pokedex es un proyecto que recopila pokemon a través de una API externa, en este caso en la página principal genera pokemon aleatoriamente y también tiene una página para buscar pokemon. '
  },
  {
    id: 4,
    title: 'GiphyAPI',
    images: [
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1660176050/portfolio/Screenshot_2_r2gexj.png',
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659838800/portfolio/g2_rokhwz.png',
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1660176119/portfolio/g3_j1m9u3.png',
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1660175599/portfolio/g4_qbccff.png'
    ],
    technologies: [
      {
        name: 'JavaScript',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659633533/portfolio/Icons/js_c7snhd.png',
        category: 'frontend'
      },
      {
        name: 'React',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659633302/portfolio/Icons/React_uugozc.png',
        category: 'frontend'
      },
      {
        name: 'Jotai',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1660185445/portfolio/Icons/jotai_zfwldc.png',
        category: 'frontend'
      },
      {
        name: 'SASS',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659633755/portfolio/Icons/Sass_b4trxh.png',
        category: 'frontend'
      }
    ],
    repository: 'https://github.com/YactayoC/GIPHY-API',
    video:
      'https://res.cloudinary.com/sebas-2001-yac/video/upload/v1659745673/portfolio/Videos/2022-08-05_19-24-00_hoevx4.mp4',
    url: 'https://giphy-api-one.vercel.app/',
    salient: true,
    category: 'external',
    description_en:
      'GiphyAPI is a project that uses an external API like Giphys in which requests are made to get alteatory gifs as well as searchable gifs. In addition to having a filter by categories.',
    description_es:
      'GiphyAPI es un proyecto que utiliza una API externa como la de Giphy en la que se realizan peticiones para obtener gifs alteatorios así como gifs buscables. Además de tener un filtro por categorías.'
  },
  {
    id: 5,
    title: 'ReMovies',
    images: [
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659745714/portfolio/Screenshot_1_mqyo68.png',
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659838313/portfolio/r2_dkovtm.png',
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659838312/portfolio/r3_qvrbmv.png',
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659838314/portfolio/r4_kiinsx.png'
    ],
    technologies: [
      {
        name: 'TypeScript',
        image:
          'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1662226893/portfolio/Icons/typescript_hvpgz0.png',
        category: 'frontend'
      },
      {
        name: 'JavaScript',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659633533/portfolio/Icons/js_c7snhd.png',
        category: 'frontend'
      },
      {
        name: 'NextJS',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659633543/portfolio/Icons/nextjs_bwcap8.png',
        category: 'frontend'
      },
      {
        name: 'React',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659633302/portfolio/Icons/React_uugozc.png',
        category: 'frontend'
      },
      {
        name: 'Redux',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1660184946/portfolio/Icons/redux_reawoa.png',
        category: 'frontend'
      },
      {
        name: 'Styled Components',
        image:
          'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1660697248/portfolio/Icons/styled-components_q4zash.png',
        category: 'frontend'
      }
    ],
    repository: 'https://github.com/YactayoC/ReMovies',
    video:
      'https://res.cloudinary.com/sebas-2001-yac/video/upload/v1659745684/portfolio/Videos/2022-08-05_19-25-36_kotuh4.mp4',
    url: 'https://re-movies.vercel.app/',
    salient: true,
    category: 'external',
    description_en:
      'Removies is a project in which the TMDB API was used to bring information from movies. In this project I used nextjs, css for the layouts and I also tested my learning in redux toolkit to handle the movie information.',
    description_es:
      'Removies es un proyecto en el que se utilizó la API TMDB para traer información de películas. En este proyecto utilicé nextjs, css para los layouts y también probé mi aprendizaje en redux toolkit para manejar la información de las películas.'
  },
  {
    id: 6,
    title: 'Veterinary LF',
    images: [
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1660176089/portfolio/v1_eqtbcn.png',
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659836894/portfolio/v2_xpvgg8.png',
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659836894/portfolio/v3_qryxrp.png',
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659836894/portfolio/v4_ilndfu.png'
    ],
    technologies: [
      {
        name: 'JavaScript',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659633533/portfolio/Icons/js_c7snhd.png',
        category: 'frontend'
      },
      {
        name: 'React',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659633302/portfolio/Icons/React_uugozc.png',
        category: 'frontend'
      },
      {
        name: 'Redux',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1660184946/portfolio/Icons/redux_reawoa.png',
        category: 'frontend'
      },
      {
        name: 'SASS',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659633755/portfolio/Icons/Sass_b4trxh.png',
        category: 'frontend'
      },
      {
        name: 'Express',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659640786/portfolio/Icons/Express_afb7ac.png',
        category: 'backend'
      },
      {
        name: 'NodeJS',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659633340/portfolio/Icons/node_hasxir.png',
        category: 'backend'
      },
      {
        name: 'MongoDB',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659640591/portfolio/Icons/mongodb_xxaho9.png',
        category: 'database'
      }
    ],
    repository: 'https://github.com/YactayoC/VETERINARY-LF_frontend',
    video:
      'https://res.cloudinary.com/sebas-2001-yac/video/upload/v1659745128/portfolio/Videos/2022-08-05_19-17-45_wbimno.mp4',
    url: 'https://veterinary-loyal-friend.netlify.app',
    salient: true,
    category: 'own',
    description_en:
      'Veterinary LF is a project done in react, which consists of making appointments, add testimonials and has a contact form. In addition it also has an administrator interface to see the above mentioned. To perform the mentioned actions an account must be created which must be confirmed in the mail. JWT was used for user authentication and deployed in netlify.',
    description_es:
      'Veterinary LF es un proyecto hecho en react, el cual consiste en hacer citas, agregar testimonios y tiene un formulario de contacto. Además también cuenta con una interfaz de administrador para ver lo mencionado anteriormente. Para realizar las acciones mencionadas se debe crear una cuenta la cual debe ser confirmada en el correo. Se utilizó JWT para la autenticación de usuarios y se desplegó en netlify.'
  },
  {
    id: 7,
    title: 'Account Manager',
    images: [
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1663594257/portfolio/m1_svksqt.png',
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1663594256/portfolio/m2_nguwiz.png',
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1663594256/portfolio/m3_rlu5ne.png',
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1663594256/portfolio/m4_cjosms.png'
    ],
    technologies: [
      {
        name: 'TypeScript',
        image:
          'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1662226893/portfolio/Icons/typescript_hvpgz0.png',
        category: 'frontend'
      },
      {
        name: 'JavaScript',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659633533/portfolio/Icons/js_c7snhd.png',
        category: 'frontend'
      },
      {
        name: 'React',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659633302/portfolio/Icons/React_uugozc.png',
        category: 'frontend'
      },
      {
        name: 'Jotai',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1660185445/portfolio/Icons/jotai_zfwldc.png',
        category: 'frontend'
      },
      {
        name: 'TailwindCSS',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1664292359/portfolio/Icons/tailwind_fuihra.png',
        category: 'frontend'
      },
      {
        name: 'FastAPI',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659641350/portfolio/Icons/fastAPI_if2s09.png',
        category: 'backend'
      },
      {
        name: 'MySQL',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659640450/portfolio/Icons/mysql_qtcblp.png',
        category: 'database'
      }
    ],
    repository: 'https://github.com/YactayoC/Account-Manager_frontend',
    video:
      'https://res.cloudinary.com/sebas-2001-yac/video/upload/v1663596494/portfolio/Videos/2022-09-19_09-07-15_obwspi.mp4',
    url: 'https://account-manager-frontend.vercel.app/',
    salient: true,
    category: 'own',
    description_en:
      'Account manager is a project in which the user will be able to manage/store his accounts. On the other hand it has a user authentication with JWT, in addition to check the mail by an email sent. This project was worked with python (FastAPI) on the backend and React was used as frontend.',
    description_es:
      'Account manager es un proyecto en el que el usuario podrá gestionar/almacenar sus cuentas. Por otro lado tiene una autenticación de usuario con JWT, además de consultar el correo mediante un email enviado. Este proyecto se trabajó con python (FastAPI) en el backend y se utilizó React como frontend.'
  },
  {
    id: 8,
    title: 'Nova Shop',
    images: [
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659839035/portfolio/n1_rh2hmu.png',
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1660175495/portfolio/n2_yuujil.png',
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1660175540/portfolio/n3_wv59km.png',
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659839036/portfolio/n4_cuqsur.png'
    ],
    technologies: [
      {
        name: 'HTML',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659633663/portfolio/Icons/html_1_e9aolg.png',
        category: 'frontend'
      },
      {
        name: 'JavaScript',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659633533/portfolio/Icons/js_c7snhd.png',
        category: 'frontend'
      },
      {
        name: 'CSS',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659639470/portfolio/Icons/css-3_1_niqnca.png',
        category: 'frontend'
      },
      {
        name: 'Express',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659640786/portfolio/Icons/Express_afb7ac.png',
        category: 'backend'
      },
      {
        name: 'NodeJS',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659633340/portfolio/Icons/node_hasxir.png',
        category: 'backend'
      },
      {
        name: 'MongoDB',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659640591/portfolio/Icons/mongodb_xxaho9.png',
        category: 'database'
      }
    ],
    repository: 'https://github.com/YactayoC/NOVA_SHOP_frontend',
    video:
      'https://res.cloudinary.com/sebas-2001-yac/video/upload/v1659745180/portfolio/Videos/2022-08-05_19-18-55_vdilmb.mp4',
    url: 'https://stirring-tapioca-d9b9da.netlify.app/',
    salient: false,
    category: 'own',
    description_en:
      'Nova Shop is a small project for the simulation of an ecommerce. For this project we\nused JWT for user authentication and nodemailer for sending email for account\nconfirmation, finally all data is stored in a mongoDB. This project was deployed in\nnetlify.',
    description_es:
      'Nova Shop es un pequeño proyecto para la simulación de un ecommerce. Para este proyecto hemos JWT para la autenticación de usuario y nodemailer para el envío de correo electrónico para la cuenta\nfinalmente todos los datos se almacenan en un mongoDB. Este proyecto fue desplegado en\nnetlify.'
  },
  {
    id: 9,
    title: 'Finding Pets',
    images: [
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659838542/portfolio/f1_tmngwx.png',
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659838542/portfolio/f2_ulhixn.png',
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659838542/portfolio/f3_wnlmjd.png',
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659838542/portfolio/f4_lsqb6s.png'
    ],
    technologies: [
      {
        name: 'TypeScript',
        image:
          'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1662226893/portfolio/Icons/typescript_hvpgz0.png',
        category: 'frontend'
      },
      {
        name: 'JavaScript',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659633533/portfolio/Icons/js_c7snhd.png',
        category: 'frontend'
      },
      {
        name: 'NextJS',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659633543/portfolio/Icons/nextjs_bwcap8.png',
        category: 'frontend'
      },
      {
        name: 'React',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659633302/portfolio/Icons/React_uugozc.png',
        category: 'frontend'
      },
      {
        name: 'Redux',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1660184946/portfolio/Icons/redux_reawoa.png',
        category: 'frontend'
      },
      {
        name: 'CSS',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659639470/portfolio/Icons/css-3_1_niqnca.png',
        category: 'frontend'
      },
      {
        name: 'MongoDB',
        image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659640591/portfolio/Icons/mongodb_xxaho9.png',
        category: 'database'
      }
    ],
    repository: 'https://github.com/YactayoC/Finding-Pets',
    video:
      'https://res.cloudinary.com/sebas-2001-yac/video/upload/v1659745028/portfolio/Videos/2022-08-05_19-16-00_iwz9b3.mp4',
    url: 'https://finding-pets.vercel.app/',
    salient: true,
    category: 'own',
    description_en:
      'Finding Pets is a small social network project made in nextJS, with the purpose of finding lost pets through publications, besides being able to comment on publications and customize your profile. Jotai was used for status management, and JWT was used for user authentication.',
    description_es:
      'Finding Pets es un pequeño proyecto de red social realizado en nextJS, con el objetivo de encontrar mascotas perdidas a través de publicaciones, además de poder comentar las publicaciones y personalizar tu perfil. Se utilizó Jotai para la gestión de estados y JWT para la autenticación de usuarios.'
  }
];
