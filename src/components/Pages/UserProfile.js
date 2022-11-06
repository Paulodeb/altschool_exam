import React, { useContext } from "react";
import { CurrentUserContext } from "../Context/AuthContext";
import styles from "./userprofile.css"

export default function UserProfile() {
  const { currentUser, email} = useContext(CurrentUserContext);
  
  
  return (
    <div className={styles.container}>
      <h1 className={styles.text1}>Your Profile</h1>
      <div className={styles.text2}>Name : {currentUser.username || currentUser.name}</div>
      <div className={styles.text3}>Email : {email.email}</div>
      
    </div>
  );
}
