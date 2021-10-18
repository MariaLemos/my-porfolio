import { AppService } from "./app.service";
import {
  Get,
  Controller,
  Request,
  Post,
  UseGuards,
  Param,
  BadRequestException,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth/auth.service";
import { UserService } from "./user/user.service";
import { UserInfoService } from "./userinfo/userInfo.service";
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
    private userInfoService: UserInfoService
  ) {}

  @Get("/userInfo/:userId")
  async getHello(@Param() params: { userId: string }): Promise<BffResponse> {
    try {
      return await this.userInfoService.getUserInfo(params.userId);
    } catch (e) {
      console.log(e);
      throw new BadRequestException(e);
    }
  }
  @Get("/gitInfo/:userId")
  async syncGitHub(@Param() params: { userId: string }): Promise<any> {
    try {
      return await this.appService.syncGitHub(params.userId);
    } catch (e) {
      console.log(e);
      throw new BadRequestException(e);
    }
  }
  @Post("/gitInfo/:userId")
  async updateUserInfo(@Request() req): Promise<any> {
    try {
      return await this.userInfoService.updateUserInfo(req.body);
    } catch (e) {
      console.log(e);
      throw new BadRequestException(e);
    }
  }
  @UseGuards(AuthGuard("local"))
  @Post("auth/login")
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard("jwt"))
  @Get("profile")
  getProfile(@Request() req) {
    return req.user;
  }
}
