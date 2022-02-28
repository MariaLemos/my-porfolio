import { Document } from "mongoose";

export interface UserInfo extends Document {
  userId: string;
  projects: Project[];
  profile: {
    name: string;
    objetive: string;
    location: string;
    avatar_url: string;
    bio: string;
    subTitle: string[];
    contact: Contact;
  };
}
