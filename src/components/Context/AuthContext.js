import React, { createContext, useContext, useState } from "react";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const AuthContext = createContext({});

export const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [LoggedIn, setLoggedIn] = useState(false);

  const login = () => {
    sleep(100).then(() => {
      setLoggedIn(true);
    });
  };
  const logout = () => {
    sleep(100).then(() => {
      setLoggedIn(false);
    });
  };

  const authContextValue = {
    currentUser,
    setCurrentUser,
    email,
    setEmail,
    password,
    setPassword,
    login,
    logout,
    LoggedIn
  };

  return <AuthContext.Provider value={authContextValue} {...props} />;
};

export const useAuth = () => useContext(AuthContext);

