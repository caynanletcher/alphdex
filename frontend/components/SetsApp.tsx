import { Set } from "../set.model";
import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";

const SetsApp = ({ sets }: { sets: Set[] }) => (
  <ul>
    {sets.map((set) => (
      <li
        key={set.id}
        className="list-outside list-none leading-8 align-middle"
      >
        <span className="bg-red-200 rounded">
          <Image
            src={set.images.symbol}
            alt={set.name}
            width="20px"
            height="20px"
            className=""
          />
        </span>
        <a
          href={`set/${slugify(`${set.name}-${set.id}}`, {
            lower: true,
          })}`}
          className="ml-1"
        >
          {set.name}
        </a>
      </li>
    ))}
  </ul>
);
export default SetsApp;
