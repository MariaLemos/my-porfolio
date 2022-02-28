import { Injectable, Inject } from "@nestjs/common";
import * as CONFIG from "../config/index.json";
import axios from "axios";
import { Model, UpdateWriteOpResult } from "mongoose";

@Injectable()
export class ResumeService {
  constructor(
    @Inject("RESUME_MODEL")
    private ResumeModel: Model<Resume>
  ) {}

  async getResumes(userId: string): Promise<Resume[] | undefined> {
    try {
      const resumes = await this.ResumeModel.find({
        userId: userId,
      }).exec();
      return resumes;
    } catch (e) {
      console.log(e);
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
