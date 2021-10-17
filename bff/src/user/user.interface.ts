import { Document } from "mongoose";

export interface Users extends Document {
  users: Array<User>;
}
export interface User extends Document {
  readonly username: string;
  readonly password: string;
}
