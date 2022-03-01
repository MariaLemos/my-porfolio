import * as mongoose from "mongoose";

export const ResumeSchema = new mongoose.Schema({
  softSkills: Array,
  hardSkills: Array,
  userId: String,
  languages: Array,
  graduaction: Array,
  courses: Array,
  workExperience: Array,
  bio: String,
  subTitles: Array,
  lang: String,
});
