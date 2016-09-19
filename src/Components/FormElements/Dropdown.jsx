
import React, {Component, PropTypes} from 'react';
import $ from 'jquery';

class Dropdown extends Component {

  static propTypes = {
    options: PropTypes.array.isRequired
  };

  static defaultProps = {
    options: []
  };

  constructor() {
    super();
  }

  componentDidMount() {
    const {select} = this.refs;
    $(select).material_select();
  }

  render() {
    const {options} = this.props;
    return (
      <div className="input-field col s12">
        <select ref="select">
          {options.map((option, index) => {
            return (<option key={index} value={option.value}>{option.text}</option>);
          })}
        </select>
        <label>Materialize Select</label>
      </div>
    );
  }
}

export default Dropdown;

