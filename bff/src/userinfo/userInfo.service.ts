import { Injectable, Inject } from "@nestjs/common";
import { Model } from "mongoose";
import { UserInfo } from "./userInfo.interface";

@Injectable()
export class UserInfoService {
  constructor(
    @Inject("USERINFO_MODEL")
    private UserInfoModel: Model<UserInfo>
  ) {}

  async getUserInfo(
    userId: string
  ): Promise<Omit<BffResponseProfile, "type"> | undefined> {
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
    userId: string,
    newInfo: { profile: Profile; projects: Project[] }
  ): Promise<Omit<BffResponseProfile, "type">> {
    try {
      await this.UserInfoModel.updateOne(
        {
          userId,
        },
        { $set: newInfo }
      ).exec();
      return newInfo;
    } catch (error) {
      console.log(error);
    }
  }
}
