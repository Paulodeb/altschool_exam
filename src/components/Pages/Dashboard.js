import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { NavLink, Outlet } from "react-router-dom";
import { CurrentUserContext } from '../Context/AuthContext';
import Navbar from '../Routes/Navbar';


const Dashboard = () => {
	const { isLoggedin } = useContext(CurrentUserContext);





	return (
		<>
		<Helmet>
            <title>Dashboard</title>
            <meta name="description" content="Dashboard" />
            <link rel="canonical" href="/dashboard" />
        </Helmet>
			<Navbar user={isLoggedin} />
			<h1>Welcome to AltSchool</h1>
			<NavLink to='profile'>Profile</NavLink>

			<Outlet />


		</>
	);
};

export default Dashboard;