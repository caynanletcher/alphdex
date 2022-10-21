import { Card } from "../card.model";
import CardsTable from "./CardsTable";

const CardsApp = ({ playedCards }: { playedCards: Card[] }) => {
  return (
    <>
      <CardsTable cards={playedCards} />
    </>
  );
};
export default CardsApp;
