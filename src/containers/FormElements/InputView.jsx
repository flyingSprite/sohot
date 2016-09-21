
import React, {Component} from 'react';

import connectToWrap from '../../Utils/Wrapper';

// Layouts
import {Card} from 'material-ui/Card';

// Form Elements
import RaisedButton from 'material-ui/RaisedButton';


@connectToWrap('Form Elements - Input')
class InputView extends Component {

  constructor() {
    super();
  }

  render() {
    // const dropdownOptions = [
    //   {value: 'option 1', text: 'Option 1'},
    //   {value: 'option 2', text: 'Option 2'},
    //   {value: 'option 3', text: 'Option 3'},
    // ];
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

export default InputView;
