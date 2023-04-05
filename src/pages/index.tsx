import Head from 'next/head';

import { About, Contact, Presentation, Projects, Skills } from '@/components/home-components';
import { Navbar } from '@/components';

export default function HomePage() {
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
