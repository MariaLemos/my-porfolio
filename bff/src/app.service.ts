import { Injectable } from "@nestjs/common";
import { GithubService } from "./github/github.service";
import { UserInfoService } from "./userinfo/userInfo.service";
@Injectable()
export class AppService {
  constructor(private Github: GithubService, private User: UserInfoService) {}

  async syncGitHub(userId: string) {
    const userInfo = await this.User.getUserInfo(userId);
    const githubInfo = await this.Github.getGitHubInfo(
      userInfo?.profile.contact.github ?? "MariaLemos"
    );
    const gitProfile = await this.Github.getGitHubProfile(
      userInfo?.profile.contact.github ?? "MariaLemos"
    );
    const hardSkills = [
      ...this.filterHabilits(githubInfo),
      ...userInfo.resume.hardSkills,
    ];
    return this.User.updateUserInfo({
      resume: { ...userInfo?.resume, hardSkills },
      profile: {
        ...userInfo?.profile,
        location: gitProfile?.location,
        bio: gitProfile?.bio,
        avatar_url: gitProfile?.avatar_url,
      },
      projects: githubInfo,
      userId,
    });
  }
  filterHabilits(projects: Project[]): string[] {
    const allHabilits = projects.flatMap((repository) => repository.languages);

    return [...new Set(allHabilits)];
  }
}
