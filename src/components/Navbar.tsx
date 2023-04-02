import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [linkHover, setLinkHover] = useState();

  return (
    <nav className="relative flex flex-row items-center w-full py-8">
      <Image
        className="absolute"
        alt="logo"
        width={80}
        height={80}
        src="https://res.cloudinary.com/sebas-2001-yac/image/upload/v1680400707/portfolio/Icons/logo.png"
      />
      <ul className="flex flex-row gap-20 m-auto">
        <li className="nav-link">
          <Link href="#">About me</Link>
        </li>
        <li className="nav-link">
          <Link href="#">Skills</Link>
        </li>
        <li className="nav-link">
          <Link href="#">Projects</Link>
        </li>
        <li className="nav-link button-nav-active">
          <Link href="#">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
