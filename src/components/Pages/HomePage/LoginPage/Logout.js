import React, { useContext } from "react";
import { CurrentUserContext } from "../../../Context/AuthContext";
import { Button } from "./LoginForm";

export function Logout() {
    const { setCurrentUser, setEmail, setPassword } = useContext(CurrentUserContext);
    return (
      <Button
        onClick={() => {
          setCurrentUser(null);
          setEmail(null);
          setPassword(null);
  
        }}
      >
        Logout
      </Button>
    )
  }
  