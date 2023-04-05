import Image from 'next/image';
import Link from 'next/link';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

import { ProjectI } from '@/models';
import { emblaOptions } from '@/utils';

interface Props {
  project: ProjectI;
}

export default function Project({ project }: Props) {
  const slides = Array.from(Array(4).keys());
  const delayRandom = Math.floor(Math.random() * (3000 - 2500 + 1) + 2500);
  const [emblaRef] = useEmblaCarousel(emblaOptions, [Autoplay({ delay: delayRandom, stopOnInteraction: false })]);

  return (
    <div className="rounded-2xl bg-background_secondary embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className=" embla__container">
          {slides.map((index: number) => (
            <div className="p-2 embla__slide" key={index}>
              <Image
                className="embla__slide__img rounded-xl"
                src={project.images[index]}
                alt="Image project"
                width={640}
                height={360}
              />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between px-8 py-2">
          <span className="text-lg font-bold text-gray-50">{project.title}</span>
          <div className="flex items-center gap-4">
            <Link
              href={project.repository}
              target="_blank"
              className="p-1 duration-300 rounded-lg hover:shadow-icons-project"
            >
              <Image alt="Github" src="/assets/icons/github-project.svg" width={30} height={30} />
            </Link>
            <Link href={project.url} target="_blank" className="p-1 duration-300 rounded-lg hover:shadow-icons-project">
              <Image alt="Github" src="/assets/icons/link-project.svg" width={30} height={30} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
