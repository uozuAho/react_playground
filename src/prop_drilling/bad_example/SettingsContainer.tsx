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

export class SettingsContainer extends React.Component<{}, SettingsDooverState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      mode: 'view',
      settings: {
        enabled: false,
        selectedTemplateId: 'template 1'
      }
    };
  }

  private onEditClicked = () => {
    this.setState({mode: 'edit'});
  };

  private onCancelEdits = () => {
    this.setState({mode: 'view'});
  };

  private onChangesSaved = (values: Settings) => {
    this.setState({
      mode: 'view',
      settings: values
    });
  };

  private renderViewer = () => {
    return (
      <>
        <SettingsViewer settings={this.state.settings}/>
        <button onClick={this.onEditClicked}>Edit</button>
      </>
    );
  };

  private renderEditor = () => {
    return (
      <>
        <SettingsEditor settings={this.state.settings} onSaved={this.onChangesSaved}/>
        <button onClick={this.onCancelEdits}>Cancel</button>
      </>
    );
  };

  render = () => {
    const getThing = () => {
      switch (this.state.mode) {
        case 'view': return this.renderViewer()
        case 'edit': return this.renderEditor()
      }
    };

    return (
      <>
        <h1>Settings</h1>
        {getThing()}
      </>
    );
  }
}
