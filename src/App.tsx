import React from 'react';

import { LifecycleDemos } from './lifecycle/LifecycleDemos';
import { SettingsContainer } from './prop_drilling/bad_example/SettingsContainer';
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
    () => <SettingsContainer />
  ),
];

export default App;
