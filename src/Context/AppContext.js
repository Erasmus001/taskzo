/* eslint-disable no-unused-vars */
import React, {
  useState,
  createContext,
  useContext,
  useLayoutEffect,
} from "react";
import { toast } from "react-hot-toast";
// import { db } from "../hooks/useDB";

const AppContext = createContext({
  currentUser: null,
});

export const useAppContext = () => useContext(AppContext);

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // * Form states...
  const [projectName, setProjectName] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // * Handle Inputs...
  const handleProjectName = (event) => setProjectName(event.target.value);
  const handleProjectDesc = (event) => setProjectDesc(event.target.value);

  // * Register User
  const register = (username, email, password) => {
    // ? Creating user credentials into the database...
    const userCred = { username, email, password };

    const saveUser = () => {
      localStorage.setItem("user", JSON.stringify(userCred));
      localStorage.setItem("isAuthenticated", !isAuthenticated);
      setCurrentUser(userCred);
    };

    saveUser();
    const getAuth = JSON.parse(localStorage.getItem("isAuthenticated"));

    if (getAuth) setIsAuthenticated(true);
  };

  // * Login user...
  const login = (email, password) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (email === user?.email || password === user?.password) {
      toast.success("Login successful");
      setCurrentUser(user);
    } else {
      toast.error("Sorry, user does not exist! Please try again.");
      return;
    }
  };

  // * log out user...
  const logout = () => setCurrentUser(null);

  const value = {
    currentUser,
    isAuthenticated,
    projectName,
    projectDesc,
    register,
    setProjectDesc,
    setProjectName,
    handleProjectDesc,
    handleProjectName,
    login,
    setIsAuthenticated,
    logout,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AuthContextProvider;
