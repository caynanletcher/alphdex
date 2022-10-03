import Image from "next/image";

const CardsEntry = ({ name, imageUrl }: { name: string; imageUrl: string }) => (
  <>
    <td>
      <Image src={imageUrl} alt={name} />
    </td>
  </>
);
export default CardsEntry;
