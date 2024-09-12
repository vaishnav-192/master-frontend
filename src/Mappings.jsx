import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-600 p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">File Mappings</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          {Object.keys(mappings).length === 0 ? (
            <p className="text-center text-gray-500">No mappings available</p>
          ) : (
            Object.entries(mappings).map(([contentType, servers]) => (
              <div key={contentType} className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{contentType}</h2>
                {Object.entries(servers).map(([serverName, files]) => (
                  <div key={serverName} className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">{serverName}</h3>
                    <ul className="space-y-2">
                      {Object.entries(files).map(([fileName, magnetLink]) => (
                        <li key={fileName} className="bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                          <a href={magnetLink} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                            {fileName}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Mappings;
