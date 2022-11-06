import React from 'react'

export default function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role='alert'>
      <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button className='error_btn' onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}