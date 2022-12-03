/* eslint-disable no-unused-vars */
import React, { useState, createContext, useContext } from "react";
import { toast } from "react-hot-toast";
import Localbase from "localbase";

const AppContext = createContext({
  currentUser: null,
});

export const useAppContext = () => useContext(AppContext);

export const db = new Localbase("db");

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // * Form states...
  const [projectName, setProjectName] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // * Handle Inputs...
  const handleProjectName = (event) => setProjectName(event.target.value);
  const handleProjectDesc = (event) => setProjectDesc(event.target.value);

  const projectList = [
    {
      id: 1,
      name: projectName,
      columns: [
        {
          id: 1,
          title: "Todo",
          tasks: [
            {
              taskId: 1,
              taskTitle: "New Company Website Design",
              taskCategory: "High",
              taskDesc: "A new UI design for our existing website.",
            },
          ],
        },
        {
          id: 2,
          title: "In Progress",
          tasks: [],
        },
        {
          id: 3,
          title: "Stuck",
          tasks: [],
        },
        {
          id: 4,
          title: "Completed",
          tasks: [],
        },
      ],
    },
  ];

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
    // * Getting the auth state from localstorage
    const getAuth = JSON.parse(localStorage.getItem("isAuthenticated"));
    if (getAuth) setIsAuthenticated(true);

    // Create a db for the user..
    db.collection("projects").add({ projectList }, "projects");
  };

  // * Login user...
  const login = (email, password) => {
    const user = JSON.parse(localStorage.getItem("user"));

    // * Validating user inputs (User Credentials)...
    if (email !== user?.email || password !== user?.password) {
      toast.error("Sorry, user does not exist!");
      setCurrentUser(null);
      localStorage.setItem("isAuthenticated", isAuthenticated);
      return;
    } else {
      toast.success("Login successful");
      localStorage.setItem("isAuthenticated", !isAuthenticated);
      setCurrentUser(user);
    }
  };

  // * log out user...
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("isAuthenticated");
  };

  // * Create project...
  const createNewProject = () => {
    const projectsRef = db
      .collection("projects")
      .doc("projects")
      .get()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log(projectsRef);
  };

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
    createNewProject,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AuthContextProvider;
