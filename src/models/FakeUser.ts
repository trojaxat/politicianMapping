import faker from "faker";

export class FakeUser {
  id: number;
  name: string;
  age: number;
  totalNumberOfVotes: number;
  location: {
    lat: number;
    lon: number;
  };

  constructor(id: number) {
    this.id = id;
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lon: parseFloat(faker.address.longitude()),
    };
    this.age = Math.floor(Math.random() * 101);
    this.totalNumberOfVotes = Math.random() * 11;
  }
}
