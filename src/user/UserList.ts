import { CollectionView } from "../framework/views/CollectionView";
import { User, UserProps } from "./User";
import { UserShow } from "./UserShow";

export class UserList extends CollectionView<User, UserProps> {
  renderItem(model: User, itemParent: Element): void {
    new UserShow(itemParent, model).render();
  }
} 