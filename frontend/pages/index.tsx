import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="antialiased">
      <Head>
        <title>Home | Alphdex</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="my-20 space-y-10 overflow-hidden">
        <Header />
        <div className="flex justify-center">
          <Image
            src="/ruins-of-alph.jpg"
            alt="Ruins of Alph art"
            width="500px"
            height="500px"
            className="rounded-lg"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
