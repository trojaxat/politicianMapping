import { combineReducers } from "redux";
import { todosReducer } from "./todos";
import { usersReducer } from "./users";
import { Todo } from "../actions";
import { User } from "../models/User";

export interface StoreState {
  todos: Todo[];
  users: User[];
}
export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
  users: usersReducer,
});
