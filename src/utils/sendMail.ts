import emailjs from '@emailjs/browser';

let serviceId = process.env.NEXT_PUBLIC_SERVICE_ID!;
let templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
let publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY!;

interface SendMail {
  fullname: string;
  email: string;
  message: string;
}

export const sendEmail = async ({ fullname, email, message }: SendMail) => {
  await emailjs.send(serviceId, templateId, { fullname, email, message }, publicKey);
};
