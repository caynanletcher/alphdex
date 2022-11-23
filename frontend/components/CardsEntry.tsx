import Image from "next/image";
import Link from "next/link";

const CardsEntry = ({
  name,
  slug,
  imageUrl,
  isPlayed,
}: {
  name: string;
  slug: string;
  imageUrl?: string;
  isPlayed: boolean;
}) => {
  return (
    <a href={`../card/${slug}`} className="m-2">
      {imageUrl ? (
        isPlayed ? (
          <div>
            <Image
              className="card-image"
              src={imageUrl}
              alt={name}
              width="320px"
              height="440px"
            />
          </div>
        ) : (
          <div>
            <Image
              className="card-image grayscale"
              src={imageUrl}
              alt={name}
              width="320px"
              height="440px"
            />
          </div>
        )
      ) : (
        <div>
          <Image
            className="card-image"
            src={"/cardback.png"}
            alt={name}
            width="320px"
            height="440px"
          />
        </div>
      )}
    </a>
  );
};
export default CardsEntry;
