import React from 'react';

import {
  Checkbox,
  RadioButtonGroup,
  SelectField,
  TextField
} from 'redux-form-material-ui';

export const RenderTextField = ({ label, input, meta: { touched, error }, ...costom}) => (
  <TextField hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...costom}
  />
);

export const RenderCheckbox = ({ input, label }) => (
  <Checkbox label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange}
  />
);

export const RenderRadioGroup = ({ input, ...rest }) => (
  <RadioButtonGroup {...input} {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

export const RenderSelectField = ({ input, label, meta: { touched, error }, children }) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
  />
);
