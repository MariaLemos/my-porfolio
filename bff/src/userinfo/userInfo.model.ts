import { Connection } from "mongoose";
import { UserInfoSchema } from "./schemas/userInfo.schema";
export const userInfosProviders = [
  {
    provide: "USERINFO_MODEL",
    useFactory: (connection: Connection) =>
      connection.model("userInfo", UserInfoSchema),
    inject: ["DATABASE_CONNECTION"],
  },
];
