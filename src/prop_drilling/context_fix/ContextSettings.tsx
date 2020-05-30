import * as React from 'react';

import { SettingsViewer } from './SettingsViewer';
import { SettingsEditor } from './SettingsEditor';
import { TemplateContextProvider, ITemplateContext } from './TemplateContext';

export interface Settings {
  enabled: boolean,
}

interface ContextSettingsState {
  mode: 'view' | 'edit';
  settings: Settings;
}

export class ContextSettings extends React.Component<{}, ContextSettingsState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      mode: 'view',
      settings: {
        enabled: false,
      },
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
    (this.context as ITemplateContext).setSelectedTemplate()
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

  public render = () => {
    const getThing = () => {
      switch (this.state.mode) {
        case 'view': return this.renderViewer()
        case 'edit': return this.renderEditor()
      }
    };

    return (
      <TemplateContextProvider>
        <h1>Context settings</h1>
        {getThing()}
      </TemplateContextProvider>
    );
  }
}
