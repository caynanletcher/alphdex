import Head from "next/head";
import ky from "ky-universal";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { Card } from "../../card.model";
import { Set } from "../../set.model";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardsApp from "../../components/CardsApp";
import Navbar from "../../components/Navbar";

export default function CardsPage({
  playedCardsData,
  allCardsData,
  set,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(set);
  return (
    <div className="antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900">
      <Head>
        <title>Set | Alphdex</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200 text-center">
        {set.data[0].name}
      </h1>
      <CardsApp
        playedCards={playedCardsData.results}
        allCards={allCardsData.data}
      />
      <Footer />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // When this is true (in preview environments) don't
  // prerender any static pages
  // (faster builds, but slower initial page load)
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }

  const res = await ky(`https://api.pokemontcg.io/v2/sets?select=id,name`);
  let setsData: any = await res.json();
  for (let i = 1; i <= setsData.pageSize; i++) {
    let res = await ky(
      `https://api.pokemontcg.io/v2/cards?select=name,number,set&page=${i}`
    );
    let newSetsData: any = await res.json();
    setsData.data.push(newSetsData.data);
  }

  const paths = setsData.data.map((set: Set) => ({
    params: { id: set.id },
  }));

  // { fallback: false } means other routes should 404
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  let res = await ky(
    `${process.env.NEXT_PUBLIC_HOST}/api/cards/?set__code=${context.params.id}`
  );
  const playedCardsData: Card[] = await res.json();
  res = await ky(
    `https://api.pokemontcg.io/v2/cards?q=set.id:"${context.params.id}"&select=name,number,images,set`
  );
  const allCardsData: Card[] = await res.json();
  const set = await ky(
    `https://api.pokemontcg.io/v2/sets?q=id:${context.params.id}&select=name`
  ).json();
  return {
    props: {
      playedCardsData,
      allCardsData,
      set,
    },
  };
};
