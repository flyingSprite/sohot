
import React, { Component } from 'react';
import { BrowserRouter, Match } from 'react-router';

import '../asserts/main.scss';

// Using Material Ui
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {cyan100, cyan500, cyan700} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: cyan500,
    primary2Color: cyan700,
    primary3Color: cyan100,
  },
}, { avatar: { borderColor: null} });

// import AppRoutes from './routeConfig';
import asyncComponent from '../helpers/asyncComponent';
const MaterialDesignIconView = asyncComponent(() =>
  System.import('../Containers/Library/MaterialDesignIconView').then(module => module.default)
);

const FullCalendarView = asyncComponent(() =>
  System.import('../Containers/Plugin/FullCalendarView').then(module => module.default)
);

const InputView = asyncComponent(() =>
  System.import('../Containers/FormElements/InputView').then(module => module.default)
);

import { AppBar, SideBar } from '../Components/Layout';
import APP_MENUS from '../Containers/menu';

export default class extends Component {

  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div className="wrapper vertical-sidebar cyan-scheme">
            <AppBar title="Sohot"/>
            <SideBar menus={APP_MENUS} menuLink={location.pathname} />
            <Match key="library-material-design-icon" pattern="/library/material-design-icon" component={MaterialDesignIconView} />
            <Match key="plugin-full-calendar" pattern="/plugin/full-calendar" component={FullCalendarView} />
            <Match key="form-elements-input" pattern="/form-elements/input" component={InputView} />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
};
