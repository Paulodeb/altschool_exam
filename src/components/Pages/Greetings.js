import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { CurrentUserContext } from "../Context/AuthContext";
import { CustomNavLink } from "../Routes/Navbar";
import UserProfile from "./UserProfile";

export default function Greetings() {
    const { currentUser} = useContext(CurrentUserContext);
    return (
      <div>
      <p>Welcome back {currentUser.name}.</p> 
      <nav>

      <NavLink  to='/profile'>Profile</NavLink>
      </nav>
      <Outlet/>
      </div>
    )
  }