import React from 'react';
import Login from './components/Login';
import { Routes,Route } from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';

function App() {
  return (
    <div className="w-full mx-auto bg-pink-500">
       <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
