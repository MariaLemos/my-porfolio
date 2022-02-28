import { AppService } from "./app.service";
import {
  Get,
  Controller,
  Request,
  Post,
  UseGuards,
  Param,
  BadRequestException,
  Patch,
  Put,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth/auth.service";
import { UserInfoService } from "./userinfo/userInfo.service";
import { ResumeService } from "./resume/resume.service";
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
    private userInfoService: UserInfoService,
    private resumeService: ResumeService
  ) {}

  @Get("/userInfo/:userId")
  async getHello(@Param() params: { userId: string }): Promise<BffResponse> {
    try {
      const userInfo = await this.userInfoService.getUserInfo(params.userId);
      return {
        resumes: await this.resumeService.getResumes(params.userId),
        profile: userInfo.profile,
        projects: userInfo.projects,
        userId: userInfo.userId,
      };
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
  @Put("/userInfo/:userId")
  async removeTimeEvent(@Request() req): Promise<any> {
    try {
      return await this.userInfoService.removeUserInfo(
        req.body,
        req.params.userId
      );
    } catch (e) {
      console.log(e);
      throw new BadRequestException(e);
    }
  }
  @Patch("/userInfo/:userId")
  async updateUserInfo(@Request() req): Promise<any> {
    try {
      return await this.userInfoService.updateUserInfo({
        ...req.body,
        userId: req.params.userId,
      });
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
