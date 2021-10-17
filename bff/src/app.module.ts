import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { GithubModule } from "./github/github.module";
import { UserModule } from "./user/user.module";
import { AuthModule } from "./auth/auth.module";
import { DBModule } from "./db/db.module";
import { UserService } from "./user/user.service";
import { usersProviders } from "./user/user.model";
@Module({
  imports: [GithubModule, UserModule, AuthModule, DBModule],
  controllers: [AppController],
  providers: [AppService, UserService, ...usersProviders],
})
export class AppModule {}
