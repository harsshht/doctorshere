import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Specialties from './components/specialties/Specialties';
import Doctors from './components/doctors/Doctors';
import Home from './components/Home';
import './index.css';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/specialties" element={<Specialties />} />
          <Route path="/doctors/:specialty" element={<Doctors />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
