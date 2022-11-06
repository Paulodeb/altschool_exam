import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../../Routes/Navbar';
import styles from './Homepage.module.css';


 function HomePage() {
    // const [user, setUser] = useState
    // (null);
    
    
    return (
        
        <div>
            <Navbar user={false}/>
            <div className={styles.text_container}>

            <h1 className={styles.text}>Learn from the highly sought after tech school to get your skills without hassle.</h1>
            <p className={styles.text}>Earn a Diploma in alt-school africa today.</p>
            
          
            <nav>
            <NavLink  to='register'>Join Us</NavLink>{''}
            </nav>
            </div>
            <Outlet/>
        </div>
    );
}

export default HomePage;