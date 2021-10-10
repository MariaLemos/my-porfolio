import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { GithubModule } from "./github/github.module";
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [GithubModule, UserModule, AuthModule,MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
