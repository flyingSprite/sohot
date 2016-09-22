
import React, {Component, PropTypes} from 'react';
import { Field, reduxForm } from 'redux-form';

import { RadioButton } from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';

import {
  RenderRadioGroup,
  RenderTextField
} from './RenderMaterialUI';


class SimpleForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field name="firstName" component={RenderTextField} label="First Name" />
        </div>
        <div>
          <Field name="lastName" component={RenderTextField} label="Last Name" />
        </div>
        <div>
          <Field name="email"  component={RenderTextField} label="Email" type="email"/>
        </div>
        <div>
          <Field name="sex" component={RenderRadioGroup}>
            <RadioButton value="male" label="male"/>
            <RadioButton value="female" label="female"/>
          </Field>
        </div>
        <div>
          <RaisedButton label="Cancel" style={{margin: 12}} />
          <RaisedButton type="submit" label="Submit" primary={true} style={{margin: 12}} />
        </div>
      </form>
    );
  }
}

// Decorate the form component
SimpleForm = reduxForm({
  form: 'contact' // a unique name for this form
})(SimpleForm);

export default SimpleForm;