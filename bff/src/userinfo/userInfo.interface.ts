import { Document } from "mongoose";

export interface UserInfo extends Document {
  userId: string;
  projects: Project[];
  profile: {
    name: string;

    location: string;
    avatar_url: string;
    contact: Contact;
  };
}
