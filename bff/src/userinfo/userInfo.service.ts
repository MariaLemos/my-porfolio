import { Injectable, Inject } from "@nestjs/common";
import * as CONFIG from "../config/index.json";
import axios from "axios";
import { Model, UpdateWriteOpResult } from "mongoose";
import { UserInfo } from "./userInfo.interface";
import { userInfo } from "os";

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
    createUserDto: BffResponse
  ): Promise<UpdateWriteOpResult> {
    try {
      const createdUser = new this.UserInfoModel(createUserDto);
      return await this.UserInfoModel.updateOne(
        {
          userId: createUserDto.userId,
        },
        { $set: createdUser }
      ).exec();
    } catch (error) {
      console.log(error);
    }
  }
}
