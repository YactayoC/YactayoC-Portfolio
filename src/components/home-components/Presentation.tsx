import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div
      className="grid items-center w-full grid-cols-1 gap-8 mt-32 md:mt-48 lg:grid gap-y-12 lg:grid-cols-2 lg:gap-y-0 justify-items-center"
      id="presentation"
    >
      <div className="flex flex-col items-start pl-4 text-gray-50 gap-y-12">
        <div>
          <h1 className="text-4xl font-black sm:text-5xl md:text-6xl">Sebastian Yactayo</h1>
          <h3 className="text-3xl font-bold duration-300 sm:text-4xl text-blue-shadow w-fit md:text-4xl text-gradient-1">
            <Typewriter
              // words={['Frontend Developer', 'Backend Developer']}
              words={[`${t('home-dev')}`]}
              loop
              cursor
              cursorColor="#305db7"
              typeSpeed={125}
            />
          </h3>
        </div>
        <p className="text-xl lg:w-[30rem] leading-8 italic font-medium">&ldquo;{t('home-frase')}&ldquo;</p>
        <Link
          // href={langLocale === 'es' ? 'CV-ES.pdf' : 'CV-EN.pdf'}
          href={'Sebastian_Yactayo-Desarrollador_Frontend.pdf'}
          download={true}
          className="button-custom"
          target="_blank"
        >
          {t('home-cv')}
        </Link>
      </div>
      <div className="relative">
        <Image
          priority
          alt="profile"
          src="https://res.cloudinary.com/sebas-2001-yac/image/upload/v1680455160/profile_kakqcs.png"
          width={330}
          height={405}
          className="w-[330px] h-[405px]"
        />
        <Link
          href="https://www.linkedin.com/in/sebastianyactayocrisostomo"
          target="_blank"
          className="absolute left-36 -bottom-16 lg:top-0 lg:left-auto lg:bottom-auto lg:-right-16 animate-pulse"
        >
          <Image alt="Linkedin" src="/assets/icons/linkedin.svg" width={50} height={50} />
        </Link>
        <Link
          href="https://twitter.com/yactayo_aron"
          target="_blank"
          className="absolute right-0 -bottom-16 lg:bottom-0 lg:-right-16 animate-pulse"
        >
          <Image alt="Twitter" src="/assets/icons/twitter.svg" width={50} height={50} />
        </Link>
        <Link
          href="https://github.com/YactayoC"
          target="_blank"
          className="absolute left-0 m-auto lg:flex lg:bottom-0 lg:items-center -bottom-16 lg:top-0 lg:h-fit lg:-left-16 animate-pulse"
        >
          <Image alt="Github" src="/assets/icons/github.svg" width={50} height={50} />
        </Link>
      </div>
    </div>
  );
}
