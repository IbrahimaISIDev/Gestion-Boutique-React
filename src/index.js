import React from 'react';
import ReactDOM from 'react-dom/client'; // Changez ceci si vous utilisez une autre version de React
import './styles/tailwind.css'; // Vérifiez que le chemin est correct
import App from './App';
import { AuthProvider } from './contexts/AuthContext'; // Assurez-vous que le chemin est correct

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
