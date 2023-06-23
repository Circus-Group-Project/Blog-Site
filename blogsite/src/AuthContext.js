import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const login = () => {
    // Perform the login logic
    setIsLoggedIn(true);
  };

  const logout = () => {
    // Perform the logout logic
    navigate("/login");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () =>useContext(AuthContext);