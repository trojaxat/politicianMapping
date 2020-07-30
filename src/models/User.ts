import { Mappable } from "./CustomMap";
interface UserProps {
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  events: { [key: string]: Callback[] } = {};

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

  markerContent(): string {
    return `User name: ${this.data.name}`;
  }
}
