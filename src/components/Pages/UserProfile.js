import React, { useContext } from "react";
import { CurrentUserContext } from "../Context/AuthContext";
// import { AuthContext } from "../Context/AuthContext";
// import UserBio from "./UserBio";


export default function UserProfile() {
  const { currentUser, email} = useContext(CurrentUserContext);
  
  
  return (
    <div>
      <h1>User Profile</h1>
      <div>Name : {currentUser.name}</div>
      <div>Email : {email.email}</div>
      
    </div>
  );
}
