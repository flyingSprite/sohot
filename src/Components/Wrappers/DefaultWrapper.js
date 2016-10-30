
import React, {Component} from 'react';

import {SectionHeader} from '../Components/Layout';

const DefaultWrapper = (name) => (WrapperedComponent) => {
  return class extends Component {
    render() {
      return (
        <div className="main">
          <SectionHeader title={name ? name : ''} />
          <div className="main-context">
            <WrapperedComponent />
          </div>
        </div>
      );
    }
  };
};

export default DefaultWrapper;
