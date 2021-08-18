import axios from "axios";
import CONFIG from "../config/index.json";

export async function getInfo() {
  const res = await axios({
    url: `/usuario/2`,
    method: "GET",
    baseURL: "http://localhost:3333",
  });
  if (res.status === 200) {
    return console.log(res);
  }
  return [];
}
