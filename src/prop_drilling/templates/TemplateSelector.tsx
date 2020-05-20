import React from "react";

import { RemoteTemplateStore } from "./template_store";

interface TemplateSelectorProps {
  onSelected: (name: string) => void;
  onCancelled: () => void;
  onDeleted?: (name: string) => void;
}

interface TemplateSelectorState {
  availableTemplates: string[];
}

export class TemplateSelector extends React.Component<
  TemplateSelectorProps, TemplateSelectorState>
{
  private templateStore: RemoteTemplateStore;

  constructor(props: TemplateSelectorProps) {
    super(props);
    this.templateStore = new RemoteTemplateStore();
    this.state = {
      availableTemplates: []
    };
  }

  public componentDidMount = () => {
    this.loadTemplates();
  };

  public render = () => {
    return (
      <>
        <h2>Choose a template</h2>
        <ul>
          {this.state.availableTemplates.map(name =>
            <li>
              <TemplateOption
                name={name}
                onSelectClick={() => this.onSelectOptionClicked(name)}
                onDeleteClick={() => this.onDeleteOptionClicked(name)} />
            </li>)}
        </ul>
        <button onClick={this.props.onCancelled}>Cancel</button>
      </>
    );
  }

  private loadTemplates = () => {
    this.templateStore.loadTemplates()
      .then(templates => {
        this.setState({
          availableTemplates: templates
        });
      });
  };

  private onDeleteOptionClicked = (name: string) => {
    this.templateStore.delete(name);
    if (this.props.onDeleted) { this.props.onDeleted(name); }
    this.loadTemplates();
  };

  private onSelectOptionClicked = (name: string) => {
    this.props.onSelected(name);
  };
}

interface TemplateOptionProps {
  name: string;
  onSelectClick: () => void;
  onDeleteClick: () => void;
}

const TemplateOption = (props: TemplateOptionProps) => {
  return (
    <>
      {props.name}
      <button onClick={props.onSelectClick}>select</button>
      <button onClick={props.onDeleteClick}>delete</button>
    </>
  );
}
