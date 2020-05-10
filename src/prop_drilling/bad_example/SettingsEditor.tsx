import * as React from "react"

import { Settings } from "./SettingsContainer"

interface SettingsEditorProps {
  settings: Settings,
  onSaved: (values: Settings) => void;
};

interface SettingsEditorState extends Settings {};

export class SettingsEditor extends React.Component<SettingsEditorProps, SettingsEditorState> {
  constructor(props: SettingsEditorProps) {
    super(props);
    this.state = props.settings;
  }

  private onEnabledChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      enabled: event.target.checked
    });
  };

  private onSaveClicked = () => {
    this.props.onSaved(this.state);
  };

  public render = () => {
    const settings = this.state;
    return (
      <>
        <ul>
          <li>
            <label>
              Enabled:
              <input
                name="enabled"
                type="checkbox"
                checked={settings.enabled}
                onChange={this.onEnabledChanged} />
            </label>
          </li>
          <li>Selected template: {settings.selectedTemplateId}</li>
        </ul>
        <button onClick={this.onSaveClicked}>Save</button>
      </>
    )
  };
}
