import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: token => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const isLoggedIn = !!token;

  const login = token => {
    setToken(token);
  };

  const logout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;