

import React, {Component, PropTypes} from 'react';

import {List, ListItem} from 'material-ui/List';
import {Link} from 'react-router';
import {listItemWrapper, makeSelectable} from './List';
import wrapState from './wrapState';

let SelectableList = makeSelectable(List);
SelectableList = wrapState(SelectableList);
let ListItemWrapper = listItemWrapper(ListItem);

// const history = createHistory();

const nestedListStyle = { paddingTop: 0, paddingBottom: 0 };

class MenuHeader extends Component {

  static propTypes = {
    menus: PropTypes.object.isRequired,
    menuLink: PropTypes.string.isRequired
  };

  render() {
    const {menus, menuLink} = this.props;
    const menusJS = menus.toJS();
    return (
      <SelectableList defaultValue={menuLink} >
        {menusJS.map((menu, index) => {
          return (
            <ListItemWrapper
              key={index}
              value={menu.link}
              primaryText={menu.title}
              initiallyOpen={menu.link && menuLink.startsWith(menu.link)}
              leftIcon={<i className="material-icons">{menu.icon}</i>}
              selectedStyle={{color: '#00abc0', backgroundColor: '#FFF'}}
              nestedListStyle={ nestedListStyle }
              nestedItems={do {
                menu.subMenus
                ? menu.subMenus.map((subMenu, subIndex) => {
                  return (
                    <ListItemWrapper
                      selectedStyle={{color: '#FFF', backgroundColor: '#00abc0'}}
                      style={{backgroundColor: '#F2F2F2'}}
                      key={subIndex}
                      // onClick={::this.linkTo.bind(this, subMenu.link)}
                      value={subMenu.link}
                      primaryText={<Link className="menu-link" to={subMenu.link}>{subMenu.title}</Link>}
                    />
                  );
                })
                : [];
              }}
            />
          );
        })}
      </SelectableList>
    );
  }
}

export default MenuHeader;
