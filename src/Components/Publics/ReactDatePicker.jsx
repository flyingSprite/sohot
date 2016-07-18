
import React, { Component, PropTypes } from 'react';

import { DateField as PublicDateField } from 'react-date-picker';

class ReactDatePicker extends Component{

  static propTypes = {
    fullWidth: PropTypes.bool
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { fullWidth } = this.props;
    let styles = {};
    fullWidth && styles.width = '100%';
    return (<PublicDateField  style={ styles } { ...this.props }/>);
  }
}

ReactDatePicker.defaultProps = {
  fullWidth: false
};

export default ReactDatePicker;

