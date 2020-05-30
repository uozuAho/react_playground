import React from 'react';

import {
  SidebarRouter,
  SidebarItem,
  ISidebarItem
} from './layout/SidebarRouter';
import { LifecycleDemos } from './lifecycle/LifecycleDemos';
import { PropDrillingDemo } from './prop_drilling/PropDrillingDemo';

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
  new SidebarItem(
    "/prop_drilling",
    "Prop drilling",
    () => <PropDrillingDemo />
  ),
];

export default App;
