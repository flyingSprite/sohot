
import React, {Component, PropTypes} from 'react';

export default function(ListItemComponent) {

  class ListItem extends Component {

    static propTypes = {
      selectedStyle: PropTypes.object,
      /**
       * If true, generate a nested-list-indicator icon when nested list
       * items are detected. Note that an indicator will not be created
       * if a `rightIcon` or `rightIconButton` has been provided to
       * the element.
       */
      autoGenerateNestedIndicator: PropTypes.bool,
      /**
       * Children passed into the `ListItem`.
       */
      children: PropTypes.node,
      /**
       * If true, the element will not be able to be focused by the keyboard.
       */
      disableKeyboardFocus: PropTypes.bool,
      /**
       * If true, the element will not be clickable
       * and will not display hover effects.
       * This is automatically disabled if either `leftCheckbox`
       * or `rightToggle` is set.
       */
      disabled: PropTypes.bool,
      /**
       * If true, the nested `ListItem`s are initially displayed.
       */
      initiallyOpen: PropTypes.bool,
      /**
       * Override the inline-styles of the inner div element.
       */
      innerDivStyle: PropTypes.object,
      /**
       * If true, the children will be indented by 72px.
       * This is useful if there is no left avatar or left icon.
       */
      insetChildren: PropTypes.bool,
      /**
       * This is the `Avatar` element to be displayed on the left side.
       */
      leftAvatar: PropTypes.element,
      /**
       * This is the `Checkbox` element to be displayed on the left side.
       */
      leftCheckbox: PropTypes.element,
      /**
       * This is the `SvgIcon` or `FontIcon` to be displayed on the left side.
       */
      leftIcon: PropTypes.element,
      /**
       * An array of `ListItem`s to nest underneath the current `ListItem`.
       */
      nestedItems: PropTypes.arrayOf(PropTypes.element),
      /**
       * Controls how deep a `ListItem` appears.
       * This property is automatically managed, so modify at your own risk.
       */
      nestedLevel: PropTypes.number,
      /**
       * Override the inline-styles of the nested items' `NestedList`.
       */
      nestedListStyle: PropTypes.object,
      /**
       * Callback function fired when the `ListItem` is focused or blurred by the keyboard.
       *
       * @param {object} event `focus` or `blur` event targeting the `ListItem`.
       * @param {boolean} isKeyboardFocused If true, the `ListItem` is focused.
       */
      onKeyboardFocus: PropTypes.func,
      /** @ignore */
      onMouseEnter: PropTypes.func,
      /** @ignore */
      onMouseLeave: PropTypes.func,
      /**
       * Callbak function fired when the `ListItem` toggles its nested list.
       *
       * @param {object} listItem The `ListItem`.
       */
      onNestedListToggle: PropTypes.func,
      /** @ignore */
      onTouchStart: PropTypes.func,
      /** @ignore */
      onTouchTap: PropTypes.func,
      /**
       * Control toggle state of nested list.
       */
      open: PropTypes.bool,
      /**
       * This is the block element that contains the primary text.
       * If a string is passed in, a div tag will be rendered.
       */
      primaryText: PropTypes.node,
      /**
       * If true, clicking or tapping the primary text of the `ListItem`
       * toggles the nested list.
       */
      primaryTogglesNestedList: PropTypes.bool,
      /**
       * This is the `Avatar` element to be displayed on the right side.
       */
      rightAvatar: PropTypes.element,
      /**
       * This is the `SvgIcon` or `FontIcon` to be displayed on the right side.
       */
      rightIcon: PropTypes.element,
      /**
       * This is the `IconButton` to be displayed on the right side.
       * Hovering over this button will remove the `ListItem` hover.
       * Also, clicking on this button will not trigger a
       * ripple on the `ListItem`; the event will be stopped and prevented
       * from bubbling up to cause a `ListItem` click.
       */
      rightIconButton: PropTypes.element,
      /**
       * This is the `Toggle` element to display on the right side.
       */
      rightToggle: PropTypes.element,
      /**
       * This is the block element that contains the secondary text.
       * If a string is passed in, a div tag will be rendered.
       */
      secondaryText: PropTypes.node,
      /**
       * Can be 1 or 2. This is the number of secondary
       * text lines before ellipsis will show.
       */
      secondaryTextLines: PropTypes.oneOf([1, 2]),
      /**
       * Override the inline-styles of the root element.
       */
      style: PropTypes.object,
    };

    static defaultProps = {
      autoGenerateNestedIndicator: true,
      disableKeyboardFocus: false,
      disabled: false,
      initiallyOpen: false,
      insetChildren: false,
      nestedItems: [],
      nestedLevel: 0,
      onKeyboardFocus: () => {},
      onMouseEnter: () => {},
      onMouseLeave: () => {},
      onNestedListToggle: () => {},
      onTouchStart: () => {},
      open: null,
      primaryTogglesNestedList: false,
      secondaryTextLines: 1,
    };

    static muiName = 'ListItem';

    render() {
      const {
        selectedStyle,
        ...other
      } = this.props;
      return(<ListItemComponent {...other} />);
    }
  };

  return ListItem;
}
