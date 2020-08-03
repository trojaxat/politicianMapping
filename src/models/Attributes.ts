export class Attributes<T> {
  constructor(private data: T) {}

  get = <Key extends keyof T>(key: Key): T[Key] => {
    return this.data[key];
  };

  getAll(): T {
    return this.data;
  }

  set(update: Partial<T>): void {
    (<any>Object).assign(this.data, update);
  }
}
