import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import { ProjectI } from '@/models';
import { emblaOptionsNoDrag, emblaOptionsDrag } from '@/utils';

interface Props {
  project: ProjectI;
  showLinks?: boolean;
  dragFree?: boolean;
}

export default function Project({ project, showLinks = true, dragFree = false }: Props) {
  const slides = Array.from(Array(4).keys());
  const delayRandom = Math.floor(Math.random() * (3000 - 2500 + 1) + 2500);
  const emblaOptions = dragFree ? emblaOptionsDrag : emblaOptionsNoDrag;
  const [emblaRef] = useEmblaCarousel(emblaOptions, [Autoplay({ delay: delayRandom, stopOnInteraction: false })]);

  return (
    <div className="rounded-2xl bg-background_secondary embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className=" embla__container">
          {slides.map((index: number) => (
            <div className="p-2 embla__slide" key={index}>
              {dragFree ? (
                <Image
                  className="w-full h-full embla__slide__img rounded-xl"
                  src={project?.images[index]}
                  alt="Image project"
                  width={1599}
                  height={899}
                  priority
                />
              ) : (
                <Image
                  className="w-full h-full embla__slide__img rounded-xl"
                  src={project?.images[index]}
                  alt="Image project"
                  width={640}
                  height={360}
                  priority
                />
              )}
            </div>
          ))}
        </div>
        {showLinks && (
          <div className="flex items-center justify-between px-8 py-2">
            <Link href={`./projects/${project.id}`}>
              <span className="text-lg font-bold text-gray-50">{project.title}</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link
                as={project.repository}
                passHref
                href={project.repository}
                target="_blank"
                className="p-1 duration-300 rounded-lg hover:shadow-icons-project"
              >
                <Image alt="Github" src="/assets/icons/github-project.svg" width={30} height={30} />
              </Link>
              <Link
                as={project.url}
                passHref
                href={project.url}
                target="_blank"
                className="p-1 duration-300 rounded-lg hover:shadow-icons-project"
              >
                <Image alt="Github" src="/assets/icons/link-project.svg" width={30} height={30} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
