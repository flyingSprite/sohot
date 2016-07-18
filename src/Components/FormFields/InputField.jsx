import React, { Component, PropTypes } from 'react';
// import FormGroup from 'react-bootstrap/lib/FormGroup';
// import Col from 'react-bootstrap/lib/Col';
// import ControlLabel from 'react-bootstrap/lib/ControlLabel';

import { LabelWrapper } from './../Wrappers';
import FormControl from 'react-bootstrap/lib/FormControl';

import './_style.css';

class InputField extends Component {

  static propTypes = {
    required: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  };

  render() {
    // const { required, label, type, name } = this.props;
    // const className = required ? 'required' : '';
    // return (
    //   <FormGroup>
    //     <Col sm={4}>
    //       <ControlLabel className={ className } style={{ 'lineHeight': '34px' }}>
    //         { label }
    //       </ControlLabel>
    //     </Col>
    //     <Col sm={8}>
    //       <FormControl type={ type } name={ name } />
    //     </Col>
    //   </FormGroup>
    // );
    const { type, name } = this.props;
    return (
      <LabelWrapper { ...this.props }>
        <FormControl type={ type } name={ name } />
      </LabelWrapper>
    );
  }
}

InputField.defaultProps = {
  required: false,
  type: 'text',
  name: 'name'
};

export default InputField;
