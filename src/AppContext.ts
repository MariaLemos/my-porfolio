import { createContext, useContext } from "react";

export type AppContextType = {
  owner: OwnerData;
  lang: string;
  habilits: string[];
  projects: Project[];
  setOwner: (OwnerData: OwnerData) => void;
};
const contextDefaultValues = {
  lang: "pt-br",
  owner: {
    name: "",
    location: "",
    avatar_url: "",
    html_url: "",
    bio: "",
    email: "",
  },
  habilits: [],
  projects: [],
  setOwner: (OwnerData: OwnerData) => console.log(OwnerData),
};
export const AppContext = createContext<AppContextType>(contextDefaultValues);

export const useOwner = () => useContext(AppContext).owner;
export const useAppContext = () => useContext(AppContext);
