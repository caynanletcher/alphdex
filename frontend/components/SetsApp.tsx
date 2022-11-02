import { Set } from "../set.model";
import Image from "next/image";

const SetsApp = ({ sets }: { sets: Set[] }) => (
  <ul>
    {sets.map((set) => (
      <li key={set.id}>
        <Image
          src={set.images.symbol}
          alt={set.name}
          width="15px"
          height="15px"
        />
        <a href={`set/${encodeURIComponent(set.id)}`}>{set.name}</a>
      </li>
    ))}
  </ul>
);
export default SetsApp;
