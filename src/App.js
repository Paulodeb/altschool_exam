import React, { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import styles from "./App";

const AuthRoutes = lazy(() => import("./components/Routes/AuthRouthes"));

function App() {
  // const {loggedIn} = useAuth();
  return (
    <>
      <ErrorBoundary>
        <Suspense
          fallback={<div className={styles.linespinner}>Loading...</div>}
        >
          <AuthRoutes />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
