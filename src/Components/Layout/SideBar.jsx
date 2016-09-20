import './_sidebar.css';

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

      // const {selectSubMenu} = this.props;
      // selectSubMenu(subMenuTitle);
    }
  }


  render() {
    // const {menus, menuLink} = this.props;
    // const menusElement = menus.map((menu, index) => {
    //   var menuClassName = classnames('collapsible-header', 'waves-effect',
    //   {
    //     'active': (menu.link && menuLink.startsWith(menu.link))
    //   });
    //   return(
    //     <li key={index}>
    //       <div className={menuClassName}>
    //         <i className="material-icons">{menu.icon}</i>{menu.title}
    //         <i className="material-icons material-icons-down">keyboard_arrow_down</i>
    //         <i className="material-icons material-icons-up">keyboard_arrow_up</i>
    //       </div>
    //       {menu.subMenus && menu.subMenus.length > 0 && (
    //         <div className="collapsible-body">
    //           <ul>
    //             {menu.subMenus.map((subMenu, subIndex) => {
    //               const link = subMenu.link ? subMenu.link : '/';
    //               var itemClassName = classnames({
    //                 'active': (
    //                     (menu.title === this.state.selectMenuTitle)
    //                     && (subMenu.title === this.state.selectSubMenuTitle)
    //                   ) || (link === menuLink)
    //               });
    //               // link === menuLink && selectSubMenu(subMenu);
    //               return (
    //                 <li className={itemClassName} key={subIndex}
    //                     onClick={::this.selectMenuItem.bind(this, menu.title, subMenu.title)}>
    //                   <Link to={link}>{subMenu.title}</Link>
    //                 </li>
    //               );
    //             })}
    //           </ul>
    //         </div>
    //       )}
    //     </li>
    //   );
    // });
    const {menus, menuLink} = this.props;
    return (
      <aside className="sidebar-left side-nav fixed left">
        {/*<ul className="side-nav fixed left">
          <li>
            <ul className="collapsible" data-collapsible="accordion">
              {menusElement}
            </ul>
          </li>
        </ul>*/}
        <MenuHeader menus={menus} menuLink={menuLink}/>
      </aside>
    );
  }
}

export default SideBar;

