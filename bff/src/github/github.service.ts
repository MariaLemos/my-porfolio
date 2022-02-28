import { BadRequestException, Injectable } from "@nestjs/common";
import * as CONFIG from "../config/index.json";
import axios from "axios";
@Injectable()
export class GithubService {
  async getGitHubInfo(gitId: string): Promise<Project[]> {
    try {
      const res = await axios({
        url: `/users/${gitId}/repos`,
        method: "GET",
        baseURL: CONFIG.gitHubUrl,
      });
      if (res.status === 200) {
        return await Promise.all(
          res.data.map(async (repository: Project): Promise<Project> => {
            return await {
              description: repository.description,
              homepage: repository.homepage,
              html_url: repository.html_url,
              name: repository.name,
              languages:
                (await this.getGithubLang(gitId, repository.name)) ?? [],
            };
          })
        );
      }
      return [];
    } catch (error) {
      if (error.response.status === 403) {
        this.getGitLimit();
      } else {
        throw new BadRequestException(
          error.response.statusText,
          `gitId:${gitId}`
        );
      }
    }
  }
  async getGithubLang(gitId: string, project: string) {
    try {
      const res = await axios({
        url: `/repos/${gitId}/${project}/languages`,
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
        throw new BadRequestException(
          error.response.statusText,
          `gitId:${gitId}`
        );
      }
    }
  }
  async getGitHubProfile(
    gitId: string
  ): Promise<Omit<Profile, "contact" | "userId">> {
    try {
      const res = await axios({
        url: `/users/${gitId}`,
        method: "GET",
        baseURL: CONFIG.gitHubUrl,
      });

      if (res.status === 200) {
        const { avatar_url, name, location } = await res.data;
        return {
          avatar_url,

          name,
          location,
        };
      }
    } catch (error) {
      if (error.response.status === 403) {
        this.getGitLimit();
      } else {
        throw new BadRequestException(
          error.response.statusText,
          `gitId:${gitId}`
        );
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
