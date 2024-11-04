import { View } from "../framework/views/views";
import { User, UserProps } from "./User";

export class UserShow extends View<User, UserProps> {

  eventsMap(): { [key: string]: () => void; } {
    return {}
  }

  template(): string {
    return `
      <div>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
      </div>
    `
  }
}