import React from "react";
import ReactMarkdown from "react-markdown";

/**
 * Display a markdown file as html.
 * 
 * Usage:
 * 
 * ```js
 * const markdown = require('my_markdown.md');
 * 
 * const display = () => <MarkdownDisplay mdImport={markdown} />
 * ```
 */
export class MarkdownDisplay extends React.Component<
  {mdImport: any}, {text: string}>
{
  constructor(props: any) {
    super(props);
    this.state = {text: ''}
  }

  public componentDidMount = () => {
    fetch(this.props.mdImport)
      .then(response => response.text())
      .then(text => {
        this.setState({text});
      });
  };

  public render = () => {
    return <ReactMarkdown source={this.state.text} />
  };
}
