import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Local-CDN
        </Link>
        <div className="flex space-x-6">
          <motion.div
            whileHover={{ scale: 1.1, color: '#fbbf24' }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/" className="text-white text-lg">Homepage</Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, color: '#fbbf24' }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/servers" className="text-white text-lg">Servers</Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, color: '#fbbf24' }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/mappings" className="text-white text-lg">Mappings</Link>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
