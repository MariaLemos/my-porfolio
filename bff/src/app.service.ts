import { Injectable } from "@nestjs/common";
import { GithubService } from "./github/github.service";
import * as mock from "./mock.json";
import * as CONFIG from "./config/index.json";
@Injectable()
export class AppService {
  github = new GithubService();

  async getInfo(): Promise<BffResponse> {
    const githubInfo = await this.github.getGitHubInfo();
    const gitProfile = await this.github.getGitHubProfile();

    return {
      projects: githubInfo,
      profile: {
        ...gitProfile,
        contact: { ...mock.contact, github: CONFIG.ownerGitId },
      },
      resume: mock.resume,
    };
  }
}
