import { CollectionView } from "./CollectionView";

export class List<T, K, R> extends CollectionView<T, K> {
  renderItem(model: T, itemParent: Element): void {
    new R(itemParent, model).render();
  }
}
