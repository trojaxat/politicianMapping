import {
  FetchTodosAction,
  DeleteTodoAction,
  FetchPoliticiansAction,
} from "../actions";

export enum ActionTypes {
  fetchTodos,
  deleteTodo,
  fetchUsers,
  fetchPoliticians,
}

export type Action =
  | FetchTodosAction
  | DeleteTodoAction
  | FetchPoliticiansAction;
