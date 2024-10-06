import React from 'react';

const Table = ({ title, headers, data }) => {
  return (
    <div className="overflow-x-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
      <div className="overflow-x-auto">
        <table className="bg-white shadow-lg rounded-lg w-full">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index} className="py-3 px-6 text-center">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="py-3 px-6 text-center">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;