import { Mappable } from "./CustomMap";

export class Politician implements Mappable {
  id: number;
  name: string;
  age: number;
  decision: boolean;
  party: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor(
    id: number,
    name: string,
    age: number,
    decision: boolean,
    party: string,
    location: {
      lat: number;
      lng: number;
    }
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.decision = decision;
    this.party = party;
    this.location = location;
  }

  markerContent(): string {
    let string = `Politician: ${this.name}
    Political party: ${this.party}
    `;
    return string;
  }
}
