
import React, {Component} from 'react';

class Header extends Component {

  render() {
    return (
      <header id="header">
        <div className="navbar">
          <nav>
            <a href="#" data-activates="nav-mobile" className="button-collapse top-nav full waves-effect waves-light hide-on-large-only">
              <i className="material-icons">menu</i>
            </a>
            <div className="nav-wrapper">
              <ul className="left">
                <li>
                  <a href="/index.html" className="brand-logo">
                    <span>SoHot</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;