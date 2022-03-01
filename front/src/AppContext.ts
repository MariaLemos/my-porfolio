import { createContext, useContext } from "react";

export type AppContextType = {
  status: Status;
  profile: Profile;
  lang: "pt-br" | "en-us";
  resumes: BffResponse["resumes"];
  projects: Project[];
  refreshData: () => void;
  changeLang: (lang: "pt-br" | "en-us") => void;
};
const contextDefaultValues: AppContextType = {
  status: "loading",
  lang: "pt-br",
  profile: {
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
  },

  resumes: {
    "en-us": {
      bio: "",
      lang: "en-us",
      subTitles: [],
      hardSkills: [],
      softSkills: [],
      languages: [],
      graduaction: [],
      courses: [],
      workExperience: [],
    },
    "pt-br": {
      bio: "",
      lang: "pt-br",
      subTitles: [],
      hardSkills: [],
      softSkills: [],
      languages: [],
      graduaction: [],
      courses: [],
      workExperience: [],
    },
  },
  projects: [],
  refreshData: () => null,
  changeLang: () => null,
};
export const AppContext = createContext<AppContextType>(contextDefaultValues);

export const useOwner = () => useContext(AppContext).profile;
export const useAppContext = () => useContext(AppContext);
export const useBffResponse = () => {
  const { profile, resumes, projects } = useContext(AppContext);
  return { profile, resumes, projects };
};
