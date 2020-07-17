export default class Politician {
  id: number;
  name: string;
  age: number;
  decision: boolean;
  party: string;

  constructor(
    id: number,
    name: string,
    age: number,
    decision: boolean,
    party: string
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.decision = decision;
    this.party = party;
  }
}
