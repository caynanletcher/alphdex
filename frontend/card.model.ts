import { Set } from "./set.model";

export interface Card {
  id: number;
  name: string;
  number: number;
  set: Set;
  slug: string;
  imageUrl?: string;
  isPlayed: boolean;
}
