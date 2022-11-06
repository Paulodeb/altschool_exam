import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { CustomNavLink } from '../../Routes/Navbar';
import LoginPage from './LoginPage/LoginPage';
import './Homepage.module.css';
import { CurrentUserContext } from '../../Context/AuthContext';

 function HomePage() {
    // const [user, setUser] = useState
    // (null);
    const {isLoggedin} = useContext(CurrentUserContext)
    console.log(isLoggedin)
    return (
        
        <div>
            <div id='text_container'>

            <h1 id='hd1'>Learn from the highly sought after tech school to get your skills without hassle.</h1>
            <p id='text'>Earn a Diploma in alt-school africa today.</p>
            </div>
            
          
            <nav>
            <NavLink  to='register'>Register</NavLink>{''}
            </nav>
            <Outlet/>
        </div>
    );
}

export default HomePage;