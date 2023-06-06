import React from "react";
// import { useState } from 'react';

import './App.css';

import Auth from './components/auth/Auth';
import Home from './components/home/Home';

function App() {
  return (
    <div id="App" className="App">
      <Home />
      <Auth/>
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
