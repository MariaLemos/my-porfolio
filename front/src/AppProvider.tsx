import { useEffect, useState } from "react";
import { getInfo } from "./api/bff";
import { AppContext, AppContextType } from "./AppContext";

export const AppProvider: React.FC<{}> = ({ children }) => {
  const [status, setStatus] = useState<AppContextType["status"]>("loading");
  const [lang, changeLang] = useState<AppContextType["lang"]>("pt-br");
  const [gitProjectsInfo, setGitProjectsInfo] = useState<Project[]>([
    {
      languages: [""],
      name: " string;",
      html_url: "string;",
      description: "string;",
      homepage: "string;",
    },
  ]);
  const [resumeInfo, setResumeInfo] = useState<
    Resume & { hardSkills: Array<{ name: string }> }
  >({
    hardSkills: [],
    softSkills: [],
    graduaction: [],
    courses: [],
    workExperience: [],
    languages: [],
    subTitle: [],
    bio: "",
    objetive: "",
  });
  const [profileInfo, setProfileInfo] = useState<Profile>({
    name: "",
    location: "",
    avatar_url: "",

    contact: {
      email: "",
      linkedin: "",
      github: "",
      site: window.location.hostname,
      whatsapp: "",
    },
  });

  const refreshData = async () => {
    const bffResponse: BffResponse = await getInfo();
    if (bffResponse) {
      const { projects = [], resume, profile } = bffResponse;

      if (projects) {
        setGitProjectsInfo(projects);
      }
      if (profile && profile.name) {
        setProfileInfo(profile);
      }
      if (resume) {
        setResumeInfo({ ...resume[lang], hardSkills: resume.hardSkills });
      }
    }
  };

  useEffect(() => {
    if (status !== "success") {
      setStatus("loading");
      refreshData().then((r) => setStatus("success"));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <AppContext.Provider
      value={{
        status: status,
        lang: lang,
        changeLang: (lang) => changeLang(lang),
        profile: profileInfo,
        resume: resumeInfo,
        projects: gitProjectsInfo,
        refreshData: refreshData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
