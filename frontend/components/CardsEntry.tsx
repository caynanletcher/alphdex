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
        <Image src={imageUrl} alt={name} width="100px" height="100px" />
      </td>
    </>
  ) : (
    <>
      <td>
        <Image
          src={`/../public/cardback.png`}
          alt={name}
          width="100px"
          height="100px"
        />
      </td>
    </>
  );
};
export default CardsEntry;
