import { Document } from "mongoose";

export interface Resume extends Document {
  userId: string;
  graduaction: Graduaction[];
  courses: {
    name: string;
    instituicion: string;
    hours: number;
  }[];
  workExperience: Work[];
}
export interface UserInfo extends Document {
  userId: string;
  projects: Project[];
  profile: {
    name: string;
    location: string;
    avatar_url: string;
    bio: string;
    contact: Contact;
  };
}
export interface User extends Document {
  readonly username: string;
  readonly password: string;
}
