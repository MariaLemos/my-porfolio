import * as mongoose from "mongoose";

export const UserInfoSchema = new mongoose.Schema({
  userId: String,
  profile: {
    name: String,
    location: String,
    avatar_url: String,
    bio: String,
    objetive: String,
    subTitle: Array,
    contact: {
      linkedin: String,
      email: String,
      github: String,
      whatsapp: String,
      site: String,
    },
  },
  projects: Array,
});
