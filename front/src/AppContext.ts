import { createContext, useContext } from "react";

export type AppContextType = {
  status: "idle" | "success" | "error" | "loading";
  profile: OwnerData;
  lang: string;
  resume: Resume;
  habilits: string[];
  projects: Project[];
};
const contextDefaultValues: AppContextType = {
  status: "loading",
  lang: "pt-br",
  profile: {
    name: "",
    location: "",
    avatar_url: "",
    bio: "",
    contact: { email: "", linkedin: "", github: "" },
  },
  habilits: [],
  resume: {
    graduaction: [],
    courses: [],
    workExperience: [],
  },
  projects: [],
};
export const AppContext = createContext<AppContextType>(contextDefaultValues);

export const useOwner = () => useContext(AppContext).profile;
export const useAppContext = () => useContext(AppContext);
