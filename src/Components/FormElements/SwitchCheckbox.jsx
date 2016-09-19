
import React, {Component, PropTypes} from 'react';

class SwitchCheckbox extends Component {
  static propTyps = {
    on: PropTypes.string,
    off: PropTypes.string,
    disabled: PropTypes.bool
  }

  render() {
    const {on, off} = this.props;
    return (
      <div className="switch">
        <label>
          {on}
          <input type="checkbox" />
          <span className="lever" />
          {off}
        </label>
      </div>
    );
  }
}

export default SwitchCheckbox;
