/* eslint-disable no-unused-vars */
import React, { useState, useEffect, createContext, useContext } from "react";

const AppContext = createContext({
  currentUser: null,
});

export const useAppContext = () => useContext(AppContext);

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const value = {
    currentUser
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AuthContextProvider;
