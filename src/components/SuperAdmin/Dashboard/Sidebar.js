import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar" id="sidebar">
      <div className="p-4 flex items-center h-32 logo">
        <svg className="w-20 h-20 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="24" rx="4" fill="white" />
          <path
            d="M17 8H7C5.89543 8 5 8.89543 5 10V16C5 17.1046 5.89543 18 7 18H17C18.1046 18 19 17.1046 19 16V10C19 8.89543 18.1046 8 17 8Z"
            stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M12 12C12.5523 12 13 11.5523 13 11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11C11 11.5523 11.4477 12 12 12Z"
            stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 16H8" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="flex flex-col text-white font-bold text-xl">
          <span>GESTION</span>
          <span>BOUTIQUE</span>
        </div>
      </div>
      <Link to="/dashboard" className="block px-4 py-2 mt-2 text-sm font-semibold text-white hover:bg-gray-600">
        <i className="fas fa-tachometer-alt text-lg mr-3"></i> Dashboard
      </Link>
      <Link to="/dettes" className="block px-4 py-2 mt-2 text-sm font-semibold text-white hover:bg-gray-600">
        <i className="fas fa-dollar-sign text-lg mr-3"></i> Dettes
      </Link>
      <Link to="/clients" className="block px-4 py-2 mt-2 text-sm font-semibold text-white hover:bg-gray-600">
        <i className="fas fa-users text-lg mr-3"></i> Clients
      </Link>
      <Link to="/articles" className="block px-4 py-2 mt-2 text-sm font-semibold text-white hover:bg-gray-600">
        <i className="fas fa-box text-lg mr-3"></i> Articles
      </Link>
      <Link to="/demandes" className="block px-4 py-2 mt-2 text-sm font-semibold text-white hover:bg-gray-600">
        <i className="fas fa-envelope text-lg mr-3"></i> Demandes
      </Link>
      <Link to="/utilisateurs" className="block px-4 py-2 mt-2 text-sm font-semibold text-white hover:bg-gray-600">
        <i className="fas fa-user text-lg mr-3"></i> Utilisateurs
      </Link>
    </div>
  );
};

export default Sidebar;