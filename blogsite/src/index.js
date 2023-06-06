import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './routes/AboutPage'
import Contact from './routes/ContactPage'
import Gallery from './routes/GalleryPage'
import Login from './routes/LoginPage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/gallery' element={<Gallery/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
  </BrowserRouter>
);
