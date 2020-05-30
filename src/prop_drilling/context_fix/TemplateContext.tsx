import React from "react";

export interface ITemplateContext {
  selectedTemplate: string | null;
  setSelectedTemplate: (name: string | null) => void;
}

export const TemplateContext = React.createContext({
  selectedTemplate: 'template 1',
  setSelectedTemplate: (name: string | null) => {}
} as ITemplateContext);

export class TemplateContextProvider extends React.Component<{}, ITemplateContext> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedTemplate: 'template 1',
      setSelectedTemplate: this.setSelectedTemplate
    };
  }

  private setSelectedTemplate = (name: string | null) => {
    this.setState({selectedTemplate: name});
  };

  public render() {
    return (
      <TemplateContext.Provider value={this.state}>
        {this.props.children}
      </TemplateContext.Provider>
    )
  };
}
