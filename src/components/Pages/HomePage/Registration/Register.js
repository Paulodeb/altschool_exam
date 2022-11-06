import React from "react";
import styles from './RegPage.module.css'
import { RegForm } from "./RegForm";
import Navbar from "../../../Routes/Navbar";

export default function Register() {
 
  return (
    <>
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

