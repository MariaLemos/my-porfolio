import { Injectable, Inject } from "@nestjs/common";

import { Model, UpdateWriteOpResult } from "mongoose";

@Injectable()
export class ResumeService {
  constructor(
    @Inject("RESUME_MODEL")
    private ResumeModel: Model<Resume>
  ) {}

  async getResumes(
    userId: string
  ): Promise<{ [key in Lang]: Resume } | undefined> {
    try {
      const resumePt = await this.ResumeModel.findOne({
        userId: userId,
        lang: "pt-br",
      }).exec();
      const resumeEn = await this.ResumeModel.findOne({
        userId: userId,
        lang: "en-us",
      }).exec();
      return { "pt-br": resumePt, "en-us": resumeEn };
    } catch (e) {
      console.log(e);
    }
  }
  async updateResumes(
    newInfo: DeepPartial<BffResponse["resumes"]>
  ): Promise<UpdateWriteOpResult> {
    try {
      return await this.ResumeModel.updateOne(
        {
          userId: newInfo["pt-br"].userId,
        },
        { $set: newInfo }
      ).exec();
    } catch (error) {
      console.log(error);
    }
  }
  async updateResume(newInfo: Partial<Resume>): Promise<UpdateWriteOpResult> {
    try {
      return await this.ResumeModel.updateOne(
        {
          userId: newInfo.userId,
          lang: newInfo.lang,
        },
        { $set: newInfo }
      ).exec();
    } catch (error) {
      console.log(error);
    }
  }
  async removeResume(newInfo: Partial<Resume>, userId: string) {
    try {
      await this.ResumeModel.updateOne(
        {
          userId: userId,
          lang: newInfo.lang,
        },
        { ...newInfo, userId }
      ).exec();
    } catch (error) {
      console.log(error);
    }
  }
}
