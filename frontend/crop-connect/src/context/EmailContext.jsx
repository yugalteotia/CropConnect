import { createContext, useState, useMemo, useContext } from "react";

// Context Provider to make
// email data avaialble everywhere in code
export const EmailContext = createContext();

export const EmailProvider = ({ children }) => {
  const [email, setEmail] = useState([]);

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({ email, setEmail }),
    [email, setEmail]
  );

  return (
    <EmailContext.Provider value={contextValue}>
      {children}
    </EmailContext.Provider>
  );
};

export const useEmail = () => useContext(EmailContext);