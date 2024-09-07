import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-6 text-center text-white bg-slate-400/5 backdrop-blur-lg mt-36">
      <div className="container px-6 mx-auto">
        <p className="text-xl">&copy; 2024 Sebastián Yactayo</p>
        <div className="flex justify-center gap-8 mt-4">
          <Link href="https://www.linkedin.com/in/sebastianyactayocrisostomo" target="_blank">
            <Image
              alt="Linkedin"
              src="/assets/icons/linkedin.svg"
              width={50}
              height={50}
              className="transition-transform transform hover:scale-110 hover:opacity-80"
            />
          </Link>
          <Link href="https://twitter.com/yactayo_aron" target="_blank">
            <Image
              alt="Twitter"
              src="/assets/icons/twitter.svg"
              width={50}
              height={50}
              className="transition-transform transform hover:scale-110 hover:opacity-80"
            />
          </Link>
          <Link href="https://github.com/YactayoC" target="_blank">
            <Image
              alt="Github"
              src="/assets/icons/github.svg"
              width={50}
              height={50}
              className="transition-transform transform hover:scale-110 hover:opacity-80"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
