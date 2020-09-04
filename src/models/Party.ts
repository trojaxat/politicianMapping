/**
 * Internal imports
 */
import { Attributes } from "./Attributes";
import { ApiSync } from "./ApiSync";
import { Collection } from "./Collection";
import { Eventing } from "./Eventing";
import { Model } from "./Model";
import { PartyImportModel } from "../scripts/PartyImport";
import { UrlObject } from "../scripts/UrlParser";

export type PoliticianBase = PartyModel | PartyImportModel | UrlObject;

export interface PartyModel {
  id?: number;
  name?: string;
  websiteId?: number;
  leader?: string;
  leaderId?: number;
  phoneNumber?: number;
  address?: string;
  href?: string;
  link?: string[];
  contact?: string[];
  info?: string[];
}

export class Party extends Model<PartyModel> {
  protected static rootUrl: string = "http://localhost:3000/partys";

  static build(attrs: PartyModel) {
    return new Party(
      new Attributes<PartyModel>(attrs),
      new Eventing(),
      new ApiSync<PartyModel>(this.rootUrl)
    );
  }

  static buildCollection(): Collection<Party, PartyModel> {
    return new Collection<Party, PartyModel>(this.rootUrl, (json: PartyModel) =>
      this.build(json)
    );
  }
}
