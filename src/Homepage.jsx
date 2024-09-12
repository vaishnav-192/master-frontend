import React from 'react';
import { motion } from 'framer-motion';

const Homepage = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-double">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 opacity-70"></div>
      <div className="relative z-10 text-center text-white p-8">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Local-CDN
        </motion.h1>
        <p className="text-xl">Created by Vaishnav Kamarti</p>
      </div>
    </div>
  );
};

export default Homepage;
