import { Injectable } from "@nestjs/common";
import { GithubService } from "./github/github.service";
import * as mock from "./mock.json";
@Injectable()
export class AppService {
  github = new GithubService();

  async getInfo(): Promise<BffResponse> {
    const githubInfo = await this.github.getGitHubInfo();
    const gitProfile = await this.github.getGitHubProfile();

    return { projects: githubInfo, ...gitProfile, ...mock };
  }
}
