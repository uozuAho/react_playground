import * as React from "react"

import { Settings } from "./PropDrillingSettings"
import { TemplateSelector } from "../templates/TemplateSelector";

interface SettingsEditorProps {
  settings: Settings,
  onSaved: (values: Settings) => void;
};

interface SettingsEditorState extends Settings {
  isSelectingTemplate: boolean;
};

export class SettingsEditor extends React.Component<SettingsEditorProps, SettingsEditorState> {
  constructor(props: SettingsEditorProps) {
    super(props);
    this.state = {
      ...props.settings,
      isSelectingTemplate: false
    };
  }

  private onEnabledChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      enabled: event.target.checked
    });
  };

  private onSaveClicked = () => {
    this.props.onSaved(this.state);
  };

  private onEditTemplateClicked = () => {
    this.setState({isSelectingTemplate: true});
  };

  private onTemplateSelected = (name: string) => {
    this.setState({
      selectedTemplateId: name,
      isSelectingTemplate: false
    });
  };

  private onCancelEditTemplate = () => {
    this.setState({isSelectingTemplate: false});
  };

  public render = () => {
    const state = this.state;
    return (
      <>
        <ul>
          <li>
            <label>
              Enabled:
              <input
                name="enabled"
                type="checkbox"
                checked={state.enabled}
                onChange={this.onEnabledChanged} />
            </label>
          </li>
          <li>
            Selected template: {state.selectedTemplateId}
            <button onClick={this.onEditTemplateClicked}>edit</button>
          </li>
          {state.isSelectingTemplate &&
            <TemplateSelector
              onSelected={this.onTemplateSelected}
              onCancelled={this.onCancelEditTemplate} />
          }
        </ul>
        <button onClick={this.onSaveClicked}>Save</button>
      </>
    )
  };
}
