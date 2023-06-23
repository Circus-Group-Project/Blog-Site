import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import About from './routes/AboutPage';
import Contact from './routes/ContactPage';
import Gallery from './routes/GalleryPage';
import Login from './routes/LoginPage';
import Upload from './routes/UploadPage';
import Profile from './routes/ProfilePage';
import GalleryDisplay from './routes/GalleryDisplayPage';
import { AuthProvider, useAuth } from './AuthContext';

function PrivateRoute({ element: Element, ...rest }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <Element {...rest} />
  ) : (
    <Navigate to="/login" replace state={{ from: rest.location }} />
  );
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/upload" element={<PrivateRoute element={<Upload />} />} />
        <Route path="/profile" element={<PrivateRoute element={<Profile />}/>} />
        <Route path="/gallerydisplay/:id" element={<GalleryDisplay />} />
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);
