/**
 * link to specific profile <a title="Abercron, Dr. Michael von" href="https://www.bundestag.de/en/members/517818-517818" data-id="517818" class="bt-open-in-overlay" tabindex="0" data-language="de">
 * name <div class="bt-teaser-person-text"><h3>
 * party <p class="bt-person-fraktion">
 * implement mappable later?
 */
import { ApiSync } from "./ApiSync";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Mappable } from "./CustomMap";
import { Model } from "./Model";

interface PoliticianModel {
  id?: number;
  name?: string;
  age?: number;
  decisions?: number;
  party?: string;
  lat?: number;
  lng?: number;
  trustworthy: boolean;
}

const rootUrl = "http://localhost:3000/politicians";

export class Politician extends Model<PoliticianModel> {
  static buildPolitician(attrs: PoliticianModel) {
    return new Politician(
      new Attributes<PoliticianModel>(attrs),
      new Eventing(),
      new ApiSync<PoliticianModel>(rootUrl)
    );
  }

  markerContent(): string {
    if (this.get("name")) {
      return `User name: ${this.get("name")}`;
    }
    return `User name anonymous`;
  }
}
