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
const Navbar = ({ user, currentUser }) => {
const {setIsLoggedin} = useContext (CurrentUserContext)
  return (
    <header>
      {user ? (
         <nav className={styles.pry_nav}>
          <p>{currentUser}</p>
         <NavLink to='/dashboard'>Dashboard</NavLink>
         <NavLink to='/'
         onClick={()=>{
          setIsLoggedin(false)
         }}>Logout</NavLink>
         <NavLink to='/errorboundary'>Error Boundary</NavLink>
       </nav>
      ):(
        <nav className={styles.pry_nav}>
<<<<<<< HEAD
            <NavLink  to='home'>Home</NavLink>{''}
            <NavLink  to='/dashboard'>Dashboard</NavLink>
           <NavLink  to='/login'>Login</NavLink>
=======
        <NavLink to='/'>Home</NavLink>{''}
        <NavLink to='/Login'>Login</NavLink>
        <NavLink to='/Register'>Register</NavLink>
       
      </nav>
      )
      }
    

>>>>>>> 7b1db68e5f5e4e9b4f872a25a31e07cd201962ff

    </header>
  )
}
export default Navbar

 /* {isLoggedin? <NavLink  to='/'>Logout</NavLink>:  <NavLink  to='/login'>Login</NavLink>} */