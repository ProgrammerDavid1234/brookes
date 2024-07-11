import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Education from '../src/Components/Education';
import Qualification from './Qualification';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/education" element={<Education />} />
        <Route path="/qualification" element={<Qualification />} />
        <Route path="/" element={<Education />} /> 
      </Routes>
    </Router>
  );
};

export default App;
