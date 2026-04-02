import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null); //stores data separately from localstorage

  useEffect(() => {
    const { employees } = getLocalStorage(); //collect data from localstorage and store
    setUserData(employees);
  }, []);

  useEffect(() => {
    if (userData !== null) {
      setLocalStorage("employees", JSON.stringify(userData));
    }
  }, [userData]);
  return (
    <div>
      {/* sends the local data to its components */}
      <AuthContext.Provider value={[userData, setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
