import React, { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import Navbar from "./components/Routes/navbar";

const AuthRoutes = lazy(() => import("./components/Routes/AuthRouthes"));

function App() {
  // const {loggedIn} = useAuth();
  return (
    <>
      <ErrorBoundary>
        <Suspense
          fallback={<div className='linespinner'>Loading...</div>}
        >
        <Navbar/>
          <AuthRoutes />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
