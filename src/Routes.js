import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Importez Navigate
import Login from './components/Auth/Login';
import Dashboard from './components/SuperAdmin/Dashboard/Dashboard';
// import Register from './components/Auth/Register';
// import ClientDashboard from './components/Client/Dashboard';
// import BoutiquierDashboard from './components/Boutiquier/ArticlesPaiements';
// import SuperAdminDashboard from './components/SuperAdmin/Dashboard';
// Importez d'autres composants si nécessaire

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} /> {/* Redirige vers /login */}
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* <Route path="/register" element={<Register />} />
//       <Route path="/client" element={<ClientDashboard />} />
//       <Route path="/boutiquier" element={<BoutiquierDashboard />} />
//       <Route path="/admin" element={<SuperAdminDashboard />} /> */}
    </Routes>
  );
};

export default AppRoutes;
