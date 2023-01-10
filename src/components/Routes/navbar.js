import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'
import './Navbar.css'

function Navbar() {
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState ("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const { LoggedIn, logout } = useAuth();

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")

        } else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }
  return (
        <div style={{width : '100%', height: '15vh'}}>
    <nav>
        <div className='burger-menu' onClick={updateMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
        </div>
        <div className='nav-links'>
            <NavLink to={"/"}>Home</NavLink>
            {LoggedIn ? (<>
                <NavLink onClick={logout} to={"/"}>
                    Logout
                </NavLink>
                <NavLink to={"/dashboard"}>Dashboard</NavLink>
            <NavLink to={"/errorboundary"}>Error Boundary</NavLink>
            </>
            ) : (<>
                <NavLink to={"/login"}>Login</NavLink>
            <NavLink to={"/register"}>Sign Up</NavLink>
            
            </>
            )}
        </div>
    </nav>
    
    <div className={menu_class}>
        { LoggedIn ? (<div className='menu-links'>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
            <NavLink to={"/errorboundary"}>Error Boundary</NavLink>
            </div>) : (<div className='menu-links'>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/register"}>Register</NavLink>
            <NavLink to={"/login"}>Login</NavLink>
            </div>)}
    </div>
    </div>
    
    
  )
}

export default Navbar