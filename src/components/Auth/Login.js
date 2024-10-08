// src/components/Auth/Login.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext'; // Assurez-vous que le chemin est correct
import { login } from '../../utils/api'; // Modifier l'importation pour utiliser la fonction login


const Login = () => {
  const [loginInput, setLogin] = useState(''); // Renommé pour éviter les confusions avec l'importation
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  const { login: authenticate } = useAuth(); // Utilisez login

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      const response = await login({ login: loginInput, password }); // Appel de la fonction login
      localStorage.setItem('token', response.access_token); // Vérifiez que la réponse contient access_token
      localStorage.setItem('refreshToken', response.refresh_token); // Assurez-vous que le refresh_token est stocké
      authenticate(response.data.user); // Authentification de l'utilisateur
      console.log('Response:', response); // Vérifiez la réponse

      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Les identifiants sont incorrects'); // Affichage de l'erreur renvoyée par le serveur
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center min-h-screen overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-2xl rounded-lg overflow-hidden max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 relative">
        
        {/* Section gauche : Image et texte */}
        <div className="relative bg-gradient-to-br from-blue-900 to-blue-700 p-8 text-white flex flex-col justify-center overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
            className="absolute top-0 left-0 bg-yellow-400 opacity-50 w-24 h-24 rounded-full transform -translate-x-12 -translate-y-12"/>
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
            className="absolute bottom-0 right-0 bg-yellow-400 opacity-50 w-36 h-36 rounded-full transform translate-x-12 translate-y-12"/>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative z-10 flex flex-col items-center">
            <div className="p-4 flex items-center h-32">
              {/* <img src={logo} alt="Logo Diallo Boutique" className="h-20 w-20" /> Logo */}
            </div>
            <h2 className="text-4xl font-extrabold mb-4 text-center">Bienvenue <br /> Chez Diallo Boutique</h2>
            <p className="text-lg text-blue-200 mb-6 text-center">La plateforme idéale pour gérer vos ventes, articles et clients avec efficacité.</p>
          </motion.div>
        </div>

        {/* Section droite : Formulaire de connexion */}
        <div className="p-10 flex flex-col justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl font-bold text-gray-800 mb-6 text-center">
            Connexion
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg text-gray-500 text-center mb-8">
            Connectez-vous pour accéder à votre espace de gestion.
          </motion.p>

          <motion.form 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            onSubmit={handleSubmit} 
            className="space-y-6">
            <div>
              <label htmlFor="login" className="block text-sm font-medium text-gray-700">Adresse e-mail</label>
              <input
                type="text"
                id="login"
                value={loginInput} // Renommé ici pour correspondre à l'état
                onChange={(e) => setLogin(e.target.value)}
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
                placeholder="exemple@domaine.com"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
                placeholder="••••••••"
                required
              />
            </div>
            {error && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm">
                {error}
              </motion.p>
            )}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all duration-300 ease-in-out"
              disabled={isLoading}>
              {isLoading ? 'Connexion en cours...' : 'Se connecter'}
            </motion.button>
          </motion.form>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex justify-between items-center mt-4 text-sm">
            <a href="/forgot-password" className="text-blue-600 hover:text-blue-800 transition-colors">Mot de passe oublié?</a>
            <a href="/home" className="text-gray-700 hover:text-gray-900 transition-colors">Annuler</a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
