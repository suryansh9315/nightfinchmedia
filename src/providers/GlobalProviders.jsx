'use client'
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [hoverHome, setHoverHome] = useState(false);
  
  return (
    <GlobalContext.Provider value={{ hoverHome, setHoverHome }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
