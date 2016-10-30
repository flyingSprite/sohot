
import React, {Component} from 'react';

import reduxManager from '../../helpers/reduxManager';

// Layouts
import {Card} from 'material-ui/Card';

// Form Elements
import RaisedButton from 'material-ui/RaisedButton';


class InputView extends Component {


  constructor() {
    super();
  }

  static defaultTitle = 'Form Elements - Input';

  render() {
    const style = {
      margin: 12,
    };
    return(
      <Card>
        <RaisedButton label="Default" style={style} />
      </Card>
    );
  }
}

export default reduxManager(InputView);
