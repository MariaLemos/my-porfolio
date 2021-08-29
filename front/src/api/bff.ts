import axios from "axios";
import CONFIG from "../config/index.json";

export async function getInfo(): Promise<BffResponse> {
  try {
    const res = await axios({
      url: `/`,
      method: "GET",
      baseURL: CONFIG.bffUrl,
    });

    return res.data;
  } catch (e) {
    throw new Error(e);
  }
}
