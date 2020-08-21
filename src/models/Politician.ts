/**
 * link to specific profile <a title="Abercron, Dr. Michael von" href="https://www.bundestag.de/en/members/517818-517818" data-id="517818" class="bt-open-in-overlay" tabindex="0" data-language="de">
 * name <div class="bt-teaser-person-text"><h3>
 * party <p class="bt-person-fraktion">
 * implement mappable later?
 */
import { ApiSync } from "./ApiSync";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Collection } from "./Collection";
import { Mappable } from "./CustomMap";
import { Model } from "./Model";
import { PoliticianImportModel } from "../scripts/PoliticianImport";
import { UrlObject } from "../scripts/UrlParser";

export type PoliticianBase =
  | PoliticianModel
  | PoliticianImportModel
  | UrlObject;

export interface PoliticianModel {
  id?: number;
  name?: string;
  age?: number;
  decisions?: number;
  party?: string;
  lat?: number;
  lng?: number;
  trustworthy?: boolean;
  href?: string;
  link?: string[];
  contact?: string[];
  info?: string[];
}

const rootUrl = "http://localhost:3000/politicians";

export class Politician extends Model<PoliticianModel> {
  static build(attrs: PoliticianBase) {
    return new Politician(
      new Attributes<PoliticianModel>(attrs),
      new Eventing(),
      new ApiSync<PoliticianModel>(rootUrl)
    );
  }

  static buildCollection(): Collection<Politician, PoliticianModel> {
    return new Collection<Politician, PoliticianModel>(
      rootUrl,
      (json: PoliticianModel) => Politician.build(json)
    );
  }

  markerContent(): string {
    if (this.get("name")) {
      return `User name: ${this.get("name")}`;
    }
    return `User name anonymous`;
  }
}
