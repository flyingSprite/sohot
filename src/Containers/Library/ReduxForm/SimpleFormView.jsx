import React, {Component} from 'react';
import connectToWrap from '../../../Utils/Wrapper';

import {SimpleForm} from '../../../Components/Library/ReduxForm';

@connectToWrap('Simple Redux Form')
class SimpleFormView extends Component {

  handleSubmit(values) {
    console.log(values);
  }

  render() {
    return (<div><SimpleForm handleSubmit={::this.handleSubmit}/></div>);
  }
}

export default SimpleFormView;
