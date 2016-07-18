

## Create a component ##

```javascript
import React, { Component, PropTypes } from 'react';

export default class TestComponent extends Component {

  static propTypes = {
    value: PropTypes.string.isRequired
  };

  constructor() {
    this.state = {name: 'This is a test component'};
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate() {}

  componentWillUpdate() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const {value} = this.props;
    return (
      <div>
        <label>{ this.state.name }</label>
        <label>{ value }</label>
      </div>
    );
  }
}
```


### Using bind() to bind arguments ###

```javascript
import React, { Component, PropTypes } from 'react';

export default class TestComponent extends Component {

  onClickEvent(type) {
    console.log(type); // option
  }

  render() {
    const type = 'option';
    return (
      <button onClick={this.onClickEvent.bind(this, type)}>Click me</button>);
  }
}
```


### Dispatch All actions function to component ###

```javascript
import React, { Component, PropTypes } from 'react';

import { myActions } from './actions';

class TestComponent extends Component {

  static propTypes = {
    myActions: PropTypes.object.isRequired
  }

  componentWillMount() {
    const { doSomething } = this.props.myActions;
    doSomething();
  }

  render() {
    const type = 'option';
    return (<div />);
  }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
  return {
    myActions: bindActionCreators(myActions, dispatch),
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TestComponent);
```


### Using expression in JSX ###

```javascript
export default class CodeBlock extends Component {
  render() {
    const { language, literal } = this.props;
    return (
      <Highlight
        className={`${language} component-codeblock`}>
        {literal}
      </Highlight>
    );
  }
}

CodeBlock.propTypes = {
  literal      : PropTypes.string,
  language     : PropTypes.string
};
```

### Using jQuery in React Component ###

```javascript
import $ from 'jquery';

```


### Using ReactDom set input value ###

```javascript
componentDidUpdate() {
  var date = this.state.date;
  const { dateField } = this.refs;
  const dateDom = ReactDOM.findDOMNode(dateField);
  dateDom.getElementsByTagName('input')[0].value = date;
}
```

