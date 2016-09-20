

import React, {Component, PropTypes} from 'react';

import {List, ListItem} from 'material-ui/List';
// import { createHistory } from 'history';
import {Link} from 'react-router';
// import Subheader from 'material-ui/Subheader';
// import ActionGrade from 'material-ui/svg-icons/action/grade';
// import ContentInbox from 'material-ui/svg-icons/content/inbox';
// import ContentDrafts from 'material-ui/svg-icons/content/drafts';
// import ContentSend from 'material-ui/svg-icons/content/send';
import {listItemWrapper, makeSelectable} from './List';
import wrapState from './wrapState';

let SelectableList = makeSelectable(List);
SelectableList = wrapState(SelectableList);
let ListItemWrapper = listItemWrapper(ListItem);

// const history = createHistory();

class MenuHeader extends Component {

  static propTypes = {
    menus: PropTypes.array.isRequired,
    menuLink: PropTypes.string.isRequired
    // history: PropTypes.object
  };

  // linkTo(link) {
  //   if (link) {
  //     history.push({pathname: link});
  //   }
  // }

  render() {
    const {menus, menuLink} = this.props;
    return (
      <SelectableList defaultValue={menuLink} >
        {/*<Subheader>Nested List Items</Subheader>*/}
        {menus.map((menu, index) => {
          return (
            <ListItemWrapper
              key={index}
              value={menu.link}
              primaryText={menu.title}
              initiallyOpen={menu.link && menuLink.startsWith(menu.link)}
              leftIcon={<i className="material-icons">{menu.icon}</i>}
              selectedStyle={{color: '#00abc0', backgroundColor: '#FFF'}}
              nestedItems={do {
                if (menu.subMenus) {
                  menu.subMenus.map((subMenu, subIndex) => {
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
                  });
                } else {
                  [];
                }
              }}
            />
          );
        })}
        {/*<ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
        <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
        <ListItem
          primaryText="Inbox"
          leftIcon={<ContentInbox />}
          initiallyOpen={true}
          primaryTogglesNestedList={true}
          nestedItems={[
            <ListItem
              key={1}
              primaryText="Starred"
              leftIcon={<ActionGrade />}
            />,
            <ListItem
              key={2}
              primaryText="Sent Mail"
              leftIcon={<ContentSend />}
            />,
            <ListItem
              key={3}
              primaryText="Inbox"
              leftIcon={<ContentInbox />}
              onNestedListToggle={this.handleNestedListToggle}
            />,
          ]}
        />*/}
      </SelectableList>
    );
  }
}

export default MenuHeader;
