import React from "react";

import { BuggySettings } from "./buggy_example/BuggySettings";
import { MarkdownDisplay } from "../utils/MarkdownDisplay";
import { PropDrillingSettings } from "./prop_drilling_fix/PropDrillingSettings";
import { ComponentSlotSettings } from "./component_slot_fix/PropDrillingSettings";

const readme = require('./readme.md');

export const PropDrillingDemo = () => {
  return (
    <>
      <MarkdownDisplay mdImport={readme} />
      <BuggySettings />
      <PropDrillingSettings />
      <ComponentSlotSettings />
    </>
  );
};
