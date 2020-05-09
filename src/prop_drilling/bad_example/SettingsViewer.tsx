import * as React from "react"

import { Settings } from "./Settings"

interface SettingsViewerProps {
  settings: Settings
};

export const SettingsViewer: React.FunctionComponent<SettingsViewerProps> = props => {
  return <h1>Viewer</h1>;
}
