import { Module } from "@nestjs/common";

import { UserService } from "./user.service";
import { usersProviders } from "./user.model";
import { DBModule } from "../db/db.module";

@Module({
  imports: [DBModule],
  controllers: [],
  providers: [UserService, ...usersProviders],
  exports: [UserService, ...usersProviders],
})
export class UserModule {}
