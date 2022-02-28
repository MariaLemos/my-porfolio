import { Module } from "@nestjs/common";

import { ResumeService } from "./resume.service";
import { ResumeProviders } from "./resume.model";
import { DBModule } from "../db/db.module";

@Module({
  imports: [DBModule],
  controllers: [],
  providers: [ResumeService, ...ResumeProviders],
  exports: [ResumeService, ...ResumeProviders],
})
export class ResumeModule {}
