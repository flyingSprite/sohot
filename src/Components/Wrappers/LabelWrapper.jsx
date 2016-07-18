
import React, { Component, PropTypes } from 'react';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

class LabelWrapper extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props);
    this.displayName = 'LabelWrapper';
  }

  render() {
    const { label, required } = this.props;
    const className = required ? 'required' : '';
    return (
      <FormGroup>
        <Col sm={4}>
          <ControlLabel className={ className } style={{ 'lineHeight': '34px' }}>
            { label }
          </ControlLabel>
        </Col>
        <Col sm={8}>
          {this.props.children}
        </Col>
      </FormGroup>
    );
  };
}

LabelWrapper.defaultProps = {
  label: 'Default Label'
};

export default LabelWrapper;

