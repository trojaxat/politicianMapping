import { Politician } from "../models/Politician";
import { ActionTypes, Action } from "../actions";

export const politiciansReducer = (
  state: Politician[] = [],
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.fetchPoliticians:
      return action.payload;
    default:
      return state;
  }
};
