import React, { Component } from 'react';

import About from './Pages/About';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <h1>Index.js</h1>
        <Link to='/about'>123</Link>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/about' element={<Navigate to='/about' />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
