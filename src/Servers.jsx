import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

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
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/CoolSky.jpg')", overflow: 'hidden', position: 'relative', width: '100%', height: '100%' }} // Background for the entire page
    >
      {/* CDN Logo in the background */}
      <motion.img
        src="/cdn.png"
        alt="CDN Logo"
        className="absolute right-0"
        style={{
          width: '800px',       // Make it large
          opacity: 0.1,        // Low opacity for subtle effect
          zIndex: 1,            // Ensure it is above background but below content
          top: '15%',
          transform: 'translate(300px, 100px)'
        }}
        animate={{
          opacity: 1,
          rotate: 90,        // Rotate 360 degrees
          x: ['30%', '40%'] // Slide from left to right
        }}
        initial={{ opacity: 0 }}
        transition={{ duration: 2 }}
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto py-12">
        <motion.h1
          className="text-5xl font-bold text-white mb-10 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Servers
        </motion.h1>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          {servers.length === 0 ? (
            <motion.p
              className="text-center text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              No servers available
            </motion.p>
          ) : (
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="space-y-4"
            >
              {servers.map((server, index) => (
                <motion.li
                  key={index}
                  className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                >
                  <h2 className="text-xl font-semibold text-gray-800">{server.name}</h2>
                  <p className="text-gray-600">{server.serverAddress}</p>
                  <p className="text-gray-500">Last Heartbeat: {new Date(server.lastHeartbeat).toLocaleString()}</p>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Servers;
