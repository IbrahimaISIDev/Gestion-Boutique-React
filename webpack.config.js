const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  // ... vos autres configurations
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'dist/output.css', to: 'dist/output.css' }, // Ajustez le chemin si nécessaire
      ],
    }),
  ],
};
