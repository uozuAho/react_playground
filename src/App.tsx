import React from 'react';
import './App.css';

import { LifecycleDemos } from './lifecycle/LifecycleDemos';
import { SettingsDoover } from './prop_drilling/bad_example/Settings';
import {
  SidebarRouter,
  SidebarItem,
  ISidebarItem
} from './layout/SidebarRouter';

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
    () => <SettingsDoover />
  ),
];

export default App;
