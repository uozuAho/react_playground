import * as React from 'react';

import { SettingsViewer } from './SettingsViewer';
import { SettingsEditor } from './SettingsEditor';
import { RemoteTemplateStore } from '../templates/template_store';

export interface Settings {
  enabled: boolean,
  selectedTemplateId: string | null
}

interface PropDrillingSettingsState {
  mode: 'view' | 'edit';
  settings: Settings;
}

export class PropDrillingSettings extends React.Component<{}, PropDrillingSettingsState> {
  private templateStore: RemoteTemplateStore;

  constructor(props: {}) {
    super(props);
    this.templateStore = new RemoteTemplateStore();
    this.state = {
      mode: 'view',
      settings: {
        enabled: false,
        selectedTemplateId: 'template 1'
      },
    };
  }

  public componentDidMount = () => {
    const selectedTemplate = this.state.settings.selectedTemplateId;

    if (!selectedTemplate) { return; }

    this.templateStore.loadTemplates()
      .then(templates => {
        if (templates.indexOf(selectedTemplate) === -1) {
          this.setState(state => {
            return {
              settings: {
                ...state.settings,
                selectedTemplateId: '???'
              }
            };
          })
        }
      });
  };

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

  private onSelectedTemplateDeleted = () => {
    this.setState(state => {
      return {
        settings: {
          ...state.settings,
          selectedTemplateId: null
        }
      };
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
        <SettingsEditor
          settings={this.state.settings}
          onSaved={this.onChangesSaved}
          onSelectedTemplateDeleted={this.onSelectedTemplateDeleted} />
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
        <h1>Prop drilling settings</h1>
        <p>
          This fixes the buggy settings example by passing the 'selected
          template deleted' event up to the top level from the template editor.
        </p>
        <p>
          Top (selected template) &lt;--- settings editor &lt;--- template editor: template deleted
        </p>
        {getThing()}
      </>
    );
  }
}
