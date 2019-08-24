/**
 * DevApp.jsx
 * React app to test out package within development environment
 */

// Node Modules
import React from 'react';
import {Navigation} from 'react-app-elements';
import {BrowserRouter as Router, Link} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Navigation logo="react-package-template">
        <Link to="/1">Link 1</Link>
        <Link to="/2">Link 2</Link>
      </Navigation>
      <div className="page">Hello world</div>
    </Router>
  );
}
