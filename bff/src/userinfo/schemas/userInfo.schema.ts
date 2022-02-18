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
  resume: {
    softSkills: Array,
    hardSkills: Array,
    userId: String,
    languages: Array,
    graduaction: Array,
    courses: Array,
    workExperience: Array,
  },
});
