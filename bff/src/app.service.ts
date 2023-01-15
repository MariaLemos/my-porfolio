import { Injectable } from "@nestjs/common";
import { GithubService } from "./github/github.service";
import { ResumeService } from "./resume/resume.service";
import { UserInfoService } from "./userinfo/userInfo.service";
@Injectable()
export class AppService {
  constructor(
    private Github: GithubService,
    private User: UserInfoService,
    private Resume: ResumeService
  ) {}

  async syncGitHub(userId: string) {
    const userInfo = await this.User.getUserInfo(userId);
    const resumeInfo = await this.Resume.getResumes(userId);
    const githubInfo = await this.Github.getGitHubInfo(
      userInfo?.profile.contact.github ?? "MariaLemos"
    );
    const gitProfile = await this.Github.getGitHubProfile(
      userInfo?.profile.contact.github ?? "MariaLemos"
    );
    const teste = this.filterHabilits(githubInfo).concat(
      resumeInfo["pt-br"].hardSkills.map((t) => t.name)
    );

    const hardSkills = [...new Set(teste)];
    await this.Resume.updateResumes({
      "pt-br": {
        ...resumeInfo["pt-br"],
        hardSkills: hardSkills.map((skill) => ({ name: skill })),
      },
      "en-us": {
        ...resumeInfo["en-us"],
        hardSkills: hardSkills.map((skill) => ({ name: skill })),
      },
    });

    return this.User.updateUserInfo(userId, {
      profile: {
        ...userInfo?.profile,
        location: gitProfile?.location,
        avatar_url: gitProfile?.avatar_url,
      },
      projects: githubInfo,
    });
  }
  filterHabilits(projects: Project[]): string[] {
    const allLanguages = projects.flatMap((repository) => repository.languages);
    const filtered = [...new Set(allLanguages)];

    return filtered;
  }
}
