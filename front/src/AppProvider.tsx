import { useEffect, useState } from "react";
import { getGitHubInfo, getGitHubProfile } from "./api/github";
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
  useEffect(() => {
    let getProfile = async () => setOwner(await getGitHubProfile());
    getProfile();
    let response = async () => {
      const repositoriesInfo = await getGitHubInfo();
      if (repositoriesInfo) {
        let allHabilits: string[] = [""];
        repositoriesInfo.forEach((repository) => {
          allHabilits = allHabilits.concat(repository.languages);
        });
        allHabilits = allHabilits.filter((item, pos) => {
          return allHabilits.indexOf(item) === pos && item !== "";
        });
        setGitHabilitsInfo(allHabilits);
      }

      setGitProjectsInfo(repositoriesInfo);
    };

    response();
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
