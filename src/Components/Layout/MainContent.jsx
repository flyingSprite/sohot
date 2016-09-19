import React, {Component} from 'react';

class MainContent extends Component {

  render() {
    return (
      <div className="row content-wrapper card">
        {this.props.children}
      </div>
    );
  }
}

export default MainContent;
