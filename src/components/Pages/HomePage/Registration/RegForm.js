import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";
import useForm from "../../../Hooks/useForm";
import styles from "./RegPage.module.css";

export function RegForm() {
  const { login, setCurrentUser, setEmail, setPassword } = useAuth();
  const { handleChange, values } = useForm(RegForm);
  let navigate = useNavigate();

  const canLogin =
    values.firstName !== "" &&
    values.lastName !== "" &&
    values.emailId !== "" &&
    values.passwordId !== "";
  return (
    <>
      <div id={styles.card_container}>
        <form id={styles.form_container}>
          <label>
            <h1 id={styles.title}>Register</h1>
            {!canLogin && (
              <p id={styles.password_label}>Please fill out all fields.</p>
            )}
          </label>
          <label id={styles.first_name_label}>
            First Name
            <input
              id={styles.first_name}
              required
              type="text"
              name="firstname"
              placeholder="First name"
              onChange={handleChange}
            />
          </label>
          <label id={styles.last_name_label}>
            Last Name
            <input
              id={styles.last_name}
              required
              type="text"
              name="lastname"
              placeholder="Last name"
              onChange={handleChange}
            />
          </label>
          <label id={styles.email_label}>
            Email
            <input
              id={styles.email}
              required
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
              required
              type="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
            />
          </label>
        </form>
        <LoginButton
          disabled={!canLogin}
          onClick={() => {
            setCurrentUser({ name: values.firstName + " " + values.lastName });
            setEmail({ email: values.emailId });
            setPassword({ password: values.passwordId });
            login();
            navigate("/dashboard");
          }}
        >
          Sign Up
        </LoginButton>
        {!canLogin && <p>Please fill out all fields.</p>}
        <div id={styles.last_name_label}>Already Registered?</div>
        <button className={styles.btn}>
          <NavLink to="/login">Login</NavLink>
        </button>
      </div>
    </>
  );
}

export function LoginButton({ children, onClick, disabled }) {
  return (
    <button className={styles.btn} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
