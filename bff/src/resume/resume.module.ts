import { Module } from "@nestjs/common";
import { ResumeService } from "./resume.service";
import { ResumeProviders } from "./resume.model";
import { DBModule } from "../db/db.module";
import { ResumeController } from "./resume.controller";

@Module({
  imports: [DBModule],
  controllers: [],
  providers: [ResumeService, ResumeController, ...ResumeProviders],
  exports: [ResumeService, ...ResumeProviders],
})
export class ResumeModule {}
