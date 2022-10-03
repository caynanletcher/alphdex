import { Set } from "./set.model";

export interface Card {
  id: string;
  name: string;
  number: number;
  set: Set;
}
