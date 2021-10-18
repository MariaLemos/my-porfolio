import { createContext, useContext } from "react";

export type AdminContextType = {
  showMessage: boolean;
  setShowMessage: (v: boolean) => void;
};
const contextDefaultValues: AdminContextType = {
  showMessage: false,
  setShowMessage: (v) => {},
};
export const AdminContext =
  createContext<AdminContextType>(contextDefaultValues);

export const useAdminContext = () => useContext(AdminContext);
