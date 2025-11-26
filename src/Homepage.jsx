import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
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

      <div className="relative z-10 flex flex-col lg:flex-row items-center text-white p-8 max-w-6xl mx-auto">
        {/* Logo with enhanced animation */}
        <motion.div
          className="mb-8 lg:mb-0 lg:mr-12 flex-shrink-0"
          initial={{ x: 200, opacity: 0, rotate: 0 }}
          animate={{ x: 0, rotate: 90, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <motion.img
            src='/cdn.png'
            alt="CDN Logo"
            className="w-64 h-64 lg:w-80 lg:h-80 drop-shadow-2xl object-contain"
            whileHover={{ 
              scale: 1.1, 
              rotate: 95,
              filter: "drop-shadow(0 0 30px rgba(147, 51, 234, 0.8))"
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Title and Content */}
        <div className="text-center lg:text-left">
          <motion.h1
            className="text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to Local-CDN
          </motion.h1>
          
          <motion.p
            className="text-2xl lg:text-3xl mb-4 text-blue-200 font-semibold"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Distributed Content Delivery Network
          </motion.p>
          
          <motion.p
            className="text-lg lg:text-xl mb-8 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Created by <span className="text-purple-300 font-bold">Vaishnav Kamarti</span>
          </motion.p>

          {/* Feature highlights */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
            >
              <div className="text-4xl mb-2">🚀</div>
              <h3 className="font-bold text-lg mb-1">Fast Delivery</h3>
              <p className="text-sm text-gray-300">Lightning-fast content distribution</p>
            </motion.div>
            
            <motion.div
              className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
            >
              <div className="text-4xl mb-2">🌐</div>
              <h3 className="font-bold text-lg mb-1">Network Wide</h3>
              <p className="text-sm text-gray-300">Connected across your network</p>
            </motion.div>
            
            <motion.div
              className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
            >
              <div className="text-4xl mb-2">🔒</div>
              <h3 className="font-bold text-lg mb-1">Local Control</h3>
              <p className="text-sm text-gray-300">Your data, your network</p>
            </motion.div>
          </motion.div>

          {/* Call to action buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <Link to="/guide">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(147, 51, 234, 0.6)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started 🚀
              </motion.button>
            </Link>
            
            <Link to="/servers">
              <motion.button
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full font-bold text-lg hover:bg-white/20"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "rgba(255, 255, 255, 0.6)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Servers 📡
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating particles effect */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default Homepage;
