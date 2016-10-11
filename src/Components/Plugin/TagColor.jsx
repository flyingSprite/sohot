import './style.scss';

import React, { Component, PropTypes } from 'react';

import 'material-design-icons';

class TagColor extends Component {

  static propTypes = {
    onSelect: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.getColor = ::this.getColor;
    this._onSelectTagColor = ::this._onSelectTagColor ;
    this.state = { color: '' };
  }

  getColor() {
    return this.state.color;
  }

  _onSelectTagColor(e) {
    let tag = e.target.getAttribute('data-tag');
    this.setState({color: tag});
    const { onSelect } = this.props;
    onSelect(tag);
  }

  render() {
    let colors = [
      'bgm-teal',
      'bgm-red',
      'bgm-pink',
      'bgm-blue',
      'bgm-lime',
      'bgm-green',
      'bgm-cyan',
      'bgm-orange',
      'bgm-purple'
    ];

    let showClassName = 'material-icons icon-layout';
    let hideClassName = 'material-icons icon-layout__display';
    return (
      <div className="event-tag">
        {colors.map((color, index) => {
          return (
            <span key={index} onClick={this._onSelectTagColor} data-tag={color} className={color}>
              <i className={this.state.color === color ? showClassName : hideClassName} data-tag={color}>done</i>
            </span>
          );
        })}
      </div>
    );
  }
}

export default TagColor;
