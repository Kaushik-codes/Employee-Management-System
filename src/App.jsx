import React, { useState, useEffect, useContext } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { toast, Toaster } from "sonner";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  useEffect(() => {
    if (!localStorage.getItem("employees")) {
      setLocalStorage();
    }
  }, []);

  const [user, setUser] = useState(null); //render component according to it
  const [userData, setUserData] = useContext(AuthContext); //local data
  //const [loggedInUserData, setLoggedInUserData] = useState(null); //sends data to components

  /* This also runs once when the app first loads. It was handling the "remember login" / 
  persist session feature — meaning if you had previously logged in and refreshed the page, 
  the app checks if a loggedInUser key exists in localStorage and if so, restores your 
  session automatically so you don't get kicked back to the login screen. */
  useEffect(() => {
    const logged = localStorage.getItem("loggedInUser");
    if (logged) {
      const newUserData = JSON.parse(logged);
      setUser(newUserData.role);
      // setLoggedInUserData(newUserData.data || null);
    }
  }, []);

  const loggedInUserData = userData?.find((emp) => {
    if (
      emp.id === JSON.parse(localStorage.getItem("loggedInUser") || "{}")?.id
    ) {
      return emp;
    }
  });

  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      setUser("admin");
    } else {
      // Check userData first
      if (!userData) {
        toast.error("Data is not loaded. Please refresh.");
        return;
      }
      const employeeData = userData?.find(
        (e) => e.email === email && e.password === password,
      );
      if (employeeData) {
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", id: employeeData.id }),
        );
        setUser("employee");
      } else {
        toast.error("Invalid credentials");
      }
    }
  };

  return (
    <>
      <Toaster richColors position="top-center" />
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user === "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : user === "employee" ? (
        <EmployeeDashboard data={loggedInUserData} changeUser={setUser} />
      ) : null}
    </>
  );
};

export default App;
