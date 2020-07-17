export default class User {
  id: number;
  name: string;
  age: number;
  totalNumberOfVotes: number;

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
