import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center container-section mt-52 md:mt-36 gap-y-16" id="about">
      <h2 className="text-6xl font-bold text-gradient-2">{t('home-about')}</h2>
      <div className="flex flex-col items-center grid-rows-2 m-auto gap-y-8 lg:grid lg:grid-cols-2 lg:grid-rows-none gap-x-16 justify-items-center lg:w-[80%]">
        <Image
          className="sm:w-[85%] sm:h-[85%] sm:block hidden"
          src="/assets/images/about.svg"
          width={400}
          height={400}
          alt="about"
        />

        <div className="text-xl font-medium leading-8 text-gray-50 sm:w-[70%]">
          <p style={{ textAlign: 'justify' }}>{t('home-about-text-1')}</p>
          <br />
          <p style={{ textAlign: 'justify' }}>{t('home-about-text-2')}</p>
          <br />
          <p style={{ textAlign: 'justify' }}>{t('home-about-text-3')}</p>
        </div>
        <div></div>
      </div>
    </section>
  );
}
