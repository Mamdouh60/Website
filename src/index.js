import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { ValueContextProvider } from "./context/ValueContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <ValueContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // </ValueContextProvider>
);

