import { Module } from "@nestjs/common";

import { UserInfoService } from "./userInfo.service";
import { userInfosProviders } from "./userInfo.model";
import { DBModule } from "../db/db.module";

@Module({
  imports: [DBModule],
  controllers: [],
  providers: [UserInfoService, ...userInfosProviders],
  exports: [UserInfoService, ...userInfosProviders],
})
export class UserInfoModule {}
