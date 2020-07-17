export default class Parliament {
  id: number;
  name: string;
  numberOfMembers: number;
  decisionsThisYear: number;

  constructor(
    id: number,
    name: string,
    numberOfMembers: number,
    decisionsThisYear: number
  ) {
    this.id = id;
    this.name = name;
    this.numberOfMembers = numberOfMembers;
    this.decisionsThisYear = decisionsThisYear;
  }
}
