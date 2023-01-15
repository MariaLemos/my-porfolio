import { Injectable, Inject } from "@nestjs/common";
import * as mongoose from "mongoose";
import { Model, UpdateWriteOpResult } from "mongoose";
import { ResumeSchema } from "./schemas/resume.schema";

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
        lang: { $eq: "en-us" },
      }).exec();

      return {
        "pt-br": resumePt,
        "en-us": resumeEn,
      };
    } catch (e) {
      console.log(e);
    }
  }
  async updateResumes(newInfo: Partial<Resumes>): Promise<Resumes> {
    try {
      await this.ResumeModel.updateOne(
        {
          userId: newInfo["pt-br"].userId,
        },
        { $set: newInfo["pt-br"] }
      ).exec();
      await this.ResumeModel.updateOne(
        {
          userId: newInfo["en-us"].userId,
        },
        { $set: newInfo["en-us"] }
      ).exec();
      return;
    } catch (error) {
      console.log(error);
    }
  }
  async updateResume(newInfo: Partial<Resume>) {
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
