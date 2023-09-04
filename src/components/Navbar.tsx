import Image from 'next/image';
import Link from 'next/link';
import i18n from '@/config/i18next.config';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function Navbar() {
  const [linkHover, setLinkHover] = useState('Contact');
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const { t } = useTranslation();
  const currentLanguage = i18n.language;

  const onClickLink = (e: any) => {
    setLinkHover(e.target.textContent);
  };

  const onClickHamburguer = () => {
    setShowMenuMobile(!showMenuMobile);
  };

  const onClickLinkMobile = (e: any) => {
    setLinkHover(e.target.textContent);
    setShowMenuMobile(false);
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="fixed top-0 z-50 flex flex-row items-center w-full px-16 py-8 backdrop-blur-lg bg-slate-400/5">
      <Link
        href="#presentation"
        className="absolute w-16 h-16 cursor-none sm:cursor-pointer left-4 md:left-auto md:h-20 md:w-20"
      >
        <Image src="/assets/logo.png" alt="logo" width={80} height={80} />
      </Link>

      {/* Desktop */}
      <div className="hidden gap-4 md:flex md:flex-row md:m-auto">
        <Link
          className={`nav-link ${linkHover === 'About me' && 'nav-link-active'}`}
          onClick={onClickLink}
          href="#about"
        >
          {t('nav-about-me')}
        </Link>
        <Link
          className={`nav-link ${linkHover === 'Skills' && 'nav-link-active'}`}
          onClick={onClickLink}
          href="#skills"
        >
          {t('nav-skills')}
        </Link>
        <Link
          className={`nav-link ${linkHover === 'Projects' && 'nav-link-active'}`}
          onClick={onClickLink}
          href="#projects"
        >
          {t('nav-projects')}
        </Link>
        <Link
          className={`nav-link ${linkHover === 'Contact' && 'nav-link-active'}`}
          onClick={onClickLink}
          href="#contact"
        >
          {t('nav-contact')}
        </Link>
        <div className="flex ml-8 gap-x-4">
          <Image
            className={`border-2 border-white rounded-full cursor-pointer transition-all duration-300 ${
              currentLanguage === 'en' && 'opacity-50'
            }`}
            onClick={() => changeLanguage('es')}
            src="/assets/icons/spain-translate.png"
            alt="en"
            width={40}
            height={40}
          />
          <Image
            className={`border-2 border-white rounded-full cursor-pointer transition-all duration-300 ${
              currentLanguage === 'es' && 'opacity-50'
            }`}
            onClick={() => changeLanguage('en')}
            src="/assets/icons/usa-translate.png"
            alt="en"
            width={40}
            height={40}
          />
        </div>
      </div>

      {/* Hamburguer */}
      <div className="absolute cursor-none sm:cursor-pointer right-4 md:hidden" onClick={onClickHamburguer}>
        <Image src="/assets/menu.svg" alt="github" width={35} height={35} />
      </div>

      {/* Mobile */}
      <div
        className={`w-[90%] gap-y-6 py-4 m-auto left-0 duration-300 right-0 absolute top-16 flex flex-col items-center justify-center bg-background_secondary rounded-3xl md:hidden md:pointer-events-none ${
          showMenuMobile ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <Link
          className={`nav-link-mobile ${linkHover === 'About me' && 'nav-link-active'}`}
          onClick={onClickLinkMobile}
          href="#about"
        >
          About me
        </Link>
        <Link
          className={`nav-link-mobile ${linkHover === 'Skills' && 'nav-link-active'}`}
          onClick={onClickLinkMobile}
          href="#skills"
        >
          Skills
        </Link>
        <Link
          className={`nav-link-mobile ${linkHover === 'Projects' && 'nav-link-active'}`}
          onClick={onClickLinkMobile}
          href="#projects"
        >
          Projects
        </Link>
        <Link
          className={`nav-link-mobile ${linkHover === 'Contact' && 'nav-link-active'}`}
          onClick={onClickLinkMobile}
          href="#contact"
        >
          Contact
        </Link>
        <div className="flex gap-x-4">
          <Image
            className={`border-2 border-white rounded-full cursor-pointer transition-all duration-300 ${
              currentLanguage === 'en' && 'opacity-50'
            }`}
            onClick={() => changeLanguage('es')}
            src="/assets/icons/spain-translate.png"
            alt="en"
            width={40}
            height={40}
          />
          <Image
            className={`border-2 border-white rounded-full cursor-pointer transition-all duration-300 ${
              currentLanguage === 'es' && 'opacity-50'
            }`}
            onClick={() => changeLanguage('en')}
            src="/assets/icons/usa-translate.png"
            alt="en"
            width={40}
            height={40}
          />
        </div>
      </div>
    </nav>
  );
}
