import React from 'react';
import logo from './logo.svg';
import './App.css';

import { LifecycleDemos } from './lifecycle/LifecycleDemos';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LifecycleDemos />
      </header>
    </div>
  );
}

export default App;
