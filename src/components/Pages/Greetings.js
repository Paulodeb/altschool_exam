import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";
import { CurrentUserContext } from "../Context/AuthContext";
import Navbar from "../Routes/Navbar";


export default function Greetings() {
    const { currentUser} = useContext(CurrentUserContext);
    return (
      <>
      <Helmet>
            <title>Home</title>
            <meta name="description" content="Home page" />
            <link rel="canonical" href="/" />
        </Helmet>
        <Navbar user={currentUser} />
      <div>
      <p>Welcome back {currentUser.username}.</p> 
      <nav>

      <NavLink  to='profile'>Profile</NavLink>
      </nav>
      <Outlet/>
      </div>
      </>
    )
  }