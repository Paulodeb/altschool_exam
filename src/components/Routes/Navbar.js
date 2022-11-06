import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CurrentUserContext } from '../Context/AuthContext'
import styles from './Navbar.module.css'

//  export const CustomNavLink = ({to, ...props}) => {
//    return(
//      <NavLink
//         className={({isActive}) => (isActive ? 'active' : 'inactive')}
//         to={to}
//         {...props}
//         ></NavLink>
//     );
//   };
  const Navbar = () => {
//  const {isLoggedin} = useContext(CurrentUserContext)
//  console.log(isLoggedin)
  return (
    <header>
        <nav className={styles.pry_nav}>
            <NavLink  to='home'>Home</NavLink>{''}
            <NavLink  to='/dashboard'>Dashboard</NavLink>
           <NavLink  to='/login'>Login</NavLink>

            
            <NavLink  to='/errorboundary'>Error</NavLink>
            <NavLink  to='/errorboundary'>Error Boundary</NavLink>
        </nav>
    </header>
  )
}
 export default Navbar