import React from 'react';

const ClientTable = () => {
  const clients = [
    { nom: 'John', prenom: 'Doe', telephone: '77 123 45 67', montantDette: '45000 FCFA' },
    { nom: 'Amina', prenom: 'Diop', telephone: '78 987 65 43', montantDette: '35000 FCFA' },
    // Ajoutez d'autres clients ici
  ];

  return (
    <div className="overflow-x-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Liste des Clients
      </h2>
      <div className="overflow-x-auto">
        <table className="bg-white shadow-lg rounded-lg w-full">
          <thead>
            <tr>
              <th className="py-3 px-6 text-center">Nom</th>
              <th className="py-3 px-6 text-center">Prénom</th>
              <th className="py-3 px-6 text-center">Telephone</th>
              <th className="py-3 px-6 text-center">Montant Dette</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr key={index}>
                <td className="py-3 px-6 text-center">{client.nom}</td>
                <td className="py-3 px-6 text-center">{client.prenom}</td>
                <td className="py-3 px-6 text-center">{client.telephone}</td>
                <td className="py-3 px-6 text-center">{client.montantDette}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientTable;