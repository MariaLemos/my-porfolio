import { Injectable } from "@nestjs/common";
import * as CONFIG from "../config/index.json";
import axios from "axios";
type User = any;
@Injectable()
export class UserService {
  private readonly users = [
    {
      userId: 1,
      username: "john",
      password: "changeme",
    },
    {
      userId: 2,
      username: "maria",
      password: "lumos",
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
