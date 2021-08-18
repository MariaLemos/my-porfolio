import axios from "axios";
import CONFIG from "../config/index.json";

export async function getGitHubInfo(): Promise<Project[]> {
  const res = await axios({
    url: `/users/${CONFIG.ownerGitId}/repos`,
    method: "GET",
    baseURL: CONFIG.gitHubUrl,
  });
  if (res.status === 200) {
    return await Promise.all(
      res.data.map(
        async (repository: Project) =>
          await {
            ...repository,
            languages: (await getGithubLang(repository.name)) ?? [],
          }
      )
    );
  }
  return [];
}
export async function getGithubLang(project: string) {
  const res = await axios({
    url: `/repos/${CONFIG.ownerGitId}/${project}/languages`,
    method: "GET",
    baseURL: CONFIG.gitHubUrl,
  });
  if (res.status === 200) {
    return Object.keys(res.data);
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
