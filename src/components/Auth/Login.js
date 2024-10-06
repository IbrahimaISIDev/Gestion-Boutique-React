import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';  // Importation du hook personnalisé
import api from '../../utils/api';  // Utilisation de l'instance api

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const { login: authenticate } = useAuth();  // Utilisation de la fonction `login` du hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // Utilisation de l'instance api pour l'appel HTTP
      const response = await api.post('/v1/login', {
        login,
        password,
      });

      // Stocker le token dans localStorage
      localStorage.setItem('token', response.data.access_token);

      // Appeler la fonction login du hook pour mettre à jour l'utilisateur
      authenticate(response.data.user); 

      // Redirection vers le dashboard
      navigate('/dashboard');
    } catch (err) {
      setError('Les identifiants sont incorrects');
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-2xl rounded-lg overflow-hidden max-w-4xl w-full grid grid-cols-1 md:grid-cols-2">
        {/* Section gauche : Image et texte */}
        <div className="relative bg-gradient-to-br from-blue-900 to-blue-700 p-8 text-white flex flex-col justify-center">
          <div className="absolute top-0 left-0 bg-yellow-400 w-24 h-24 rounded-full transform -translate-x-12 -translate-y-12 parallax-shape"></div>
          <div className="absolute bottom-0 right-0 bg-yellow-400 w-36 h-36 rounded-full transform translate-x-12 translate-y-12 parallax-shape"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="p-4 flex items-center h-32">
              {/* SVG Logo */}
            </div>
            <h2 className="text-4xl font-extrabold mb-4 text-center">Bienvenue <br /> Diallo Boutique</h2>
            <p className="text-lg text-blue-200 mb-6 text-center">La plateforme idéale pour gérer vos ventes, articles et clients avec efficacité.</p>
          </div>
        </div>

        {/* Section droite : Formulaire de connexion */}
        <div className="p-10 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Connexion</h1>
          <p className="text-lg text-gray-500 text-center mb-8">Connectez-vous pour accéder à votre espace de gestion.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="login" className="block text-sm font-medium text-gray-700">Adresse e-mail</label>
              <input
                type="text"
                id="login"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 form-focus"
                placeholder="exemple@domaine.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 form-focus"
                placeholder="••••••••"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 btn-hover transition-all"
            >
              Se connecter
            </button>
          </form>

          <div className="flex justify-between items-center mt-4 text-sm">
          <div className="flex justify-between items-center mt-4 text-sm">
                 <a href="/forgot-password" className="text-blue-600 hover:text-blue-800 transition-colors">Mot de passe oublié?</a>
                 <a href="/home" className="text-gray-700 hover:text-gray-900 transition-colors">Annuler</a>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
