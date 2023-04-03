import { emblaOptions, emblaPlugin } from '@/utils';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  const slides = Array.from(Array(3).keys());
  const slides_images = [
    {
      id: 1,
      image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1659839035/portfolio/n1_rh2hmu.png',
    },
    {
      id: 2,
      image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1660175495/portfolio/n2_yuujil.png',
    },
    {
      id: 3,
      image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1660175540/portfolio/n3_wv59km.png',
    },
  ];

  const [emblaRef] = useEmblaCarousel(emblaOptions, emblaPlugin);
  // TODO: traer los proyectos de la base de datos

  return (
    <section className="flex flex-col w-full container-section mt-36 gap-y-16" id="projects">
      <h2 className="text-4xl font-bold text-center text-gray-50">Projects</h2>

      {/* Projects */}
      <div className="grid justify-center w-full grid-cols-1 m-auto font-medium md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16">
        <div className="rounded-2xl embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {slides.map((index) => (
                <div className="embla__slide" key={index}>
                  <Image
                    className="embla__slide__img"
                    src={slides_images[index].image}
                    alt="Image project"
                    width={640}
                    height={360}
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between px-8 py-2 bg-background_secondary">
              <span className="font-bold text-gray-50">ReMovies</span>
              <div className="flex items-center gap-4">
                <Link
                  href="https://github.com/YactayoC"
                  target="_blank"
                  className="p-1 duration-300 rounded-lg hover:shadow-icons-project"
                >
                  <Image alt="Github" src="/assets/icons/github-project.svg" width={30} height={30} />
                </Link>
                <Link
                  href="https://github.com/YactayoC"
                  target="_blank"
                  className="p-1 duration-300 rounded-lg hover:shadow-icons-project"
                >
                  <Image alt="Github" src="/assets/icons/link-project.svg" width={30} height={30} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* <div>
          <video
            className="w-full rounded-2xl"
            src="https://res.cloudinary.com/sebas-2001-yac/video/upload/v1660176914/portfolio/Videos/2022-08-10_19-14-28_icx6lp.mp4"
            muted
            loop
            autoPlay
          ></video>
        </div> */}
      </div>
      <button className="m-auto text-gray-50 button-custom w-fit">View all projects</button>
    </section>
  );
}
