import Image from "next/image";

export default function About() {
  return (
    <section className="flex flex-col mt-36 gap-y-16">
      <h2 className="text-4xl font-bold text-center text-gray-50">About me</h2>
      <div className="grid items-center grid-cols-2 m-auto gap-x-16 justify-items-center">
        <div>
          <Image
            src="https://res.cloudinary.com/sebas-2001-yac/image/upload/v1680449463/Java_Flatline_1_qsyf4w.png"
            alt=""
            width="400"
            height="400"
          />
        </div>
        <div className="text-xl font-medium text-gray-50  w-[35rem]">
          <p>
            👋 Hello, I am a web developer, I like to make web pages in addition
            to applying good practices for the development of these, I also like
            to learn new technologies and find different ways to solve some kind
            of problem.
          </p>
          <br />
          <p>
            👨‍💻 As for my skills, I am responsible, I adapt to changes and I have
            good communication when working in a team.
          </p>
        </div>
        <div></div>
      </div>
    </section>
  );
}
