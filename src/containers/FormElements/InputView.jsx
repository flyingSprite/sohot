
import React, {Component} from 'react';

import connectToWrap from '../../Utils/Wrapper';

// Layouts
import {MainContent} from '../../Components/Layout';

// Form Elements
import {
  Dropdown,
  FxInput
} from '../../Components/FormElements';

import RaisedButton from 'material-ui/RaisedButton';


@connectToWrap('Form Elements - Input')
class InputView extends Component {

  constructor() {
    super();
  }

  render() {
    const dropdownOptions = [
      {value: 'option 1', text: 'Option 1'},
      {value: 'option 2', text: 'Option 2'},
      {value: 'option 3', text: 'Option 3'},
    ];
    return(
      <MainContent>
        <RaisedButton label="Default" />
        <FxInput label="First Input" disabled={true} />
        <FxInput label="First Input" />
        <FxInput label="Last Input" placeHolder="Last Input, too."/>
        <Dropdown options={dropdownOptions}/>
      </MainContent>
    );
  }
}

export default InputView;
