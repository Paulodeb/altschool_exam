import React from "react";
import { useAuth } from "../../../Context/AuthContext";
import useForm from "../../../Hooks/useForm";
import { LoginButton } from "../Registration/RegForm";
import styles from "./LoginPage.module.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NewLogin() {
  const { login, setCurrentUser, setEmail, setPassword } = useAuth();
  const { handleChange, values } = useForm(NewLogin);
  let navigate = useNavigate();
  const canLogin =
    values.username === "altschool" &&
    values.password === "altschool" &&
    values.email === "altschool@gmail.com";
  return (
    <div id={styles.card_container}>
      <form id={styles.form_container}>
        <label>
          <h1 id={styles.title}>Login</h1>
          {!canLogin && (
            <p id={styles.password_label}>Please fill out all fields.</p>
          )}
          <div id={styles.details}>
            Login details: <br />
            username: altschool <br />
            password: altschool <br />
            email: altschool@gmail
          </div>
        </label>
        <label id={styles.username_label}>
          Username
          <input
            id={styles.username}
            type="text"
            name="username"
            placeholder="username"
            onChange={handleChange}
          />
        </label>
        <label id={styles.email_label}>
          Email
          <input
            id={styles.email}
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={handleChange}
          />
        </label>
        <label id={styles.password_label}>
          Password
          <input
            id={styles.password}
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
        </label>
        <LoginButton
          disabled={!canLogin}
          onClick={() => {
            setCurrentUser({ username: values.username });
            setEmail({ email: values.email });
            setPassword({ password: values.password });
            navigate("/dashboard");
            login();
          }}
        >
          Log in
        </LoginButton>
        <div id={styles.password_label}>Not Registered?</div>
        <button className={styles.btn}>
          <NavLink to="/register">Register</NavLink>
        </button>
      </form>
    </div>
  );
}

export default NewLogin;
