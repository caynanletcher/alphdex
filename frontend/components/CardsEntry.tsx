import Image from "next/image";

const CardsEntry = ({
  name,
  imageUrl,
  isPlayed,
}: {
  name: string;
  imageUrl?: string;
  isPlayed: boolean;
}) => {
  return (
    <>
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
    </>
  );
};
export default CardsEntry;
