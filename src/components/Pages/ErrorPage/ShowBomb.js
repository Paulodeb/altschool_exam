import React, { useRef, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from '../../ErrorBoundary'

function Bomb({username}){
    if (username === 'error'){
        throw new Error('💥 CABOOM 💥')
    }
    return
}

function ShowBomb() {
    const [bomb, setBomb] = useState(false)
    const [username, setUsername] = useState('')
    const usernameRef = useRef(null)
    
  return (
      <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() =>
      setBomb(false)}
      resetKeys={[bomb]}
    >
     <label>
        {`Name (don't type "error"): `}
        <input
          placeholder={`type "error"`}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          ref={usernameRef}
        />
      </label>

      <Bomb username={username}/>
      
    
    </ErrorBoundary>
  )
}

export default ShowBomb