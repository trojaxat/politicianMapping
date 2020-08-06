/*
 * this refers to an instance of userform which has inherited from the abstrakt class View
 * this.model is known to be an instance of a user because we pass in User
 * this.parent refers to the "root", aka the element that was given to the view lass
 * this.model.get(something) knows what its able to get and set through the parameter UserProps
 */
import { User, UserProps } from "../models/User";
import { View } from "../views/View";

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-info": this.onSetGivenInformationClick,
      "click:.set-random": this.onSetRandomInformationClick,
      "click:.save-model": this.onSaveClick,
    };
  }

  template(): string {
    return `
        <div>
            <input class="age" type="number" placeholder="Age"/>
            <input class="name" type="text" placeholder="Name"/>
            <button class="set-info">Set given information</button>
            <button class="set-random">Set random information</button>
            <button class="save-model">Save</button>
        <div>
        `;
  }

  onSetGivenInformationClick = (): void => {
    const inputs = this.parent.querySelectorAll("input");
    inputs.forEach((input: any): void => {
      this.model.set({ [input.className]: input.value });
    });
  };

  onSetRandomInformationClick = (): void => {
    this.model.fake();
  };

  onSaveClick = (): void => {
    this.model.save();
  };
}
