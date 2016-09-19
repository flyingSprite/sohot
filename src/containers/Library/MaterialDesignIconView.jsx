
import React, {Component} from 'react';
import connectToWrap from '../../Utils/Wrapper';
import {MainContent} from '../../Components/Layout';
import {MaterialDesignIcon} from '../../Components/Library';


@connectToWrap('Material Design Icon')
class MaterialDesignIconView extends Component {

  render() {
    return (
      <MainContent>
        <MaterialDesignIcon />
      </MainContent>
    );
  }
}

export default MaterialDesignIconView;

