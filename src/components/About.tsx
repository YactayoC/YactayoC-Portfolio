import Image from 'next/image';

export default function About() {
  return (
    <section className="flex flex-col container-section mt-52 md:mt-36 gap-y-16" id="about">
      <h2 className="text-4xl font-bold text-center text-gray-50">About me</h2>
      <div className="flex flex-col items-center grid-rows-2 m-auto gap-y-8 lg:grid lg:grid-cols-2 lg:grid-rows-none gap-x-16 justify-items-center lg:w-[80%]">
        <Image className="w-[400px] h-[300px]" src="/assets/images/about.svg" width={400} height={300} alt="about" />

        <div className="text-xl font-medium leading-8 text-gray-50">
          <p>
            👋 Hello, I am a web developer, I like to make web pages in addition to applying good practices for the
            development of these, I also like to learn new technologies and find different ways to solve some kind of
            problem.
          </p>
          <br />
          <p>
            👨‍💻 As for my skills, I am responsible, I adapt to changes and I have good communication when working in a
            team.
          </p>
        </div>
        <div></div>
      </div>
    </section>
  );
}
