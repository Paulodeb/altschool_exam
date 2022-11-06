import React, { useContext } from "react";
import { CurrentUserContext } from "../../../Context/AuthContext";
import { Logout } from "../LoginPage/Logout";
import styles from './RegPage.module.css'
import { RegForm } from "./RegForm";

export default function Register() {
    const { currentUser, email, password } = useContext(CurrentUserContext);
    return (
      <Panel title="Register">
       { currentUser && email && password !== null ? 
       <Greeting /> :
       <RegForm />
       }
       {currentUser && email && password !== null && <Logout />}
      </Panel>
    )
  }

  function Greeting() {
    const { currentUser,  email} = useContext(CurrentUserContext);
    return (
      <div>
      <h2>Welcome!!</h2>
      <p>You logged in as {currentUser.name}.</p>
      <p> Your email is {email.email}</p>
      
      </div>
    )
  }

 export function Panel({ title, children }) {
    return (
      <section className={styles.panel}>
        <h1>{title}</h1>
        {children}
      </section>
    )
  }
  
  