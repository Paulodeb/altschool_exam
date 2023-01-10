import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import { AuthContextProvider } from "./components/Context/AuthContext";
import App from './App';
import { HelmetProvider } from 'react-helmet-async';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <HelmetProvider>
  <AuthContextProvider>
  <BrowserRouter>
    <App />
    </BrowserRouter>
  </AuthContextProvider>
  </HelmetProvider>
  </React.StrictMode>
);

