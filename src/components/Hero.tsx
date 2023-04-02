import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="grid items-center w-full grid-cols-2 mt-48  justify-items-center">
      <div className="flex flex-col items-start text-gray-50 gap-y-12">
        <div>
          <h1 className="text-5xl font-black">Sebastian Yactayo</h1>
          <h3 className="text-3xl font-bold text-transparent duration-300 text-gradient-to bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-600">
            Frontend Developer
          </h3>
        </div>
        <p className="text-xl w-[30rem] leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet laoreet justo, quis lacinia tortor
          malesuada acoreet laoreet justo oreet laoreet justo.
        </p>
        <button className="button-custom">Download CV</button>
      </div>
      <div className="relative">
        <Image
          alt="profile"
          src="https://res.cloudinary.com/sebas-2001-yac/image/upload/v1680455160/profile_kakqcs.png"
          width={350}
          height={405}
        />
        <Link href="#" className="absolute top-0 -right-16 animate-pulse">
          <Image
            alt="Linkedin"
            src="https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659586588/portfolio/Icons/linkedin_sntgoj.png"
            width={50}
            height={50}
          />
        </Link>
        <Link href="#" className="absolute bottom-0 -right-16 animate-pulse">
          <Image
            alt="Twitter"
            src="https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659586588/portfolio/Icons/twitter_zo7piv.png"
            width={50}
            height={50}
          />
        </Link>
        <Link href="#" className="absolute top-0 bottom-0 flex items-center -left-16 animate-pulse">
          <Image
            alt="Github"
            src="https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659586588/portfolio/Icons/github_rrg1nf.png"
            width={50}
            height={50}
          />
        </Link>
      </div>
    </div>
  );
}
