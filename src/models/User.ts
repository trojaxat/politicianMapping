import { Attributes } from "./Attributes";
import { Collection } from "./Collection";
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

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(rootUrl, (json: UserProps) =>
      User.buildUser(json)
    );
  }

  fake = (): void => {
    this.set({ name: faker.name.firstName() });
    this.set({ age: Math.floor(Math.random() * 101) });
    this.set({ lat: parseFloat(faker.address.latitude()) });
    this.set({ lng: parseFloat(faker.address.longitude()) });
    this.set({ totalNumberOfVotes: Math.random() * 11 });
  };

  markerContent(): string {
    return `User name: ${this.data.name}`;
  }
}
