import Image from 'next/image';
import { useState } from 'react';

export default function Skills() {
  const [indexCategory, setIndexCategory] = useState(0);
  // TODO: traer las skills desde la BD

  const onClickCategory = (index: number) => {
    setIndexCategory(index);
  };

  return (
    <section className="flex flex-col container-section mt-36 gap-y-16" id="skills">
      <h2 className="text-4xl font-bold text-center text-gray-50">Skills</h2>

      {/* Skills */}
      <div className="flex flex-col w-full m-auto font-medium gap-y-16 lg:w-[80%]">
        <div className="flex justify-between text-gray-50">
          <div className={`tab ${indexCategory === 0 && 'tab-active'}`} onClick={() => onClickCategory(0)}>
            Frontend
          </div>
          <div className={`tab ${indexCategory === 1 && 'tab-active'}`} onClick={() => onClickCategory(1)}>
            Backend
          </div>
          <div className={`tab ${indexCategory === 2 && 'tab-active'}`} onClick={() => onClickCategory(2)}>
            Database
          </div>
          <div className={`tab ${indexCategory === 3 && 'tab-active'}`} onClick={() => onClickCategory(3)}>
            Others
          </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 justify-items-center gap-y-10">
          <figure className="relative flex flex-col items-center content-center w-full h-20 overflow-hidden group gap-y-2">
            <picture className="w-16 h-16 duration-300 ease-in-out group-hover:w-10 group-hover:h-10">
              <Image
                className="object-cover object-center"
                src="https://res.cloudinary.com/sebas-2001-yac/image/upload/v1662226893/portfolio/Icons/typescript_hvpgz0.png"
                alt="Skills"
                width={60}
                height={60}
              />
            </picture>
            <figcaption className="absolute text-center duration-300 ease-in-out group-hover:bottom-2 text-gray-50 -bottom-10">
              TypeScript
            </figcaption>
          </figure>
          <figure className="relative flex flex-col items-center content-center w-full h-20 overflow-hidden group gap-y-2">
            <picture className="w-16 h-16 duration-300 ease-in-out group-hover:w-10 group-hover:h-10">
              <Image
                className="object-cover object-center"
                src="https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659640591/portfolio/Icons/mongodb_xxaho9.png"
                alt="Skills"
                width={60}
                height={60}
              />
            </picture>
            <figcaption className="absolute text-center duration-300 ease-in-out group-hover:bottom-2 text-gray-50 -bottom-10">
              TypeScript
            </figcaption>
          </figure>
          <figure className="relative flex flex-col items-center content-center w-full h-20 overflow-hidden group gap-y-2">
            <picture className="w-16 h-16 duration-300 ease-in-out group-hover:w-10 group-hover:h-10">
              <Image
                className="object-cover object-center"
                src="https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659641350/portfolio/Icons/fastAPI_if2s09.png"
                alt="Skills"
                width={60}
                height={60}
              />
            </picture>
            <figcaption className="absolute text-center duration-300 ease-in-out group-hover:bottom-2 text-gray-50 -bottom-10">
              TypeScript
            </figcaption>
          </figure>
          <figure className="relative flex flex-col items-center content-center w-full h-20 overflow-hidden group gap-y-2">
            <picture className="w-16 h-16 duration-300 ease-in-out group-hover:w-10 group-hover:h-10">
              <Image
                className="object-cover object-center"
                src="https://res.cloudinary.com/sebas-2001-yac/image/upload/v1668220330/portfolio/Icons/gith_k0wq6u.png"
                alt="Skills"
                width={60}
                height={60}
              />
            </picture>
            <figcaption className="absolute text-center duration-300 ease-in-out group-hover:bottom-2 text-gray-50 -bottom-10">
              TypeScript
            </figcaption>
          </figure>
          <figure className="relative flex flex-col items-center content-center w-full h-20 overflow-hidden group gap-y-2">
            <picture className="w-16 h-16 duration-300 ease-in-out group-hover:w-10 group-hover:h-10">
              <Image
                className="object-cover object-center"
                src="https://res.cloudinary.com/sebas-2001-yac/image/upload/v1660185445/portfolio/Icons/jotai_zfwldc.png"
                alt="Skills"
                width={60}
                height={60}
              />
            </picture>
            <figcaption className="absolute text-center duration-300 ease-in-out group-hover:bottom-2 text-gray-50 -bottom-10">
              TypeScript
            </figcaption>
          </figure>
          <figure className="relative flex flex-col items-center content-center w-full h-20 overflow-hidden group gap-y-2">
            <picture className="w-16 h-16 duration-300 ease-in-out group-hover:w-10 group-hover:h-10">
              <Image
                className="object-cover object-center"
                src="https://res.cloudinary.com/sebas-2001-yac/image/upload/v1664292359/portfolio/Icons/tailwind_fuihra.png"
                alt="Skills"
                width={60}
                height={60}
              />
            </picture>
            <figcaption className="absolute text-center duration-300 ease-in-out group-hover:bottom-2 text-gray-50 -bottom-10">
              TypeScript
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
