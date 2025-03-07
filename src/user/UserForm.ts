import { View } from "../framework/views/views"
import { User, UserProps } from "./User"

export class UserForm extends View<User, UserProps> {

  onSetAgeClick = () => {
    this.model.setRandomAge()
  }

  onSetNameClick = () => {
    const input = this.parent.querySelector('input')
    this.model.set({name: input!.value})
  }

  onSaveClick = () => {
    this.model.save();
  }

  template() {
    return `
      <div>
        <h1>User Form</h1>
        <label>Nom</label>
        <input />
        <button class="set-name">Save</button>
        <button class="set-age" >Random age</button>
        <button class="save-model" >Save model</button>
      </div>
    `
  }

  eventsMap() : {[key: string]: () => void} {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save-model': this.onSaveClick
    }
  }
}