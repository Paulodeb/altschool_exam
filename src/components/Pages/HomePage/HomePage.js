import React from 'react';
import { Outlet } from 'react-router-dom';
import { CustomNavLink } from '../../Routes/Navbar';


function HomePage() {
    // const [user, setUser] = useState
    // (null);
    return (
        
        <div>
            <h1>Home Page</h1>
            <nav>
            <CustomNavLink  to='login'>Login</CustomNavLink>{''}
            </nav>
            <Outlet/>
        </div>
    );
}

export default HomePage;