import React from "react";
import styles from "./RegPage.module.css";
import { RegForm } from "./RegForm";
import { Helmet } from "react-helmet-async";
import { useAuth } from "../../../Context/AuthContext";

export default function Register() {
  const { LoggedIn } = useAuth();
  return !LoggedIn ? (
    <>
      <Helmet>
        <title>Register</title>
        <meta name="description" content="Register" />
        <link rel="canonical" href="/register" />
      </Helmet>
      <Panel>
        <RegForm />
      </Panel>
    </>
  ) : (
    <div>
      <h3>You are logged in</h3>
    </div>
  );
}

export function Panel({ title, children }) {
  return (
    <section className={styles.panel}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}
