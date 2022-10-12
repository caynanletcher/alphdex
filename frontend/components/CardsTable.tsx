import CardsEntry from "./CardsEntry";
import { CardEntry } from "../card.model";
const CardsTable = ({ cards }: { cards: CardEntry[] }) => {
  return (
    <table>
      <tbody>
        {cards.map((card) => (
          <CardsEntry key={card.id} {...card} />
        ))}
      </tbody>
    </table>
  );
};
export default CardsTable;
