import React from "react";
import { Helmet } from "react-helmet-async";
import {  Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import Greetings from "./Greetings";
import NotFound from "./NotFound/NotFound";

const Dashboard = () => {
  const { LoggedIn } = useAuth();
  return LoggedIn ? (
    <>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
        <link rel="canonical" href="/dashboard" />
      </Helmet>
	  <Greetings/>
      <Outlet />
    </>
  ) : (
    <>
      <NotFound />
    </>
  );
};

export default Dashboard;
