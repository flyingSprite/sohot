import React, { Component } from 'react';


export default function asyncComponent(getComponent) {
  class AsyncComponent extends Component {

    // static propTypes = {
    //   params: PropTypes.object,
    //   pattern: PropTypes.string,
    //   isExact: PropTypes.bool,
    //   pathname: PropTypes.string,
    //   location: PropTypes.object
    // }

    constructor(props, context) {
      super(props, context);
      this.state = { defaultComponent: undefined };
    }

    componentWillMount() {
      if (!this.state.defaultComponent) {
        getComponent().then(defaultComponent => {
          console.log(defaultComponent);
          this.setState({ defaultComponent });
        });
      }
    }

    componentDidMount() {
      const { defCom } = this.refs;
      console.log('ref', defCom);
    }

    render() {
      // const { params, isExact, pathname, pattern, location, ...other} = this.props;
      const { defaultComponent } = this.state;
      if (defaultComponent) {

        /* Here exists a issue: cannot render on view page when using alias.
           For example:
             return <div><defaultComponent /></div>
           Cannot render.

           But below can render successful.
           import { MaterialView } from './views'
           return <div><MaterialView /></div>

           Render successful.

           then use an alisa to be instead of `MaterialView`. Like:

           import { MaterialView } from './views'
           const MaterialViewAlisa = MaterialView;
           return <div><MaterialViewAlisa /></div>

           Cannot render.

           Other ways, this issue isn't existed.
        */
        const defaultComponentElement = React.createElement(defaultComponent, {
          props: this.props
        });
        return (<div>{defaultComponentElement}</div>);
      }
      return <div />;
    }
  }

  return AsyncComponent;
}
