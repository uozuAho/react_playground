import * as React from "react"

import { Settings } from "./Settings"

interface SettingsEditorProps {
  settings: Settings
};

export const SettingsEditor: React.FunctionComponent<SettingsEditorProps> = props => {
  return <h1>Editor</h1>
}
