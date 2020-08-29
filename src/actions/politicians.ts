import axios, { AxiosResponse } from "axios";
import { Politician } from "../models/Politician";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

export interface FetchPoliticiansAction {
  type: ActionTypes.fetchPoliticians;
  payload: Politician[];
}

const politiciansUrl = "http://localhost:3000/Politicians";

export const fetchPoliticians = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Politician[]>(politiciansUrl);

    let politicians: Politician[] | undefined;
    response.data.forEach((value: any) => {
      let politician: Politician = Politician.build(value);
      politician = (politician as any) as Politician;

      if (typeof politicians === "undefined") {
        politicians = [politician];
      } else {
        politicians.push(politician);
      }
    });

    if (typeof politicians !== "undefined") {
      dispatch<FetchPoliticiansAction>({
        type: ActionTypes.fetchPoliticians,
        payload: politicians,
      });
    }
  };
};
