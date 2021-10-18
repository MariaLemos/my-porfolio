import * as mongoose from "mongoose";

export const ResumeSchema = new mongoose.Schema({
  userId: String,
  graduaction: Array,
  courses: Array,
  workExperience: Array,
});
