import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { CurrentUserContext } from "../Context/AuthContext";


export default function Greetings() {
    const { currentUser} = useContext(CurrentUserContext);
    return (
      <div>
      <p>Welcome back {currentUser.username}.</p> 
      <nav>

      <NavLink  to='profile'>Profile</NavLink>
      </nav>
      <Outlet/>
      </div>
    )
  }