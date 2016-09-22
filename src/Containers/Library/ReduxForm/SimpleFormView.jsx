import React, {Component} from 'react';
import connectToWrap from '../../../Utils/Wrapper';

import {SimpleForm} from '../../../Components/Library/ReduxForm';
import {Card, CardHeader, CardMedia} from 'material-ui/Card';

import {Padding15} from '../../../Components/Asset/Interval';

@connectToWrap('Simple Redux Form')
class SimpleFormView extends Component {

  handleSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <Card>
        <CardHeader
          title="Simple Form"
          subtitle="Use redux-from simple demo and material-ui build the Simple Form"
        />
        <CardMedia style={Padding15}>
          <SimpleForm handleSubmit={::this.handleSubmit}/>
        </CardMedia>
      </Card>
    );
  }
}

export default SimpleFormView;
