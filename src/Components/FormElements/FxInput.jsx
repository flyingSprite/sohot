import React, { Component, PropTypes } from 'react';

// const PATTERN = '[A-Z,a-z, ]*';

import classnames from 'classnames';

class FxInput extends Component{

  static propTypes = {
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    placeHolder: PropTypes.string,
    validate: PropTypes.bool
  }

  constructor() {
    super();
    this.moreMaterialClass = '';
  }

  render() {

    const {placeHolder, type,
      disabled,
      label,
      validate
    } = this.props;
    // const inputClassName = 'mdl-textfield mdl-js-textfield '
    //     + this.moreMaterialClass + ' '
    //     + className;
    const className = classnames({'validate': validate});
    return (
        <div className="input-field">
          <input id="email"
            className={className}
            disabled={disabled}
            placeholder={placeHolder ? placeHolder : null}
            type={type ? type : 'text'}
          />
          <label htmlFor="email">{label ? label : 'Input'}</label>
        </div>
    );
  }
}

export default FxInput;


