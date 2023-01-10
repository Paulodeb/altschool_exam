import React from "react";
import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import styles from "./Homepage.module.css";

function HomePage() {
  const { logout, LoggedIn, currentUser } = useAuth();

  return LoggedIn ? (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home page" />
        <link rel="canonical" href="/" />
      </Helmet>
      <div>
        <h2>Welcome {currentUser.username || currentUser.name} to Altschool</h2>
        <p>
          Go to dashboard for more details{" "}
          <NavLink to={"/dashboard"}> Dashboard</NavLink>{" "}
        </p>
        <button onClick={logout}>Logout</button>
      </div>
    </>
  ) : (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home page" />
        <link rel="canonical" href="/" />
      </Helmet>
      <div>
        <div className={styles.text_container}>
          <h1 className={styles.text}>
            Learn from the highly sought after tech school to get your skills
            without hassle.
          </h1>
          <p className={styles.text}>
            Earn a Diploma in alt-school africa today.
          </p>

          <div>
            <NavLink to="register">Join Us</NavLink>
            {""}
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default HomePage;
