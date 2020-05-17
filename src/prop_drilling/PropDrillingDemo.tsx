import React from "react";

import { BuggySettings } from "./buggy_example/BuggySettings";
import { MarkdownDisplay } from "../utils/MarkdownDisplay";

const readme = require('./readme.md');

export const PropDrillingDemo = () => {
  return (
    <>
      <MarkdownDisplay mdImport={readme} />
      <BuggySettings />
    </>
  );
};
