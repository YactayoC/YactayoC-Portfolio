import Head from 'next/head';
import { About, Contact, Hero, Navbar, Projects, Skills } from '@/components';

export default function Home() {
  return (
    <>
      <Head>
        <title>YactayoC</title>
      </Head>
      <header>
        <Navbar />
        <Hero />
      </header>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
