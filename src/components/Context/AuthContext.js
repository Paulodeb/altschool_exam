import React, { createContext, useState } from "react";
// import { Login } from "../Pages/HomePage/LoginPage/Login";


export const CurrentUserContext = createContext(null);


export function AuthContextProvider({children}) {
  const [currentUser, setCurrentUser] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <CurrentUserContext.Provider
    value={{
        currentUser,
        setCurrentUser,
        email,
        setEmail,
        password,
        setPassword,
      }}>
      {children}
      </CurrentUserContext.Provider>
  )
}

// export default function Userdetails() {
//   return (
//     <AuthContextProvider>
//   <Login />
//   </AuthContextProvider>
//   )
// }






  



