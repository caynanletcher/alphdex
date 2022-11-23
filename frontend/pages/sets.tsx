import SetsApp from "../components/SetsApp";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Set } from "../set.model";
import ky from "ky-universal";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Sets({
  setsData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="antialiased">
      <Head>
        <title>Sets | Alphdex</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="my-20 space-y-10 overflow-hidden">
        <h1 className="font-extrabold text-4xl text-center">Sets</h1>
        <div className="flex justify-center">
          <SetsApp sets={setsData.data.reverse()} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await ky(
    `https://api.pokemontcg.io/v2/sets?select=id,name,images`
  );
  const setsData: Set[] = await res.json();
  return {
    props: {
      setsData,
    },
  };
};
