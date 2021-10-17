import * as mongoose from "mongoose";
const url =
  "mongodb+srv://dbApiUser:testesemsurpresas@cluster0.uplbu.mongodb.net/portfolioData?retryWrites=true&w=majority";
export const dbProviders = [
  {
    provide: "DATABASE_CONNECTION",
    useFactory: (): Promise<typeof mongoose> => mongoose.connect(url),
  },
];
