import React from 'react';
import Login from './components/Login';
import { Routes,Route } from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';   

function App() {
  return (
    <div className="w-full mx-auto">
      <ToastContainer/>
       <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
