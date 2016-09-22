
import {
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
