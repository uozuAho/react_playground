import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import { LifecycleDemos } from './lifecycle/LifecycleDemos';
import { CounterDemo } from './redux/CounterDemo';
import { RenderingDemo } from './render/RenderingDemo';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="lifecycle_demos">Lifecycle demos</Link></li>
            <li><Link to="redux_counter">Redux counter</Link></li>
            <li><Link to="render">Rendering</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="lifecycle_demos" element={<LifecycleDemos />}/>
          <Route path="redux_counter" element={<CounterDemo />}/>
          <Route path="render" element={<RenderingDemo />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
