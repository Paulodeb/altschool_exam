import React, { useContext } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { CurrentUserContext } from '../Context/AuthContext';
import Navbar from '../Routes/Navbar';


const Dashboard = () => {
	const { isLoggedin } = useContext(CurrentUserContext);





	return (
		<>
			<Navbar user={isLoggedin} />
			<h1>Welcome to AltSchool</h1>
			<NavLink to='profile'>Profile</NavLink>

			<Outlet />


		</>
	);
};

export default Dashboard;