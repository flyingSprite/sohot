
import React, { Component } from 'react';

import 'material-design-icons';

class TagColor extends Component {

  constructor() {
    super();
    console.log('cccccccddddddd');
    this.getColor = ::this.getColor;
    this._onSelectTagColor = ::this._onSelectTagColor ;
    this.state = { color: '' };
  }

  getColor() {
    return this.state.color;
  }

  _onSelectTagColor(e) {
    let tag = e.target.getAttribute('data-tag');
    console.log(e.target);
    console.log(tag);
    this.setState({color: tag});
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
        'bgm-purple',
        'bgm-black'
    ];
    return (
      <div>
        {colors.map((color, index) => {
          return (
            <div key={index} onClick={this._onSelectTagColor} data-tag={color} className={color}>
              <i className="material-icons" data-tag={color}>done</i>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TagColor;