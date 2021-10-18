import { Injectable, Inject } from "@nestjs/common";
import * as CONFIG from "../config/index.json";
import axios from "axios";
import { Model } from "mongoose";
import { User, Resume, UserInfo } from "./user.interface";

@Injectable()
export class UserService {
  constructor(
    @Inject("RESUME_MODEL")
    private ResumeModel: Model<Resume>,
    @Inject("USER_MODEL")
    private UserModel: Model<User>,
    @Inject("USERINFO_MODEL")
    private UserInfoModel: Model<UserInfo>
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    const users = await this.findAll();

    return await users.find((user) => user.username === username);
  }
  async getResume(userId: string): Promise<Resume> {
    const resumes = await this.ResumeModel.find().exec();
    return resumes.find((resume) => resume.userId === userId);
  }
  async getUserInfo(userId: string): Promise<UserInfo> {
    const userInfos = await this.UserInfoModel.find().exec();
    console.log(userInfos);
    return userInfos.find((resume) => resume.userId === userId);
  }
  async create(createUserDto: any): Promise<User> {
    const createdUser = new this.UserModel(createUserDto);
    return createdUser.save();
  }
  async updateGitHubInfo(
    createUserDto: Omit<BffResponse, "resume">
  ): Promise<UserInfo> {
    const createdUser = new this.UserInfoModel(createUserDto);
    return createdUser.save();
  }
  async findAll(): Promise<User[]> {
    return this.UserModel.find().exec();
  }
}
