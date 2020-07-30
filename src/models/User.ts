import axios, { AxiosResponse } from "axios";
import { Mappable } from "./CustomMap";

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  public events: { [key: string]: Callback[] } = {};
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

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback) => {
      callback();
    });
  }

  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.getData("id")}`)
      .then((response: AxiosResponse): void => {
        this.setData(response.data);
      });
  }

  save(): void {
    const id = this.getData("id");
    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this);
    } else {
      axios.post(`http://localhost:3000/users/`, this);
    }
  }

  markerContent(): string {
    return `User name: ${this.data.name}`;
  }
}
