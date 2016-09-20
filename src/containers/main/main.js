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
import { AppBar, Header, SideBar } from '../../Components/Layout';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {cyan100, cyan500, cyan700} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';

// import {MaterialDesignIcon} from '../../Components/Library';

// import Headroom from 'react-headroom';

import APP_MENUS from '../menu';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: cyan500,
    primary2Color: cyan700,
    primary3Color: cyan100,
  },
}, {
  avatar: {
    borderColor: null,
  }
});

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
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="wrapper vertical-sidebar cyan-scheme">
          <AppBar title="Sohot"/>
          <Header />
          {/*<SideBar menus={APP_MENUS} menuLink={location.pathname} selectSubMenu={::this.selectSubMenu}/>*/}
          <SideBar menus={APP_MENUS} menuLink={location.pathname} />
          {this.props.children}
        </div>
      </MuiThemeProvider>
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