import { useEffect, useState } from "react";
import { getInfo } from "./api/bff";
import { AppContext } from "./AppContext";

export const AppProvider: React.FC<{}> = ({ children }) => {
  const [gitHabilitsInfo, setGitHabilitsInfo] = useState<string[]>([""]);
  const [gitProjectsInfo, setGitProjectsInfo] = useState<Project[]>([]);
  const [gitResumeInfo, setGitResumeInfo] = useState<Resume>({
    graduaction: [],
    courses: [],
    workExperience: [],
  });
  const [gitProfileInfo, setGitProfileInfo] = useState<OwnerData>({
    name: "Maria Lemos",
    location: "",
    avatar_url: "",
    contact: { email: "", linkedin: "", github: "" },
    bio: "",
  });
  const filterHabilits = (projects: Project[]): string[] => {
    let allHabilits: string[] = [""];
    projects.forEach((repository) => {
      allHabilits = allHabilits.concat(repository.languages);
    });
    allHabilits = allHabilits.filter((item, pos) => {
      return allHabilits.indexOf(item) === pos && item !== "";
    });

    return [];
  };
  useEffect(() => {
    let getBffResponse = async () => {
      const bffResponse: BffResponse = await getInfo();
      const { projects, resume, profile } = bffResponse;
      setGitProjectsInfo(projects);
      setGitHabilitsInfo(filterHabilits(projects));
      setGitProfileInfo(profile);
      setGitResumeInfo(resume);
    };
    getBffResponse();
  }, []);

  return (
    <AppContext.Provider
      value={{
        lang: "pt-br",
        profile: gitProfileInfo,
        resume: gitResumeInfo,
        habilits: gitHabilitsInfo,
        projects: gitProjectsInfo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
