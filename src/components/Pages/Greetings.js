import React from "react";
import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import NotFound from "./NotFound/NotFound";
import styles from "./userprofile.module.css";

export default function Greetings() {
  const { currentUser, LoggedIn } = useAuth();
  return LoggedIn ? (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home page" />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className={styles.container}>
        <p>Welcome back {currentUser.username || currentUser.name}.</p>
        <nav>
          <NavLink to="profile">Profile</NavLink>
        </nav>
        <Outlet />
      </div>
    </>
  ) : (
    <NotFound/>
  )
}
