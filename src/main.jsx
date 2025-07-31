import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import "../dist/output.css";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
