import ky from "ky-universal";
import { Card, CardEntry, CardImage } from "../card.model";
import CardsTable from "./CardsTable";

const CardsApp = ({ playedCards }: { playedCards: Card[] }) => {
  let allCards: CardEntry[];
  const dummyFunction = async () => {
    try {
      allCards = await ky
        .get(`https://api.pokemontcg.io/v2/cards?q=set.name:"Base"`)
        .json();
      for (let i = 0; i < allCards.length; i++) {
        for (let j = 0; j < playedCards.length; j++) {
          if (allCards[i] === playedCards[j]) {
            allCards[i].isPlayed = true;
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  dummyFunction();

  return (
    <>
      <CardsTable cards={allCards} />
    </>
  );
};
export default CardsApp;
