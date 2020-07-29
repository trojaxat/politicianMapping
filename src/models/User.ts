import { Mappable } from "./CustomMap";

interface UserProps {
  name?: string;
  age?: number;
}
export class User {
  constructor(
    private data: UserProps,
    public id?: number,
    public totalNumberOfVotes?: number,
    public location?: Partial<Mappable>
  ) {}

  getData(propName: string): number | string {
    return this.data[propName];
  }

  setData(update: Partial<UserProps>): void {
    (<any>Object).assign(this.data, update);
  }

  markerContent(): string {
    return `User name: ${this.data.name}`;
  }
}
