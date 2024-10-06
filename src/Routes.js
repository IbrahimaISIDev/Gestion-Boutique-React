import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Importez Navigate
import Login from './components/Auth/Login';
// Importez d'autres composants si nécessaire

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} /> {/* Redirige vers /login */}
      <Route path="/login" element={<Login />} />
      {/* Ajoutez d'autres routes si nécessaire */}
    </Routes>
  );
};

export default AppRoutes;
