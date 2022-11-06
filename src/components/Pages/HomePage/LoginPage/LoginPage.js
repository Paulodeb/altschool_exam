import React, { useContext } from 'react';
import { LoginButton } from '../Registration/RegForm';
import { CurrentUserContext } from '../../../Context/AuthContext';
import { Panel } from '../Registration/Register';
import NewLogin from './NewLogin';
import Navbar from '../../../Routes/Navbar';

function LoginPage() {

  const { currentUser, email, password } = useContext(CurrentUserContext);
  return (
    <div>
      <Navbar user={false}/>
      <Panel>

        <NewLogin />

        {currentUser && email && password !== null && <LoginLogOut />}
      </Panel>

    </div>
  )
}


export const LoginLogOut = () => {
  const { setCurrentUser, setEmail, setPassword, setIsLoggedin } = useContext(CurrentUserContext);
  return (
    <LoginButton
      onClick={() => {
        setCurrentUser(null);
        setEmail(null);
        setPassword(null);
        setIsLoggedin(true)
      }}
    >
      Logout
    </LoginButton>

  )
}




export default LoginPage