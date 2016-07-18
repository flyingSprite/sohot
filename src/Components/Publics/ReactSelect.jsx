

import React, { Component, PropTypes } from 'react';

import { default as PublicComponent } from 'react-select';

class ReactSelect extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (<PublicComponent { ...this.props } />);
  }
}

export default ReactSelect;
