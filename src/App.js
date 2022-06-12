import React, { useState} from 'react'
import './components/DataTableDemo.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login'
import '/node_modules/primeflex/primeflex.css'
import Dashboard from './components/Dashboard';
import Menu from './components/Menu'
import Signup from './components/Signup';
import { useSelector} from 'react-redux'

function App() {
  const logginStatus = useSelector(state => state.loggedIn)
  return (
    <div className="App">
       <div className='menu'>
        <Menu loggedIn={logginStatus}/>
      </div>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
