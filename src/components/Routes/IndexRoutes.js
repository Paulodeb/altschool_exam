import React  from "react";
import { Route, Routes } from "react-router-dom";
import {
  AuthContextProvider
} from "../Context/AuthContext";
import Dashboard from "../Pages/Dashboard";
import ShowBomb from "../Pages/ErrorPage/ShowBomb";
import Greetings from "../Pages/Greetings";
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/HomePage/LoginPage/LoginPage";
import Register from "../Pages/HomePage/Registration/Register";

import NotFound from "../Pages/NotFound/NotFound";
import UserProfile from "../Pages/UserProfile";

export default function IndexRoutes() {
  // const {isLoggedin} = useContext(CurrentUserContext)
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />} >
          <Route path="greeting" element={<Greetings />} />
          <Route path="profile" element={<UserProfile />} />

        </Route>
        <Route path="login" element={<LoginPage />}/>
        <Route path="errorboundary" element={<ShowBomb />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
