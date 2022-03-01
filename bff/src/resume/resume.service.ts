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
      const resumes = await this.ResumeModel.find({
        userId: userId,
      }).exec();
      const resumeEn = await this.ResumeModel.find({
        userId: userId,
        lang: { $eq: "en-us" },
      }).exec();
      console.log(resumeEn);
      return {
        "pt-br": resumes.find((resume) => resume.lang === "pt-br"),
        "en-us": resumes.find((resume) => resume.lang === "en-us"),
      };
    } catch (e) {
      console.log(e);
    }
  }
  async updateResumes(
    newInfo: DeepPartial<BffResponse["resumes"]>
  ): Promise<UpdateWriteOpResult> {
    try {
      return await this.ResumeModel.updateMany(
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
