import { View } from "../framework/views/views";
import { User, UserProps } from "./User";
import { UserForm } from "./UserForm";
import { UserShow } from "./UserShow";


export class UserEdit extends View<User, UserProps> {

  regionsMap(): {[key: string]: string;}{
    return {
      userShow: '.user-show',
      userForm: '.user-form'
    }
  }

  template() : string {
    return `
      <div>
        <div class="user-show"></div>
        <div class="user-form"></div>
      </div>
    `
  }

  onRender() : void {
    new UserShow(this.regions.userShow, this.model).render()
    new UserForm(this.regions.userForm, this.model).render()
  }

}