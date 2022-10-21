import { Set } from "./set.model";

export interface Card {
  id: number;
  name: string;
  number: number;
  set: Set;
  imageUrl?: string;
  isPlayed: boolean;
}
