import { useEffect, useState } from "react";
import { AdminContext } from "./adminContext";

export const AdminProvider: React.FC = ({ children }) => {
  const [message, setMessage] = useState<Message>();

  useEffect(() => {
    const id = setTimeout(() => setMessage(undefined), 100000);
    return () => clearTimeout(id);
  }, [message]);

  return (
    <AdminContext.Provider
      value={{
        message: message,
        setMessage: setMessage,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
