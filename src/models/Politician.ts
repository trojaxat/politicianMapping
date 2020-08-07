/**
 * link to specific profile <a title="Abercron, Dr. Michael von" href="https://www.bundestag.de/en/members/517818-517818" data-id="517818" class="bt-open-in-overlay" tabindex="0" data-language="de">
 * name <div class="bt-teaser-person-text"><h3>
 * party <p class="bt-person-fraktion">
 *
 */
import { Mappable } from "./CustomMap";

export class Politician implements Mappable {
  id: number;
  name: string;
  age: number;
  decision: boolean;
  party: string;
  lat: number;
  lng: number;

  constructor(
    id: number,
    name: string,
    age: number,
    decision: boolean,
    party: string,
    lat: number,
    lng: number
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.decision = decision;
    this.party = party;
    this.lat = lat;
    this.lng = lng;
  }

  markerContent(): string {
    let string = `Politician: ${this.name}
    Political party: ${this.party}
    `;
    return string;
  }
}
