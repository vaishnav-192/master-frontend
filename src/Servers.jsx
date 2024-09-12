import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Servers = () => {
  const [servers, setServers] = useState([]);

  useEffect(() => {
    // Fetch server data from the API
    const fetchServers = async () => {
      try {
        const response = await axios.get('https://local-cdn-master.vercel.app/servers');
        setServers(response.data);
      } catch (error) {
        console.error('Error fetching servers:', error);
      }
    };

    fetchServers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-600 p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Servers</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          {servers.length === 0 ? (
            <p className="text-center text-gray-500">No servers available</p>
          ) : (
            <ul className="space-y-4">
              {servers.map((server, index) => (
                <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <h2 className="text-xl font-semibold text-gray-800">{server.name}</h2>
                  <p className="text-gray-600">{server.serverAddress}</p>
                  <p className="text-gray-500">Last Heartbeat: {new Date(server.lastHeartbeat).toLocaleString()}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Servers;
