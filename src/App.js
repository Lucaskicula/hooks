// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from '../src/components/about.js';
import TaskList from './components/tasklist.js';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/sobre">Sobre</Link>
      </nav>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/sobre" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;