import Image from 'next/image';

export default function Contact() {
  return (
    <section
      className="flex flex-col py-8 mt-36 items-center w-full gap-y-16 rounded-t-[5rem] md:rounded-t-[10rem]"
      id="contact"
    >
      <h2 className="text-6xl font-bold text-gradient-2">Contact</h2>
      <div className="flex flex-col items-center justify-center w-full p-6 gap-y-20 lg:flex-row lg:gap-x-20">
        <Image
          className="hidden lg:block w-[537px] h-[464px]"
          src="/assets/images/contact.svg"
          alt="contact"
          width={537}
          height={464}
        />
        <form className="flex flex-col items-center w-full transition-all duration-300 md:w-96 gap-y-8">
          <div className="relative flex flex-col w-full ">
            <input id="fullname" className="input-text peer" type="text" placeholder=" " />
            <label htmlFor="fullname" className="label-input">
              Fullname
            </label>
          </div>
          <div className="relative flex flex-col w-full ">
            <input id="email" className="input-text peer" type="email" placeholder=" " />
            <label htmlFor="email" className="label-input">
              Email
            </label>
          </div>
          <div className="relative flex flex-col w-full ">
            <textarea id="message" className="input-message peer" placeholder=" "></textarea>
            <label htmlFor="message" className="label-input">
              Message
            </label>
          </div>
          <button className="w-full button-custom">Send mail</button>
        </form>
      </div>
    </section>
  );
}
