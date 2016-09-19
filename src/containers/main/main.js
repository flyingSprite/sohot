import './_main.css';
// React & Redux
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { Link } from 'react-router';
// import DevTools from '../../devTools/dev-tool.js';

// App actions
import * as AppActions from '../../actions/app-actions.js';

// Components
import { Header, SideBar } from '../../Components/Layout';

// import {MaterialDesignIcon} from '../../Components/Library';

// import Headroom from 'react-headroom';

import APP_MENUS from '../menu';


class Main extends Component {

  static propTypes = {
    appState  : PropTypes.object.isRequired,
    appActions: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  }

  constructor() {
    super();
    this.state = {
      pathname: '',
      selectMenu: {}
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  selectSubMenu(menuTitle) {
    this.setState({selectMenu: menuTitle});
  }

  render() {
    const {location} = this.props;
    return (
      <div className="wrapper vertical-sidebar cyan-scheme">
        <Header />
        {/*<SideBar menus={APP_MENUS} menuLink={location.pathname} selectSubMenu={::this.selectSubMenu}/>*/}
        <SideBar menus={APP_MENUS} menuLink={location.pathname} />
        {this.props.children}
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    appState: state.app.toJS()
  };
}

function mapDispatchToProps(dispatch) {
  return {
    appActions : bindActionCreators(AppActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);