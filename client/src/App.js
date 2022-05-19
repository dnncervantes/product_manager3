import React from 'react';
import {Link, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";
import Show from "./components/Show";
import Update from "./components/Update";
import View from "./components/View";
import './App.css';

function App() {
  return (
    <div className="App">
      <Link to="/home" >Home </Link> |
      <Link to="/create">Create </Link> 
      

      <Routes>
        {/*Home*/}
        <Route path='/' element={<Home/>} />

        {/*Create*/}
        <Route path='/create' element={<Create/>} />
        
        {/*Read All*/}
        <Route path='/show' element={<Show/>} />
        
        {/*Read One */}
        <Route path='/view/:id' element={<View/>} />
        
        {/*Update*/}
        <Route path='/update/:id' element={<Update/>} />
        
        {/*Redirect*/}
        <Route path='*' element={<Navigate to="/" replace/>} />
      </Routes>

    </div>
  );
}

export default App;
