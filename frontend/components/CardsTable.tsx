import { Card } from "../card.model";
import CardsEntry from "./CardsEntry";
const CardsTable = ({ cards }: { cards: Card[] }) => {
  return (
    <table>
      <tbody>
        {cards.map((card) => (
          <CardsEntry key={card.id} name={card.name} imageUrl={card.imageUrl} />
        ))}
      </tbody>
    </table>
  );
};
export default CardsTable;
