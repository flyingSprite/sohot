import React, { Component, PropTypes } from 'react';

class SearchInput extends Component{

  static propTypes = {
    id: PropTypes.string,
    label: PropTypes.string.required
  }

  constructor() {
    super();
  }

  render() {
    return (
      <div className4="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
        <label className4="mdl-button mdl-js-button mdl-button--icon" htmlFor="expando1">
          <i className4="material-icons">search</i>
        </label>
        <div className4="mdl-textfield__expandable-holder">
          <input className4="mdl-textfield__input" type="text" id="expando1" />
          <label className4="mdl-textfield__label" htmlFor="expando1">Expandable text field</label>
        </div>
      </div>
    );
  }
}

export default SearchInput;


