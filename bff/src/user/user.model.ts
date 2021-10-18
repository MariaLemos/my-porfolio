import { Connection } from "mongoose";
import { UserSchema } from "./schemas/user.schema";
import { ResumeSchema } from "./schemas/resume.schema";
import { UserInfoSchema } from "./schemas/userInfo.schema";
export const usersProviders = [
  {
    provide: "USER_MODEL",
    useFactory: (connection: Connection) =>
      connection.model("user", UserSchema),
    inject: ["DATABASE_CONNECTION"],
  },
  {
    provide: "RESUME_MODEL",
    useFactory: (connection: Connection) =>
      connection.model("resume", ResumeSchema),
    inject: ["DATABASE_CONNECTION"],
  },
  {
    provide: "USERINFO_MODEL",
    useFactory: (connection: Connection) =>
      connection.model("userInfo", UserInfoSchema),
    inject: ["DATABASE_CONNECTION"],
  },
];
