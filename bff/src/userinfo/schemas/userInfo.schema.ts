import * as mongoose from "mongoose";

export const UserInfoSchema = new mongoose.Schema({
  userId: String,
  profile: {
    name: String,
    location: String,
    avatar_url: String,

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
