import React, {Component, PropTypes} from 'react';
// import {Link} from 'react-router';
// import classnames from 'classnames';
import MenuHeader from './MenuHeader';

class SideBar extends Component {

  static propTypes = {
    menus: PropTypes.array.isRequired,
    // selectSubMenu: PropTypes.func.isRequired,
    menuLink: PropTypes.string.isRequired
  }

  constructor() {
    super();
    this.state = {
      selectMenuTitle: '',
      selectSubMenuTitle: ''
    };
  }

  selectMenuItem(menuTitle, subMenuTitle) {
    if (menuTitle !== this.state.selectMenuTitle
        && subMenuTitle !== this.selectSubMenuTitle) {
      this.setState({
        selectMenuTitle: menuTitle,
        selectSubMenuTitle: subMenuTitle
      });

    }
  }

  render() {
    const {menus, menuLink} = this.props;
    return (
      <aside className="sidebar-left side-nav fixed box-shadow-2">
        <MenuHeader menus={menus} menuLink={menuLink}/>
      </aside>
    );
  }
}

export default SideBar;

