import { IUser } from "./user.types";

export interface IAuthentication {
  isAuthenticated: boolean;
  user?: IUser;
}
