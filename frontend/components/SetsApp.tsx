import { Set } from "../set.model";
import Image from "next/image";
import Link from "next/link";

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
        <Link href={`set/${encodeURIComponent(set.id)}`}>{set.name}</Link>
      </li>
    ))}
  </ul>
);
export default SetsApp;
