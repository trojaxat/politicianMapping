import { Model } from "./Model";

export interface StolenDom {
  id: number;
  html: string;
  url: string;
}
export abstract class Dom<Url> {
  abstract getAllInformation(string: Url): void;
  abstract createModel(model: Model<StolenDom>): void;
}
