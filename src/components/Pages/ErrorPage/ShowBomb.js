import React, { useRef, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext'
import NotFound from '../NotFound/NotFound'
import styles from './showbomb.module.css'

export const ErrorFallback = ({error, resetErrorBoundary}) => {
  return (
    <div role='alert'>
      <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button className='error_btn' onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

function Bomb({username}){
    if (username === 'error'){
        throw new Error('💥 CABOOM 💥')
    }
    return
}

function ShowBomb() {
  const{LoggedIn} = useAuth()
    const [username, setUsername] = useState('')
    const usernameRef = useRef(null)
    let navigate = useNavigate()

  return LoggedIn ? (
      <>
     <Helmet>
            <title>ErrorBoundary</title>
            <meta name="description" content="To check your errors" />
            <link rel="canonical" href="/errorboundary" />
        </Helmet>
      <ErrorBoundary FallbackComponent={ErrorFallback}
      onReset= {() => {navigate('/')}}>
      <div className={styles.container}>
          <h1 className={styles.text}>Error Boundary</h1>

     <label className={styles.label_container}>
        {`Name (don't type "error"): `}
        <input
          placeholder={`type "error"`}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          ref={usernameRef}
        />
      </label>
      </div>

      <Bomb username={username}/>
      
    
    </ErrorBoundary>
    </>
  ) : (
    <>
    <NotFound/>
		</>
  )
}

export default ShowBomb