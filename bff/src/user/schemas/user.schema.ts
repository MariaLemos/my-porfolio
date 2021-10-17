import * as mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  contact: {
    email: String,
    linkedin: String,
  },
});
