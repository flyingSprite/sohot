import './_main.css';
// React & Redux
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import DevTools from '../../devTools/dev-tool.js';

// App actions
import * as AppActions from '../../actions/app-actions.js';

class Main extends Component {

  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">Sohot</span>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation mdl-layout--large-screen-only">
              <Link className="mdl-navigation__link" to="/main/counter">Counter</Link>
              <Link className="mdl-navigation__link" to="/main/calendar">Calendar</Link>
            </nav>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">Sohot</span>
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href="">Link</a>
            <a className="mdl-navigation__link" href="">Link</a>
            <a className="mdl-navigation__link" href="">Link</a>
            <a className="mdl-navigation__link" href="">Link</a>
          </nav>
        </div>
          <main className="mdl-layout__content">
            {this.props.children}
          <footer className="mdl-mega-footer">
            <div className="mdl-mega-footer__middle-section">
              <div className="mdl-mega-footer__drop-down-section">
                <input className="mdl-mega-footer__heading-checkbox" type="checkbox" />
                <h1 className="mdl-mega-footer__heading">Features</h1>
                <ul className="mdl-mega-footer__link-list">
                  <li><a href="#">About</a></li>
                  <li><a href="#">Terms</a></li>
                  <li><a href="#">Partners</a></li>
                  <li><a href="#">Updates</a></li>
                </ul>
              </div>
            </div>
          </footer></main>
        <DevTools />
      </div>
    );
  };
}

Main.propTypes = {
  appState  : PropTypes.object.isRequired,
  appActions: PropTypes.object.isRequired
};

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