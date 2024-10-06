import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import StatCard from './StatCard';
import Table from './Table';

const Dashboard = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const clientsData = [
    ['John', 'Doe', '77 123 45 67', '45000 FCFA'],
    ['Amina', 'Diop', '78 987 65 43', '35000 FCFA'],
  ];

  const articlesData = [
    ['Savon', '0', '300 FCFA'],
    ['Shampooing', '2', '2020 FCFA'],
  ];

  return (
    <div className={`flex flex-col md:flex-row ${sidebarActive ? 'sidebar-active' : ''}`}>
      <Sidebar />
      <div className="content">
        <Header toggleSidebar={toggleSidebar} />
        <main className="mt-8 mx-4 md:mr-8 rounded-xl bg-white p-4 shadow-sm flex flex-col">
          <div className="p-8" style={{ background: 'linear-gradient(to right, #2b6cb0, #2d3748)' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                icon="fa-money-bill-wave"
                title="Total des Dettes"
                value="500.000 CFA"
                change="3.5%"
                changeType="up"
              />
              <StatCard
                icon="fa-users"
                title="Nombre de Clients"
                value="120"
                change="5%"
                changeType="up"
              />
              <StatCard
                icon="fa-boxes"
                title="Articles en Stock"
                value="250"
                change="2%"
                changeType="down"
              />
              <StatCard
                icon="fa-exclamation-circle"
                title="Demandes en Cours"
                value="15"
                change="10%"
                changeType="up"
              />
            </div>
          </div>
          <section className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Table
              title="Liste des Clients"
              headers={['Nom', 'Prénom', 'Telephone', 'Montant Dette']}
              data={clientsData}
            />
            <Table
              title="Articles en Rupture de Stock"
              headers={['Article', 'Quantité Restante', 'Prix']}
              data={articlesData}
            />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;