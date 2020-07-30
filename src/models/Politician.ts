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
