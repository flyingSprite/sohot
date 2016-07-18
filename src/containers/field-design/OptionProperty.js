

import React, { Component, PropTypes } from 'react';

import Col from 'react-bootstrap/lib/Col';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';

export default class OptionProperty extends Component {

  static propTypes = {
    options: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.addOneOption = ::this.addOneOption;
    this.removeOneOption = ::this.removeOneOption;

    this.state = {
      options: []
    };
  }

  componentWillReceiveProps(nextProps) {
    const { options } = nextProps;
    if (options.length === 0) {
      options.push({});
    }
    // this.setState({ options: options});
    this.setState({mme: 'sssss'});
  }

  optionsRow(option, index) {
    option.name = option.name ? option.name : '';
    option.value = option.value ? option.value : '';

    const _removeOneOption = () => {
      this.removeOneOption(index);
    };

    return (
      <FormGroup key={index}>
        <Col sm={6}>
          <FormControl type="text" placeholder="Enter option name" value={option.name} />
        </Col>
        <Col sm={4}>
          <FormControl type="text" placeholder="Enter value" value={option.value} />
        </Col>
        <Col sm={2}>
          <Button bsStyle="danger" onClick={_removeOneOption}>
            <i className="fa fa-minus-circle"></i>
          </Button>
        </Col>
      </FormGroup>
    );
  }

  /** Todo: to test the add an option function */
  addOneOption() {
    console.log(this.state);

    // this.state.options.push({});
    console.log('Add options ...');
  }

  /** Todo: to test the remove an option function */
  removeOneOption(index) {
    const { options } = this.props;
    options.splice(index, 1);
    console.log('Remove options ...');
  }

  render() {
    // const { options } = this.props;
    // if (options === undefined || options.length === 0) {
    //   options.push({});
    // }
    console.log(this.state);
    return (
      <div>
        <FormGroup>
          <Col sm={6}>Options</Col>
          <Col sm={4}>Value</Col>
          <Col sm={2}>
            <Button bsStyle="success" onClick={this.addOneOption}>
              <i className="fa fa-plus-circle"></i>
            </Button>
          </Col>
        </FormGroup>
        {this.state.options.map((option, index) => {
          return this.optionsRow(option, index);
        })}
        { this.state }
      </div>
    );
  }
}
