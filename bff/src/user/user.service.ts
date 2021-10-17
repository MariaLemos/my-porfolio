import { Injectable, Inject } from "@nestjs/common";
import * as CONFIG from "../config/index.json";
import axios from "axios";
import { Model } from "mongoose";
import { Users, User } from "./user.interface";

@Injectable()
export class UserService {
  constructor(
    @Inject("USER_MODEL")
    private UserModel: Model<User>
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    const users = await this.findAll();
    return await users.find((user) => user.username === username);
  }

  async create(createUserDto: any): Promise<User> {
    const createdUser = new this.UserModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.UserModel.find().exec();
  }
}
