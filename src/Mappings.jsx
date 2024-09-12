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


      <div className="container mx-auto py-12">
        {/* Title */}
        <motion.h1
          className="text-5xl font-bold text-white mb-10 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          File Mappings
        </motion.h1>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
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
