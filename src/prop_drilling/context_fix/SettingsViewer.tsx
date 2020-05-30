import * as React from "react"

import { Settings } from "./ContextSettings"
import { TemplateContext } from "./TemplateContext";

interface SettingsViewerProps {
  settings: Settings
};

export const SettingsViewer: React.FunctionComponent<SettingsViewerProps> = props => {
  const context = React.useContext(TemplateContext);

  return (
    <ul>
      <li>Enabled: {props.settings.enabled ? 'Yep': 'Nup'}</li>
      <li>Selected template: {context.selectedTemplate}</li>
    </ul>
  );
}
