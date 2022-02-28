import { createContext, useContext } from "react";

export type AppContextType = {
  status: "idle" | "success" | "error" | "loading";
  profile: Profile;
  lang: "pt-br" | "en-us";
  resume: Resume & { hardSkills: Array<{ name: string }> };
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

  resume: {
    bio: "",
    objetive: "",
    subTitle: [],
    hardSkills: [],
    softSkills: [],
    languages: [],
    graduaction: [],
    courses: [],
    workExperience: [],
  },
  projects: [],
  refreshData: () => null,
  changeLang: () => null,
};
export const AppContext = createContext<AppContextType>(contextDefaultValues);

export const useOwner = () => useContext(AppContext).profile;
export const useAppContext = () => useContext(AppContext);
export const useBffResponse = () => {
  const { profile, resume, projects } = useContext(AppContext);
  return { profile, resume, projects };
};
