import { Project } from '@/components';
import { dataProjects } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';

export default function ProjectsPage() {
  const [projectCategory, setProjectCategory] = useState('all');

  return (
    <main className="relative flex flex-col items-center w-full py-24 sm:py-16 container-section gap-y-16">
      <h1 className="text-6xl font-bold text-gradient-2">My Projects</h1>

      <form>
        <select
          className="input-select-custom w-fit"
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setProjectCategory(e.target.value)}
        >
          <option value="all">All my projects</option>
          <option value="external">External APIS</option>
          <option value="own">Own APIS</option>
        </select>
      </form>

      <div className="grid justify-center w-full grid-cols-1 m-auto font-medium md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16">
        {dataProjects
          .filter((project) => {
            if (projectCategory === 'all') return project;
            if (projectCategory === project.category) return project;
          })
          .map((project) => (
            <Project key={project.id} project={project} />
          ))}
      </div>

      <Link href="./" className="absolute left-0 cursor-pointer top-8 sm:left-0">
        <Image src="/assets/icons/back-arrow.svg" alt="back arrow" width={50} height={50} className="" />
      </Link>
    </main>
  );
}
