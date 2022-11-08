import React from "react";
import { useAuth } from "../Context/AuthContext";
import NotFound from "./NotFound/NotFound";
import styles from "./userprofile.module.css";

export default function UserProfile() {
  const { currentUser, email, LoggedIn } = useAuth();

  return LoggedIn ? (
    <div className={styles.container}>
      <h1 className={styles.text1}>Your Profile</h1>
      <div className={styles.text2}>
        Name : {currentUser.username || currentUser.name}
      </div>
      <div className={styles.text3}>Email : {email.email}</div>
    </div>
  ) : (
    <>
      <NotFound />
    </>
  );
}
