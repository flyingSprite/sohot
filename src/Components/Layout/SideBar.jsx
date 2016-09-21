import React, {Component, PropTypes} from 'react';
import MenuHeader from './MenuHeader';

class SideBar extends Component {

  static propTypes = {
    menus: PropTypes.array.isRequired,
    menuLink: PropTypes.string.isRequired
  }

  constructor() {
    super();
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

