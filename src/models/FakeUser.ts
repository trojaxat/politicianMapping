import faker from "faker";
import { Mappable } from "./CustomMap";

export class FakeUser implements Mappable {
  id: number;
  name: string;
  age: number;
  totalNumberOfVotes: number;
  lat: number;
  lng: number;

  constructor(id: number) {
    this.id = id;
    this.name = faker.name.firstName();
    this.lat = parseFloat(faker.address.latitude());
    this.lng = parseFloat(faker.address.longitude());
    this.age = Math.floor(Math.random() * 101);
    this.totalNumberOfVotes = Math.random() * 11;
  }

  markerContent(): string {
    return `Test data name: ${this.name}`;
  }
}
