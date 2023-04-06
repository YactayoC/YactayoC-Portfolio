import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { dataProjects } from '@/data';
import { ProjectI } from '@/models';
import { Project, Skill } from '@/components';

export default function ProjectPage() {
  const urlIdProject = Number(useRouter().asPath.split('/')[2]);
  const project: ProjectI = dataProjects.find((project) => project.id === urlIdProject)!;

  if (!project) return <h1>Loading...</h1>;

  return (
    <>
      <Head>
        <title>Project | {project.title}</title>
      </Head>
      <main className="relative flex flex-col items-center w-full py-24 sm:py-32 container-section gap-y-16">
        {/* <h1 className="text-6xl font-bold text-gradient-2">My Projects</h1> */}
        <div className="flex flex-col-reverse items-center md:grid md:grid-cols-2 gap-y-16 md:gap-x-32">
          <div className="flex flex-col gap-16">
            <h1 className="text-6xl font-bold text-gradient-2">{project.title}</h1>
            <div className="flex gap-x-8">
              <Link href={project.url} target="_blank">
                <button className="flex items-center button-custom gap-x-4">
                  View Website
                  <Image src="/assets/icons/link-project.svg" alt="external link" width={25} height={25} />
                </button>
              </Link>
              <Link href={project.repository} target="_blank">
                <button className="flex items-center button-custom gap-x-4">
                  View Code
                  <Image src="/assets/icons/github-project.svg" alt="external link" width={25} height={25} />
                </button>
              </Link>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl font-bold text-gray-50">About this project</h2>
              <p className="text-xl leading-8 text-gray-50">{project.description_en}</p>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl font-bold text-gray-50">Technologies</h2>
              <div className="grid grid-cols-4 gap-12">
                {project?.technologies.map((skill) => (
                  <Skill skill={skill} key={skill.name} widthCustom={true} />
                ))}
              </div>
            </div>
          </div>

          <div>
            <Project project={project} showLinks={false} dragFree={true} />
          </div>
        </div>

        <Link href="./" className="absolute left-0 cursor-pointer top-8 sm:left-0">
          <Image src="/assets/icons/back-arrow.svg" alt="back arrow" width={50} height={50} className="" />
        </Link>
      </main>
    </>
  );
}
