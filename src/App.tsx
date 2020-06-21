import React from 'react';

import {
  SidebarRouter,
  SidebarItem,
  ISidebarItem
} from './layout/SidebarRouter';
import { LifecycleDemos } from './lifecycle/LifecycleDemos';
import { CounterDemo } from './redux/CounterDemo';

const App: React.FC = () => {
  return (
    <div className="App">
      <SidebarRouter items={componentRoutes}/>
    </div>
  );
};

const componentRoutes: ISidebarItem[] = [
  new SidebarItem(
    "/lifecycle_demos",
    "Lifecycle demos",
    () => <LifecycleDemos />
  ),
  new SidebarItem(
    "/redux_counter",
    "Redux counter demo",
    () => <CounterDemo />
  )
];

export default App;
