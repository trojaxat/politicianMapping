import { Mappable } from "./CustomMap";

interface UserProps {
  name: string;
  age: number;
}
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
    data: UserProps,
    totalNumberOfVotes: number,
    location: {
      lat: number;
      lng: number;
    }
  ) {
    this.id = id;
    this.name = data.name;
    this.age = data.age;
    this.totalNumberOfVotes = totalNumberOfVotes;
    this.location = location;
  }

  markerContent(): string {
    return `User name: ${this.name}`;
  }
}
