
import './_style.css';

import React, { Component } from 'react';
import TagColor from '../../components/tag-color/tag-color.js';
import RaisedButton from 'material-ui/lib/raised-button';

class TagColorCard extends Component {

  constructor() {
    super();
    this._onSelectColorName = ::this._onSelectColorName;
    this._onSelectColorClass = ::this._onSelectColorClass;
    this.state = {
      colorClass: '',
      colorName: 'Not yet selected'
    };

  }

   _onSelectColorName(){
    const {tagColor} = this.refs;
    let colorName = tagColor.getColor();
    if (colorName === '') {
      colorName = 'Not yet selected';
    }
    this.setState({'colorName': colorName});
  }

  _onSelectColorClass(color) {
    this.setState({colorClass: color});
  }

  render() {
    return (
      <div className="sohot-card mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">Tag Color</h2>
        </div>
        <div className="mdl-card__supporting-text">
          <TagColor ref="tagColor" onSelect={this._onSelectColorClass}/>
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <RaisedButton
            label="Got Color Name"
            secondary={true}
            onClick={this._onSelectColorName}
          />
          <span className={'sohot-card__span ' + this.state.colorClass}>{this.state.colorName}</span>
        </div>
      </div>
    );
  }
}

export default TagColorCard;
