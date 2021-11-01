import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./local.strategy";
import { JwtStrategy } from "./jwt.strategy";
import { UserModule } from "../user/user.module";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { UserService } from "src/user/user.service";
import { usersProviders } from "../user/user.model";
import { DBModule } from "src/db/db.module";
@Module({
  imports: [
    DBModule,
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JwtSecret,
      signOptions: { expiresIn: "600s" },
    }),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    UserService,
    ...usersProviders,
  ],
  exports: [AuthService],
})
export class AuthModule {}
