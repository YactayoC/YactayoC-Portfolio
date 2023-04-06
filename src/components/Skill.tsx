import { SkillI } from '@/models';
import Image from 'next/image';

interface Props {
  skill: SkillI;
  widthCustom?: boolean;
}

export default function Skill({ skill, widthCustom }: Props) {
  return (
    <figure
      className={`relative flex flex-col content-center h-16 overflow-hidden group gap-y-2 items-center ${
        widthCustom ? `w-[5rem]` : 'w-full'
      }`}
    >
      <picture className="w-16 h-16 duration-300 ease-in-out group-hover:w-10 group-hover:h-10">
        <Image className="object-cover object-center" src={skill.image} alt={skill.name} width={65} height={65} />
      </picture>
      <figcaption className="absolute text-center duration-300 ease-in-out group-hover:-bottom-1 text-gray-50 -bottom-8">
        {skill.name}
      </figcaption>
    </figure>
  );
}
