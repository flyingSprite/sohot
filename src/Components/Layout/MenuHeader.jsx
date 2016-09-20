

import React, {Component, PropTypes} from 'react';

import {List, ListItem, MakeSelectable} from 'material-ui/List';
import {history} from 'react-router';
// import Subheader from 'material-ui/Subheader';
// import ActionGrade from 'material-ui/svg-icons/action/grade';
// import ContentInbox from 'material-ui/svg-icons/content/inbox';
// import ContentDrafts from 'material-ui/svg-icons/content/drafts';
// import ContentSend from 'material-ui/svg-icons/content/send';

import wrapState from './wrapState';

let SelectableList = MakeSelectable(List);

SelectableList = wrapState(SelectableList);

class MenuHeader extends Component {

  static propTypes = {
    menus: PropTypes.array.isRequired,
    menuLink: PropTypes.string.isRequired
    // history: PropTypes.object
  };

  render() {
    const {menus, menuLink} = this.props;
    console.log(history);
    return (
      <SelectableList defaultValue={menuLink} >
        {/*<Subheader>Nested List Items</Subheader>*/}
        {menus.map((menu, index) => {
          return (
            <ListItem
              key={index}
              value={menu.link}
              primaryText={menu.title}
              initiallyOpen={menu.link && menuLink.startsWith(menu.link)}
              leftIcon={<i className="material-icons">{menu.icon}</i>}
              nestedItems={do {
                if (menu.subMenus) {
                  menu.subMenus.map((subMenu, subIndex) => {
                    return (
                      <ListItem
                        key={subIndex}
                        onClick={() => history.pushState(null, subMenu.link)}
                        value={subMenu.link}
                        primaryText={subMenu.title}
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
