import { dataProjects } from '@/data';
import Link from 'next/link';
import Project from '../Project';

export default function Projects() {
  return (
    <section className="flex flex-col items-center w-full container-section mt-36 gap-y-16" id="projects">
      <h2 className="text-6xl font-bold text-gradient-2">Projects</h2>

      <div className="grid justify-center w-full grid-cols-1 m-auto font-medium md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16">
        {dataProjects
          .filter((project) => project.salient)
          .map((project) => (
            <Project key={project.id} project={project}></Project>
          ))}
      </div>

      <Link href="./projects">
        <button className="m-auto button-custom w-fit">View all projects</button>
      </Link>
    </section>
  );
}
