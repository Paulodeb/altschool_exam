import React, { useContext } from "react";
import { CurrentUserContext } from "../../../Context/AuthContext";
import { LoginForm } from "./LoginForm";
import { Logout } from "./Logout";

export default function Login() {
    const { currentUser, email, password } = useContext(CurrentUserContext);
    return (
      <Panel title="Login">
       { currentUser && email && password !== null ? 
       <Greeting /> :
       <LoginForm />
       }
       {currentUser && email && password !== null && <Logout />}
      </Panel>
    )
  }

  function Greeting() {
    const { currentUser,  email} = useContext(CurrentUserContext);
    return (
      <div>
      <p>You logged in as {currentUser.name}.</p>
      <p> Your email is {email.email}</p>
      
      </div>
    )
  }

  function Panel({ title, children }) {
    return (
      <section className="panel">
        <h1>{title}</h1>
        {children}
      </section>
    )
  }
  
  