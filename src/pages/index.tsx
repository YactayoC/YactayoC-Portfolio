import Head from 'next/head';
import { About, Contact, Presentation, Navbar, Projects, Skills } from '@/components';

export default function Home() {
  return (
    <>
      <Head>
        <title>YactayoC</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <Presentation />

      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
