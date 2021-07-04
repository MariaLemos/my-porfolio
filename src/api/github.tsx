import axios from "axios";
import CONFIG from "../config/index.json";

export async function getGitHubInfo() {
  const res = await axios({
    url: `/users/${CONFIG.ownerGitId}/repos`,
    method: "GET",
    baseURL: CONFIG.gitHubUrl,
  });
  if (res.status === 200) {
    return await res.data;
  }
}
export async function getGitHubProfile() {
  const res = await axios({
    url: `/users/${CONFIG.ownerGitId}`,
    method: "GET",
    baseURL: CONFIG.gitHubUrl,
  });

  if (res.status === 200) {
    return await res.data;
  }
}
