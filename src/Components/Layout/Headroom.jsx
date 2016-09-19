
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
    let headroom = new window.Headroom(headerRef, {
      'tolerance': 5,
      'offset': 0,
      'classes': {
        'initial': 'headroom--unfixed',
        'pinned': 'headroom--pinned',
        'unpinned': 'headroom--unpinned'
      }
    });
    headroom.init();
  }

  render() {
    return (
      <header ref="headerRef" style={{
          width: '100%',
          backgroundColor: '#11619a',
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
