import * as React from 'react';

import { SettingsViewer } from './SettingsViewer';
import { SettingsEditor } from './SettingsEditor';

export interface Settings {
  enabled: boolean,
  selectedTemplateId: string | null
}

interface SettingsDooverState {
  mode: 'view' | 'edit';
  settings: Settings
}

export class SettingsDoover extends React.Component<{}, SettingsDooverState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      mode: 'view',
      settings: {
        enabled: false,
        selectedTemplateId: null
      }
    };
  }

  render = () => {
    const getThing = () => {
      switch (this.state.mode) {
        case 'view': return <SettingsViewer settings={this.state.settings}/>
        case 'edit': return <SettingsEditor settings={this.state.settings}/>
      }
    };

    return (
      <div>
        <h1>Settings</h1>
        {getThing()}
      </div>
    );
  }
}
