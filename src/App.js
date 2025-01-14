import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/tailwind.css'; // Importer le fichier CSS ici
import AppRoutes from './Routes';

function App() {
  return (
    <Router>
      <div className="App">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
