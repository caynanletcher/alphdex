import { Set } from "./set.model";

export interface Card {
  id: string;
  name: string;
  number: number;
  set: Set;
}

export interface CardImage extends Card {
  imageUrl: string;
}

export interface CardEntry extends CardImage {
  isPlayed: boolean;
}
