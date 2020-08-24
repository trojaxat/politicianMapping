import { Party, PartyModel } from "../models/Party";
import { View } from "./View";

export class PartyShow extends View<Party, PartyModel> {
  // create here a method to return PartyShow as a type, so that it can pass on the property R into generic List
  template(): string {
    return `
        <div>
          <h1> Party Detail <h1>
          <div> Party name: ${this.model.get("name")}</div>
          <div> Party age: ${this.model.get("leader")}</div>
        </div>
       `;
  }
}
