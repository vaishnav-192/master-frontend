import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Servers from './Servers';
import Mappings from './Mappings';
import Guide from './Guide';
import Navbar from './Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/servers" element={<Servers />} />
        <Route path="/mappings" element={<Mappings />} />
        <Route path="/guide" element={<Guide />} />
      </Routes>
    </Router>
  );
};

export default App;
