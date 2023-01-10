import React from "react";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import NotFound from "./NotFound/NotFound";
import styles from "./userprofile.css";

export default function Greetings() {
  const { currentUser, LoggedIn } = useAuth();
  return LoggedIn ? (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Welcome to Dashboard" />
        <link rel="canonical" href="/dashboard" />
      </Helmet>
      <div className={styles.container}>
        <p>Welcome {currentUser.username || currentUser.name}, to Altschool.</p>
        <div className="check_profile">
        kindly check your profile details here
          <NavLink to="profile">Profile</NavLink>
        </div>
      </div>
    </>
  ) : (
    <NotFound/>
  )
}
