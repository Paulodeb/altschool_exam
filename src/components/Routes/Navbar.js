import React from 'react'
import { NavLink } from 'react-router-dom'

 export const CustomNavLink = ({to, ...props}) => {
    return(
        <NavLink
        className={({isActive}) => (isActive ? 'active' : 'inactive')}
        to={to}
        {...props}
        ></NavLink>
    );
 };
 const Navbar = () => {
  return (
    <header>
        <nav className='pry-nav'>
            <CustomNavLink  to='/'>Home</CustomNavLink>{''}
            <CustomNavLink  to='/user'>User</CustomNavLink>{''}\
            <CustomNavLink  to='/dashboard'>Dashboard</CustomNavLink>{''}
        </nav>
    </header>
  )
}
 export default Navbar