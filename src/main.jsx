import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, createBrowserRouter } from 'react-router-dom'; // Import createBrowserRouter

import App from './App.jsx';
import './index.css';

import Plans from './components/Plans.jsx';
import Contact from './components/Contact.jsx';

const router = createBrowserRouter([
  {
    path: '/Plans',
    element: <Plans />
  }, {
    path: '/Contact',
    element: <Contact />
  }
]);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Plans" element={<Plans />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
