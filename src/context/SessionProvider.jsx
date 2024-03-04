import { createContext, useState } from "react";

export const SessionContext = createContext({});

export const SessionProvider = ({ children }) => {
  const [token, setToken] = useState("");

  return (
    <SessionContext.Provider value={{ token, setToken }}>
      {children}
    </SessionContext.Provider>
  );
};
