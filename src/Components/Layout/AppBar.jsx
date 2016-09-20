
import React, {Component, PropTypes} from 'react';

import {default as MaterialUiAppBar} from 'material-ui/AppBar';

class AppBar extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }
  render() {
    const {title} = this.props;
    // const githubLink = 'https://github.com/flyingSprite/sohot';
    return (
      <MaterialUiAppBar
        title={<span>{title}</span>}
        iconElementRight={
          <i className="material-icons">github</i>
        }
      />
    );
  }
}

export default AppBar;
