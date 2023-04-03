import Image from 'next/image';

export default function Contact() {
  return (
    <section
      className="flex flex-col py-8 mt-36 w-full gap-y-16 bg-background_secondary rounded-t-[5rem] md:rounded-t-[10rem]"
      id="contact"
    >
      <h2 className="text-4xl font-bold text-center text-gray-50">Contact</h2>
      <div className="flex flex-col items-center justify-center gap-y-20 lg:flex-row lg:gap-x-20">
        <Image className="hidden lg:block" src="/assets/images/contact.svg" alt="contact" width={537} height={464} />
        <form className="flex flex-col items-center transition-all duration-300 w-[90%] md:w-96 gap-y-8">
          <input className="input-text" type="text" placeholder="FullName" />
          <input className="input-text" type="text" placeholder="Email" />
          <textarea className="input-message" placeholder="Message"></textarea>
          <button className="w-full text-gray-50 button-custom">Send mail</button>
        </form>
      </div>
    </section>
  );
}
