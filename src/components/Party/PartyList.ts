import { CollectionView } from "../../views/CollectionView";
import { Party, PartyModel } from "../../models/Party";
import { PartyShow } from "./PartyShow";

export class PartyList extends CollectionView<Party, PartyModel> {
  renderItem(model: Party, itemParent: Element): void {
    new PartyShow(itemParent, model).render();
  }
}
