import Image from "next/image";

const CardsEntry = ({
  name,
  imageUrl,
}: {
  name: string;
  imageUrl?: string;
}) => {
  return imageUrl ? (
    <>
      <td>
        <Image src={imageUrl} alt={name} />
      </td>
    </>
  ) : (
    <>
      <td>
        <Image
          src={`https://limitlesstcg.com/inc/tabletop-beta/_app/immutable/assets/cardback_int-934b66b9.png`}
          alt={name}
        />
      </td>
    </>
  );
};
export default CardsEntry;
