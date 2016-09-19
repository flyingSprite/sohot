import { PropTypes } from 'react';

import FxInput from './FxInput';

class FloatingInput extends FxInput{

  static propTypes = {
    id: PropTypes.string,
    label: PropTypes.string.required
  }

  constructor() {
    super();
    this.moreMaterialClass = 'mdl-textfield--floating-label';
  }
}

export default FloatingInput;


