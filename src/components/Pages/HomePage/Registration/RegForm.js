import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../../Context/AuthContext";
import styles from "./RegPage.module.css";

export function RegForm( ) {
    const { setCurrentUser, setEmail, setPassword, setIsLoggedin } = useContext(CurrentUserContext);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailId, setEmailId] = useState("");
    const [passwordId, setPasswordId] = useState("");
    let navigate = useNavigate()
    
  
    const canLogin = firstName !=="" && lastName !=="" && emailId !== "" && passwordId !== "";
    return (
      <>
      <div id={styles.card_container}>
        <form id={styles.form_container}>
       <label
       id={styles.first_name_label}
       >
          First Name
          <input
          id={styles.first_name}
          required
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </label>
        <label
        id={styles.last_name_label}>
          Last Name 
          <input
          id={styles.last_name}
          required
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </label>
        <label
        id={styles.email_label}>
          Email 
          <input
          id={styles.email}
          required
            type="email"
            value={emailId}
            onChange={e => setEmailId(e.target.value)}
          />  
        </label>
        <label
        id={styles.password_label}>
          Password 
          <input
          id={styles.password}
          required
            type="password"
            value={passwordId}
            onChange={e => setPasswordId(e.target.value)}
          />
        </label>
        </form>
        <LoginButton disabled={!canLogin} onClick={() => {
          setCurrentUser({ name: firstName + " " + lastName });
          setEmail({ email: emailId });
          setPassword({ password: passwordId });
          setIsLoggedin(true)
          navigate('/dashboard')
          
        }}>
          Sign Up
        </LoginButton>
        {!canLogin && <p>Please fill out all fields.</p>}
        <div id={styles.last_name_label}>Already Registered?</div>
        <button className={styles.btn}>
          <NavLink to="/login">Login</NavLink>
        </button>
      </div>
      </>
    )
  }

 export function LoginButton({ children, onClick, disabled }) {
    return (
      <button className={styles.btn} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    )
  }
  