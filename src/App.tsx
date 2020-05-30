import React from 'react';

import {
  SidebarRouter,
  SidebarItem,
  ISidebarItem
} from './layout/SidebarRouter';
import { LifecycleDemos } from './lifecycle/LifecycleDemos';

const App: React.FC = () => {
  return (
    <div className="App">
      <SidebarRouter items={componentRoutes}/>
    </div>
  );
}

const componentRoutes: ISidebarItem[] = [
  new SidebarItem(
      "/lifecycle_demos",
      "Lifecycle demos",
      () => <LifecycleDemos />
  ),
];

export default App;
