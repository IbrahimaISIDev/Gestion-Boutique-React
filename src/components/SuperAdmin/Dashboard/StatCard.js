import React from 'react';
import { Card } from '../../UI/Card';



const StatCard = ({ icon, title, value, change, changeType }) => {
  return (
    <Card className="stat-card rounded-lg p-6 text-white">
      <div className="flex items-center mb-4">
        <div className="stat-icon w-12 h-12 rounded-full flex items-center justify-center mr-4">
          <i className={`fas ${icon} text-xl`}></i>
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-3xl font-bold mb-2">{value}</p>
      <div className="flex items-center text-sm">
        <i className={`fas fa-arrow-${changeType} mr-1 text-${changeType === 'up' ? 'green' : 'red'}-400`}></i>
        <span className={`text-${changeType === 'up' ? 'green' : 'red'}-400`}>{change}</span>
        <span className="ml-2 text-gray-300">depuis le mois dernier</span>
      </div>
    </Card>
  );
};

export default StatCard;