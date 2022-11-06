import React, { lazy, Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
// import User from "./components/Context/UserContext";
import ErrorFallback from "./components/ErrorBoundary";
import ShowBomb from "./components/Pages/ErrorPage/ShowBomb";
import Navbar from "./components/Routes/Navbar";
const IndexRoutes = lazy(() => import("./components/Routes/IndexRoutes" ));

function Bomb() {
  
}

function App() {
  
  return (
    <>
      <Navbar />
     <ErrorBoundary>
         
      <Suspense fallback={<div>Loading...</div>}>
      
        <IndexRoutes />
      </Suspense>
     </ErrorBoundary>
      
    </>  
    
  );
}

export default App;
