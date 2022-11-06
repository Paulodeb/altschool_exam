import React from "react";
import styles from './RegPage.module.css'
import { RegForm } from "./RegForm";
import Navbar from "../../../Routes/Navbar";
import { Helmet } from "react-helmet-async";

export default function Register() {
 
  return (
    <>
    <Helmet>
            <title>Register</title>
            <meta name="description" content="Register" />
            <link rel="canonical" href="/register" />
        </Helmet>
      <Navbar user={false} />
      <Panel title="Register">
        
          <RegForm />
        
       
      </Panel>
    </>
  )
}



export function Panel({ title, children }) {
  return (
    <section className={styles.panel}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

