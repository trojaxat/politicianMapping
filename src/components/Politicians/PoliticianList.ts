import { CollectionView } from "../../views/CollectionView";
import { Politician, PoliticianModel } from "../../models/Politician";
import { PoliticianShow } from "./PoliticianShow";

export class PoliticianList extends CollectionView<
  Politician,
  PoliticianModel
> {
  renderItem(model: Politician, itemParent: Element): void {
    new PoliticianShow(itemParent, model).render();
  }
}
