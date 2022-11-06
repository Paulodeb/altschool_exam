import React, { useContext } from "react";
import { CurrentUserContext } from "../Context/AuthContext";


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
