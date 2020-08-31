/**
 * External imports
 */
import * as faker from "faker";
// import faker from "faker";
// const faker = require("faker");

/**
 * Internal imports
 */
import { Attributes } from "./Attributes";
import { Collection } from "./Collection";
import { Eventing } from "./Eventing";
import { Model } from "./Model";
import { ApiSync } from "./ApiSync";

export interface UserProps {
  id?: number;
  username?: string;
  name?: string;
  age?: number;
  totalNumberOfVotes?: number;
  lat?: number;
  lng?: number;
}

export class User extends Model<UserProps> {
  protected static rootUrl: string = "http://localhost:3000/users";

  static build(attrs: UserProps) {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(this.rootUrl)
    );
  }

  static buildCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(this.rootUrl, (json: UserProps) =>
      this.build(json)
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
    if (this.get("name")) {
      return `User name: ${this.get("name")}`;
    }
    return `User name anonymous`;
  }
}
