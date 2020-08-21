import { List } from "./List";
import { User, UserProps } from "../models/User";
import { UserShow } from "./UserShow";

export class UserList extends List<User, UserProps, UserShow> {}
