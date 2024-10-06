// src/contexts/AuthContext.js

import React, { createContext, useState, useEffect, useContext } from 'react';
import { login as apiLogin, logout as apiLogout, getCurrentUser, refresh as apiRefresh } from '../utils/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await getCurrentUser();
          setUser(response.data);
        } catch (error) {
          localStorage.removeItem('token');
        }
      }
      setLoading(false);
    };
    initAuth();
  }, []);

  const login = async (credentials) => {
    const response = await apiLogin(credentials);
    const { user, access_token, refresh_token } = response;
    localStorage.setItem('token', access_token);
    localStorage.setItem('refreshToken', refresh_token);
    setUser(user);
  };

  const logout = async () => {
    await apiLogout();
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    setUser(null);
  };

  const refreshAccessToken = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) {
      try {
        const response = await apiRefresh(refreshToken);
        const { access_token } = response;
        localStorage.setItem('token', access_token);
        return access_token;
      } catch (error) {
        logout(); // Déconnexion en cas d'erreur
      }
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, refreshAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
