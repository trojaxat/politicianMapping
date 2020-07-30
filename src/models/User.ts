import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
import { Mappable } from "./CustomMap";

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = "http://localhost:3000/users";

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);

  constructor(
    private data: UserProps,
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
