
import React, { Component } from 'react';
import connectToWrap from '../../Utils/Wrapper';
import {Card} from 'material-ui/Card';
import {MaterialDesignIcon} from '../../Components/Library';


@connectToWrap('Material Design Icon')
class MaterialDesignIconView extends Component {

  render() {
    console.log('=++++++++');
    return (
      <Card>
        <MaterialDesignIcon />
      </Card>
    );
  }
}

export default MaterialDesignIconView;
