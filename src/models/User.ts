import { Mappable } from "./CustomMap";

export class User implements Mappable {
  id: number;
  name: string;
  age: number;
  totalNumberOfVotes: number;
  location: {
    lat: number;
    lng: number;
  };

  constructor(
    id: number,
    name: string,
    age: number,
    totalNumberOfVotes: number,
    location: {
      lat: number;
      lng: number;
    }
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.totalNumberOfVotes = totalNumberOfVotes;
    this.location = location;
  }

  markerContent(): string {
    return `User name: ${this.name}`;
  }
}
