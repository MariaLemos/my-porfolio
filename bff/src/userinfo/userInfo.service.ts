import { Injectable, Inject } from "@nestjs/common";
import * as CONFIG from "../config/index.json";
import axios from "axios";
import { Model, UpdateWriteOpResult } from "mongoose";
import { UserInfo } from "./userInfo.interface";

@Injectable()
export class UserInfoService {
  constructor(
    @Inject("USERINFO_MODEL")
    private UserInfoModel: Model<UserInfo>
  ) {}

  async getUserInfo(userId: string): Promise<BffResponse | undefined> {
    try {
      const userInfos = await this.UserInfoModel.findOne({
        userId: userId,
      }).exec();
      return userInfos;
    } catch (e) {
      console.log(e);
    }
  }

  async updateUserInfo(
    newInfo: Partial<BffResponse>
  ): Promise<UpdateWriteOpResult> {
    try {
      return await this.UserInfoModel.updateOne(
        {
          userId: newInfo.userId,
        },
        { $set: newInfo }
      ).exec();
    } catch (error) {
      console.log(error);
    }
  }
  async removeUserInfo(newInfo: Partial<BffResponse>, userId: string) {
    try {
      await this.UserInfoModel.updateOne(
        {
          userId: userId,
        },
        { ...newInfo, userId }
      ).exec();
    } catch (error) {
      console.log(error);
    }
  }
}
