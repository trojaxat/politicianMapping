export class User {
  id: number;
  name: string;
  age: number;
  totalNumberOfVotes: number;
  location: {
    lat: number;
    lon: number;
  };

  constructor(
    id: number,
    name: string,
    age: number,
    totalNumberOfVotes: number
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.totalNumberOfVotes = totalNumberOfVotes;
  }
}
