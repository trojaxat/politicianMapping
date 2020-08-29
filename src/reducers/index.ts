import { combineReducers } from "redux";
import { todosReducer } from "./todos";
import { usersReducer } from "./users";
import { politiciansReducer } from "./politicians";
import { Todo } from "../actions";
import { User } from "../models/User";
import { Politician } from "../models/Politician";

export interface StoreState {
  todos: Todo[];
  users: User[];
  politicians: Politician[];
}
export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
  users: usersReducer,
  politicians: politiciansReducer,
});
