import slugify from "slugify";
import { Card } from "../card.model";
import CardsTable from "./CardsTable";

const CardsApp = ({
  playedCards,
  allCards,
}: {
  playedCards: Card[];
  allCards: any[];
}) => {
  const filterCards = (number: string, setId: string) => {
    return playedCards.filter(
      (playedCard) =>
        playedCard.number === parseInt(number) && playedCard.set.code === setId
    );
  };
  let booledCards: Card[] = allCards.map((card, i) => {
    let booledCard: Card = {
      name: card.name,
      number: card.number,
      id: i,
      imageUrl: card.images.small,
      isPlayed: filterCards(card.number, card.set.id).length !== 0,
      slug: slugify(`${card.name}-${card.set.name}-${card.number}`, {
        lower: true,
      }),
      set: {
        id: card.set.id.toString(),
        name: card.set.name,
        code: card.set.id.toString(),
        slug: slugify(`${card.set.name}-${card.set.id}}`, {
          lower: true,
        }),
      },
    };
    return booledCard;
  });
  return (
    <>
      <CardsTable cards={booledCards} />
    </>
  );
};
export default CardsApp;
