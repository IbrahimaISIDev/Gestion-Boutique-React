// src/components/Auth/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Chargement...</div>; // Vous pouvez personnaliser ce message
  }

  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
