import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import faker from "faker";
import { Mappable } from "./CustomMap";
import { Model } from "./Model";
import { ApiSync } from "./ApiSync";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
  totalNumberOfVotes?: number;
  lat?: number;
  lng?: number;
}

const rootUrl = "http://localhost:3000/users";

export class User extends Model<UserProps> {
  data: UserProps;

  static buildUser(attrs: UserProps) {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    );
  }

  fake(): void {
    this.set("name") = faker.name.firstName();
    this..data.age = Math.floor(Math.random() * 101);
    this.data.lat = parseFloat(faker.address.latitude());
    this.data.lng = parseFloat(faker.address.longitude());
    this.data.totalNumberOfVotes = Math.random() * 11;
  }

  markerContent(): string {
    return `User name: ${this.name}`;
  }
}
