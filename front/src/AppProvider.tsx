import { useEffect, useState } from "react";
import { getInfo } from "./api/bff";
import { AppContext } from "./AppContext";

export const AppProvider: React.FC<{}> = ({ children }) => {
  const [owner, setOwner] = useState<OwnerData>({
    name: "Maria Lemos",
    location: "",
    avatar_url: "",
    html_url: "",
    bio: "",
    email: "",
  });
  const [gitHabilitsInfo, setGitHabilitsInfo] = useState<string[]>([""]);
  const [gitProjectsInfo, setGitProjectsInfo] = useState<Project[]>([]);
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
      setGitProjectsInfo(bffResponse.projects);
      setGitHabilitsInfo(filterHabilits(bffResponse.projects));
    };
    getBffResponse();
  }, []);
  const editOwner = (newData: OwnerData) => setOwner({ ...owner, ...newData });

  return (
    <AppContext.Provider
      value={{
        lang: "pt-br",
        owner,
        habilits: gitHabilitsInfo,
        projects: gitProjectsInfo,
        setOwner: editOwner,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
