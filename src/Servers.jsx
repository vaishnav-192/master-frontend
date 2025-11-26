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
      className="min-h-screen bg-cover bg-center overflow-hidden relative"
      style={{ backgroundImage: "url('/CoolSky.jpg')" }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-pink-900/40"></div>
      
      {/* Animated background circles */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto py-12 px-4">
        <motion.h1
          className="text-5xl font-bold mb-10 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Servers
        </motion.h1>

        <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl p-8 max-w-4xl mx-auto border border-white/20">
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
