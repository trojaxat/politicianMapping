import { Politician, PoliticianModel } from "../../models/Politician";
import { View } from "../../views/View";

export class PoliticianShow extends View<Politician, PoliticianModel> {
  template(): string {
    return `
        <div>
          <h1> Politician Detail <h1>
          <div> Politician name: ${this.model.get("name")}</div>
          <div> Politician party: ${this.model.get("party")}</div>
          <div> Politician job: ${this.model.get("job")}</div>
        </div>
       `;
  }
}
