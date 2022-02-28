import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GithubModule } from "./github/github.module";
import { UserModule } from "./user/user.module";
import { AuthModule } from "./auth/auth.module";
import { DBModule } from "./db/db.module";
import { UserInfoModule } from "./userinfo/userInfo.module";
import { ResumeModule } from "./resume/resume.module";
@Module({
  imports: [
    GithubModule,
    UserModule,
    ResumeModule,
    UserInfoModule,
    AuthModule,
    DBModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
