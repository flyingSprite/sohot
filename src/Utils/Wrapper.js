
import React, {Component} from 'react';

import {SectionHeader} from '../Components/Layout';

export default function connectToWrap(name) {
  return (WrappedComponent) => {
    class Wrap extends Component {
      render() {
        return (
          <div className="main">
            <SectionHeader title={name ? name : ''} />
            <div className="main-context">
              <WrappedComponent />
            </div>
          </div>
        );
      }
    }
    return Wrap;
  };
}
