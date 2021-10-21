import { createContext, useContext } from "react";

export type AdminContextType = {
  message?: Message;
  setMessage: (v: Message) => void;
};
const contextDefaultValues: AdminContextType = {
  setMessage: (v) => {},
};
export const AdminContext =
  createContext<AdminContextType>(contextDefaultValues);

export const useAdminContext = () => useContext(AdminContext);
