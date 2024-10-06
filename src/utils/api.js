// src/utils/api.js

const BASE_URL = 'http://127.0.0.1:4000/api/v1'; 

const apiFetch = async (url, options = {}) => {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${BASE_URL}${url}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Une erreur s\'est produite');
  }

  return response.json();
};

export const login = (credentials) => apiFetch('/login', {
  method: 'POST',
  body: JSON.stringify(credentials),
});

export const logout = () => apiFetch('/logout', {
  method: 'POST',
});

export const getCurrentUser = () => apiFetch('/user');

export const refresh = (refreshToken) => apiFetch('/refresh', {
  method: 'POST',
  body: JSON.stringify({ refresh_token: refreshToken }),
});
