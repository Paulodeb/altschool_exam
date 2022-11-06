import React, { lazy, Suspense} from "react";
import { ErrorBoundary } from "react-error-boundary";
import styles from './App'
import { AuthContextProvider } from "./components/Context/AuthContext";
const IndexRoutes = lazy(() => import("./components/Routes/IndexRoutes"));



function App() {

  return (
    <>
     <AuthContextProvider>
      <ErrorBoundary>
        <Suspense fallback={ <div className={styles.linespinner}>Loading...</div>}>
          <IndexRoutes />
        </Suspense>
      </ErrorBoundary>
      </AuthContextProvider>

    </>

  );
}

export default App;
