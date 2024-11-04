import { View } from "../framework/views/views";
import { User, UserProps } from "./User";

export class UserShow extends View<User, UserProps> {
  onSelectClick = () => {
    const event = new CustomEvent('userSelected', {
      detail: this.model,
      bubbles: true
    });
    this.parent.dispatchEvent(event);
  }

  eventsMap(): { [key: string]: () => void; } {
    return {
      'click:.select-user': this.onSelectClick
    }
  }

  template(): string {
    return `
      <div class="user-card">
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
        <button class="select-user">Sélectionner</button>
      </div>
    `
  }
}