
import React, { Component } from 'react';

import './_style.css';
// import { default as PublicComponent } from 'react-headroom';
import 'headroom';
/**
 * Use react-headroom from https://github.com/KyleAMathews/react-headroom;
 */
class ReactHeadroom extends Component {

  componentDidMount() {
    const { headerRef } = this.refs;
    console.log(headerRef);
    let headroom = new window.Headroom(headerRef, {
      'tolerance': 5,
      'offset': 0,
      'classes': {
        'initial': 'animated',
        'pinned': 'slideDown',
        'unpinned': 'slideUp'
      }
    });
    headroom.init();
  }

  render() {
    return (
      <header ref="headerRef" style={{
          WebkitTransition: 'all .5s ease-in-out',
          MozTransition: 'all .5s ease-in-out',
          OTransition: 'all .5s ease-in-out',
          transition: 'all .5s ease-in-out'
        }}>
        {this.props.children}
      </header>);
  }
}

export default ReactHeadroom;
