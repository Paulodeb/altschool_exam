import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import styles from './notfound.module.css'

function NotFound() {
    let navigate = useNavigate()
  return (
    <>
   <Helmet>
            <title>Home</title>
            <meta name="description" content="Home page" />
            <link rel="canonical" href="/" />
        </Helmet> 
    <div className={styles.container}>
        <h1 className={styles.err}>404</h1>
        <p className={styles.pnf}>PAGE NOT FOUND</p>
        <span className={styles.pe}>PAGE EXPIRED</span>
        <button className={styles.bck} onClick={()=> navigate('/')}>GO BACK</button>
    </div>
    </>
    )
}

export default NotFound