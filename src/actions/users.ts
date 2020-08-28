import axios from "axios";
import { User, UserProps } from "../models/User";
import { Dispatch, Action } from "redux";
import { ActionTypes } from "./types";

export interface FetchUsersAction {
  type: ActionTypes.fetchUsers;
  payload: User[];
}

const users = "http://localhost:3000/users";

export const fetchUsers = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<User[]>(users);

    dispatch<FetchUsersAction>({
      type: ActionTypes.fetchUsers,
      payload: response.data,
    });
  };
};
