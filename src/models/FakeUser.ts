import faker from "faker";
import { Mappable } from "./CustomMap";

export class FakeUser implements Mappable {
  id: number;
  name: string;
  age: number;
  totalNumberOfVotes: number;
  location: {
    lat: number;
    lng: number;
  };

  constructor(id: number) {
    this.id = id;
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
    this.age = Math.floor(Math.random() * 101);
    this.totalNumberOfVotes = Math.random() * 11;
  }

  markerContent(): string {
    return `Test data name: ${this.name}`;
  }
}
