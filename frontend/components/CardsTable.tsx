import { Card } from "../card.model";
import CardsEntry from "./CardsEntry";
const CardsTable = ({ cards }: { cards: Card[] }) => {
  return (
    <div className="flexbox-container">
      {cards.map((card) => (
        <CardsEntry
          key={card.id}
          name={card.name}
          slug={card.slug}
          imageUrl={card.imageUrl}
          isPlayed={card.isPlayed}
        />
      ))}
    </div>
  );
};
export default CardsTable;
