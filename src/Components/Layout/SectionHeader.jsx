import React, {Component, PropTypes} from 'react';

class SectionHeader extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }
  render() {
    const {title} = this.props;
    return (
      <div className="row section-header ng-scope">
        <h4 className="page-title">{title ? title : ''}</h4>
      </div>
    );
  }
}

export default SectionHeader;
