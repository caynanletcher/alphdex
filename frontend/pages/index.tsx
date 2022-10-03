import Head from "next/head";
import Image from "next/image";
import ky from "ky";
import { GetStaticProps } from "next";
import { Card } from "../card.model";
import { useState } from "react";

export default function Home({ jsonData }: { jsonData: Card[] }) {
  const [usedCards, setUsedCards] = useState(jsonData);

  return (
    <div>
      <Head>
        <title>Alphdex</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Alphdex</h1>
      </main>

      <table>
        <tbody>
          <Image
            src="https://images.pokemontcg.io/pl1/1.png"
            alt=""
            height="360px"
            width="240px"
          />
        </tbody>
      </table>

      <footer>
        <a>Alphdex created by caynan</a>
      </footer>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  let jsonData;
  try {
    jsonData = await ky
      .get(`${process.env.NEXT_PUBLIC_HOST}/api/cards/`, {
        headers: {},
      })
      .json();
  } catch (err) {
    console.log(`API Error: ${err}`);
  }
  return {
    props: {
      jsonData,
    },
  };
};
