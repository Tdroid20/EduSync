import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home.jsx';
import UserPage from './pages/user.jsx';
import { BrowserRouter, Route, Routes, Navigate,  } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));

function Router() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route element={ <Home /> } path='/home'/>
      <Route element={ <UserPage />} path='/users' />
    </Routes>
  </BrowserRouter>
  )
}

root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

