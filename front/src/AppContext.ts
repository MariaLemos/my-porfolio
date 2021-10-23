import { createContext, useContext } from "react";

export type AppContextType = {
  status: "idle" | "success" | "error" | "loading";
  profile: Profile;
  lang: string;
  resume: Resume;
  habilits: string[];
  projects: Project[];
  refreshData: () => void;
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
  refreshData: () => null,
};
export const AppContext = createContext<AppContextType>(contextDefaultValues);

export const useOwner = () => useContext(AppContext).profile;
export const useAppContext = () => useContext(AppContext);
export const useBffResponse = (): BffResponse => {
  const { profile, resume, projects } = useContext(AppContext);
  return { profile, resume, projects };
};
