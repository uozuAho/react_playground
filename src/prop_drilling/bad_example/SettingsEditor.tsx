import * as React from "react"

import { Settings } from "./SettingsContainer"

interface SettingsEditorProps {
  settings: Settings
};

interface SettingsEditorState {
  settings: Settings
};

export class SettingsEditor extends React.Component<SettingsEditorProps, SettingsEditorState> {
  constructor(props: SettingsEditorProps) {
    super(props);
    this.state = {
      settings: props.settings
    };
  }

  public render = () => {
    const settings = this.state.settings;
    return (
      <ul>
        <li>Enabled: {settings.enabled ? 'Yep': 'Nup'}</li>
        <li>Selected template: {settings.selectedTemplateId}</li>
      </ul>
    )
  };
}
