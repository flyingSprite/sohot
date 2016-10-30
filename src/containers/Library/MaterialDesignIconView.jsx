
import React, { Component } from 'react';
import {Card} from 'material-ui/Card';
import {MaterialDesignIcon} from '../../Components/Library';

import reduxManager from '../../helpers/reduxManager';


class MaterialDesignIconView extends Component {

  static defaultTitle = 'Material Design Icon';

  render() {
    return (
      <Card>
        <MaterialDesignIcon />
      </Card>
    );
  }
}

export default reduxManager(MaterialDesignIconView);
