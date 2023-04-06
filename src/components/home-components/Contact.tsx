import Image from 'next/image';

import { isEmail, isName } from '@/utils/validations';
import { useForm } from 'react-hook-form';

interface DataContact {
  fullname: string;
  email: string;
  message: string;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DataContact>();

  const onSendEmail = (data: DataContact) => {
    console.log(data);
    reset();
  };

  return (
    <section
      className="flex flex-col py-8 mt-36 items-center w-full gap-y-16 rounded-t-[5rem] md:rounded-t-[10rem]"
      id="contact"
    >
      <h2 className="text-6xl font-bold text-gradient-2">Contact Me</h2>
      <div className="flex flex-col items-center justify-center w-full p-6 gap-y-20 lg:flex-row lg:gap-x-20">
        <Image
          className="hidden lg:block w-[537px] h-[464px]"
          src="/assets/images/contact.svg"
          alt="contact"
          width={537}
          height={464}
        />
        <form
          className="flex flex-col items-center w-full transition-all duration-300 md:w-96 gap-y-8"
          onSubmit={handleSubmit(onSendEmail)}
        >
          <div className="relative flex flex-col w-full ">
            <input
              id="fullname"
              className="input-text peer"
              type="text"
              placeholder=" "
              {...register('fullname', {
                required: 'Your name is required',
                minLength: { value: 6, message: 'Minimum 6 characters' },
                validate: isName,
              })}
            />
            <label htmlFor="fullname" className="label-input">
              Fullname
            </label>
          </div>
          <div className="relative flex flex-col w-full ">
            <input
              id="email"
              className="input-text peer"
              type="email"
              placeholder=" "
              {...register('email', {
                required: 'Your email is required',
                validate: isEmail,
              })}
            />
            <label htmlFor="email" className="label-input">
              Email
            </label>
          </div>
          <div className="relative flex flex-col w-full ">
            <textarea
              id="message"
              className="input-message peer"
              placeholder=" "
              {...register('message', {
                required: 'This message is required',
                minLength: { value: 6, message: 'Minimum 6 characters' },
                maxLength: { value: 250, message: 'Maximum 250 characters' },
              })}
            ></textarea>
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
