
import React, {Component, PropTypes} from 'react';
import { Field, reduxForm } from 'redux-form';

import RaisedButton from 'material-ui/RaisedButton';

import {
  RenderTextField
} from './RenderMaterialUI';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const asyncValidate = (values/*, dispatch */) => {
  return sleep(1000) // simulate server latency
    .then(() => {
      if ([ 'foo@foo.com', 'bar@bar.com' ].includes(values.email)) {
        throw { email: 'Email already Exists' };
      }
    });
};

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.age) {
    errors.age = 'Required';
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number';
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old';
  }
  return errors;
};


class AsyncValidationForm extends Component {
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
          <RaisedButton label="Cancel" style={{margin: 12}} />
          <RaisedButton type="submit" label="Submit" primary={true} style={{margin: 12}} />
        </div>
      </form>
    );
  }
}

// Decorate the form component
AsyncValidationForm = reduxForm({
  form: 'syncValidation', // a unique name for this form
  validate,
  asyncValidate
})(AsyncValidationForm);

export default AsyncValidationForm;