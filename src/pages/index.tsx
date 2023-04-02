import Head from "next/head";
import { About, Hero, Navbar } from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <header>
        <Navbar />
        <Hero />
      </header>

      <About />
    </>
  );
}
