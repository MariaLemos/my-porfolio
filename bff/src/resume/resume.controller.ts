import {
  Get,
  Controller,
  Request,
  Param,
  BadRequestException,
  Patch,
  Put,
} from "@nestjs/common";
import { ResumeService } from "./resume.service";

@Controller("resume")
export class ResumeController {
  constructor(private resumeService: ResumeService) {}

  @Get(":userId")
  async getResumes(
    @Param() params: { userId: string }
  ): Promise<BffResponse["resumes"]> {
    try {
      return await {
        ...this.resumeService.getResumes(params.userId),
      };
    } catch (e) {
      console.log(e);
      throw new BadRequestException(e);
    }
  }
  @Put(":userId")
  async removeTimeEvent(@Request() req): Promise<any> {
    try {
      await this.resumeService.removeResume(req.body, req.params.userId);
      return await this.resumeService.getResumes(req.params.userId);
    } catch (e) {
      console.log(e);
      throw new BadRequestException(e);
    }
  }
  @Patch(":userId")
  async updateResume(@Request() req): Promise<any> {
    try {
      console.log("a");
      await this.resumeService.updateResume({
        ...req.body,
        userId: req.params.userId,
      });

      return await this.resumeService.getResumes(req.params.userId);
    } catch (e) {
      console.log(e);
      throw new BadRequestException(e);
    }
  }
}
