import React, { lazy, Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
// import User from "./components/Context/UserContext";
import ErrorFallback from "./components/ErrorBoundary";
import Navbar from "./components/Routes/Navbar";
const IndexRoutes = lazy(() => import("./components/Routes/IndexRoutes" ));

function Bomb() {
  throw new Error('💥 CABOOM 💥')
}

function App() {
  const [showBomb, setShowBomb] = useState(false)
  return (
    <>
      

      <Navbar />
      <button onClick={() => setShowBomb(e => !e)}>Show Bomb</button>
     <ErrorBoundary
       FallbackComponent={ErrorFallback}
       onReset={() => 
        setShowBomb(false)}
        resetKeys={[showBomb]}


        >
        {showBomb ? <Bomb /> : 

      <Suspense fallback={<div>Loading...</div>}>
      
        <IndexRoutes />
      </Suspense>}
     </ErrorBoundary>
      
      
    </>
  );
}

export default App;
