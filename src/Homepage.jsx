import React from 'react';
import { motion } from 'framer-motion';

const Homepage = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/CoolSky.jpg')" }} // Background for the entire page
    >
      <div className="absolute inset-0 bg-opacity-70"></div>
      <div className="relative z-10 flex items-center text-white p-8">
        {/* Logo with right-to-left sliding animation */}
        <motion.img
          src='/cdn.png'
          alt="CDN Logo"
          className="mr-8" // Adjust size accordingly
          initial={{ x: 200, opacity: 0 }} // Start off-screen (to the right) and fully transparent
          animate={{ x: 0, rotate: 90, opacity: 1 }}  // Move to its original position and become fully opaque
          transition={{ duration: 2, ease: "easeOut" }} // Adjust the duration and easing function for smooth animation
        />
        {/* Title and Text */}
        <div>
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
    </div>
  );
};

export default Homepage;
