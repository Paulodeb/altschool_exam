import React, { useContext } from "react";
import { CurrentUserContext } from "../../../Context/AuthContext";
import { LoginButton } from "../Registration/RegForm";


export  function Logout() {
    const { setCurrentUser, setEmail, setPassword } = useContext(CurrentUserContext);
    return (
      <LoginButton
        onClick={() => {
          setCurrentUser(null);
          setEmail(null);
          setPassword(null);
          
  
        }}
      >
        Logout
      </LoginButton>
    )
  }
  