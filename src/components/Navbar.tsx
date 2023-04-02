import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [linkHover, setLinkHover] = useState('Contact');

  const onClickLink = (e: any) => {
    setLinkHover(e.target.textContent);
  };

  return (
    <nav className="fixed top-0 z-50 flex flex-row items-center w-full py-8 backdrop-blur-sm">
      <Image
        className="absolute"
        alt="logo"
        width={80}
        height={80}
        src="https://res.cloudinary.com/sebas-2001-yac/image/upload/v1680400707/portfolio/Icons/logo.png"
      />
      <ul className="flex flex-row gap-20 m-auto">
        <li className={`nav-link ${linkHover === 'About me' && 'nav-link-active'}`}>
          <Link href="#about" onClick={onClickLink}>
            About me
          </Link>
        </li>
        <li className={`nav-link ${linkHover === 'Skills' && 'nav-link-active'}`} onClick={onClickLink}>
          <Link href="#skills">Skills</Link>
        </li>
        <li className={`nav-link ${linkHover === 'Projects' && 'nav-link-active'}`} onClick={onClickLink}>
          <Link href="#projects">Projects</Link>
        </li>
        <li className={`nav-link ${linkHover === 'Contact' && 'nav-link-active'}`} onClick={onClickLink}>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
