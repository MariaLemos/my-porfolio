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

@Controller()
export class ResumeController {
  constructor(private resumeService: ResumeService) {}

  @Get("/resumes/:userId")
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
  @Put("/resume/:userId")
  async removeTimeEvent(@Request() req): Promise<any> {
    try {
      return await this.resumeService.removeResume(req.body, req.params.userId);
    } catch (e) {
      console.log(e);
      throw new BadRequestException(e);
    }
  }
  @Patch("/resume/:userId")
  async updateResume(@Request() req): Promise<any> {
    try {
      return await this.resumeService.updateResume({
        ...req.body,
        userId: req.params.userId,
      });
    } catch (e) {
      console.log(e);
      throw new BadRequestException(e);
    }
  }
}
