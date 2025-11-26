import React from 'react';
import { motion } from 'framer-motion';

const Guide = () => {
  const steps = [
    {
      number: 1,
      title: "Clone the Repository",
      description: "Download the Local CDN Client from GitHub",
      command: "git clone https://github.com/vaishnav-192/local-cdn-client.git",
      link: "https://github.com/vaishnav-192/local-cdn-client"
    },
    {
      number: 2,
      title: "Navigate to the Project",
      description: "Open the cloned repository in your terminal",
      command: "cd local-cdn-client"
    },
    {
      number: 3,
      title: "Install Dependencies",
      description: "Install all required npm packages",
      command: "npm install"
    },
    {
      number: 4,
      title: "Configure Environment",
      description: "Create a .env file with the required details mentioned in the repository's README",
      note: "Check the repository README for specific environment variables needed"
    },
    {
      number: 5,
      title: "Start Your Local CDN",
      description: "Launch the CDN server on your machine",
      command: "npm start",
      result: "Your local CDN will be available at localhost:{PORT}"
    }
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center overflow-auto relative"
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
          className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          How to Use Local CDN
        </motion.h1>

        {/* Introduction */}
        <motion.div
          className="bg-white bg-opacity-95 rounded-lg shadow-lg p-8 mb-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome! 👋</h2>
          <p className="text-lg text-gray-700 mb-4">
            This master webpage allows you to see all Local CDN servers connected over your network. 
            Each user can run their own local CDN client to upload and search for files.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <p className="text-gray-700">
              <strong>What you'll achieve:</strong> Set up your own local CDN where you can upload files 
              and search for them at <code className="bg-gray-200 px-2 py-1 rounded">localhost:PORT</code>
            </p>
          </div>
        </motion.div>

        {/* Step-by-step Guide */}
        <motion.div
          className="bg-white bg-opacity-95 rounded-lg shadow-lg p-8 max-w-4xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Setup Instructions</h2>
          
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="mb-8 last:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex items-start">
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-xl">
                    {step.number}
                  </div>
                </div>
                
                {/* Step Content */}
                <div className="ml-6 flex-grow">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-3">{step.description}</p>
                  
                  {step.command && (
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3 overflow-x-auto">
                      <code>{step.command}</code>
                    </div>
                  )}
                  
                  {step.link && (
                    <a
                      href={step.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline font-semibold"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                      </svg>
                      Visit GitHub Repository
                    </a>
                  )}
                  
                  {step.note && (
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mt-3">
                      <p className="text-sm text-gray-700">
                        <strong>Note:</strong> {step.note}
                      </p>
                    </div>
                  )}
                  
                  {step.result && (
                    <div className="bg-green-50 border-l-4 border-green-400 p-3 mt-3">
                      <p className="text-sm text-gray-700">
                        <strong>✓ Result:</strong> {step.result}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="ml-6 mt-4 mb-4 border-l-2 border-gray-300 h-8"></div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        <motion.div
          className="bg-white bg-opacity-95 rounded-lg shadow-lg p-8 max-w-4xl mx-auto mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">What You Can Do</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-blue-900 mb-3">📤 Upload Files</h3>
              <p className="text-gray-700">
                Upload files to your local CDN server and make them available across your network.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-purple-900 mb-3">🔍 Search Files</h3>
              <p className="text-gray-700">
                Search and discover files available on your local CDN instance.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-green-900 mb-3">🌐 Network Visibility</h3>
              <p className="text-gray-700">
                View all connected CDN servers across your network on this master webpage.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-orange-900 mb-3">📊 Monitor Servers</h3>
              <p className="text-gray-700">
                Check server status, heartbeats, and file mappings in real-time.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Additional Resources */}
        <motion.div
          className="bg-white bg-opacity-95 rounded-lg shadow-lg p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Additional Resources</h2>
          <div className="space-y-4">
            <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <svg className="w-8 h-8 text-gray-700 mr-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="font-bold text-gray-800">Need Help?</h3>
                <p className="text-gray-600">Check the README in the repository for detailed configuration options</p>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <svg className="w-8 h-8 text-gray-700 mr-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="font-bold text-gray-800">Issues or Bugs?</h3>
                <p className="text-gray-600">Report them on the GitHub issues page</p>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <svg className="w-8 h-8 text-gray-700 mr-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
              </svg>
              <div>
                <h3 className="font-bold text-gray-800">Contribute</h3>
                <p className="text-gray-600">Feel free to contribute to the project on GitHub</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center mt-12 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <p className="text-lg">Created by Vaishnav Kamarti</p>
          <p className="text-sm mt-2 opacity-80">Happy CDN-ing! 🚀</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Guide;
