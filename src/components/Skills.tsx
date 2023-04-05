import { useState } from 'react';
import Image from 'next/image';

import { dataSkills } from '@/data';

export default function Skills() {
  const [skillsCategory, setSkillsCategory] = useState({ index: 0, category: 'frontend' });

  const onClickCategory = (index: number, category: string) => {
    setSkillsCategory({ ...skillsCategory, index, category });
  };

  return (
    <section className="flex flex-col items-center container-section mt-36 gap-y-16" id="skills">
      <h2 className="text-6xl font-bold text-gradient-2">Skills</h2>

      {/* Skills */}
      <div className="flex flex-col w-full m-auto font-medium gap-y-16 lg:w-[70%]">
        <div className="flex justify-between text-gray-50">
          <div
            className={`tab ${skillsCategory.index === 0 && 'tab-active'}`}
            onClick={() => onClickCategory(0, 'frontend')}
          >
            Frontend
          </div>
          <div
            className={`tab ${skillsCategory.index === 1 && 'tab-active'}`}
            onClick={() => onClickCategory(1, 'backend')}
          >
            Backend
          </div>
          <div
            className={`tab ${skillsCategory.index === 2 && 'tab-active'}`}
            onClick={() => onClickCategory(2, 'database')}
          >
            Database
          </div>
          <div
            className={`tab ${skillsCategory.index === 3 && 'tab-active'}`}
            onClick={() => onClickCategory(3, 'others')}
          >
            Others
          </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 justify-items-center gap-y-10">
          {dataSkills
            .filter((skill) => skill.category === skillsCategory.category)
            .map((skill, index) => (
              <figure
                key={index}
                className="relative flex flex-col items-center content-center w-full h-20 overflow-hidden group gap-y-2"
              >
                <picture className="w-16 h-16 duration-300 ease-in-out group-hover:w-10 group-hover:h-10">
                  <Image
                    className="object-cover object-center"
                    src={skill.image}
                    alt={skill.name}
                    width={60}
                    height={60}
                  />
                </picture>
                <figcaption className="absolute text-center duration-300 ease-in-out group-hover:bottom-2 text-gray-50 -bottom-10">
                  {skill.name}
                </figcaption>
              </figure>
            ))}
          {/* <figure className="relative flex flex-col items-center content-center w-full h-20 overflow-hidden group gap-y-2">
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
          </figure> */}
        </div>
      </div>
    </section>
  );
}
