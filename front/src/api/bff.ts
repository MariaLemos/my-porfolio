import axios from "axios";
import CONFIG from "../config/index.json";

export async function getInfo(): Promise<BffResponse> {
  const res = await axios({
    url: `/`,
    method: "GET",
    baseURL: "http://localhost:3001",
  });
  if (res.status === 200) {
    return res.data;
  } else {
    throw new Error("erro no get bff");
  }
}
