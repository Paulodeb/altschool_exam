import React, { useContext } from "react";
import { CurrentUserContext } from "../../../Context/AuthContext";
import useForm from "../../../Hooks/useForm";
import {  LoginButton } from "../Registration/RegForm";
import styles from './LoginPage.module.css'


function NewLogin() {
  const { setCurrentUser, setEmail, setPassword, setIsLoggedin } = useContext(
    CurrentUserContext
  );
  const { handleChange, values, errors, handleSubmit } = useForm(NewLogin);
  const canLogin =
    values.username === "altschool" &&
    values.password === "altschool" &&
    values.email === "altschool@gmail.com";
  return (
    <div id={styles.card_container}>
      <form id={styles.form_container}>
        <label>
          <h1 id={styles.title}>Login</h1>
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
        {errors.username && <h3>{errors.username}</h3>}
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
        {errors.email && <h3>{errors.email}</h3>}
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
        {errors.password && <h3>{errors.password}</h3>}
        </label>
        <LoginButton
          disabled={!canLogin}
          onClick={() => {
            setCurrentUser({ username: values.username });
            setEmail({ email: values.email });
            setPassword({ password: values.password });
            setIsLoggedin(true)
          
          }}
        >
          Log in
        </LoginButton>
        {!canLogin && <p>Please fill out all fields.</p>}
      </form>
    </div>
  );
}

export default NewLogin;
