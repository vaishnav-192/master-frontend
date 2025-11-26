import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Mappings = () => {
  const [mappings, setMappings] = useState({});

  useEffect(() => {
    // Fetch mappings data from the API
    const fetchMappings = async () => {
      try {
        const response = await axios.get('https://local-cdn-master.vercel.app/mappings');
        setMappings(response.data);
      } catch (error) {
        console.error('Error fetching mappings:', error);
      }
    };

    fetchMappings();
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


      <div className="relative z-10 container mx-auto py-12 px-4">
        {/* Title */}
        <motion.h1
          className="text-5xl font-bold mb-10 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          File Mappings
        </motion.h1>

        <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl p-8 max-w-4xl mx-auto border border-white/20">
          {Object.keys(mappings).length === 0 ? (
            <motion.p
              className="text-center text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              No mappings available
            </motion.p>
          ) : (
            Object.entries(mappings).map(([contentType, servers], index) => (
              <motion.div
                key={contentType}
                className="mb-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                {/* Content Type */}
                <motion.h2
                  className="text-2xl font-semibold text-gray-800 mb-4 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text hover:text-blue-600"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {contentType}
                </motion.h2>
                {Object.entries(servers).map(([serverName, files], serverIndex) => (
                  <motion.div
                    key={serverName}
                    className="mb-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: (index + serverIndex) * 0.2 }}
                  >
                    {/* Server Name */}
                    <motion.h3
                      className="text-xl font-semibold text-gray-700 mb-2 transition-colors"
                      whileHover={{ scale: 1.05, color: '#32CD32' }}
                      transition={{ duration: 0.3 }}
                    >
                      {serverName}
                    </motion.h3>
                    <ul className="space-y-2">
                      {Object.entries(files).map(([fileName, magnetLink]) => (
                        <motion.li
                          key={fileName}
                          className="bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
                          whileHover={{ scale: 1.05 }}
                        >
                          {/* File Link */}
                          <a
                            href={magnetLink}
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {fileName}
                          </a>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Mappings;
