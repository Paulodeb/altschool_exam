import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import Dashboard from "../Pages/Dashboard";
import ShowBomb from "../Pages/ErrorPage/ShowBomb";
import Greetings from "../Pages/Greetings";
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/HomePage/LoginPage/LoginPage";
import Register from "../Pages/HomePage/Registration/Register";
import NotFound from "../Pages/NotFound/NotFound";
import UserProfile from "../Pages/UserProfile";
import styles from "./Navbar.module.css";

const AuthRoutes = () => {
  const { LoggedIn, logout } = useAuth();
  return (
    <>
      <nav className={styles.pry_nav}>
        <NavLink to={"/"}>Home</NavLink>
        {LoggedIn ? (
          <NavLink onClick={logout} to={"/"}>
            Logout
          </NavLink>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
        <NavLink to={"/register"}>Register</NavLink>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
        <NavLink to={"/errorboundary"}>Error Boundary</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="greeting" element={<Greetings />} />
          <Route path="profile" element={<UserProfile />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/errorboundary" element={<ShowBomb />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AuthRoutes;
