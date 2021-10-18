import { Injectable, Inject } from "@nestjs/common";
import { Model } from "mongoose";
import { User } from "./user.interface";

@Injectable()
export class UserService {
  constructor(
    @Inject("USER_MODEL")
    private UserModel: Model<User>
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    return await this.UserModel.findOne({ username: username }).exec();
  }

  async create(createUserDto: any): Promise<User> {
    const createdUser = new this.UserModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.UserModel.find().exec();
  }
}
