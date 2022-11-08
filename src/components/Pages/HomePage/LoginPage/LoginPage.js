import React from "react";
import { useAuth } from "../../../Context/AuthContext";
import { Panel } from "../Registration/Register";
import NewLogin from "./NewLogin";
import { Helmet } from "react-helmet-async";

function LoginPage() {
  const { LoggedIn } = useAuth();

  return !LoggedIn ? (
    <div>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Login" />
        <link rel="canonical" href="/login" />
      </Helmet>

      <Panel>
        <NewLogin />
      </Panel>
    </div>
  ) : (
    <div>
      <h3>You are logged in</h3>
    </div>
  );
}

export default LoginPage;
