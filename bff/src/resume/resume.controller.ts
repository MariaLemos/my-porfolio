import {
  Get,
  Controller,
  Request,
  Param,
  BadRequestException,
  Patch,
  Put,
  HttpCode,
} from "@nestjs/common";
import { ResumeService } from "./resume.service";

@Controller("resume")
export class ResumeController {
  constructor(private resumeService: ResumeService) {}

  @Get(":userId")
  async getResumes(
    @Param() params: { userId: string }
  ): Promise<BffResponseResumes> {
    try {
      return {
        type: "RESUMES",
        resumes: await this.resumeService.getResumes(params.userId),
      };
    } catch (e) {
      console.log(e);
      throw new BadRequestException(e);
    }
  }
  @Put(":userId")
  @HttpCode(202)
  async removeTimeEvent(@Request() req): Promise<BffResponseResumes> {
    try {
      await this.resumeService.removeResume(req.body, req.params.userId);
      return {
        type: "RESUMES",
        resumes: await this.resumeService.getResumes(req.params.userId),
      };
    } catch (e) {
      console.log(e);
      throw new BadRequestException(e);
    }
  }
  @Patch(":userId")
  @HttpCode(202)
  async updateResume(@Request() req): Promise<BffResponseResumes> {
    try {
      await this.resumeService.updateResume({
        ...req.body,
        userId: req.params.userId,
      });

      return {
        type: "RESUMES",
        resumes: await this.resumeService.getResumes(req.params.userId),
      };
    } catch (e) {
      console.log(e);
      throw new BadRequestException(e);
    }
  }
}
