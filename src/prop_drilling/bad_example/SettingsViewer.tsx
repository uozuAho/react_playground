import * as React from "react"

import { Settings } from "./SettingsContainer"

interface SettingsViewerProps {
  settings: Settings
};

export const SettingsViewer: React.FunctionComponent<SettingsViewerProps> = props => {
  return (
    <ul>
      <li>Enabled: {props.settings.enabled ? 'Yep': 'Nup'}</li>
      <li>Selected template: {props.settings.selectedTemplateId}</li>
    </ul>
  );
}
