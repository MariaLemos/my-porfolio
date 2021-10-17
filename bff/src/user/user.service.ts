import { Injectable, Inject } from "@nestjs/common";
import * as CONFIG from "../config/index.json";
import axios from "axios";
import { Model } from "mongoose";
type User = any;
@Injectable()
export class UserService {
  constructor(
    @Inject("USER_MODEL")
    private UserModel: Model<User>
  ) {}

  // async findOne(username: string): Promise<User | undefined> {
  //   return this.users.find((user) => user.username === username);
  // }

  async create(createUserDto: any): Promise<User> {
    const createdUser = new this.UserModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.UserModel.find().exec();
  }
}
