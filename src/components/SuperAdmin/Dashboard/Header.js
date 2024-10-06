import React from 'react';
import { Button } from '../../UI/Button';
import { Input } from '../../UI/Input';



const Header = ({ toggleSidebar }) => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center bg-white shadow-md px-4 py-2 header ml-5">
      <div className="p-4 flex items-center h-32 md:hidden">
        <svg className="w-20 h-20 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* SVG content */}
        </svg>
        <div className="flex flex-col text-gray-800 font-bold text-xl">
          <span>GESTION</span>
          <span>BOUTIQUE</span>
        </div>
      </div>
      <div className="search-bar flex items-center w-full sm:w-1/2 lg:w-3/5 mb-2 sm:mb-0">
        <Input
          type="text"
          placeholder="Rechercher dans votre boutique..."
          className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm sm:text-base"
        />
      </div>
      <Button
        className="header-user flex items-center mt-2 sm:mt-0"
        onClick={() => {/* Handle user menu click */}}
      >
        <img src="logo_url" alt="logo de l'entreprise" 
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-blue-500"/>
        
        <div className="pl-2 sm:pl-4 py-1 ml-2">
          <p className="text-gray-700 text-xs sm:text-sm font-semibold">OUSSEYNOU</p>
          <p className="text-gray-700 text-xs sm:text-sm font-semibold">DIEDHIOU</p>
        </div>
      </Button>
      {/* Implement user menu popover here */}
    </header>
  );
};

export default Header;