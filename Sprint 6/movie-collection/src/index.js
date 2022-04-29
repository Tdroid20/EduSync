import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes, Navigate,  } from 'react-router-dom';
import Home from './pages/home/home.jsx';
import UserPage from './pages/user/UserPage.jsx';
import MoviesPage from './pages/movies/movies';
import Gender from './pages/gender/gender';



const root = ReactDOM.createRoot(document.getElementById('root'));

function Router() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route element={ <Home /> } path='/home'/>
      <Route element={ <UserPage />} path='/users' />
      <Route element={ <MoviesPage />} path='/movies' />
      <Route element={ <Gender />} path='/gender' />
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

