import React from "react";

import { TemplateStore } from "./template_store";

interface TemplateSelectorProps {
  onCancelled: () => void;
}

export class TemplateSelector extends React.Component<TemplateSelectorProps> {
  private templateStore: TemplateStore;

  constructor(props: TemplateSelectorProps) {
    super(props);
    this.templateStore = new TemplateStore();
  }

  public render = () => {
    return (
      <>
        <h2>Choose a template</h2>
        <ul>
          {this.templateStore.loadTemplates().map(t =>
            <li>
              <TemplateOption name={t} />
            </li>)}
        </ul>
        <button onClick={this.props.onCancelled}>Cancel</button>
      </>
    );
  }
}

interface TemplateOptionProps {
  name: string
}

const TemplateOption = (props: TemplateOptionProps) => {
  return <>{props.name}</>;
}
