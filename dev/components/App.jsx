/**
 * DevApp.jsx
 * React app to test out package within development environment
 */

// Node Modules
import React from 'react';
import {Navigation} from 'react-app-elements';
import {BrowserRouter as Router} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Navigation />
      <div className="page">Hello world</div>
    </Router>
  );
}
