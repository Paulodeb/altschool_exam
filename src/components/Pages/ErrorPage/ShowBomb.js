import React, { useRef, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Helmet } from 'react-helmet-async'



function Bomb({username}){
    if (username === 'error'){
        throw new Error('💥 CABOOM 💥')
    }
    return
}

function ShowBomb() {
    const [username, setUsername] = useState('')
    const usernameRef = useRef(null)

  return (

      <>
     <Helmet>
            <title>ErrorBoundary</title>
            <meta name="description" content="Error Boundary" />
            <link rel="canonical" href="/errorboundary" />
        </Helmet>
      <ErrorBoundary>
      <div className='container'>

     <label className='label_container'>
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
  )
}

export default ShowBomb