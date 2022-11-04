import React, { useContext, useState } from "react";
import { CurrentUserContext } from "../../../Context/AuthContext";

export function LoginForm( ) {
    const { setCurrentUser, setEmail, setPassword } = useContext(CurrentUserContext);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailId, setEmailId] = useState("");
    const [passwordId, setPasswordId] = useState("");
    
  
    const canLogin = firstName !=="" && lastName !=="" && emailId !== "" && passwordId !== "";
    return (
      <>
       <label>
          First Name:{' '}
          <input
          required
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name {': '}
          <input
          required
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </label>
        <label>
          Email {': '}
          <input
          required
            type="email"
            value={emailId}
            onChange={e => setEmailId(e.target.value)}
          />  
        </label>
        <label>
          Password {': '}
          <input
          required
            type="password"
            value={passwordId}
            onChange={e => setPasswordId(e.target.value)}
          />
        </label>
        <Button disabled={!canLogin} onClick={() => {
          setCurrentUser({ name: firstName + " " + lastName });
          setEmail({ email: emailId });
          setPassword({ password: passwordId });
        }}>
          Log in
        </Button>
        {!canLogin && <p>Please fill out all fields.</p>}
      </>
    )
  }

 export function Button({ children, onClick, disabled }) {
    return (
      <button className="button" onClick={onClick} disabled={disabled}>
        {children}
      </button>
    )
  }
  