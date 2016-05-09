import React, { Component } from 'react';
import Markdown from 'react-markdown';
import CodeBlock from '../code-block/code-block.js';

import './_highlight-markdown.css';

export default class HighlightMarkdown extends Component {
  render() {
    return (
      <Markdown
        {...this.props}
        className="highlight-markdown"
        renderers={Object.assign({}, Markdown.renderes, {
          CodeBlock
       })} />
    );
  }
}
