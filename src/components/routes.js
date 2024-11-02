// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './components/TaskList';
import About from './components/About';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/sobre" element={<About />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;