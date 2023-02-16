import { createContext, useContext } from "react";

export type AppContextType = {
  status: Status;
  profile: Profile;
  lang: "pt-br" | "en-us";
  resumes: Resumes;
  projects: Project[];
  refreshData: (BffResponse: BffResponse) => void;
  setStatus: (status: Status) => void;
  changeLang: (lang: "pt-br" | "en-us") => void;
  message?: Message;
  setMessage: (v: Message) => void;
  isLogged: boolean;
  setIsLogged: (b: boolean) => void;
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
      whatsapp: "",
      codepen: "",
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
  setStatus: () => null,
  refreshData: () => null,
  changeLang: () => null,
  setMessage: () => null,
  isLogged: false,
  setIsLogged: () => null,
};
export const AppContext = createContext<AppContextType>(contextDefaultValues);

export const useOwner = () => useContext(AppContext).profile;
export const useAppContext = () => useContext(AppContext);
export const useBffResponse = () => {
  const { profile, resumes, projects } = useContext(AppContext);
  return { profile, resumes, projects };
};
