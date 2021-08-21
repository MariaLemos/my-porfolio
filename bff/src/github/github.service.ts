import { Injectable } from "@nestjs/common";
import * as CONFIG from "../config/index.json";
import axios from "axios";
@Injectable()
export class GithubService {
  async getGitHubInfo(): Promise<Project[]> {
    try {
      const res = await axios({
        url: `/users/${CONFIG.ownerGitId}/repos`,
        method: "GET",
        baseURL: CONFIG.gitHubUrl,
      });
      if (res.status === 200) {
        return await Promise.all(
          res.data.map(
            async (repository: Project): Promise<Project> =>
              await {
                description: repository.description,
                homepage: repository.homepage,
                html_url: repository.html_url,
                name: repository.name,
                languages: (await this.getGithubLang(repository.name)) ?? [],
              }
          )
        );
      }
      return [];
    } catch (error) {
      if (error.response.status === 403) {
        this.getGitLimit();
      } else {
        console.error("error", error.response.statusText);
      }
    }
  }
  async getGithubLang(project: string) {
    try {
      const res = await axios({
        url: `/repos/${CONFIG.ownerGitId}/${project}/languages`,
        method: "GET",
        baseURL: CONFIG.gitHubUrl,
      });
      if (res.status === 200) {
        return Object.keys(res.data);
      }
    } catch (error) {
      if (error.response.status === 403) {
        this.getGitLimit();
      } else {
        console.error("error", error.response.statusText);
      }
    }
  }
  async getGitHubProfile(): Promise<Omit<OwnerData, "contact">> {
    try {
      const res = await axios({
        url: `/users/${CONFIG.ownerGitId}`,
        method: "GET",
        baseURL: CONFIG.gitHubUrl,
      });

      if (res.status === 200) {
        const { bio, avatar_url, name, location } = await res.data;
        return {
          avatar_url,
          bio,
          name,
          location,
        };
      }
    } catch (error) {
      if (error.response.status === 403) {
        this.getGitLimit();
      } else {
        console.error("error", error.response.statusText);
      }
    }
  }
  async getGitLimit() {
    try {
      const res = await axios({
        url: `/rate_limit`,
        method: "GET",
        baseURL: CONFIG.gitHubUrl,
      });
      const response = await res.data.resources.core;

      console.error(new Date(response.reset * 1000));
    } catch (error) {
      console.error(error.response.statusText);
    }
  }
}
