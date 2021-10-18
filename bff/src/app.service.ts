import { Injectable } from "@nestjs/common";
import { GithubService } from "./github/github.service";
import * as mock from "./mock.json";
import * as CONFIG from "./config/index.json";
import { UserService } from "./user/user.service";
@Injectable()
export class AppService {
  constructor(private Github: GithubService, private User: UserService) {}

  async getInfo(userId: string): Promise<BffResponse> {
    const userInfo = await this.User.getUserInfo(userId);
    return {
      profile: userInfo.profile,
      projects: userInfo.projects,
      resume: await this.User.getResume(userId),
      userId,
    };
  }
  async syncGitHub(userId: string) {
    const userInfo: Omit<BffResponse, "resume"> = (await this.User.getUserInfo(
      userId
    )) ?? {
      userId,
      profile: {
        name: "",
        location: "",
        avatar_url: "",
        bio: "",
        contact: {
          linkedin: "",
          email: "",
          github: "",
        },
      },
      projects: [],
    };
    const githubInfo = await this.Github.getGitHubInfo(
      userInfo.profile.contact.github ?? ""
    );
    const gitProfile = await this.Github.getGitHubProfile(
      userInfo.profile.contact.github ?? ""
    );

    this.User.updateGitHubInfo({
      ...userInfo,
      profile: {
        ...userInfo.profile,
        location: gitProfile.location,
        bio: gitProfile.bio,
        avatar_url: gitProfile.avatar_url,
      },
      projects: githubInfo,
    });
  }
}
