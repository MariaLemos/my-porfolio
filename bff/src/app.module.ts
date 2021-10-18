import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { GithubModule } from "./github/github.module";
import { UserModule } from "./user/user.module";
import { AuthModule } from "./auth/auth.module";
import { DBModule } from "./db/db.module";
import { UserService } from "./user/user.service";
import { usersProviders } from "./user/user.model";
import { GithubService } from "./github/github.service";
import { UserInfoService } from "./userinfo/userinfo.service";
import { UserInfoModule } from "./userinfo/userInfo.module";
@Module({
  imports: [GithubModule, UserModule, UserInfoModule, AuthModule, DBModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
