import React from "react";

import { BuggySettings } from "./buggy_example/BuggySettings";
import { MarkdownDisplay } from "../utils/MarkdownDisplay";
import { PropDrillingSettings } from "./prop_drilling_fix/PropDrillingSettings";
import { ContextSettings } from "./context_fix/ContextSettings";

const readme = require('./readme.md');

export const PropDrillingDemo = () => {
  return (
    <>
      <MarkdownDisplay mdImport={readme} />
      <hr />
      <BuggySettings />
      <hr />
      <PropDrillingSettings />
      <hr />
      <ContextSettings />
    </>
  );
};
