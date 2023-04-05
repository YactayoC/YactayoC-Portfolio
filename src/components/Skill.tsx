import { SkillI } from '@/models';
import Image from 'next/image';

interface Props {
  index: number;
  skill: SkillI;
}

export default function Skill({ index, skill }: Props) {
  return (
    <figure
      key={index}
      className="relative flex flex-col items-center content-center w-full h-16 overflow-hidden w-h-20 group gap-y-2"
    >
      <picture className="w-16 h-16 duration-300 ease-in-out group-hover:w-10 group-hover:h-10">
        <Image className="object-cover object-center" src={skill.image} alt={skill.name} width={65} height={65} />
      </picture>
      <figcaption className="absolute text-center duration-300 ease-in-out group-hover:bottom-1 text-gray-50 -bottom-8">
        {skill.name}
      </figcaption>
    </figure>
  );
}
