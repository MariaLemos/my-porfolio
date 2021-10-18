import * as mongoose from "mongoose";

export const UserInfoSchema = new mongoose.Schema({
  userId: String,
  profile: {
    name: String,
    location: String,
    avatar_url: String,
    bio: String,

    contact: {
      linkedin: String,
      email: String,
      github: String,
    },
  },
  projects: Array,
  resume: {
    userId: String,
    graduaction: Array,
    courses: Array,
    workExperience: Array,
  },
});
