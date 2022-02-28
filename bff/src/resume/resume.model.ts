import { Connection } from "mongoose";
import { ResumeSchema } from "./schemas/resume.schema";
export const ResumeProviders = [
  {
    provide: "RESUME_MODEL",
    useFactory: (connection: Connection) =>
      connection.model("resume", ResumeSchema),
    inject: ["DATABASE_CONNECTION"],
  },
];
