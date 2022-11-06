import React, { lazy, Suspense} from "react";
import { ErrorBoundary } from "react-error-boundary";
import styles from './App'
const IndexRoutes = lazy(() => import("./components/Routes/IndexRoutes"));



function App() {

  return (
    <>
     
      <ErrorBoundary>
        <Suspense fallback={ <div className={styles.linespinner}>Loading...</div>}>
          <IndexRoutes />
        </Suspense>
      </ErrorBoundary>

    </>

  );
}

export default App;
