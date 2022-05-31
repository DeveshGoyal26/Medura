import React, { createContext, useState } from "react";

export const Auth_provider_context = createContext();

export const AuthContextProvider_for_login = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  return (
    <Auth_provider_context.Provider value={{ token, setToken }}>
      {children}
    </Auth_provider_context.Provider>
  );
};
