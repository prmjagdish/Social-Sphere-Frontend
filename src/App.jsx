import React from 'react';
import "./App.css";
import AppRoutes from './Routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
