import { Card, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useRef, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext'
import NotFound from '../NotFound/NotFound'


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

    const modalStyles = {
      inputFields: {
        display: "flex",
        flexDirection: "column",
        marginTop: "20px",
        marginBottom: "15px",
        ".MuiFormControl-root": {
          marginBottom: "10px"
        }
      }
    };

  return LoggedIn ? (
      <>
     <Helmet>
            <title>ErrorBoundary</title>
            <meta name="description" content="To check your errors" />
            <link rel="canonical" href="/errorboundary" />
        </Helmet>
      <ErrorBoundary FallbackComponent={ErrorFallback}
      onReset= {() => {navigate('/')}}>
      <Box sx={modalStyles.inputFields}>
      <Card sx= {{ minWidth: 275, maxWidth: 500, align: "center" }}>

          <Typography align='center'>Error Boundary</Typography>

     
        
        <TextField
          label={`Name (don't type "error")`}
          placeholder={`type "error"`}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          ref={usernameRef}
        />
     
      </Card>
      </Box>

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