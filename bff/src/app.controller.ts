import { AppService } from "./app.service";
import {
  Get,
  Controller,
  Request,
  Post,
  UseGuards,
  Param,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth/auth.service";
import { UserService } from "./user/user.service";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
    private userService: UserService
  ) {}

  @Get("/userInfo/:userId")
  async getHello(@Param() params: { userId: string }): Promise<BffResponse> {
    return await this.appService.getInfo(params.userId);
  }
  @Get("/gitInfo/:userId")
  async syncGitHub(@Param() params: { userId: string }): Promise<any> {
    return await this.appService.syncGitHub(params.userId);
  }
  @Get("/db")
  async getdb(): Promise<any> {
    return await this.userService.findAll();
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
