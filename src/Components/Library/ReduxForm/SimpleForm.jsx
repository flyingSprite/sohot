
import React, {Component, PropTypes} from 'react';
import { Field, reduxForm } from 'redux-form';

import {
  TextField
} from 'redux-form-material-ui';

const renderTextField = ({...custom }) => (
  <TextField hintText={custom.label}
    floatingLabelText={custom.label}
    errorText={custom.meta.touched && custom.meta.error}
    {...custom.input}
  />
);

class SimpleForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field name="firstName" component={renderTextField} label="First Name" />
        </div>
        <div>
          <Field name="lastName" component={renderTextField} label="Last Name" />
        </div>
        <div>
          <Field name="email"  component={renderTextField} label="Email" type="email"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

// Decorate the form component
SimpleForm = reduxForm({
  form: 'contact' // a unique name for this form
})(SimpleForm);

export default SimpleForm;