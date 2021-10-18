import { useEffect, useState } from "react";
import { AdminContext } from "./adminContext";

export const AdminProvider: React.FC = ({ children }) => {
  const [showMessage, setshowMessage] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setshowMessage(false), 2000);
    return () => clearTimeout(id);
  }, [showMessage]);

  return (
    <AdminContext.Provider
      value={{
        showMessage: showMessage,
        setShowMessage: setshowMessage,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
