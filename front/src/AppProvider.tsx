import { useEffect, useState } from "react";

import { getInfo } from "./api/bff";
import { AppContext, AppContextType } from "./AppContext";

export const AppProvider: React.FC<{}> = ({ children }) => {
  const [status, setStatus] = useState<AppContextType["status"]>("loading");
  const [gitHabilitsInfo, setGitHabilitsInfo] = useState<string[]>([]);
  const [gitProjectsInfo, setGitProjectsInfo] = useState<Project[]>([
    {
      languages: [""],
      name: " string;",
      html_url: "string;",
      description: "string;",
      homepage: "string;",
    },
  ]);
  const [resumeInfo, setResumeInfo] = useState<Resume>({
    graduaction: [],
    courses: [],
    workExperience: [],
  });
  const [gitProfileInfo, setGitProfileInfo] = useState<Profile>({
    name: "Maria Lemos",
    location: "",
    avatar_url: "",
    contact: { email: "", linkedin: "", github: "" },
    bio: "",
  });
  const filterHabilits = (projects: Project[]): string[] => {
    let allHabilits: string[] = [];

    projects.forEach((repository) => {
      allHabilits = allHabilits.concat(repository.languages);
    });
    allHabilits = allHabilits.filter((item, pos) => {
      return allHabilits.indexOf(item) === pos && item !== "";
    });

    return allHabilits;
  };
  const refreshData = async () => {
    const bffResponse: BffResponse = await getInfo();
    if (bffResponse) {
      const { projects = [], resume, profile } = bffResponse;

      if (projects) {
        setGitProjectsInfo(projects);

        setGitHabilitsInfo(filterHabilits(projects));
      }
      if (profile && profile.name) {
        setGitProfileInfo(profile);
      }
      if (resume) {
        setResumeInfo(resume);
      }
    }
  };

  useEffect(() => {
    setStatus("loading");

    if (resumeInfo.graduaction.length === 0) {
      refreshData().then((r) => setStatus("success"));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <AppContext.Provider
      value={{
        status: status,
        lang: "pt-br",
        profile: gitProfileInfo,
        resume: resumeInfo,
        habilits: gitHabilitsInfo,
        projects: gitProjectsInfo,
        refreshData: refreshData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
